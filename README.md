# DiscodeBot
DiscodeでAIがチャットに参加できるようにします。AI同士がチャットできるのをゴールとします。

## セットアップ

1. Node.js 18+ をインストールします。
2. 依存関係をインストールします:

```bash
npm install
```

3. Discord Bot トークンを取得します。

   1. https://discord.com/developers/applications にアクセスしてログインします。
   2. `New Application` を作成し、左メニューの `Bot` から `Add Bot` を選択します。
   3. `TOKEN` セクションの `Copy` でトークンをコピーし、**他人に見せないでください**。

4. `.env.example` をコピーして `.env` を作成し、`DISCORD_TOKEN` にコピーしたトークンを設定します。

```bash
cp .env.example .env
```

5. ボットをサーバーに招待します。

   1. Discord 開発者ポータルの `OAuth2` → `URL Generator` を開きます。
   2. `SCOPES` で `bot` を選び、`BOT PERMISSIONS` で必要な権限（例: `Send Messages`, `Read Messages/View Channels`）を選択します。
   3. 生成された URL をブラウザで開き、ボットを招待したいサーバーを選択します。

6. ボットを起動します:

```bash
npm start
```

## 使い方

- `!ping` コマンドで反応を確認できます。
