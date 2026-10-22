# AGENTS.md

Shitaji.CSS は Web 制作用の下地リセット CSS。npm workspaces で配布パッケージと公式サイトを管理します。

## 最初に読むもの

- [context/README.md](context/README.md): 開発情報の索引
- [context/development.md](context/development.md): 構成・コマンド・変更後の確認
- [context/release.md](context/release.md): npm 公開・Cloudflare Workers
- [context/migration.md](context/migration.md): 構成変更の背景・維持する仕様

## 作業方針

- ルートの README.md は利用者向けに、概要・導入方法・対応ブラウザを簡潔に記載します。AI 向けの手順や設計判断は context/ にまとめます。
- CSS の正本は `packages/shitajicss/src/index.css`。`dist` や `node_modules` の生成物を直接編集しません。
- 通常版と圧縮版で、ルール・宣言の順序・互換用指定を維持します。ビルド設定変更と CSS の仕様変更を混同しません。
- 配布物へバージョン・作者・ライセンスのコメントヘッダーを付与しません。package.json の CC0-1.0 は維持します。
- サイトは `docs`、確認用ページは `play/_default`。サイトのコンポーネントは `common`・`element`・`page/home` の分類と、`index.tsx`・`props.ts`・`style.css` の配置に合わせます。
- 開発ツールの依存はルートで管理します。esbuild を配布パッケージの依存に戻しません。
- 今回の環境更新では 6.1.0 を維持しています。公開が必要になった場合の扱いは context/release.md を確認します。
- 構成や運用を変更したら、該当する context/ の記述も更新します。
