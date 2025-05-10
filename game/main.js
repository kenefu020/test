let teki1 = 100;
let teki2 = 100;
let teki3 = 100;
let teki4 = 100;

document.getElementById('style').innerHTML = 'body{background-color: #ffffff;}';
document.getElementById('ld').innerHTML = ('<b></b>')
document.getElementById('start').innerHTML = ('start');

document.getElementById('start').onclick = function() {
document.getElementById('teki1').innerHTML = '敵１体力' + teki1 + '|';
document.getElementById('teki2').innerHTML = '敵２体力' + teki2 + '|';
document.getElementById('teki3').innerHTML = '敵３体力' + teki3 + '|';
document.getElementById('teki4').innerHTML = '敵４体力' + teki4 + '|';
document.getElementById('start').remove();
}