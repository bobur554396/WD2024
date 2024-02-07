let text = document.getElementById("text");
text.innerHTML = "Message from JS";
text.style.color = "red";
text.style.fontSize = "20px";




let btn = document.getElementById("btn");

btn.addEventListener('click', function() {
    let container = document.getElementById("container");

    let text2 = document.createElement('p');
    text2.innerHTML = "second text";

    container.appendChild(text2);
});