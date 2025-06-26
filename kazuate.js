let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

let kaisu = 0;
let gameOver = false;

// ボタンにイベント登録
document.getElementById("btn").addEventListener("click", hantei);

document.addEventListener("keydown", function (event) {
  const input = document.getElementById("num");
  let value = parseInt(input.value) || 0;

  if (["ArrowUp", "w", "W"].includes(event.key)) {
    input.value = value + 1;
  } else if (["ArrowDown", "s", "S"].includes(event.key)) {
    input.value = value - 1;
  }else if (event.key === "Enter") {
    document.getElementById("btn").click(); // 回答ボタンをクリック
  }
});


function hantei() {
  if (gameOver) {
    kaisu+=1;
    document.getElementById("kaisu").textContent = kaisu;
    document.getElementById("result").textContent = `答えは ${kotae} でした．すでにゲームは終わっています`;
    
    return;
  }

  // 回数と予想の取得・表示
  kaisu += 1;
  document.getElementById("kaisu").textContent = kaisu;

  let yoso = parseInt(document.getElementById("num").value);
  document.getElementById("answer").textContent = yoso;

  let resultMsg = "";

  if (yoso === kotae) {
    resultMsg = "正解です．おめでとう!";
    gameOver = true;
  } else if (kaisu >= 4) {
    resultMsg = `答えは ${kotae} でした．すでにゲームは終わっています`;
    gameOver = true;
  } else if (kaisu === 3) {
    resultMsg = `まちがい．残念でした答えは ${kotae} です．`;
    gameOver = true;
  } else if (yoso < kotae) {
    resultMsg = "まちがい．答えはもっと大きいですよ";
  } else {
    resultMsg = "まちがい．答えはもっと小さいですよ";
  }

  document.getElementById("result").textContent = resultMsg;
}
