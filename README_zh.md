将`*.srt`转换为Adobe After Effect中文本层可用的字幕。更快！

在线试用: https://akutazehy.github.io/srt2sub/

## 食用方法

1. 点开在线网站或本地部署`index.html`，注意转换脚本`srt2txt.js`应该与该文件在同一目录下。
2. 将`*.srt`文件拖入对应窗口，会生成一串字符文本，复制它。
3. 打开Adobe After Effects，新建文本层，将上述文本直接粘贴到文本层。
4. 对该文本层直接应用`txt2sub.ffx`预置，或点开文本层“源文本”的脚本表达式，将`txt2subtitle.js`中的内容粘贴进去。
5. 调试文本对齐模式、字体和位置等参数，这个脚本的全部文本会与该参数保持一致；如果有切换字体、效果的需要，保持源文本（即上述复制文本）不变，仅更改其样式K帧即可。

注：在没有调整路径的情况下，FFX预置通常位于`C:\Program Files\Adobe\[你的AE版本]\Support Files\Presets`或`[“文档”路径]\Adobe\[你的AE版本]\User Presets`这两个位置，如果更改过路径，可以尝试在AE的“效果和预设”中尝试新建一个FFX预置来找到它的位置。

