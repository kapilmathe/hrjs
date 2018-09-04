
var btn = document.getElementById('btn')
btn.onclick = function() {
    /* This changes the button's label */
    let n = parseInt(btn.innerHTML)
    n = n+1
    btn.innerHTML = n.toString();
};