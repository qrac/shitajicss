# 配布と公開

## npm

ルートは private。配布対象は `packages/shitajicss` のみです。

| ファイル | 用途 |
| --- | --- |
| `dist/shitaji.css` | 通常版。main・style の参照先 |
| `dist/shitaji.min.css` | 圧縮版。CDN サンプルの参照先 |
| `package.json` | パッケージ情報 |
| `README.md` | npm 利用者向けの案内 |

`files: ["dist"]` で配布 CSS を指定しています。README と package.json も npm に含まれます。
ソース・ビルドスクリプト・サイト・開発依存は配布しません。

```sh
npm pack -w shitajicss --dry-run
```

`prepack` が CSS を生成します。公開せずに tarball を作る場合は `--dry-run` を外します。

現在は CSS のルールと配布パスが従来と同じなので 6.1.0 を維持し、環境更新だけでは npm に再公開しません。
公開済みの同じ名前・バージョンには再公開できません。パッケージを公開し直す場合は新しいバージョンが必要です。

公開する際は次を揃えます。

- ルートと配布パッケージの package.json のバージョン、および package-lock.json
- ルートと配布パッケージ両方の README の CDN バージョン

サイトのバージョン表示・CDN サンプルは `shitajicss/package.json` を参照します。
配布確認後、公開する場合のコマンドは `npm run release`（`npm publish -w shitajicss`）です。

## GitHub Pages

設定は `.github/workflows/docs-gh-pages.yml` にあります。
PR では型チェック、配布 CSS とサイトのビルド、npm 配布内容の確認を実行します。
`main` への push または `main` での手動実行で `docs/dist` を GitHub Pages にデプロイします。

初回の設定は次のとおりです。

1. リポジトリの Settings → Pages → Build and deployment → Source を **GitHub Actions** に設定。
2. Custom domain を `shitajicss.qranoko.jp` に設定。
3. DNS を GitHub Pages に向ける。

`docs/public/CNAME` に独自ドメインを保持し、`.nojekyll` も成果物へ含めます。
Firebase の設定・依存・デプロイ処理は使用しません。

### 現在の確認事項

ワークフローは `node-version-file: .nvmrc` を指定していますが、文書整理時点のリポジトリには `.nvmrc` がありません。
次回デプロイ前に、Node.js のバージョン指定を実際のファイル構成と揃える必要があります。
