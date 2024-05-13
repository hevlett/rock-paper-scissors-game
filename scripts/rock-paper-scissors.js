let score = JSON.parse(localStorage.getItem('score')) ?? { win: 0, lose: 0, tie: 0 };

  // updateScoreElement();

  function playGame(playerMove) {

    let computerMove = pickComputerMove();
    let result = '';
    if(playerMove === 'Scissors') {

      if (computerMove === 'Rock') {
        result = 'You Lose!';
      } else if (computerMove === 'Paper') {
        result = 'You WIn!';
      } else if (computerMove === 'Scissors') {
        result = 'Tie!'; }  
      }

        else if (playerMove === 'Paper') {
        
          if (computerMove === 'Rock') {
          result = 'You WIn!'
        } else if (computerMove === 'Paper') {
          result = 'Tie!'
        } else if (computerMove === 'Scissors') {
          result = 'You Lose!'
        }
      }

       else if (playerMove === 'Rock') {

        if (computerMove === 'Rock') {
          result = 'Tie!'
        } else if (computerMove === 'Paper') {
          result = 'You Lose!'
        } else if (computerMove === 'Scissors') {
          result = 'You WIn!'
        }
       }

      if(result === 'You WIn!'){
        score.win += 1;
       } else if(result === 'You Lose!'){
        score.lose += 1;
       } else if(result === 'Tie!'){
        score.tie += 1;}

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement();
        document.querySelector('.js-result').innerHTML = result;
        document.querySelector('.js-move').innerHTML = `
        You Pick
        <img src="images/${playerMove}-emoji.png" alt="rock" class="move-icon"> 
        <img src="images/${computerMove}-emoji.png" alt="paper" class="move-icon"> 
        Computer Pick
      `;


//       alert(`You Picked ${playerMove} The Computer Picked ${computerMove} The Result is ${result}
// Wins: ${score.win}, Loses: ${score.lose}, Tie: ${score.tie}`);
  }
  
  function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.win}, Loses: ${score.lose}, Tie: ${score.tie}`;
  }

  function showResetButton() {
    const resetButton = document.querySelector('.reset-score-button');
    resetButton.classList.remove('hidden');
  }
  
  function pickComputerMove() {
  
    const randomNumber = Math.random()

    if(randomNumber >= 0 && randomNumber <1/3) {
      computerMove = 'Rock';
    } else if(randomNumber >= 1/3 && randomNumber <1/2) {
      computerMove = 'Paper';
    } else if(randomNumber >= 1/2 && randomNumber <1) {
      computerMove = 'Scissors';
    }
    return computerMove;
  }