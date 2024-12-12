let userScore=0;
let compScore=0;
const user=document.querySelector("#user-score")
const comp=document.querySelector("#comp-score")

const choices=document.querySelectorAll(".choice");
const msg =document.querySelector(".msg")
const msgcon =document.querySelector(".msg-con")


const generate=()=>{
    const options=["rock","paper","scissors"];
    const index=Math.floor(Math.random()*3 ) //generate number in range of 1
    //Math.floor to remove decimal
    return options[index];
}

const drawgame=()=>{
    console.log("draw")
    msg.innerText="Draw!"
     msgcon.style.backgroundColor="  #347474 "
}
const showWinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        console.log("you win")
        userScore++;
        user.innerText=userScore;
        msg.innerText=`You win! Your ${userchoice} beats ${compchoice}`
        msgcon.style.backgroundColor="  #72b896 "
    }
    else{
        console.log("you lose")
        compScore++;
        comp.innerText=compScore
        msg.innerText=`You lose! ${compchoice} beats Your ${userchoice}`
        msgcon.style.backgroundColor=" #cd4439 "
    }
}

const playgame=(userchoice)=>{
    console.log("user choicr",userchoice)
    //generate computer choice
    const compchoice=generate()
    console.log("com choicr",compchoice)
    if(userchoice==compchoice){
        //draw game
        drawgame()
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            //scissor,paper
            userwin=compchoice=="paper"?false:true
        }
        else if(userchoice==="paper"){
            //rock,scissor
            userwin=compchoice==="rock"?true:false
        }
        else{
            //rock,paper
            userwin=compchoice==="rock"?false:true
        }
        showWinner(userwin ,userchoice,compchoice);
    }



}

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        // console.log("choice was clicked",userchoice);
        playgame(userchoice)
    })
})