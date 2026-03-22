import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publicDir = path.join(__dirname, 'public');

async function optimizeImages() {
  const files = fs.readdirSync(publicDir);
  
  for (const file of files) {
    if (file.endsWith('.png') || file.endsWith('.jpg') || file.endsWith('.jpeg')) {
      const inputPath = path.join(publicDir, file);
      const ext = path.extname(file);
      const basename = path.basename(file, ext);
      const outputPath = path.join(publicDir, `${basename}.webp`);
      
      try {
        await sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);
        console.log(`Converted ${file} to ${basename}.webp`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

optimizeImages();
