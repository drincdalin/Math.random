//constante
const minNum = 1;
const maxNum = 100;
//ui
let start = document.getElementById("start");
let input = document.getElementById("inputAns");
let submit = document.getElementById("buton");
let remAt = document.getElementById("remAt");

//valori game true/attempts
let game = false;
let running = false;
let attempts = 10;
let answer;
let SECRETANS;

//aici in caz ca vrea sa faca stii chestii i guess
start.textContent = "Press to START";
remAt.textContent = ``;

//start game
start.onclick = function(){
    console.clear();
    start.textContent = "Press to RESTART";
    game=true;
    attempts = 10;
    answer= Math.floor(Math.random()* (maxNum - minNum + 1)) + minNum;
    input.textContent = `Please choose a number between ${minNum} - ${maxNum}`;
    remAt.textContent = `${attempts} attempts remaining!`
    SECRETANS= Math.floor(Math.random()* (maxNum - minNum + 1)) + minNum;
    console.log("The answer actually is: "+ SECRETANS);
}


//sumbit answer
submit.onclick = function(){
//start game verifier
if(game!=true){
        input.textContent = `Please press START`;
        remAt.textContent = ``;
    }
else{
    //logica de answer checking
        if(attempts>=0){
            attempts--;
            remAt.textContent = `${attempts} attempts remaining!`
            let guess = document.getElementById("indiciu").value;
            guess=Number(guess);
            
            if(isNaN(guess) || guess<minNum || guess>maxNum){
                input.textContent = `Please choose a valid number!`;
            }
            else if(guess==SECRETANS){
                input.textContent = 'Ti-ai luat teapa))';
            }
            else if(guess>answer){
                input.textContent = `TOO HIGH! Try using a smaller number.`;
            }
            else if(guess<answer){
                input.textContent = `TOO LOW! Try using a bigger number.`;
            }
            
            else{
                input.textContent = `CONGRATULATIONS! The answer was ${answer}!`;
                remAt.textContent = `It took you ${10-attempts} attempts to solve it!`;
                game = false;    
            }
            
            //aici nush asa m am gandit sa faca check in timp real pentru umm chestii stii
            if(attempts<=0){
            attempts =0;
            input.textContent = `Game OVER! You have ${attempts} attempts left! `
            remAt.textContent = `The answer was ${answer}.`;
            start.textContent = "Press to START";
            game = false;
            }
            
        }
        
    }
}



//mi ar placea sa stiu sa fac mai multe chestii da habar n am