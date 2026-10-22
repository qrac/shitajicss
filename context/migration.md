# 構成変更の背景

## サイトの統合

[shitajicss-site-minista](https://github.com/qrac/shitajicss-site-minista) の
`2f9894d377f5ebb5b16229c907a487187b01a3d7` を基に公式サイトを `docs` に統合しました。
Firebase の設定は引き継いでいません。

[Yaku Han JP](https://github.com/qrac/yakuhanjp) の `docs`・`packages` 構成を参考にし、
コンポーネントを `common`・`element`・`page/home` に整理しました。
minista 5・React 19・Vite 8 の構成に更新しています。具体的な依存バージョンは package.json と package-lock.json を参照してください。

## 配布 CSS

配布パッケージを `packages/shitajicss` に移しました。
当初のビルド不要案は変更し、通常版と圧縮版を `dist` に生成する構成を採用しました。

- `import "shitajicss"` と `dist/shitaji.css`・`dist/shitaji.min.css` の参照方法を維持。
- CC0 のため、利用時のクレジットは不要。配布 CSS のバージョン・作者・ライセンスヘッダーを撤去。
- package.json の `license: "CC0-1.0"` は維持。
- ビルドツールをルートに集約し、通常版をソースのコピー、圧縮版を esbuild の空白圧縮で生成。

6.1.0 の元ソースと比較し、ヘッダー以外の CSS が同一であることを確認しています。
バージョンは一時的に設定した 7.0.0 から 6.1.0 に戻しました。
今後 CSS の仕様を変更する場合は、この比較結果を新しい変更に対する保証として扱わず、改めて差分を確認してください。

## 確認ページと文書

旧 `test/index.html` は `play/_default/index.html` に移し、ルートの `npm run play` で Vite を起動します。
CSS ソースを直接読み込み、HMR で確認できます。

README は利用者向けの短い案内に限定し、AI が作業時に必要とする構成・手順・背景は AGENTS.md と context/ に分けています。

## Cloudflare Workers への移行

2026-10-22、GitHub Pages から Cloudflare Workers Static Assets へ移行するため、
GitHub Actions の公開ワークフローと `docs/public/CNAME`・`.nojekyll` を削除し、
ルートに `wrangler.jsonc` と Wrangler の開発依存を追加しました。
[Samuraispirits Command](https://github.com/qrac/samuraispirits-command) の設定を基に、
生成済み HTML と `404.html` を配信します。出力先は従来どおり `docs/dist` です。

移行前の同日には、GitHub Pages の Custom domain と DNS の設定、
`https://shitajicss.qranoko.jp/` の HTTPS 接続・CSS・ロゴ・更新後のフッターを確認済みでした。
当時の Pages の `Enforce HTTPS` は未チェック・利用不可でした。
この確認は旧公開先に対するもので、Cloudflare の公開確認を表すものではありません。
Cloudflare 側の初期設定とドメイン切り替え手順は [release.md](release.md) にまとめています。
