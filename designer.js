const canvas = new fabric.Canvas('designCanvas', {
  transparentCorners: false
});

const productImage = document.getElementById('productImage');
const uploadImage = document.getElementById('uploadImage');
const productType = document.getElementById('productType');
const productColor = document.getElementById('productColor');
const removeDesign = document.getElementById('removeDesign');
const frontBtn = document.getElementById('frontBtn');
const backBtn = document.getElementById('backBtn');

let currentSide = 'front';

function resizeCanvas(){

  const width = productImage.clientWidth;
  const height = productImage.clientHeight;

  canvas.setWidth(width);
  canvas.setHeight(height);

  canvas.renderAll();
}

window.addEventListener('resize', resizeCanvas);

productImage.onload = resizeCanvas;

resizeCanvas();

uploadImage.addEventListener('change', function(e){

  const file = e.target.files[0];

  if(!file) return;

  const reader = new FileReader();

  reader.onload = function(event){

    fabric.Image.fromURL(event.target.result, function(img){

      img.set({
        left: canvas.width / 2,
        top: canvas.height / 2,
        originX: 'center',
        originY: 'center',
        cornerColor: '#FFADBE',
        cornerStrokeColor: '#fff',
        borderColor: '#FFADBE'
      });

      img.scaleToWidth(180);

      canvas.add(img);
      canvas.setActiveObject(img);
      canvas.renderAll();

    });

  }

  reader.readAsDataURL(file);

});