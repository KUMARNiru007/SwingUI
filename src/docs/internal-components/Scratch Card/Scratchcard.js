const canvas = document.getElementById("scratchCanvas");
const card = document.getElementById("card");
const ctx = canvas.getContext("2d");

let isDrawing = false;
let isMouseDown = false;

// Resize canvas to match card
function resizeCanvas() {
  const rect = card.getBoundingClientRect();
  canvas.width = rect.width;
  canvas.height = rect.height;

  ctx.globalCompositeOperation = "source-over";
  ctx.fillStyle = "#dadada";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#94a3b8";
  ctx.font = "bold 32px sans-serif";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("SCRATCH", canvas.width / 2, canvas.height / 2);
}

function getPos(e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.touches ? e.touches[0].clientX : e.clientX;
  const y = e.touches ? e.touches[0].clientY : e.clientY;
  return { x: x - rect.left, y: y - rect.top };
}

function draw(e) {
  if (!isDrawing) return;
  e.preventDefault();
  const { x, y } = getPos(e);
  ctx.globalCompositeOperation = "destination-out";
  ctx.beginPath();
  ctx.arc(x, y, 30, 0, Math.PI * 2);
  ctx.fill();

  checkScratchPercent();
}

function checkScratchPercent() {
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const total = imgData.data.length / 4;
  let cleared = 0;

  for (let i = 0; i < imgData.data.length; i += 4) {
    if (imgData.data[i + 3] < 128) cleared++;
  }

  const percent = (cleared / total) * 100;
  if (percent >= 70) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.pointerEvents = "none";

    card.classList.add("animate-pop");
    card.addEventListener("animationend", () => {
      card.classList.remove("animate-pop");
    }, { once: true });
  }
}

// Mouse & Touch Events
canvas.addEventListener("mousedown", () => isDrawing = true);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseleave", () => isDrawing = false);
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("touchstart", (e) => {
  e.preventDefault();
  isDrawing = true;
  isMouseDown = true;
}, { passive: false });

canvas.addEventListener("touchend", () => {
  isDrawing = false;
  isMouseDown = false;
});
canvas.addEventListener("touchcancel", () => {
  isDrawing = false;
  isMouseDown = false;
});
canvas.addEventListener("touchmove", draw, { passive: false });

// Resize on load & window resize
resizeCanvas();
window.addEventListener("resize", resizeCanvas);
