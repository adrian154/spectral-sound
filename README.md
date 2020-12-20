# spectral-sound

A really cursed tool I made to generate visuals for a project.

## What does it do?

The aim of this tool is to generate [spectral density](https://en.wikipedia.org/wiki/Spectral_density) plots for a given waveform. The implementation is ugly and the math is terribly un-rigorous, but it mostly works.

## How do I use it?

1. Compile `convert.c`.
2. Use a tool like Audacity to convert your input waveform into an uncompressed sound file consisting of 32-bit floats. Stereo tracks are not supported.
3. Run `convert` on the raw sound file, and pipe the output to `data.js`.
4. Open `dft.html`. Your plot will be generated.
5. Cry.