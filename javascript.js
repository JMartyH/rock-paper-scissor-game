function computerPlay(){
    const rock = "Rock";
    const paper = "Paper";
    const scissor = "Scissor";
    let generateNum = Math.floor(Math.random()*3);
    console.log(generateNum);

    if(generateNum == 0){
        return rock;
    }else if(generateNum == 1){
        return paper;
    }else if(generateNum == 2){
        return scissor;
    }
}