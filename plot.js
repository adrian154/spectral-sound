const canvas = document.getElementById("out-canvas");
const ctx = canvas.getContext("2d");

const plot = function(data, color, xscale, yscale, max) {
    ctx.beginPath();
    ctx.fillStyle = color;
    for(let i = 0; i < data.length; i++) {
        let sx = canvas.width * i * xscale / data.length;
        let sy = canvas.height - (data[i] / max) * yscale;

        if(i == 0)
            ctx.moveTo(sx, sy);
        else
            ctx.lineTo(sx, sy);
    }
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
};