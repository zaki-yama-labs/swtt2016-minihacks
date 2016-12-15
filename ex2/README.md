課題2 - オールインワンシステム
==============================

### 使い方

- 事前に Force.com Migration Tool をインストール
	- https://help.salesforce.com/apex/HTViewSolution?id=000176910&language=ja
- `build.properties.sample` に自分の組織のusername, password を入力し、`build.properties` として保存
- `ant deployCode` を実行

### メモ

やったこと

- 外部データソースを定義する
    - 種別は Salesforce Connect: OData 2.0 とした（根拠なし）
- 「検証して同期」すると外部オブジェクトが自動生成された
- 取引先(Account) の外部参照項目として HealthInsurance を追加した
