//memo
//letが変数
let japan = 80
let age = 13
let baka = Math.abs(-11)

//リスト
let list = ['kenefu','枯葉','ぴかすぅ','shinkame']
//floorは小数点切り捨て　randomは2なら1.9999...になる
let r2 =Math.floor(Math.random() * list.length)
console.log(r2)
console.log(list[r2])

//コンソールにログを表示する
console.log('○○の年齢は'+(japan-10))
console.log('kenefuは'+age+'歳')
console.log(baka)

//htmlタグ内に表示させるやつ
let fin = document.getElementById('fin')
fin.innerText = list[r2]

function test(){
    alert(list[r2])
}