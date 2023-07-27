let btnStart=document.querySelector('.start');
let btnStop =document.querySelector('.stop');
let btnReset=document.querySelector('.reset');

let btnSpin=document.querySelector('.spinner');

btnStart.addEventListener('click',()=>{
    btnStart.classList.add('start-active');
    btnStop.classList.remove('start-active');
   
    btnSpin.classList.add('spinner-active');   
     startTime=setInterval(()=>{
        ms++;
        if(ms==100){
            sec++;
            ms=0;
        }
        else if(sec==60){
            min++;
            sec=0;
        }
        else if(min==60){
            hrs++;
            min=0;
        }
       updateScreen()
    },10)  
})

btnStop.addEventListener('click',()=>{  
    clearInterval(startTime)
    btnStart.classList.remove('start-active');
    btnStop.classList.add('start-active');
    btnSpin.classList.remove('spinner-active');
})

btnReset.addEventListener('click',()=>{
    hrs=min=sec=ms=0;
    updateScreen()
    btnStart.classList.remove('start-active');
    btnStop.classList.remove('start-active');
})

let hrs=min=sec=ms=0,startTime;
function updateScreen(){
     Cahrs=hrs<10?'0'+hrs:hrs;
    Camin=min<10?'0'+min:min;
    Casec=sec<10?'0'+sec:sec;
    Cams=ms<10?'0'+ms:ms;

    document.querySelector('.hrs').innerText=Cahrs;
    document.querySelector('.min').innerText=Camin;
    document.querySelector('.sec').innerText=Casec;
    document.querySelector(' .ms').innerText=Cams;

}
