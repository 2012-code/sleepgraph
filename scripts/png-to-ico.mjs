import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Convert PNG to a proper ICO file manually
// ICO format: header + directory + image data

async function pngToIco(inputPath, outputPath) {
  // Resize to 32x32 and get raw PNG buffer
  const png32 = await sharp(inputPath)
    .resize(32, 32)
    .png()
    .toBuffer();

  const png16 = await sharp(inputPath)
    .resize(16, 16)
    .png()
    .toBuffer();

  // ICO header (6 bytes)
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);  // Reserved
  header.writeUInt16LE(1, 2);  // Type: 1 = ICO
  header.writeUInt16LE(2, 4);  // Number of images: 2

  // Directory entry size: 16 bytes each
  const dirEntry32 = Buffer.alloc(16);
  dirEntry32.writeUInt8(32, 0);   // Width
  dirEntry32.writeUInt8(32, 1);   // Height
  dirEntry32.writeUInt8(0, 2);    // Color count (0 = >256)
  dirEntry32.writeUInt8(0, 3);    // Reserved
  dirEntry32.writeUInt16LE(1, 4); // Color planes
  dirEntry32.writeUInt16LE(32, 6); // Bits per pixel
  dirEntry32.writeUInt32LE(png32.length, 8);  // Size of image data
  dirEntry32.writeUInt32LE(6 + 16 * 2, 12);   // Offset of image data

  const dirEntry16 = Buffer.alloc(16);
  dirEntry16.writeUInt8(16, 0);
  dirEntry16.writeUInt8(16, 1);
  dirEntry16.writeUInt8(0, 2);
  dirEntry16.writeUInt8(0, 3);
  dirEntry16.writeUInt16LE(1, 4);
  dirEntry16.writeUInt16LE(32, 6);
  dirEntry16.writeUInt32LE(png16.length, 8);
  dirEntry16.writeUInt32LE(6 + 16 * 2 + png32.length, 12);

  const ico = Buffer.concat([header, dirEntry32, dirEntry16, png32, png16]);
  fs.writeFileSync(outputPath, ico);
  console.log(`Created ICO: ${outputPath} (${ico.length} bytes)`);
}

const input = process.argv[2];
const output = process.argv[3];
pngToIco(input, output).catch(console.error);
