課題3 - Visualforceのデザインを変更する
=======================================

### 使い方

- 事前に Force.com Migration Tool をインストール
	- https://help.salesforce.com/apex/HTViewSolution?id=000176910&language=ja
- `build.properties.sample` に自分の組織のusername, password を入力し、`build.properties` として保存
- `ant deployCode` を実行

### デモ

http://yama-swtt16minihacks-developer-edition.ap2.force.com/

### メモ

参考サイト
http://www.minerva18.com/blog/getting-started-with-lightning-design-system-for-visualforce/
のソースコードから何を変更しないといけないのか、意外と難しいのでは。

- [こちらのサイト](https://tools.lightningdesignsystem.com/css-customizer) で名前空間を変更していた場合、一番外側の `<div class="slds">` を自分の名前空間名に変更しないといけない
- 静的リソース名を自分がアップロードしたものに変更しないといけない
- サンプルコードでは取引先を作成する `createAccount()` が記載されていないので、自前で実装しないといけない

最後の点については、今回は [Remote Objects](https://developer.salesforce.com/docs/atlas.ja-jp.pages.meta/pages/pages_remote_objects.htm) を使うのが簡単。
[デモページ](http://minerva18-developer-edition.ap2.force.com/Demos/SLDS_Demo) に `createAccount` の処理が丸々載っているのに気づければ、Remote Objects を使えばいいことにすぐに気づけるはず。

余談だが、参考サイトのデモページのように Visualforce を一般公開する方法をこれまで知らなかったんだけど
[Force.com サイト](https://developer.salesforce.com/page/JP:Sites) という機能で実現できた。
静的リソースのキャッシュを「公開」にしないといけないことに注意。
