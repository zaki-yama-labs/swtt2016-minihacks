課題6 - APIを使いこなす
=======================

Apex REST を使った課題。

### メモ

Apex 側はサンプルコードの通りにやればそこまで難しくない。

> 4. RESTリソースを更新して、取引先責任者の説明の項目を「アクティブでない取引先責任者」に更新できるようにしてください。

をどう実現するのかは人によって違いそう。

また、クライアントアプリケーションとして axios や Promise を使ったり無駄にがんばった。
アクセストークン取得する際、ヘッダで `'Content-Type': 'application/x-www-form-urlencoded'` で送らないといけなかったり
従ってパラメータは `querystring.stringify` しないといけなかったり色々ハマりどころ多し。

素直に curl でよかったかも。

### Usage

- 事前に接続アプリケーションを作成し、client id と client secret を取得しておく
- index.js を開き、`CLIENT_ID` などに情報を入力
- 以下を実行

```
$ npm install
$ node index.js
```
