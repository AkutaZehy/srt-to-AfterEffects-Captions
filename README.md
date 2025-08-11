# SRT2SUB

[English](./README.md) / [简体中文](./README_zh.md)

A faster version to imply `*.srt` subtitle to text layer in Adobe After Effects.

Try it online: https://akutazehy.github.io/srt2sub/

## Usage Instructions

1. Open the online site or the deploy `index.html` locally. Note that the conversion script `srt2txt.js` MUST be in the same path.
2. Drag the `*.srt` file into the corresponding area, and a string of character text will be generated. Copy it WITHOUT CHANGE.
3. Open Adobe After Effects, create a new text layer, and paste the text directly into the text layer.
4. Apply the `txt2sub.ffx` preset to the text layer, or open the expression panel of the text layer's "Source Text" and paste the content from `txt2subtitle.js` into it.
5. Adjust the text alignment mode, font, position parameters as you wish. All subtitles generated from this script will remain consistent with these parameters. If you need to switch fonts or effects, keep the source text (the copied text above) unchanged and only modify its style using keyframes.

Note: Normally the FFX preset is located at `C:\Program Files\Adobe\[your AE version]\Support Files\Presets` or `["Documents" path]\Adobe\[your AE version]\User Presets`. If the path has been changed, you may try creating a new FFX preset in AE's "Effects and Presets" to find its location.