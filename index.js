import html2canvas from "html2canvas";
function htmltoImg(dom, { width, height }) {
  // 解决图片跨域的问题
  const pic = document.querySelectorAll("img");
  pic.forEach(img => {
    img.setAttribute("crossOrigin", "Anonymous");
  });
  html2canvas(dom, {
    width,
    height,
    useCORS: true
  }).then(canvas => {
    const canvasWidth = canvas.width / 2;
    const canvasHeight = canvas.height / 2;
    const dataUrl = canvas.toDataURL();
    const image = document.createElement("img");
    image.width = canvasWidth;
    image.height = canvasHeight;
    image.src = dataUrl;
    return image;
  });
}
