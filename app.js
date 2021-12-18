//first task
const addDiv = () => {
    let container = document.getElementById('container' )
    let div = document.createElement("div")
    div.innerHTML = "<div class=element>Element</div>"
    container.append(div)
    console.log(container)
}

addDiv()


//second task
const list = document.getElementById('container-1');
const str = document.getElementById('start');
const st = document.getElementById('stop');
let interval;

str.onclick = function() {
    interval = setInterval(() => {
        const element = document.createElement('div');
        element.className = 'element';
        const randomNumber = Math.floor(Math.random() * 20);
        element.innerText = randomNumber;
        list.append(element);
    }, 1000);
}

st.onclick = function() {
    clearInterval(interval)
}


//third task
const minutes = document.getElementById('minutes')
const seconds = document.getElementById('seconds')
const go = document.getElementById('start2')
const stp = document.getElementById('pause')
const rst = document.getElementById('reset')

const timer = () => {
    seconds.textContent = (+seconds.textContent + 1).toString().padStart(2, '0')
    if (+seconds.textContent === 60) {
        minutes.textContent = (+minutes.textContent +1).toString().padStart(2, '0')
        seconds.textContent = '00'
    }
}
const intervalStart = () => {
    timerInterval = setInterval(timer, 1000)
    go.disabled = true;
    stp.disabled = false;
    rst.disabled = false;
}
const intervalStop = () => {
    clearInterval(timerInterval)
    go.disabled = false;
    stp.disabled = true;
    rst.disabled = false;
}
const intervalReset = () => {
    clearInterval(timerInterval)
    minutes.textContent = '00';
    seconds.textContent = '00';
    go.disabled = false;
    stp.disabled = false;
    rst.disabled = true;
}


//Fourth task

let isLogin, isPass = false
let login = document.getElementById('btnLogin')

login.addEventListener('keyup',(e)=>{
if(login.value.length >= 6){
    isLogin = true
    console.log(isLogin)
    console.log(login.value.length,'dd')
}
    })
let pass = document.getElementById('btnPass')

pass.addEventListener('keyup',(e)=>{
    if(pass.value.length >= 6){
        let send =document.getElementById('send')
        console.log(send)
        send.disabled = false
        isPass = true
        console.log(isPass,'boll')
        console.log(pass.value.length,'dd')
    }
})

let send = document.getElementById('send')


send.addEventListener('click',()=>{
    alert(login.value + pass.value)
})








