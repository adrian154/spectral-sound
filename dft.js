// audio sampling rate
const SAMPLE_RATE = 48000;

let freqSamps = 1280;
let maxFreq = 5000; // hz real world

let real = new Array(freqSamps).fill(0);
let imaginary = new Array(freqSamps).fill(0);
let powers = new Array(freqSamps);
let maxPower = 0;

for(let freq = 0; freq < freqSamps; freq++) {

    // calculate frequency in 1/samples (convert from 1/second)
    let actualFreq = (freq / freqSamps * maxFreq) / SAMPLE_RATE;

    // do convolution for this frequency
    for(let i = 0; i < data.length; i++) {

        //  accumulate...
        let x = 2 * Math.PI * actualFreq * i;
        real[freq] += data[i] * Math.cos(x);
        imaginary[freq] += data[i] * Math.sin(x);
        
    }

    // normalize somehow
    let power = Math.abs(real[freq]) + Math.abs(imaginary[freq]);
    powers[freq] = power;
    maxPower = maxPower > power ? maxPower : power;

}

ctx.fillStyle = "#ffffff";
ctx.fillRect(0, 0, canvas.width, canvas.height);

plot(powers, "#ff0000", 2, 720, maxPower + 20);

let infoElem = document.getElementById("info");
canvas.addEventListener("mousemove", (event) => {
    let idx = Math.floor(event.offsetX / canvas.width * freqSamps); 
    let freq = event.offsetX / canvas.width * maxFreq / 2;
    infoElem.innerHTML = `Frequency: ${freq.toFixed(2)} Hz<br>Power: ${powers[idx].toFixed(2)}`;
});