# Shitaji.CSS

Shitaji.CSS（シタジシーエスエス）は、Web 制作用の下地リセット CSS です。

- 見出しやタップハイライトなどの不要なスタイルを解除
- フォーム関連はブラウザデフォルトでも機能させる
- CC0 1.0 Public Domain で配布。利用時のクレジット表記は不要

[公式サイト](https://shitajicss.qranoko.jp) / [npm](https://www.npmjs.com/package/shitajicss)

## How To Use

### CDN

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/shitajicss@6.1.0/dist/shitaji.min.css"
/>
```

### npm

```sh
npm install shitajicss
```

```js
import "shitajicss"
```

CSS ファイルを直接指定する場合は `shitajicss/dist/shitaji.css`（通常版）または
`shitajicss/dist/shitaji.min.css`（圧縮版）を使用します。

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
packages/shitajicss/   配布パッケージ（src → dist に通常版・圧縮版を生成）
play/_default/        CSS 要素確認用 HTML（Vite）
```

### Development

Node.js 24 以上を使用します。

```sh
npm ci
npm run docs
```

```sh
npm run build
npm run docs:check
npm run docs:build
npm run docs:preview
npm pack --workspace shitajicss --dry-run
```

CSS は `packages/shitajicss/src/index.css` を編集し、`npm run build` で
`packages/shitajicss/dist/shitaji.css`（通常版）と `shitaji.min.css`（圧縮版）を生成します。
通常版はソースをそのままコピーし、圧縮版は esbuild の空白圧縮で互換用宣言を保持します。
ライセンスヘッダーは付与しません。`dist` は生成物として Git 管理から除外します。
サイトの起動・ビルド時と npm のパック・公開時にも配布 CSS を自動生成します。
`npm run play` で `play/_default/index.html` を Vite で開き、
CSS のソースを直接確認できます。CSS を編集すると HMR で反映されます。

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

CSS のルールと配布パスは 6.1.0 と同じため、バージョンは 6.1.0 を維持します。
今回の開発環境・サイト・ビルド設定の更新では npm に再公開しません。
公開済みの同じバージョンは再公開できないため、今後パッケージを公開し直す際は
新しいバージョンに更新してください。

## Site source

[shitajicss-site-minista](https://github.com/qrac/shitajicss-site-minista) の
`2f9894d377f5ebb5b16229c907a487187b01a3d7` を基にサイトを統合し、
[Yaku Han JP](https://github.com/qrac/yakuhanjp) の `docs`・`packages` 構成に合わせています。
