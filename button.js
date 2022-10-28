function addButtons() {
  let number = document.getElementById('numbers').value;
    for (let i = 0; i < number; ++i) {  
      let btn = document.createElement("button"); 
      btn.innerHTML = '<button id="button" onclick="winner()"><img src="https://img.icons8.com/dotty/80/000000/resume-button.png"/></button>';
      document.body.appendChild(btn);
    }
}

function winner() {
  let total = document.getElementById('numbers').value;
  let randomNumber = Math.floor(Math.random() * total + 1);
  let winnerButton = 1;
    if (randomNumber == winnerButton) {
      alert("Winner! Congratulations!");
    } else {
      alert("Please try again!")
    }
}

function refreshPage() {
  window.location.reload();
}
