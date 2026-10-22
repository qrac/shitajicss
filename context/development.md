# 開発

## 構成

```text
docs/                         minista の公式サイト
  public/                     画像、CNAME、.nojekyll
  src/
    layouts/                  共通レイアウト
    components/
      common/                 サイト共通部品
      element/                基本部品
      page/home/              トップページ用部品
packages/shitajicss/
  src/index.css               配布 CSS のソース
  scripts/build.mjs           CSS ビルド
  dist/                       通常版・圧縮版の生成先（Git 管理外）
play/_default/index.html       CSS 要素の確認ページ
```

npm workspaces は `docs` と `packages/*`。ルートは private で、開発ツールを管理します。
Node.js はルートの engines に従い 24 以上を使用します。以下のコマンドはルートから実行します。

## コマンド

```sh
npm ci
```

| コマンド | 用途 |
| --- | --- |
| `npm run build` | 配布用 CSS の通常版・圧縮版を生成 |
| `npm run play` | Vite で確認用 HTML を起動。CSS ソースを直接読み込み、HMR で反映 |
| `npm run docs` | 配布 CSS をビルドして minista の開発サーバーを起動 |
| `npm run docs:check` | サイトの TypeScript 型チェック |
| `npm run docs:build` | 配布 CSS とサイトをビルド。サイトの出力先は docs/dist |
| `npm run docs:preview` | ビルド済みサイトをプレビュー |
| `npm pack -w shitajicss --dry-run` | 配布ファイルを確認。prepack による CSS ビルドも実行 |

## CSS ビルド

`packages/shitajicss/src/index.css` を編集します。
通常版 `dist/shitaji.css` はソースをそのままコピーし、圧縮版 `dist/shitaji.min.css` は esbuild で生成します。

esbuild はルートの devDependencies で管理します。`minifyWhitespace: true`、`minifySyntax: false`、`minifyIdentifiers: false` とし、互換用宣言やフォールバック値を保持します。
`legalComments: "none"` とし、ライセンスヘッダーは付与しません。ビルド警告がある場合は失敗させます。

配布パッケージの `prepack` がビルドを呼ぶため、`npm pack` と `npm publish` でも生成されます。
`npm run play` はソースを直接使うため、事前ビルドは不要です。

## 変更後の確認

- CSS・ビルド変更: `npm run build` と `npm pack -w shitajicss --dry-run`。通常版のソース一致、圧縮版の宣言・順序・互換用指定、配布内容を確認します。
- CSS の見た目: `npm run play`。フォームなどのブラウザ標準 UI を含めて確認します。
- サイト変更: `npm run docs:check` と `npm run docs:build`。見た目を変更した場合はプレビューでも確認します。
- 文書のみの変更: 記述・参照先・`git diff --check` を確認します。サイトの再ビルドは不要です。
