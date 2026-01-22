var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
canvas.onmousemove = function (ev) {
    ctx.arc(ev.clientX,ev.clientY,ev.clientY/3,Math.PI * 2,0);
    ctx.stroke();
    ctx.fillStyle = 'rgb('+ev.clientY+',0,250)';
    ctx.fill();
    ctx.beginPath();
};
