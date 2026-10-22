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
