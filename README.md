## About

This is a digital trombone for your web browser.

Hold your pointer down to produce a sound, release it to stop the sound. The tone is generated using two sawtooth oscillators via the Web Audio API (via WAD).

You can modify the pitch in a manner similar to a trombonist: by changing the partial or changing the slide position. A brass player will move air through their embouchure (mouth and face muscles) to help generate a pitch. The tighter the embouchure, the higher the partial. A partial is a stop on the overtone series, a discussion of which is beyond the scope of this document. Suffice it to say that partials range from very low-pitched to very high-pitched and get closer together at higher frequencies: the first partial is an octave (12 semitones) below the second partial; the fourth partial is only ~4 semitones below the fifth partial. The higher up your pointer is on the screen (y axis), the higher the partial.

Trombonists can get more fine-grained control over pitch by lengthening the instrument via the hand slide. In this digital trombone, moving your pointer to the right will increase the length of the instrument and lower the pitch.

I had grand plans for an informative heads-up display showing real-time data on pitch, slide position, partial, etc. Observant readers will note that the last commit of substance was made over 5 years ago; clearly I ran out of steam. Having rediscovered this repo, I thought that a quick update to the README would suffice even if it is less edu-taining than the original vision.

This simulation closely approximates the acoustic properties of real trombone tuned to A = 440 (no offense to the Boston Symphony) under ideal conditions. Tuning the partials was simply a matter of finding the exact frequencies reported in the available literature. Simulating the effect of slide movement on pitch was a trickier proposition. The exact pitch and position measurements are well-documented for frequencies on the chromatic scale (e.g. the distance between middle C at third position and B at fourth position is easy to find). The positions, however, are not spaced equally; the more we approach seventh position, the further away each position is from the last. Furthermore, the partials are not always a match for a note on the chromatic scale. The seventh partial is a good example - in first position you will produce a very flat A-flat / G-sharp, it’s not really usable. As a result, every slide position must be adjusted to be shorter than they otherwise would be. This is a long-winded way to express the futility of trying to discern some simple pattern of X partial plus Y position always equals a note on the chromatic scale. So we must think in terms of frequencies instead of notes. X partial plus Y position will always equal Z hertz!

I couldn’t find an equation that establishes a relationship between a slide movement of arbitrary length and the resulting pitch modification, so I plugged the [available data](#notes) on the positions into [this utility](https://www.mycurvefit.com/), which returned this formula:

```
y = 35.44613 + (0.9992146 - 35.44613)/(1 + (x/498.2127)^0.9692893)
```

I can’t vouch for its mathematical soundness but to my ear it’s right on the money. I am a classically-trained trombonist and former music teacher who spent five years playing professionally so hopefully my ear counts for something.

## Appendix

### Notes

- expanded length: 315.1 cm
- retracted length: 209.1 cm
- difference: 104 cm

|position|cm to move|total cm extended|% of 7th pos|
|----|----|----|----|
|1|0|0|0.00|
|2|8.096|8.096|13.39|
|3|8.890|16.986|28.08|
|4|9.684|26.670|44.09|
|5|10.478|37.148|61.42|
|6|11.272|48.420|80.05|
|7|12.065|60.485|100.00|

### Sources
- https://asp-eurasipjournals.springeropen.com/articles/10.1155/2011/151436
- http://newt.phys.unsw.edu.au/jw/brassacoustics.html
- https://www.cpp.edu/~dmgrasmick/mu330/Trombonelecture.html
- http://www.olemiss.edu/lowbrass/studio/overtonecharts/tenorandbasstromboneovertone.pdf
- http://www.sengpielaudio.com/calculator-harmonics.htm
- http://glassarmonica.com/science/frequency_midi.php
- http://www.phy.mtu.edu/~suits/NoteFreqCalcs.html
