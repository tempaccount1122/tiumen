const kubok = document.querySelector(".s1-subtitle-img")
const title = document.querySelector(".s1-title")
const rs = document.querySelector('.s1-subtitle')
const topy = document.querySelector('.s1-topy')
const [...gal] = document.querySelectorAll(".s2-imgs-image")
const s2 = document.querySelector(".s2")
console.log(s2)
let th = title.clientHeight
let rsh = rs.clientHeight

let topyh = topy.clientHeight
let thpx = th - .25*th + "px"
let rshtopy = rsh - .35*topyh
let topypx = rshtopy + th + "px"
kubok.style.top = thpx
topy.style.top = topypx
let rsw = rs.clientWidth + "px"
console.log(rsw)
topy.style.width = rsw
let topyhost = topyh - .35*topyh
let s2mt = topyhost + 30 + "px"
console.log(s2mt)
s2.style.marginTop = s2mt

let marq = document.querySelector('.s2-begstr')
console.log(marq.innerHTML)
let armarq = marq.innerHTML.split('')






for (var i = 0; i < gal.length; i++) {
	gal[i].style.backgroundImage = `url(img/${i+1}.jpg)`
}
