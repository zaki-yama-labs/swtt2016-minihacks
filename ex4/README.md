課題4 - Lightningを使った取引先責任者検索
=======================================


### 使い方

- 事前に Force.com Migration Tool をインストール
	- https://help.salesforce.com/apex/HTViewSolution?id=000176910&language=ja
- `build.properties.sample` に自分の組織のusername, password を入力し、`build.properties` として保存
- `ant deployCode` を実行


### メモ

いつぞやの [Salesforce Lightning コンポーネントチュートリアル](http://salesforcedevelopersjapan.github.io/lightning-components-tutorial/index.html) とほとんど同じ内容。
取引先名で検索しないといけないことだけ注意すればほぼチュートリアルのコピペでいける。


```
<lightning:input value="{!v.input}" name="keyword" label="Search" onchange="{!c.onChange}" />
```

使おうと思ったけど、`event.target.value` で値を取得できなかったり、Enter キー押下時を判定するのが難しくて断念。
ボタン設置すればいけるとは思うが...

また、Winter'17 で登場した Lightning Data Service を使えば Apex 書かずにいけるかと思ったけど
レコードを List で取得するような操作には対応してないっぽい。

