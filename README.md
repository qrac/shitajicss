# Shitaji.CSS

「Shitaji.CSS」は、Webデザイン・Web開発を効率化するためのリセットCSSです。Web制作の下地として使います。

＞ [Demo Page](https://qrac.github.io/shitajicss/)

## About

デザイナーが考えたWebデザインの再現と、開発者やSEO担当者が行う構造最適化を両立させるため、ブラウザのデフォルトスタイルを極力打ち消し、HTMLとCSSを分離しやすくしています。

また、クロスブラウザのバグフィックスを随時反映（[sanitize.css 4.0](https://github.com/10up/sanitize.css)など）。コーディング工数の削減に貢献します。

## Feature

- SCSS（mixin）を使ったrem+px対応を想定
- 1rem = 10px（ html {font-size: 62.5%} ）

```
* {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  box-sizing: inherit;
  text-decoration: none;
  font: inherit;
  font-size: 100%;
  font-family: inherit;
  font-weight: inherit;
  font-style: inherit;
  color: inherit;
  list-style: none;
  vertical-align: baseline;
  background: transparent;
  background-repeat: no-repeat;
  box-shadow: none;
  -webkit-tap-highlight-color: transparent;
}
html {
  font-size: 62.5%;
  font-family: sans-serif;
  box-sizing: border-box;
  cursor: default;
  overflow-y: scroll;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  font-size: 10px;
  font-size: 1rem;
  line-height: 1;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
::before,
::after {
  text-decoration: inherit;
  vertical-align: inherit;
}
::selection {
  text-shadow: none;
}
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}
audio,
canvas,
progress,
video {
  display: inline-block;
}
audio:not([controls]) {
  display: none;
  height: 0;
}
template,
[hidden] {
  display: none;
}
hr {
  height: 0;
  overflow: visible;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
abbr[title] {
  border-bottom: 1px dotted;
  text-decoration: none;
}
audio,
canvas,
iframe,
img,
svg,
video {
  vertical-align: middle;
}
svg {
  fill: currentColor;
}
svg:not(:root) {
  overflow: hidden;
}
a {
  -webkit-text-decoration-skip: objects;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
html [type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
:-moz-focusring {
  outline: 1px dotted ButtonText;
}
textarea {
  overflow: auto;
  resize: vertical;
}
::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield;
  outline-offset: -2px;
}
::-webkit-search-cancel-button,
::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-input-placeholder {
  color: inherit;
}
::-webkit-file-upload-button {
  -webkit-appearance: button;
}
[aria-busy="true"] {
  cursor: progress;
}

[aria-controls] {
  cursor: pointer;
}

[aria-disabled] {
  cursor: default;
}
a,
area,
button,
input,
label,
select,
textarea,
[tabindex] {
  -ms-touch-action: manipulation;
  touch-action: manipulation;
}
[hidden][aria-hidden="false"] {
  clip: rect(0, 0, 0, 0);
  display: inherit;
  position: absolute;
}

[hidden][aria-hidden="false"]:focus {
  clip: auto;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: none;
}
```

## License

CC0 1.0 Public Domain

Author: [Qrac](https://twitter.com/Qrac_jp)
