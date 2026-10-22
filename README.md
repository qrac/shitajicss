<p align="center">
  <img width="180" src="https://i.gyazo.com/47735fdebf8f2785c633d55c7f84acec.png" alt="Shitaji.CSS Logo">
</p>

# Shitaji.CSS

Shitaji.CSS（シタジシーエスエス）は、Web 制作用の下地リセット CSS です。

- 見出しやタップハイライトなどの不要なスタイルを解除
- フォーム関連はブラウザデフォルトでも機能させる
- CC0 1.0 Public Domain で配布。利用時のクレジット表記は不要

[公式サイト](https://shitajicss.qranoko.jp) / [npm](https://www.npmjs.com/package/shitajicss)

## How To Use

### CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/shitajicss@7.0.0/shitaji.css" />
```

### npm

```sh
npm install shitajicss
```

```js
import "shitajicss"
```

CSS ファイルを直接指定する場合は `shitajicss/shitaji.css` を使用します。

## Support

| Chrome | Firefox | Safari |
| :----: | :-----: | :----: |
| Newest | Newest  | Newest |

## Repository

npm workspaces でサイトと配布パッケージを管理します。

```text
docs/                 minista サイト
  public/             画像・CNAME
  src/
    layouts/          共通レイアウト
    components/
      common/         サイト共通部品
      element/        基本部品
      page/home/      トップページ用部品
packages/shitajicss/   ビルド不要の配布用 CSS
test/                 CSS 要素確認用 HTML
```

### Development

Node.js 24 以上を使用します。

```sh
npm ci
npm run docs
```

```sh
npm run docs:check
npm run docs:build
npm run docs:preview
npm pack --workspace shitajicss --dry-run
```

配布 CSS は `packages/shitajicss/shitaji.css` を直接編集します。
CSS の生成・圧縮・ライセンスヘッダー付与は行いません。
`test/index.html` をブラウザで開くとローカルの配布 CSS を確認できます。

### GitHub Pages

`.github/workflows/docs-gh-pages.yml` が PR で型チェックとビルドを行い、
`main` への push または手動実行で `docs/dist` を GitHub Pages にデプロイします。

初回はリポジトリの Settings → Pages → Build and deployment → Source を
**GitHub Actions** に変更し、Custom domain に `shitajicss.qranoko.jp` を設定します。
DNS も GitHub Pages に向けてください。`docs/public/CNAME` に同じドメインを保持しています。
Firebase の設定・依存・デプロイ処理は使用しません。

### Release

```sh
npm run release
```

`packages/shitajicss` のみを公開します。公開前に package.json のバージョンと
ルート・パッケージ両方の README の CDN バージョンを揃えてください。
サイトのバージョン表示と CDN サンプルはパッケージのバージョンを参照します。

7.0.0 は配布構成を変更する次期版です。npm 公開が完了するまでは上記の
7.0.0 の CDN URL は利用できません。公開済みの 6.1.0 を利用する場合は
`https://cdn.jsdelivr.net/npm/shitajicss@6.1.0/dist/shitaji.min.css` を指定してください。
7.0.0 では `dist/shitaji.css`・`dist/shitaji.min.css` を廃止し、`shitaji.css` に一本化します。
`import "shitajicss"` は引き続き利用できます。CSS のルール自体は 6.1.0 と同じです。

## Site source

[shitajicss-site-minista](https://github.com/qrac/shitajicss-site-minista) の
`2f9894d377f5ebb5b16229c907a487187b01a3d7` を基にサイトを統合し、
[Yaku Han JP](https://github.com/qrac/yakuhanjp) の `docs`・`packages` 構成に合わせています。
