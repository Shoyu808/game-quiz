//TODO: Need to create variables to target <div>
// TODO: Create a function to build our quiz with a timer and show results to quiz
// TODO: Build questions for quiz
// TODO: Setup a time interval for if someone clicks on the incorrect answer they'll lose time
// TODO: When the user answers all the questions or timer reach 0 they'll be presented with their high score
// TODO: Create a local storage to hold high scores

const start_btn = document.querySelector(".start_btn button");
const rules_box = document.querySelector(".rules_box");
const exit_btn = rules_box.querySelector(".buttons .quit");
const continue_btn = rules_box.querySelector(".buttons .begin");
const game_box = document.querySelector(".game_box");

// To make the rules box pop up
start_btn.onclick = ()=>{
    rules_box.classList.add("activeInfo");
}

// To hide rules-box if exit button is clicked
exit_btn.onclick = ()=>{
    rules_box.classList.remove("activeInfo");
}
// if user clicks continue to start quiz
continue_btn.onclick = ()=>{
    // hides the rules for quiz
    rules_box.classList.remove("activeInfo");
    // Shows quiz
    game_box.classList.add("activeGame");
}

let que_count = 0;

// function for question and answer
function showQuestions(){
    const quest_tex = document.querySelector(".quest_tex")
    let que_tag = '<span>'+ questions[0].questions +'</span>';
    quest_tex.innerHTML = que_tag;
}



