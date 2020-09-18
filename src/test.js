const string = `

.skin *::before,.skin *::after,.skin *{box-sizing: border-box;}
.skin *{
    margin: 0;
    padding: 0;
}
#html {
    background-color: #ffe600;
}
.pikachu{
    width: 400px;
    height: 500px;
   
    position: relative;
    left: 50%;
    margin-left: -200px;
}
.san{
    position: absolute;
   
    border: 10px solid black;
    border-color: black transparent transparent;
    border-bottom: none;
    top: 200px;
    left: 50%;
    margin-left: -10px;
}
.yuan{
    position: absolute;
    width: 20px;
    height: 4px;
    background:black;
    top: -14px;
    left: -10px;
    border-top-left-radius:11px 5px ;
    border-top-right-radius: 11px 5px ;
}
.nose:hover {
    animation:nose .23s infinite linear;
  }
.eye{
    width: 64px;
    height: 64px;
    border: 2px solid #000;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    top: 150px;
    margin-left: -32px;
    background:#2e2e2e;
}
.eye::before{
    content: '';
    display: block;
    width: 25px;
    height: 25px;
    border: 2px solid #000;
    border-radius: 50%;
    background: #fff;
    position: relative;
    top: 5px;
    left: 10px;

}
.eye.left{
    transform: translateX(-100px);
}
.eye.right {
    transform: translateX(100px);
}
.mouth{
   
    position: absolute;
    width: 300px;
    height: 300px;
    top: 250px;
    left: 50%;
    margin-left: -150px;
    overflow: hidden;
}
.mouth::after{
    content: '';
    border: 3px solid black;
    width: 80px;
    height: 25px;
    left: 70px;
    position: absolute;
    border-bottom-left-radius: 60px 30px;
    border-top: transparent;
    border-right: transparent;
    transform:rotate(-25deg);
    background-color: #ffe600;
}
.mouth::before{
    content: '';
    border: 3px solid black;
    width: 80px;
    height: 25px;
    left: 150px;
    position: absolute;
    border-bottom-right-radius: 60px 30px;
    border-top: transparent;
    border-left: transparent;
    transform:rotate(25deg);
    background-color: #ffe600;
    
}
.mouth .down{
    height: 150px;
    width: 100%;
    position: absolute;
    overflow: hidden;
    top: 7px;
   
}
.mouth .down .yuan1{
    width: 120px;
    height: 500px;
    border: 2px solid black;
    position: absolute;
    left: 50%;
    bottom: 0;
    margin-left: -60px;
    border-radius:75px/300px;
    background: #9b000a;
    z-index: -1;
    overflow: hidden;
}
.mouth .down .yuan1 .yuan2{
    width: 100%;
    height: 150px;
    position: absolute;
    bottom: -25px;

    border-radius:75px/100px;
    background-color: #ff485f;
}
.face1{
    width: 82px;
    height: 82px;
    border: 3px solid black;
    position: absolute;
    border-radius: 50%;
    top: 280px;
    right: 0;
    background-color: red;
}
.face2{
    width: 82px;
    height: 82px;
    border: 3px solid black;
    position: absolute;
    border-radius: 50%;
    top: 280px;

    background-color: red;
}
@keyframes nose {
    0% { transform:rotate(0deg); }
    33% { transform:rotate(-1deg); }
    67% { transform:rotate(1deg); }
    100% { transform:rotate(0deg); }
  }

`


let time = 100
let n = 1
const run= () => {
  n += 1
  if (n > string.length) {
    window.clearInterval(id)
    return
  }
  demo1.innerText = string.substr(0, n)
  demo2.innerHTML = string.substr(0, n)
  demo1.scrollTop = demo1.scrollHeight;
}

const  play=()=>{
  return setInterval(run,time)
}

const pause=()=>{
  window.clearInterval(id)
}
let id = play()

btnPause.onclick = () => {
  pause()
}

btnPlay.onclick = () => {

 id=play()
}

btnSlow.onclick = () => {
  window.clearInterval(id)
  time=300
  id=play()
}

btnNormal.onclick = () => {
  window.clearInterval(id)
  time=100
  id=play()
}

btnFast.onclick = () => {
  window.clearInterval(id)
  time=0
  id=play()
}
