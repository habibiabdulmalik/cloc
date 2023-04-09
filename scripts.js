const hours = document.querySelector('.hours');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');
const aler = document.querySelector('.money');
const input = document.querySelector('.input');
const text = document.querySelector('.text');
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
const home = document.querySelector('.home');

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

aler.addEventListener('click', () =>{
    window.alert("Much Love For The Person Viewing This")
})

btn.addEventListener('click', () => {
    let name = input.value
    text.textContent = name;


    if(input > 0) {
    }
    
    else{
        home.style.display = "none" 
        container.style.display = "block"
    }
    
    if (input.value == 0) {
        container.style.display = "none"
        home.style.display = "block" 
        
    }
})