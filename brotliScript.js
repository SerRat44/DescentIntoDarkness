const fs = require('fs');
const path = require('path');
const brotli = require('brotli');

function compressFile(filePath) {
  if (path.extname(filePath) === '.br' || path.basename(filePath) === 'index.html' || path.basename(filePath) === 'indexLoader.js') {
    return;
  }

  const input = fs.readFileSync(filePath);
  const output = brotli.compress(input);
  if (output) {
    fs.writeFileSync(filePath + '.br', output);
    fs.unlinkSync(filePath);
  }
}

function compressDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    if (stat.isFile()) {
      compressFile(filePath);
    } else if (stat.isDirectory()) {
      compressDirectory(filePath);
    }
  }
}

compressDirectory('dist');
