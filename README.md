# Shitaji.CSS

## Demo

- [Demo Page][link-demo]

## About

「Shitaji.CSS」は、Web制作用の下地リセットCSSです。

## Detail

- クロスブラウザのバグフィックスを随時反映（[sanitize.css](https://github.com/10up/sanitize.css)など）
- 見出しやタップハイライトなどの不要なスタイルを解除
- フォーム関連はブラウザデフォルトでも機能させる
- すべての案件に使えるようCC0で配布

## Use

### Download

- そのままCSSファイルを利用：`docs/css/shitaji.min.css`を読み込む
- SCSSファイルとして利用：`src/scss/_shitaji.scss`を組み込む

```html
<link rel="stylesheet" href="css/shitaji.min.css">
```

### [npm][link-npm]

```
npm install shitajicss
```

### [CDN][link-jsdelivr]

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/shitajicss@4.3.0/docs/css/shitaji.min.css">
```

## Support

| Chrome | Firefox | IE | Ege | Safari(Mac) |
|:------:|:------:|:------:|:------:|:------:|
| Newest | Newest | 11~ | Newest | Newest |

| Safari(iOS) | Chrome(Android) | Browser(Android) |
|:------------:|:------------:|:------------:|
| Newest | Newest | 4.4~ |

## License

- CC0 1.0 Public Domain
- Author: [Qrac][link-twitter]

[link-demo]:https://qrac.github.io/shitajicss/
[link-npm]:https://www.npmjs.com/package/shitajicss
[link-jsdelivr]:https://cdn.jsdelivr.net/npm/shitajicss/
[link-twitter]:https://twitter.com/Qrac_JP