
let b = document.querySelector('button#henkou');
b.addEventListener('click', showSelectResult);//（クリックされた時に時に,関数）を実行

function showSelectResult() {
//ヨットの文字を追加
let l=document.createElement('li');
l.textContent='ヨット';
let u=document.querySelector('ul#kazoeuta');
u.insertAdjacentElement('beforeend',l);
//ブルームーンの画像追加
let i = document.querySelector('img#bluemoon');
i.setAttribute('src', 'bluemoon.jpg');
//拓殖大学のURL追加
let a = document.createElement('a');
a.textContent = '拓殖大学HP';
a.setAttribute('href', 'https://www.takushoku-u.ac.jp');
let p = document.querySelector('p#takudai');
p.insertAdjacentElement('afterend', a);
//要素の削除mochiとkassen
l=document.querySelector('li#mochi');
l.remove();
u = document.querySelector('ul#kassen');
u.remove();    
//要素の追加
u = document.createElement('ul');   

l = document.createElement('li');  
l.textContent = '赤';              
u.insertAdjacentElement('beforeend', l);     

l = document.createElement('li');      
l.textContent = '緑';                
u.insertAdjacentElement('beforeend', l);     

l = document.createElement('li');
l.textContent = '青';
u.insertAdjacentElement('beforeend', l);

p = document.querySelector('p#primary');
p.insertAdjacentElement('afterend', u);


}