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

### Node.js の指定

ワークフローの `actions/setup-node` で `node-version: "24"` を直接指定しています。
`.nvmrc` は使用しません。Node.js の更新時は package.json の engines と開発手順も確認してください。

初回実行 [39742345895](https://github.com/qrac/shitajicss/actions/runs/39742345895) は、
存在しない `.nvmrc` の参照が原因で、依存インストール・ビルドより前に失敗しました。
Node.js 24 の直接指定に変更して解消しています。

### 旧公開方式からの切り替え

実行 [39742688617](https://github.com/qrac/shitajicss/actions/runs/39742688617) では、
ビルド・成果物アップロード成功後、Pages の公開元が旧 `gh-pages` ブランチ方式だったため
`Invalid deployment branch ... Deployments are only allowed from gh-pages` で拒否されました。
リポジトリの Settings → Pages → Source を **GitHub Actions** に変更しています。
同じエラーが再発した場合は、公開元設定と `github-pages` Environment のブランチ制限を確認します。

公開元変更後、同じ実行の再試行で build・deploy ともに成功しました。
設定確認時点の公開 URL は `https://qrac.github.io/shitajicss/` で、Pages の Custom domain は未設定です。
サイトは独自ドメインのルート配信を前提とするため、GitHub 標準の `/shitajicss/` 配下では
`/assets/...` の CSS が読み込まれません。独自ドメインの設定・DNS 切り替えが別途必要です。
`docs/public/CNAME` だけでは GitHub Actions 方式の Custom domain 設定は反映されません。
