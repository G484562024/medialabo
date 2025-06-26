let b =document.querySelector('button#print');
b.addEventListener('click',greeting);

p=document.querySelector('p#message');

function greeting(){
    
    p.textContent='こんにちは';
    console.log('きさま！みているな！');
}