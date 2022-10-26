<script>
 function AddButtons() {
  var number = document.getElementById('numbers').value;
  while (number != 0 && number > 0) {  
    let btn = document.createElement("button"); 
    btn.innerHTML = '<button id="button" onclick="Winner()"><img src="https://img.icons8.com/dotty/80/000000/resume-button.png"/></button>';
    document.body.appendChild(btn);
    --number;
    }
}

 function Winner() {
  var total = document.getElementById('numbers').value;
  var randomNumber = Math.floor(Math.random() * total + 1);
  var WinnerButton = 1;
  if (randomNumber == WinnerButton) {
     alert("Winner! Congratulations!");
    } else {
      alert("Please try again!")
    }
  }

  function refreshPage() {
    window.location.reload();
    }
</script>
