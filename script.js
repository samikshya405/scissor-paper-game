const rockbtn = document.querySelector('.rock')
const scissorbtn = document.querySelector('.scissor')
const paperbtn = document.querySelector('.paper')
const result = document.querySelector('.result')
const c= document.querySelector('.computer')
const u = document.querySelector('.user')
const restart = document.querySelector('.restart')


let userinput='';
let computer=''

rockbtn.addEventListener('click', ()=>{
    userinput="rock"
    console.log("user choose", userinput)
    computerInput()
    winner()
   
    
})
scissorbtn.addEventListener('click', ()=>{
    userinput="scissor"
    console.log("user choose", userinput)

    computerInput()
    winner()
 

    
})
paperbtn.addEventListener('click', ()=>{
    userinput="paper"
    console.log("user choose", userinput)

    computerInput()
    winner()
 

    
})

const computerchoice = ["rock", "paper", "scissor"]

// // console.log(Math.floor(Math.random()*3))
// const computerInput = Math.floor(Math.random()*3)
// // console.log(computerInput)

const computerInput=()=>{
    const computerchoose = Math.floor(Math.random()*3)
    // console.log(computerchoice[computerchoose])
    computer=computerchoice[computerchoose]
    console.log("computer choose",computer)


}
function winner(){
    if(!userinput & !computer){
        return
    }else{
        if((computer=="rock" & userinput=="scissor") || (computer==="scissor" & userinput=="paper") || (computer=="paper" & userinput=="rock") ){
           result.innerHTML ="COMPUTER WIN"
           c.innerHTML = "COMPUTER CHOICE : " + computer.toUpperCase()
           u.innerHTML="YOU CHOOSE : " + userinput.toUpperCase()
           
        }else if((computer==userinput)){
            result.innerHTML="IT'S A DRAW"
            c.innerHTML = "COMPUTER CHOICE : " + computer.toUpperCase()
           u.innerHTML="YOU CHOOSE : " + userinput.toUpperCase()
        }else{
            result.innerHTML="YOU WIN"
            c.innerHTML = "COMPUTER CHOICE : " + computer.toUpperCase()
           u.innerHTML="YOU CHOOSE : " + userinput.toUpperCase()
        }
    }
}
winner()

restart.addEventListener('click', ()=>{
    userinput=''
    computer=''
    result.innerHTML =""
    c.innerHTML = ''
    u.innerHTML=''
    
})


