# Shunsuke Urabe — Personal Website

占部 駿祐の人柄、趣味、活動経験を紹介する1ページの個人ホームページです。Next.js App Router / TypeScript / Tailwind CSS / Motion / Lucide React を使用しています。データベース・認証・フォーム・環境変数は不要です。

## 公開サイト

**公開URL：[https://self-introduction-hp.vercel.app/](https://self-introduction-hp.vercel.app/)**

Vercelへデプロイ済みです。

採用バージョン：Next.js 16.4.3、React 19.3.1、TypeScript 6.0.3、Tailwind CSS 4.3.3、Motion 14.7.1、Lucide React 1.62.0。ESLintはNext.js用プラグインの対応範囲に合わせた9.39.5です。バージョンを固定し、`package-lock.json` を保存しています。

## ローカル起動

Node.js 22 LTS 以降と npm を使用してください。

```sh
npm ci
npm run dev
```

http://localhost:3000 を開きます。停止はターミナルで Ctrl+C。

本番と同じ構成で確認する場合：

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

HTMLはビルド時に静的生成し、画像は Next.js Image によって配信時に最適化します。`output: 'export'` は設定していません。Vercelでは標準の Next.js 構成で動作します。

## ファイル構成と編集

| ファイル | 内容 |
| --- | --- |
| `src/app/page.tsx` | HOME / ABOUT ME / MY FAVORITES / MY ACTIVITIES / CONNECT |
| `src/app/layout.tsx` | 日本語設定、title、description、OG、Twitter Card |
| `src/app/globals.css` | 色、余白、レスポンシブ表示、ホバー、動きを減らす設定 |
| `src/app/opengraph-image.tsx` | ローカルで生成する共有用画像 |
| `src/app/icon.svg` | favicon |
| `src/components/header.tsx` | 固定ヘッダー、モバイルメニュー、Escapeによる閉じる操作 |
| `src/components/reveal.tsx` | Motion のスクロール登場演出 |
| `src/components/section-heading.tsx` | 共通セクション見出し |
| `src/lib/content.ts` | 掲載文章、プロフィール、画像パス、外部リンク |

本文は指定された文章を使用。Tech. C. Venture はリーダーをサポートした経験として、インターンシップはチームリーダー経験として記載しています。

フォントは Arial / Noto Sans JP / ヒラギノ / 游ゴシック / メイリオのシステムフォント構成です。外部フォントへの通信は発生しません。

メールアドレスはクリックできない通常のテキストで表示します。メールアプリを開くリンクやホバー演出は設けていません。

## アニメーションとアクセシビリティ

- HOME：名前・コピー・本文・ボタン・写真が順に登場。青い行は遅らせて表示。
- 各セクション：Motion と IntersectionObserver による一度だけの登場。
- カード：控えめな浮き上がり、写真の拡大、青いボーダー。
- ボタン・リンク：色と矢印の変化。アンカーはスムーズスクロール。
- `prefers-reduced-motion` では移動・登場・ホバーのアニメーションを停止。
- スキップリンク、focus-visible、画像のalt、メニューのaria-expanded、見出し階層に対応。
- JavaScript無効時も本文は表示されます。

## 画像の配置

元画像はDownloads / OneDriveに残し、サイト用のコピーを配置しています。プロフィールはPNGから実際のJPEG形式に変換しています。

| パス（`public/images/`以下） | 内容 |
| --- | --- |
| `profile.jpg` | 提供された笑顔のプロフィール写真 |
| `favorites/yamakasa.jpg` | 博多祇園山笠 |
| `favorites/baseball.jpg` | ホークスのタオルを持った本人の写真 |
| `favorites/programming.jpg` | ノートPCで開発する本人の写真 |
| `favorites/korea.jpg` | 韓国料理 |
| `activities/intelliflow.png` | 実際のIntelliFlowトップページ |
| `activities/jphacks.jpg` | 提供されたJPHACKS 2026画像 |
| `activities/tech-c-venture.png` | 提供されたTech. C. Venture公式ロゴ（JPEGからPNGへ変換） |

球場写真2枚、韓国料理・カフェ写真2枚、IntelliFlowワークスペース画面1枚も追加素材として保存しています。自動スライドショーはありません。

Tech. C. Venture は提供された公式ロゴを、白い背景と余白を設けて全体が収まるように表示しています。元画像 `tettkurogo.jpg` はDownloadsに保持しています。

JPHACKS画像の公開利用条件は未確認です。公開前に確認し、利用しない場合は `src/lib/content.ts` の `showJphacksImage` を `false` にすると、テキストと汎用アイコンへ切り替わります。

## 更新内容のGitHubへの反映

変更後はローカルで表示とチェックを確認し、対象リポジトリへ反映します。

```sh
npm run lint
npm run typecheck
npm run build
git status
git diff
```

変更内容を確認してからコミット・pushします。

```sh
git add .
git commit -m "Update personal website"
git push origin main
```

接続先は `git remote -v` で確認できます。

## Vercelでの更新・再デプロイ

本番サイトは [self-introduction-hp.vercel.app](https://self-introduction-hp.vercel.app/) で公開しています。

GitHub連携でProduction Branchを `main` に設定している場合、`main` へのpushで本番が更新されます。Vercelのプロジェクト画面のDeploymentsからビルド結果と公開状態を確認してください。

プロジェクトを再設定する場合の構成：

1. Vercelの Add New → Project から対象GitHubリポジトリをインポート。
2. Framework Preset は Next.js、Root Directory はリポジトリルート。
3. Build Command は `npm run build`。Output Directory は既定値のまま。環境変数は不要。
4. Production Branch を `main` に設定し、内容を確認して Deploy。
5. 以降の `main` へのpushは本番デプロイのトリガーになります。
6. SEO設定を更新する場合は、`src/app/layout.tsx` の `metadataBase` に `https://self-introduction-hp.vercel.app`、canonical に `https://self-introduction-hp.vercel.app/` を使用します。現在のコードではこれらを未設定のため、必要に応じて設定し、再デプロイ後にOG画像とSNSプレビューを確認してください。

公式ドキュメント：

- [Next.js インストール](https://nextjs.org/docs/app/getting-started/installation)
- [Next.js Image](https://nextjs.org/docs/app/api-reference/components/image)
- [Tailwind CSS + Next.js](https://tailwindcss.com/docs/installation/framework-guides/nextjs)
- [Motion の動きを減らす設定](https://motion.dev/docs/react-use-reduced-motion)
- [Vercel Git連携](https://vercel.com/docs/git)

## 公開後・更新時の確認

- JPHACKS画像の利用条件、写真に写る方の公開同意、プロフィール・卒業予定・就職活動状況を確認。
- Tech. C. Venture の正式ロゴの表示を確認。
- メールアドレスと外部リンクの掲載先・表示内容を確認。
- iOS / Androidの実機で写真・改行・タップ操作を確認。
- 公開URLでOG画像とSNSプレビューを確認。

検証結果は `VERIFICATION.md` に記録します。

## ブラウザーテスト

この環境ではインストール済みの Google Chrome を Playwright から使っています。`npm run build` → `npm start` で本番サーバーを起動し、別のターミナルから実行します。

```sh
npm run test:e2e
```

320 / 390 / 768 / 1440px のレイアウト・画像読み込み、アンカー、モバイルメニュー、キーボード、動きを減らす設定、JavaScript無効時の本文、共有画像を検証します。スクリーンショットは `test-results/` に保存し、Gitには含めません。Chromeが未インストールの環境では、Google Chromeをインストールしてから実行してください。
