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

## Cloudflare Workers

minista が生成する `docs/dist` を Cloudflare Workers Static Assets で配信します。
配信設定はルートの `wrangler.jsonc`、Wrangler の依存はルートの devDependencies で管理します。
Worker 名は `shitajicss`。HTML は `auto-trailing-slash`、存在しない URL は
`404-page` で生成済みの `404.html` を返します。

[Samuraispirits Command](https://github.com/qrac/samuraispirits-command) と同じ
静的サイト配信方式です。独自の Worker スクリプトは使用しません。

### ローカルでの確認・デプロイ

Node.js 24 以上を使用し、リポジトリのルートから実行します。

```sh
npm ci
npm run docs:check
npm run docs:preview:workers
```

デプロイ前の設定確認は、サイトのビルド後に行います。

```sh
npm run docs:build
npx wrangler deploy --dry-run
```

Cloudflare にログインして手動でデプロイする場合は次を実行します。

```sh
npx wrangler login
npm run docs:deploy
```

### Workers Builds

Cloudflare のダッシュボードで GitHub リポジトリを接続し、以下を設定します。

| 項目 | 値 |
| --- | --- |
| Git リポジトリ | `qrac/shitajicss` |
| Worker 名 | `shitajicss` |
| 本番ブランチ | `main` |
| ルートディレクトリ | リポジトリのルート |
| ビルドコマンド | `npm run docs:check && npm run docs:build && npm pack -w shitajicss --dry-run` |
| デプロイコマンド | `npx wrangler deploy` |
| ビルド環境変数 | `NODE_VERSION=24` |

ビルドコマンドで、旧 GitHub Actions と同じ型チェック・CSS とサイトのビルド・npm 配布内容の確認を行います。
`npm run build` は配布 CSS のみを生成するため、サイトのビルドには `docs:build` を使用します。
Workers Builds の依存インストールはルートの package-lock.json を使用します。
ビルドとデプロイのコマンドを分け、デプロイ時の二重ビルドを避けます。

GitHub Actions のワークフローは削除しています。
Cloudflare の Git 接続前は、push や PR による自動チェック・デプロイは実行されません。

### 独自ドメインの移行

公開ドメインは `shitajicss.qranoko.jp` を継続します。

1. Workers Builds を接続し、Workers の URL でサイトの表示・CSS・404 応答を確認。
2. Workers の **Settings > Domains & Routes** で `shitajicss.qranoko.jp` を Custom Domain として設定。GitHub Pages 向けの DNS レコードが残っている場合は切り替える。
3. 独自ドメインで HTTPS 接続と表示を確認してから、GitHub リポジトリの **Settings > Pages** で GitHub Pages の公開を停止。

`docs/public/CNAME` と `.nojekyll` は削除しています。独自ドメインは Cloudflare 側で管理します。
リポジトリの設定変更だけでは、Git 接続・DNS・独自ドメイン・GitHub Pages の公開停止は反映されません。

設定の詳細は [Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/configuration/) と
[Static Assets の SSG 配信](https://developers.cloudflare.com/workers/static-assets/routing/static-site-generation/) を参照してください。
