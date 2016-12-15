課題1 - 出張申請を楽にする
==========================


### 使い方

- 事前に Force.com Migration Tool をインストール
	- https://help.salesforce.com/apex/HTViewSolution?id=000176910&language=ja
- `build.properties.sample` に自分の組織のusername, password を入力し、`build.properties` として保存
- `ant deployCode` を実行


### メモ

> 予定額が700ドルを超える出張申請は、承認が必要となるため、申請者の上司に自動送信する必要があります。

という部分をどう実装するか、がポイント？今回はプロセスビルダー使ってみた。
