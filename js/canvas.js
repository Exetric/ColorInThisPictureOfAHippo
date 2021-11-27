window.addEventListener("load", () => {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext('2d');
  var canpos = canvas.getBoundingClientRect();
  var penstr = 3;
  const clearButton = document.querySelector('#clear');
  const blackButton = document.querySelector('#black');
  const whiteButton = document.querySelector('#white');
  const redButton = document.querySelector('#red');
  const orangeButton = document.querySelector('#orange');
  const yellowButton = document.querySelector('#yellow');
  const greenButton = document.querySelector('#green');
  const cyanButton = document.querySelector('#cyan');
  const blueButton = document.querySelector('#blue');
  const violetButton = document.querySelector('#violet');
  const undoButton = document.querySelector('#undo');
  const downloadButton = document.querySelector('#download');
  const strokeRange = document.querySelector('#strokeRange');
  const penPreview = document.querySelector('#penPreview');

  const Maurice = document.querySelector('#maurice');
  const Hoffman = document.querySelector('#hoffman');
  const Jerome = document.querySelector('#jerome');

  var clearData;

  const img = new Image();
  img.src = "./assets/GoodWebDesign.png";

  img.onload = () => {
    canvas.width = 900;
    canvas.height = 720;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const [img_scaled_width, img_scaled_height] = drawImageToScale(img, ctx);
    window.addEventListener('resize', drawImageToScale(img, ctx));
    var prevData = ctx.getImageData(0,0,canvas.width,canvas.height);
  }

  let painting = false;

  function clearCanvas(img, ctx, img_scaled_width, img_scaled_height) {
    ctx.clearRect(0, 0, img_scaled_width, img_scaled_height);
    drawImageToScale(img, ctx);
  }

  function setHippo(name, ctx) {
    var hippo = new Image();
    hippo.src = `./assets/${name}.png`;

    ctx.fillStyle = "white";
    ctx.clearRect(0, 0, 900, 720);
    drawImageToScale(hippo, ctx);

    document.querySelector('#startMenu').classList.add("fadeClass");
    document.querySelector('#startMenu').style.opacity = "0%";
    document.querySelector('#startMenu').style.pointerEvents = "none";
  }

  function startPosition(e) {
    prevData = ctx.getImageData(0,0,canvas.width,canvas.height);
    painting = true;
    ctx.lineWidth = penstr;
    draw(e);
  }

  function finishedPosition() {
    painting = false;
    ctx.beginPath();
  }

  function draw(e) {
    var canpos = canvas.getBoundingClientRect();
    if (!painting)
      return;

    ctx.lineCap = 'round';

    ctx.lineTo(e.clientX - canpos.left, e.clientY - canpos.top);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canpos.left, e.clientY - canpos.top);
  }

  function undo() {
    var tempUndo = ctx.getImageData(0,0,canvas.width,canvas.height);
    ctx.putImageData(prevData, 0, 0);
    prevData = tempUndo;
  }

  function download() {
    var link = document.createElement('a');
    link.download = 'Hippo.png';
    link.href = canvas.toDataURL()
    link.click();
  }

  window.addEventListener("mousedown", startPosition);
  window.addEventListener("mouseup", finishedPosition);
  window.addEventListener("mousemove", draw)

  Maurice.addEventListener('click', () => {
    setHippo('Maurice',ctx);
    clearData = ctx.getImageData(0,0,canvas.width,canvas.height);
  });
  Hoffman.addEventListener('click', () => {
    setHippo('Hoffman',ctx);
    clearData = ctx.getImageData(0,0,canvas.width,canvas.height);
  });
  Jerome.addEventListener('click', () => {
    setHippo('Jerome',ctx);
    clearData = ctx.getImageData(0,0,canvas.width,canvas.height);
  });

  clearButton.addEventListener('click', () => ctx.putImageData(clearData, 0, 0));
  downloadButton.addEventListener('click', () => download());

  blackButton.addEventListener('mousedown', () => {
    ctx.strokeStyle = "#000000";
    blackButton.style.width = "80px";
    whiteButton.style.width = "40px";
    redButton.style.width = "40px";
    orangeButton.style.width = "40px";
    yellowButton.style.width = "40px";
    greenButton.style.width = "40px";
    cyanButton.style.width = "40px";
    blueButton.style.width = "40px";
    violetButton.style.width = "40px";
  });
  whiteButton.addEventListener('mousedown', () => {
    ctx.strokeStyle = "#FFFFFF";
    blackButton.style.width = "40px";
    whiteButton.style.width = "80px";
    redButton.style.width = "40px";
    orangeButton.style.width = "40px";
    yellowButton.style.width = "40px";
    greenButton.style.width = "40px";
    cyanButton.style.width = "40px";
    blueButton.style.width = "40px";
    violetButton.style.width = "40px";
  });
  redButton.addEventListener('click', () => {
    ctx.strokeStyle = "#ff4d4d";
    blackButton.style.width = "40px";
    whiteButton.style.width = "40px";
    redButton.style.width = "80px";
    orangeButton.style.width = "40px";
    yellowButton.style.width = "40px";
    greenButton.style.width = "40px";
    cyanButton.style.width = "40px";
    blueButton.style.width = "40px";
    violetButton.style.width = "40px";
  });
  orangeButton.addEventListener('click', () => {
    ctx.strokeStyle = "#ff9a4d";
    blackButton.style.width = "40px";
    whiteButton.style.width = "40px";
    redButton.style.width = "40px";
    orangeButton.style.width = "80px";
    yellowButton.style.width = "40px";
    greenButton.style.width = "40px";
    cyanButton.style.width = "40px";
    blueButton.style.width = "40px";
    violetButton.style.width = "40px";
  });
  yellowButton.addEventListener('click', () => {
    ctx.strokeStyle = "#ffed4d";
    blackButton.style.width = "40px";
    whiteButton.style.width = "40px";
    redButton.style.width = "40px";
    orangeButton.style.width = "40px";
    yellowButton.style.width = "80px";
    greenButton.style.width = "40px";
    cyanButton.style.width = "40px";
    blueButton.style.width = "40px";
    violetButton.style.width = "40px";
  });
  greenButton.addEventListener('click', () => {
    ctx.strokeStyle = "#8bff4d";
    blackButton.style.width = "40px";
    whiteButton.style.width = "40px";
    redButton.style.width = "40px";
    orangeButton.style.width = "40px";
    yellowButton.style.width = "40px";
    greenButton.style.width = "80px";
    cyanButton.style.width = "40px";
    blueButton.style.width = "40px";
    violetButton.style.width = "40px";
  });
  cyanButton.addEventListener('click', () => {
    ctx.strokeStyle = "#4dfff3";
    blackButton.style.width = "40px";
    whiteButton.style.width = "40px";
    redButton.style.width = "40px";
    orangeButton.style.width = "40px";
    yellowButton.style.width = "40px";
    greenButton.style.width = "40px";
    cyanButton.style.width = "80px";
    blueButton.style.width = "40px";
    violetButton.style.width = "40px";
  });
  blueButton.addEventListener('click', () => {
    ctx.strokeStyle = "#4d61ff";
    blackButton.style.width = "40px";
    whiteButton.style.width = "40px";
    redButton.style.width = "40px";
    orangeButton.style.width = "40px";
    yellowButton.style.width = "40px";
    greenButton.style.width = "40px";
    cyanButton.style.width = "40px";
    blueButton.style.width = "80px";
    violetButton.style.width = "40px";
  });
  violetButton.addEventListener('click', () => {
    ctx.strokeStyle = "#d54dff";
    blackButton.style.width = "40px";
    whiteButton.style.width = "40px";
    redButton.style.width = "40px";
    orangeButton.style.width = "40px";
    yellowButton.style.width = "40px";
    greenButton.style.width = "40px";
    cyanButton.style.width = "40px";
    blueButton.style.width = "40px";
    violetButton.style.width = "80px";
  });
  undoButton.addEventListener('click', () => undo());
  strokeRange.addEventListener('mouseup', () => penstr = document.getElementById('strokeRange').value);
  document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && event.key === 'z') {
      undo();
    }
  });
});

function drawImageToScale(img, ctx) {
  const img_width = 900;
  const scaleFactor = img_width / img.width;
  const img_height = img.height * scaleFactor;
  ctx.drawImage(img, 0, 0, img_width, img_height);
  return [img_width, img_height];
}
function onRangeInput() {
  document.getElementById('penPreview').style.strokeWidth = document.getElementById('strokeRange').value * 0.5182352941176471;
}
