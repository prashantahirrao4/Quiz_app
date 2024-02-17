const StartBtn = document.querySelector('.start-btn');
const popupinfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const main = document.querySelector('.main');
const continueBtn = document.querySelector('.continue-btn');
const quizsection = document.querySelector('.quiz-section');
const quizBox = document.querySelector('.quiz-box');
const homeSection = document.querySelector('.home')

StartBtn.onclick = ()=>{
    popupinfo.classList.add('active');
    main.classList.add('active');
}
exitBtn.onclick = ()=>{
    popupinfo.classList.remove('active');
    main.classList.remove('active');
}
continueBtn.onclick = ()=>{
    console.log(quizsection)
    quizsection.classList.add('active');
    quizBox.classList.add('active');
    popupinfo.classList.remove('active');
    main.classList.remove('active');
    homeSection.classList.remove('active')
    homeSection.classList.add('notActive')


    showquestion(0);
    questioncounter(1);
    headerScore();
}
let questioncount=0;
let questionNumb=1;
let userScore = 0;

const nextBtn=document.querySelector('.next-btn');


nextBtn.onclick = ()=>{
    if(questioncount<questions.length -1){
        questioncount++;
        showquestion(questioncount);

        questionNumb++;
        questioncounter(questionNumb);
        nextBtn.classList.remove('active');
    }
    else{
        console.log('Question Completed');
    }
    }
    
    const optionlist= document.querySelector('.option-list');

function showquestion(index){
    const questionText= document.querySelector('.question-text');
    questionText.textcount='${questions[index].numb}.${questions[index].question}';

    let optionTag = `
    <div class="option"><span>${questions[index].options[0]}</span></div>
    <div class="option"><span>${questions[index].options[1]}</span></div>
    <div class="option"><span>${questions[index].options[2]}</span></div>
    <div class="option"><span>${questions[index].options[3]}</span></div>
  `;
optionlist.innerHTML=optionTag;
const option = document.querySelectorAll('.option');
for(let i=0;i<option.length;i++){
    option[i].setAttribute('onclick','optionSelected(this)');
}
}
function optionSelected(answer){
    let userAnswer = answer.textContent;
    let correctAnswer=questions.questioncount.answer;
    let allOption=optionlist.children.length;

    if(userAnswer == correctAnswer){
         
        answer.classList.add('correct');
        userScore+=1;
        headerScore();
    }
   else{
    answer.classList.add('incorrect');
    for(let i=0;i<allOption;i++){
        if(optionlist.children[i].textContent==correctAnswer){
            optionlist.children[i].setAttribute('class','option correct');
        }
       }
   }


   for(let i=0;i<allOption;i++){
    optionlist.children[i].classList.add('disabled');
   }
   nextBtn.classList.add('active');

}

function questioncounter(index){
    const questionTotal = document.querySelector('.question-total');
    questionTotal.textContent='${index} of ${questions.length} Question';
}

function headerScore(){
    const headerScoreText=document.querySelector('.header-score');
    headerScoreText.textContent='Score:$(userScore)/$(question.length)';
}