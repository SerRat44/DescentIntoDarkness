function loadScript(filePath) {
    return new Promise((resolve, reject) => {
        let script = document.createElement('script');
        script.src = filePath;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
    });
}

function arrayBufferToString(buffer) {
    const chunkSize = 0x8000;
    const arr = new Uint8Array(buffer);
    let str = '';
    for (let i = 0; i < arr.length; i += chunkSize) {
        const subArray = arr.subarray(i, i + chunkSize);
        str += String.fromCharCode.apply(null, subArray);
    }
    return str;
}

function decompressAndLoadResource(resourceType, filePath, decompressor) {
  return new Promise((resolve, reject) => {
    fetch(filePath)
      .then(response => response.arrayBuffer())
      .then(arrayBuffer => {
        const decompressed = decompressor(new Uint8Array(arrayBuffer));
        const decompressedContent = arrayBufferToString(decompressed);
        switch (resourceType) {
          case 'js':
            const script = document.createElement('script');
            script.text = decompressedContent;
            document.body.appendChild(script);
            resolve();
            break;
          case 'css':
            const style = document.createElement('style');
            style.textContent = decompressedContent;
            document.head.appendChild(style);
            resolve();
            break;
          case 'html':
            const wrapper = document.createElement('div');
            wrapper.innerHTML = decompressedContent;
            document.body.appendChild(wrapper);
            resolve();
            break;
          default:
            reject(new Error(`Unknown resource type: ${resourceType}`));
        }
      })
      .catch(reject);
  });
}

(async function() {
	await loadScript('./gunzip.min.js');
	console.log("loaded gunzip.min.js");

    await decompressAndLoadResource('js', './brotliDecode.min.js.gz', arrayBuffer => new Zlib.Gunzip(arrayBuffer).decompress());
	console.log("loaded brotliDecode.min.js.gz");
    
	await decompressAndLoadResource('css', './main.css.br', arrayBuffer => BrotliDecode(arrayBuffer));
	console.log("loaded main.css.br");
	
	await decompressAndLoadResource('html', './main.html.br', arrayBuffer => BrotliDecode(arrayBuffer));
	console.log("loaded main.html.br");
	
    await decompressAndLoadResource('js', './main.js.br', arrayBuffer => BrotliDecode(arrayBuffer));
	console.log("loaded main.js.br");
})();