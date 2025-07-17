// --- 共通関数 ---
// 店舗情報のHTMLを生成してdiv要素で返す
function createShopInfoElement(shop) {
  const div = document.createElement("div");
  div.className = "l";

  // sub_genreが無い場合の対応
  const subGenreName = shop.sub_genre?.name ?? "なし";

  div.innerHTML = `
    <p>ジャンル: ${shop.genre.name}</p>
    <p>住所: ${shop.address}</p>
    <p>アクセス: ${shop.access}</p>
    <p>予算: ${shop.budget.name}</p>
    <p>キャッチコピー: ${shop.catch}</p>
    <p>サブジャンル: ${subGenreName}</p>
    <p>最寄駅: ${shop.station_name}</p>
    <p>営業時間: ${shop.open}</p>
  `;
  return div;
}

// #result要素を新規作成してbodyに追加（あれば削除してから）
function resetResultContainer() {
  const existing = document.getElementById("result");
  if (existing) existing.remove();

  const container = document.createElement("div");
  container.id = "result";
  document.body.appendChild(container);
  return container;
}

// --- 課題3-2 ---
// consoleに店舗情報を出力する
function print(data) {
  const shops = data.results.shop;
  for (const shop of shops) {
    console.log("店舗名:", shop.name);
    console.log("住所:", shop.address);
    console.log("アクセス:", shop.access);
    console.log("予算:", shop.budget.name);
    console.log("キャッチコピー:", shop.catch);
    console.log("ジャンル:", shop.genre.name);
    console.log("サブジャンル:", shop.sub_genre?.name ?? "なし");
    console.log("最寄駅:", shop.station_name);
    console.log("営業時間:", shop.open);
    console.log("--------------------------");
  }
}

// --- 課題5-1 ---
// DOMに全店舗情報を表示
function printDom(data) {
  const shops = data.results.shop;
  const container = resetResultContainer();

  for (const shop of shops) {
    // 店舗名見出し
    const title = document.createElement("h2");
    title.textContent = `店舗名: ${shop.name}`;
    container.appendChild(title);

    // 詳細情報
    const info = createShopInfoElement(shop);
    container.appendChild(info);
  }
}

// --- 課題6-1 ---
// ページング表示用のグローバル変数
let currentPage = 0;
let currentShops = [];

// 通信成功時に呼び出す。表示初期化して1ページ目を表示
function printDomWithPaging(data) {
  currentShops = data.results.shop;
  currentPage = 0;
  showPage();
}

// 現在のページを表示（5件ずつ）
function showPage() {
  const container = resetResultContainer();

  const itemsPerPage = 5;
  const totalItems = currentShops.length;
  const start = currentPage * itemsPerPage;
  const end = Math.min(start + itemsPerPage, totalItems);

  // --- ① ヒット数とページ操作ボタンをまとめて表示 ---
  const nav = document.createElement("div");
  nav.className = "page-nav";
  nav.style.marginBottom = "1em";
  nav.style.display = "flex";
  nav.style.alignItems = "center";
  nav.style.gap = "1em";

  // ヒット数表示
  const hitCountSpan = document.createElement("span");
  hitCountSpan.textContent = `(${totalItems} 件ヒット)`;
  nav.appendChild(hitCountSpan);

  // 前へボタン
  if (currentPage > 0) {
    const prevBtn = document.createElement("button");
    prevBtn.textContent = "＜ 前へ";
    prevBtn.addEventListener("click", () => {
      currentPage--;
      showPage();
    });
    nav.appendChild(prevBtn);
  }

  // 次へボタン
  if (end < totalItems) {
    const nextBtn = document.createElement("button");
    nextBtn.textContent = "次へ ＞";
    nextBtn.addEventListener("click", () => {
      currentPage++;
      showPage();
    });
    nav.appendChild(nextBtn);
  }

  // ページ情報（例: 1〜5件目）
  const pageInfo = document.createElement("span");
  pageInfo.textContent = ` ${start + 1}〜${end}件目 `;
  nav.appendChild(pageInfo);

  container.appendChild(nav);

  // --- ② 検索結果の一つ目の店舗名と情報を表示 ---
  for (let i = start; i < end; i++) {
    const shop = currentShops[i];

    const title = document.createElement("h2");
    title.textContent = `店舗名: ${shop.name}`;
    container.appendChild(title);

    const info = createShopInfoElement(shop);
    container.appendChild(info);
  }
}


// --- イベント登録 ---
// ページ読み込み完了時に検索ボタンのイベントを設定
document.addEventListener("DOMContentLoaded", () => {
  const searchBtn = document.getElementById("search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", sendRequest);
  }
});

// --- Ajax通信処理 ---
// 検索ジャンルを取得してAPIを叩く
function sendRequest() {
  const genreSelect = document.getElementById("genre");
  if (!genreSelect) return;

  const genreValue = genreSelect.value;
  const genreText = genreSelect.options[genreSelect.selectedIndex]?.text ?? "";

  console.log(`検索キー: ${genreText}`);

  const url = `https://www.nishita-lab.org/web-contents/jsons/hotpepper/${genreValue}.json`;

  axios.get(url)
    .then(showResult)
    .catch(showError)
    .then(finish);
}

// 通信成功時の処理
function showResult(resp) {
  let data = resp.data;
  if (typeof data === "string") {
    data = JSON.parse(data);
  }
  printDomWithPaging(data);
}

// 通信エラー時の処理
function showError(error) {
  console.error("通信エラー:", error);
}

// 通信終了時の処理
function finish() {
  console.log("Ajax通信が終了しました");
}
