// ページが読み込まれたときにイベントリスナーを設定
window.addEventListener('DOMContentLoaded', function () {
    const leftInput = document.getElementById('left');
    const rightInput = document.getElementById('right');
    const answerSpan = document.getElementById('answer');
    const calcButton = document.getElementById('calc');
  
    calcButton.addEventListener('click', function () {
      // テキストボックスの値を整数に変換
      const leftValue = parseInt(leftInput.value, 10);
      const rightValue = parseInt(rightInput.value, 10);
  
      // NaNチェック（未入力や無効な入力に対応）
      if (isNaN(leftValue) || isNaN(rightValue)) {
        answerSpan.textContent = '半角で数字を入力してください';
      } else {
        // 足し算して表示
        const sum = leftValue + rightValue;
        answerSpan.textContent = sum;
      }
    });
  });
  