let input = document.querySelector(".noOfSeconds");
let startbtn = document.querySelector(".Start");
let message = document.querySelector(".display");
let countdown;

startbtn.addEventListener("click",()=>{
    let time = parseInt(input.value.trim());
    if(isNaN(time)){
        message.textContent = "enter a valid time";
        return;
    }


    message.textContent = time;

    startbtn.disabled=true;
    input.disabled=true;

    countdown=setInterval(() => {
        time--;
        if(time<=0){
            clearInterval(countdown);
            startbtn.disabled=false;
            input.disabled=false;
            message.textContent= "⏰ Time's up!";
            input.value="";
            input.focus();
        }
        else{
            message.textContent = time;
        }
    },1000);   
})
