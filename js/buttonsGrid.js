var buttonList = []
var btns = document.getElementById('btns')
for(let i=0; i<9;i++) {
    let btn = document.createElement('btn'+(i+1));
    btn.className = 'myButtonClass';
    btn.innerHTML = (i+1).toString()
    btns.appendChild(btn)
    buttonList.push(btn)
}