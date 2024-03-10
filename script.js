setInterval(printTime, 1000);
document.getElementById('root').setAttribute("style", "text-align: center; font-size: 30px");
const palette = ["red", "orange", "gold", "green", "blue", "darkblue", "purple"];
let currentColorIndex = 0;
setInterval(changeColor, 1000);

function printTime() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();
    const h1 = document.createElement('h1');
    const time = document.createTextNode(`${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}:${s < 10 ? '0' + s : s}`);
    h1.appendChild(time);
    if (root.firstElementChild) {
        root.replaceChild(h1, root.firstElementChild);
    } else {
        root.appendChild(h1);
    }
}

function changeColor() {
   const rootElement = document.getElementById('root');
    rootElement.style.color = palette[currentColorIndex];
    currentColorIndex = (currentColorIndex + 1) % palette.length;

}
