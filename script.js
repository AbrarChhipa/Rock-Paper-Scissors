let userscore=0;
let compscore=0;
let result=document.querySelector(".result");
let choices=document.querySelectorAll(".choice")
let users=document.querySelector("#userScore")
let comps=document.querySelector("#compScore")
choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        let userchoice=choice.getAttribute("id");
        game(userchoice);
    })
})

let genrendnum=()=>{
    let opt=['rock','paper','scissors']
    let rand=Math.floor(Math.random()*3);
    return opt[rand];
}
let num= genrendnum();
let game=(userchoice)=>{
    console.log("user choice is:",userchoice);
    
    console.log("computer choice is:",num);
    if(userchoice===num){
        result.innerText="draw";
        result.style.backgroundColor="rgb(24, 20, 51)";
    }
    else if(userchoice==='rock'){
        let us=true;
        if(num==='paper'){
            result.innerText="You lose";
            result.style.backgroundColor="red";
            compscore++;
            comps.innerText=compscore;
        }
        else{
            result.innerText="You win";
            result.style.backgroundColor="green";
            userscore++;
            users.innerText=userscore;
        }
    }
    else if(userchoice==='paper'){
        
        if(num==='rock'){
            result.innerText="You win";
            result.style.backgroundColor="green";
            userscore++;
            users.innerText=userscore;
        }
        else{
            result.innerText="You lose";
            result.style.backgroundColor="red";
            compscore++;
            comps.innerText=compscore;
        }

    }
    else{
        if(num==='rock'){
            result.innerText="You lose";
            result.style.backgroundColor="red";
            compscore++;
            comps.innerText=compscore;
        }
        else{
            result.innerText="You win";
            result.style.backgroundColor="green";
            userscore++;
            users.innerText=userscore;
        }
    }
}