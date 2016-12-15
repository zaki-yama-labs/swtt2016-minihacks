課題6 - APIを使いこなす
=======================

Apex REST を使った課題。

### 使い方

#### Apex

- 事前に Force.com Migration Tool をインストール
	- https://help.salesforce.com/apex/HTViewSolution?id=000176910&language=ja
- `build.properties.sample` に自分の組織のusername, password を入力し、`build.properties` として保存
- `ant deployCode` を実行

#### クライアントアプリケーション

- 事前に接続アプリケーションを作成し、client id と client secret を取得しておく
- index.js を開き、`CLIENT_ID` などに client id, client secret, username, password を入力
- 以下を実行

```
$ npm install
$ node index.js
```

### メモ

Apex 側はサンプルコードの通りにやればそこまで難しくない。

> 4. RESTリソースを更新して、取引先責任者の説明の項目を「アクティブでない取引先責任者」に更新できるようにしてください。

をどう実現するのかは人によって違いそう。

また、クライアントアプリケーションとして axios や Promise を使ったり無駄にがんばった。
アクセストークン取得する際、ヘッダで `'Content-Type': 'application/x-www-form-urlencoded'` で送らないといけなかったり
従ってパラメータは `querystring.stringify` しないといけなかったり色々ハマりどころ多し。

素直に curl でよかったかも。
