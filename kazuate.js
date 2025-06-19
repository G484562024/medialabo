// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;           // 回答回数
let gameOver = false;    // ゲーム終了判定

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
hantei();
hantei();
hantei();
hantei();



function hantei() {
  let yoso = 4;  // 現在の予想値（例: 4 にしてますが実際は入力から取得することも可）

  

  kaisu += 1;
  console.log(`${kaisu}回目の予想: ${yoso}`);

  if (gameOver) {
    console.log(`答えは ${kotae} でした．すでにゲームは終わっています`);
    return;
  }

  if (yoso === kotae) {
    console.log("正解です．おめでとう!");
    gameOver = true;
    kaisu=4;
  } else if (kaisu >= 4) {
    console.log(`答えは ${kotae} でした．すでにゲームは終わっています`);
    gameOver = true;
  } else if (kaisu === 3) {
    console.log(`まちがい．残念でした答えは ${kotae} です．`);
    gameOver = true;
  } else if (yoso < kotae) {
    console.log("まちがい．答えはもっと大きいですよ");
  } else {
    console.log("まちがい．答えはもっと小さいですよ");
  }
}
