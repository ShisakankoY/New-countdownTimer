# New-countdownTimer

できるだけ、場所を取らないようにと、タイマー設定はポップアップ、画面表示はボタンと残り秒数のみです。

## 使い方

1. 「スタート」ボタンを押すと時間の入力を求められます。  
2. 時間をセットしたらカウントダウンが始まります。  
3. 一時停止・再開・リセットも可能です。

htmlファイルに、
```<button type="button" id="Btn1">スタート</button>```
```<button type="button" id="Btn2">ポーズ</button>```
`<button type="button" id="Btn3">リスタート</button>```
```<button type="button" id="Btn4">リセット</button>```
```<div id="clock"></div>```
```<script type="module" src="https://cdn.jsdelivr.net/gh/ShisakankoY/New-countdownTimer/Main.js"></script>```
を追加してください。

## ファイル構成

- `index.html`
- `Main.js`  
- `Module.js`
