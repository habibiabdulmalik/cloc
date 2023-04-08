const hours = document.querySelector('.hours');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');
const text = document.querySelector('.text');
const  audio = document.querySelector('.audio')
const money = document.querySelector('.money');
music = [
    {
        song:"Chris-Brown-Under-The-Influence-(JustNaija.com).mp3"
    }
]

let count = 0;

function myFunction(){
    const dateHour = new Date().getHours() % 12;
    const dateMin = new Date().getMinutes();
    const dateSec = new Date().getSeconds();
    
 

    hours.textContent = dateHour
    min.textContent = dateMin
    sec.textContent = dateSec

    if(dateHour <= 9) {
        hours.textContent = '0' + dateHour
    }

    if(dateMin <= 9) {
        min.textContent = '0' + dateMin
    }

    if(dateSec <= 9) {
        sec.textContent = '0' + dateSec
    }

    let t = setTimeout(function(){ myFunction() }, 1000);
    
    
    
    
}

myFunction();

money.addEventListener('click', () =>{
    window.alert("Much Love For The Person Viewing This")
})