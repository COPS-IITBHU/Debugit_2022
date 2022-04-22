(function(){
    function buildQuiz(){
      
      const output = [];
  
     
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          
          const answers = [];
  
          
          for(letter in currentQuestion.answers){
  
            
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      
      const answerContainers = quizContainer.querySelectorAll('.answers');
      results.style.textAlign="center";
      results.style.marginBotton="20px";
      results.style.marginTop="20px";
  
      let numCorrect = 0;
  
     
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
     
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
       
        if(userAnswer === currentQuestion.correctAnswer){
          
          numCorrect++;
  
         
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        
        else{
          
          answerContainers[questionNumber].style.color = 'red';
        }
      });
      results.style.color="pink";
      results.style.fontSize="40px";
      results.style.fontWeight="700";
  
      resultsContainer.innerHTML = `You Scored ${numCorrect} out of ${myQuestions.length}`;
    }
  
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "How many continents are there in the world?",
        answers: {
          a: "5",
          b: "6",
          c: "7",
          d: "8"
        },
        correctAnswer: "c"
      },
      {
        question: "Which is the largest planet in our Solar system?",
        answers: {
          a: "Earth",
          b: "Mars",
          c: "Saturn",
          d: "Jupiter"
        },
        correctAnswer: "d"
      },
      {
        question: "What type of gas do plants release?",
        answers: {
          a: "CO2",
          b: "Oxygen",
          c: "Ethane",
          d: "Methane"
        },
        correctAnswer: "b"
      },
      {
        question: "What is the hottest continent on Earth?",
        answers: {
          a: "Asia",
          b: "Africa",
          c: "Europe",
          d: "South America"
        },
        correctAnswer: "b"
      },
      {
        question: "How many planets are there in our solar system?",
        answers: {
          a: "7",
          b: "8",
          c: "9",
          d: "5"
        },
        correctAnswer: "b"
      },
      {
        question: "Where is the Parliament of India located?",
        answers: {
          a: "New Delhi",
          b: "Varanasi",
          c: "Mumbai",
          d: "Kyiv"
        },
        correctAnswer: "a"
      },
      {
        question: "Which is the Best Club of IIT-BHU?",
        answers: {
          a: "COPS in summers",
          b: "COPS in winters",
          c: "Both"
        },
        correctAnswer: "c"
      },
      {
        question: "Pyramids of Giza are located in which Country?",
        answers: {
          a: "Egypt",
          b: "Seria",
          c: "Iran",
          d: "Turkey"
        },
        correctAnswer: "a"
      },
      {
        question: "How Many Bones are there in Human Body?",
        answers: {
          a: "207",
          b: "206",
          c: "306",
          d: "208"
        },
        correctAnswer: "b"
      },

      {
        question: "London is capital of which Country?",
        answers: {
          a: "United Kingdom",
          b: "Pakistan",
          c: "China",
          d: "Russia"
        },
        correctAnswer: "a"
      }
    ];
  
    
    buildQuiz();
    submitButton.addEventListener('click', showResults);
  })();