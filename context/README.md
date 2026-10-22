# 開発コンテキスト

利用者向けの情報はルートの [README.md](../README.md)、作業方針は [AGENTS.md](../AGENTS.md) を参照してください。

| 文書 | 内容 |
| --- | --- |
| [development.md](development.md) | リポジトリ構成、開発コマンド、ビルド、検証 |
| [release.md](release.md) | npm の配布内容・バージョン、Cloudflare Workers の運用 |
| [migration.md](migration.md) | サイトの移植元、構成変更の理由、互換性の方針 |

具体的なコマンドはルートの package.json と各 workspace の package.json、サイトの配信設定は `wrangler.jsonc` が正本です。Workers Builds の設定値は [release.md](release.md) を参照してください。
