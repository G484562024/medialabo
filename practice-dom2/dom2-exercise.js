//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!
let count=false;

let b = document.querySelector('button#show');
b.addEventListener('click', show);

function show(){
	if(!count){
    // 住所リスト作成
    let u1 = document.createElement('ul');   
    u1.setAttribute('style', 'margin: 0; padding: 0; list-style: none;');

    let l = document.createElement('li');  
    l.textContent = '八王子市館町';              
    u1.insertAdjacentElement('beforeend', l); 

    let p = document.querySelector('h2#addr');
    p.insertAdjacentElement('afterend', u1);

    // 学科リスト作成
    let u2 = document.createElement('ul');   
    u2.setAttribute('beforeend', l); ;

    l = document.createElement('li'); 
    l.textContent = '機械システム工学科'; 
    u2.insertAdjacentElement('beforeend', l); 

    l = document.createElement('li'); 
    l.textContent = '電子システム工学科'; 
    u2.insertAdjacentElement('beforeend', l); 

    l = document.createElement('li'); 
    l.textContent = '情報工学科'; 
    u2.insertAdjacentElement('beforeend', l); 

    l = document.createElement('li'); 
    l.textContent = 'デザイン学科'; 
    u2.insertAdjacentElement('beforeend', l); 

    p = document.querySelector('h2#dept'); 
    p.insertAdjacentElement('afterend', u2);

	count=true;
	}
}
