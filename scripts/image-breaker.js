const fs = require('fs').promises;
const path = require('path');
const Jimp = require('jimp');

async function splitImage(imagePath, rows, cols, outputDir) {
  try {
    const image = await Jimp.read(imagePath);

    const imageWidth = image.bitmap.width;
    const imageHeight = image.bitmap.height;

    const blockWidth = Math.floor(imageWidth / cols);
    const blockHeight = Math.floor(imageHeight / rows);

    // Create output directory if it doesn't exist
    await fs.mkdir(outputDir, { recursive: true });

    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
        const x = col * blockWidth;
        const y = row * blockHeight;

        const block = image.clone();
        block.crop(x, y, blockWidth, blockHeight);

        const filename = path.join(outputDir, `block_${rows-row-1}-${cols-col-1}.jpg`);
        await block.writeAsync(filename);
      }
    }

    console.log('Image splitting completed!');
  } catch (error) {
    console.error('Error:', error);
  }
}

// Access command-line arguments
const imagePath = process.argv[2]; // Assuming the image path is the second argument
const rows = parseInt(process.argv[3], 10); // Parse third argument as integer (number of rows)
const cols = parseInt(process.argv[4], 10); // Parse fourth argument as integer (number of columns)
const outputDir = process.argv[5] || 'split_images'; // Output directory (optional, defaults to 'split_images')

// Input validation (optional)
if (!imagePath || isNaN(rows) || isNaN(cols)) {
  console.error('Usage: node script.js <image_path> <rows> <cols> [output_dir]');
  process.exit(1);
}

// Call the function with arguments from command line
splitImage(imagePath, rows, cols, outputDir);
