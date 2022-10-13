
function ask() {
    let randomNumber = Math.floor(Math.random() * 8);
    switch (randomNumber) {
    case 0:
      document.getElementById('answerText').innerHTML = '"It is certain"';
      break;
    case 1:
      document.getElementById('answerText').innerHTML = '"It is decidedly so"';
      break;
    case 2:
      document.getElementById('answerText').innerHTML = '"Reply hazy try again"';
      break;
    case 3:
      document.getElementById('answerText').innerHTML = '"Cannot predict now"';
      break;
    case 4:
      document.getElementById('answerText').innerHTML = '"Do not count on it"';
      break;
    case 5:
      document.getElementById('answerText').innerHTML = '"My sources say no"';
      break;
    case 6:
      document.getElementById('answerText').innerHTML = '"Outlook not so good"';
      break;
    case 7:
      document.getElementById('answerText').innerHTML = '"Signs point to yes"';
      break;
  }

}
