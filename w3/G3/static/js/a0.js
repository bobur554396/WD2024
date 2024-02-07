let p1 = document.getElementById('text');
p1.innerHTML = "text from JS file";
p1.style.color = 'red';
p1.style.fontSize = '24px';


let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    let p1 = document.getElementById('text');
    p1.style.display = "none";

    
    let container = document.getElementById('container');
    let p2 = document.createElement('p');
    p2.innerHTML = 'item added by clicking';

    container.appendChild(p2);

});
