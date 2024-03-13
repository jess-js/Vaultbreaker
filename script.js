function start() { //i broke the boogle it hint terminal command line thing.
  generateNumber() // random first question for human verification
  document.querySelector('.keypadContainer').style.display = 'none'; // make keypad invisible at start
  document.getElementById('retinalScanner').style.display = 'none'; // make retinal scanner invisible at start
  document.getElementById('robottest').style.display = 'none'; // make human verification invisible at start
  document.getElementById('key').style.display = 'none'; // key on robot test is invisible at start
  document.getElementById('browser').style.display = 'none'; // make boogle browser invisible at start
  document.getElementById('vaultguardSignin').style.display = 'none'; // make VaultGuard sign in invisible at start
  document.getElementById('applications').style.display = 'none'; // make applications tab invisible at start
  document.getElementById('commandLineApp').style.display = 'none'; // make command line invisible at start
  
  //Signin menu at start (not forgot password)
  document.getElementById('goback').style.display = 'none';
  document.getElementById('submitPin').style.display = 'none';
  document.getElementById('pinInput').style.display = 'none';
  document.getElementById('pinText').style.display = 'none';
  
  //Hide application tags
  document.getElementById('clTag').style.display = 'none';
  
  //Lock safe (hide unlockable version, locked version visible by default.)
  document.getElementById('safeFront').style.display = 'none';
  document.getElementById('safeBack').style.display = 'none';
  
  // Hide prize
  document.getElementById('prize').style.display = 'none';
  
  signinMenu()
  setInterval(resetScroll, 500);
}

setTimeout(start, 1);

var z = 10;

function resetScroll() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var passInput = document.getElementById('passwordInput');
function selectPassword() {
  passInput.focus();
  passInput.select();
}

var setPassword = 'placeholder';
function checkPassword() {
  if (passInput.value == 'placeholder') {
    console.log('false');
    passInput.value = '';
  } else if (passInput.value == setPassword) {
    console.log('true')
    
    unlockSafe()
    setTimeout(openSafe, 10);
    
  } else {
    console.log('false');
    passInput.value = '';
  }
}

function safeLockedAnimation() {
  var safe = document.getElementById('safe')
  var safeLocked = document.getElementById("safeLocked");
  var popup = document.getElementById("popup");
  safeLocked.play(); 
  setTimeout('safe.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/1%20degree.png?v=1708366985907"', 250) // 1 degree tilt
  setTimeout('safe.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/2%20degree.png?v=1708366986390"', 450) // 2 degree tilt
  setTimeout('safe.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/3%20degree.png?v=1708366986864"', 650) // 3 degree tilt
  setTimeout('safe.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/2%20degree.png?v=1708366986390"', 850) // 2 degree tilt
  setTimeout('safe.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/1%20degree.png?v=1708366985907"', 1050) // 1 degree tilt
  setTimeout('safe.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/safe.png?v=1708366995316"', 1250) // no tilt
  setTimeout('popup.play()', 2300)
  setTimeout("document.querySelector('.keypadContainer').style.display = 'initial'", 2300)
  setTimeout(selectPassword, 2310)
  setTimeout(passwordPriority, 2310)
}

var checkCol;

function passwordHint() {
  checkCol = setInterval(collisionSensor, 500);
  var retinalAudio = document.getElementById("retinal");
  retinalAudio.play();
  document.getElementById('retinalScanner').style.display = 'initial';
  retinalPriority();
}

function closeScanner() {
  document.getElementById('retinalScanner').style.display = 'none';
  clearInterval(checkCol);
}

function passwordPriority() {
  console.log("Password Priority")
  z=z+1;
  document.getElementById('keypad').style.zIndex = z;
}

function retinalPriority() {
  console.log("Retinal Priority")
  z=z+1;
  document.getElementById('retinalScanner').style.zIndex = z;
}

function robotPriority() {
  console.log("Robot Priority")
  z=z+1;
  document.getElementById('robottest').style.zIndex = z;
}

function browserPriority() {
  console.log("Browser Priority")
  z=z+1;
  document.getElementById('browser').style.zIndex = z;
}

function signinPriority() {
  console.log("Sign in Priority")
  z=z+1;
  document.getElementById('vaultguardSignin').style.zIndex = z;
}

function commandLinePriority() {
  console.log("Command line Priority")
  z=z+1;
  document.getElementById('commandLineApp').style.zIndex = z;
}

function selectBash() {
  bash.focus();
  bash.select();
}

var sidebarClicked = 0;

function signinRequest() {
  if (sidebarClicked == 0) {
    document.getElementById('sidebar0').innerHTML = 'Please sign in.';
    setTimeout("document.getElementById('sidebar0').innerHTML = 'Password Manager'", 500);
  } else if (sidebarClicked == 1) {
    document.getElementById('sidebar1').innerHTML = 'Please sign in.';
    setTimeout("document.getElementById('sidebar1').innerHTML = 'Vault Monitor'", 500);
  } else if (sidebarClicked == 2) {
    document.getElementById('sidebar2').innerHTML = 'Please sign in.';
    setTimeout("document.getElementById('sidebar2').innerHTML = 'Security Check'", 500);
  } else if (sidebarClicked == 3) {
    document.getElementById('sidebar3').innerHTML = 'Please sign in.';
    setTimeout("document.getElementById('sidebar3').innerHTML = 'Materials'", 500);
  } else if (sidebarClicked == 4) {
    document.getElementById('sidebar4').innerHTML = 'Please sign in.';
    setTimeout("document.getElementById('sidebar4').innerHTML = 'Help'", 500);
  } else if (sidebarClicked == 5) {
    document.getElementById('vaultguardSignin').style.display = 'initial';
    signinPriority()
  }
}

function collisionSensor() {
  //Detect i Position
  let iel = document.getElementById("moveableI")
  var iRect = iel.getBoundingClientRect();
  var iX = iRect.left;
  var iY = iRect.top;
  
  //Detect scanner img position
  let retinalel = document.getElementById("scannerImg")
  var retinalRect = retinalel.getBoundingClientRect();
  var retinalX = retinalRect.left;
  var retinalY = retinalRect.top;
  
  // i
  // width: 15px
  // height: 55px
  //
  // scanner img
  // width: 250px
  // height: 200px
  
  // crossreference x axises
  if (iX + 15 > retinalX && iX + 15 < retinalX + 250) {
    //crossreference y axises
  if (iY + 55 > retinalY && iY + 55 < retinalY + 200) {
    //if both are true
    var successChime = document.getElementById("success");
    successChime.play();
    document.getElementById('robottest').style.display = 'initial'; // make verification visible IF i is in contact with retinal scanner
    robotPriority() // bring verification to front
    clearInterval(checkCol) // clear intermittent call of collision sensor ()
  } else {
  }
  } else {
  }
  
  
  
  //both will only output true if i is touching or overlapping retinal
    
}




// Verification

// A random question is chosen that has not been used before, the answer is then detected and crossreferenced to the correct answer to the question.

var questionText = document.getElementById('question');

var img1 = document.getElementById('option1');
var img2 = document.getElementById('option2');
var img3 = document.getElementById('option3');
var img4 = document.getElementById('option4');
var img5 = document.getElementById('option5');
var img6 = document.getElementById('option6');

var o1 = 0;
var o2 = 0;
var o3 = 0;
var o4 = 0;
var o5 = 0;
var o6 = 0;

var usedQuestions = []; //questions seen by the user
var answeredQuestions = []; //questions completed by the user

var round = 1;
var roundMarker = document.getElementById('questionRound');

function o1Clicked() {
  if (o1 == 0){
    document.getElementById('option1').style.border = "2px solid #2df4f7";
    o1 = 1;
  } else {
    document.getElementById('option1').style.border = "2px solid #3250a8";
    o1 = 0;
  }
  
}

function o2Clicked() {
  if (o2 == 0){
    document.getElementById('option2').style.border = "2px solid #2df4f7";
    o2 = 1;
  } else {
    document.getElementById('option2').style.border = "2px solid #3250a8";
    o2 = 0;
  }
}

function o3Clicked() {
  if (o3 == 0){
    document.getElementById('option3').style.border = "2px solid #2df4f7";
    o3 = 1;
  } else {
    document.getElementById('option3').style.border = "2px solid #3250a8";
    o3 = 0;
  }
}

function o4Clicked() {
  if (o4 == 0){
    document.getElementById('option4').style.border = "2px solid #2df4f7";
    o4 = 1;
  } else {
    document.getElementById('option4').style.border = "2px solid #3250a8";
    o4 = 0;
  }
}

function o5Clicked() {
  if (o5 == 0){
    document.getElementById('option5').style.border = "2px solid #2df4f7";
    o5 = 1;
  } else {
    document.getElementById('option5').style.border = "2px solid #3250a8";
    o5 = 0;
  }
}

function o6Clicked() {
  if (o6 == 0){
    document.getElementById('option6').style.border = "2px solid #2df4f7";
    o6 = 1;
  } else {
    document.getElementById('option6').style.border = "2px solid #3250a8";
    o6 = 0;
  }
}

var questionNumber = 0;
// 0 = Indian States
// 1 = Self Referencing Paradoxes
// 2 = Arabic
// 3 = Real colours
// 4 = Fake languages
// 5 = Who is fake smiling?

function generateNumber() {
  questionNumber = Math.floor((Math.random() * 6)); // random number 0 - 5 inclusive
  
  setTimeout("if (answeredQuestions.includes(questionNumber)){generateNumber()} else {newQuestion()}", 10);
  
}

function newQuestion() {
  
  
  
  if (usedQuestions.length > 5) {
    usedQuestions = []
  }
  
  
  if (questionNumber == 0 && usedQuestions.includes('0')){generateNumber()} else if (questionNumber == 0) {
    
    //Indian States.
    
    questionText.innerHTML = "Select all Indian States.";
    
    img1.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/amazonas.png?v=1708448446662" // Amazonas
    img2.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/tamil%20nadu.png?v=1708448453363" // Tamil Naudu YES
    img3.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/tver%20oblast.png?v=1708448454100" // Tver Oblast
    img4.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/france.png?v=1708448448332" // France
    img5.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/uttar%20pradesh.png?v=1708448454698" // Uttar Pradesh YES
    img6.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/djibouti.png?v=1708449013532" // Djibouti
    
    usedQuestions.push('0');
    
  } else if (questionNumber == 1 && usedQuestions.includes('1')){generateNumber()} else if (questionNumber == 1) {
    
    //Select all self referencing paradoxes.
    
    questionText.innerHTML = "Select all Self Referencing Paradoxes";
    
    img1.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/self%20referncing.png?v=1708455553719" // Time machine SELF REFERENCING
    img2.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/lie.png?v=1708455550239" // Loaf of bread
    img3.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/truth.png?v=1708455554195" // Blue sky
    img4.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/non%20self%20referencing%20paradox.png?v=1708455550800" // Non self referencing paradox
    img5.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/lie%202.png?v=1708455549778" // Population
    img6.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/self%20referencing%20paradox%201.png?v=1708455553110" // I am lying SELF REFERENCING
    
    usedQuestions.push('1');
    
  } else if (questionNumber == 2 && usedQuestions.includes('2')){generateNumber()} else if (questionNumber == 2) {
    
    //Arabic speaking countries.
    
    questionText.innerHTML = "Select all Arabic Speaking Countries.";
    
    img1.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/lebanon.png?v=1708457237573" // Lebanon YES
    img2.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/switzerland.png?v=1708457252176" // Switzerland NO
    img3.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/yemen.png?v=1708457252637" // Yemen YES
    img4.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/libya.png?v=1708457238232" // Libya YES
    img5.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/botswana.png?v=1708457236071" // Botswana NO
    img6.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/iran.png?v=1708457236968" // Iran NO
    
    usedQuestions.push('2');
    
  } else if (questionNumber == 3 && usedQuestions.includes('3')){generateNumber()} else if (questionNumber == 3) {
    
    //Real colours.
    
    questionText.innerHTML = "Select all Real Colour Names.";
    
    img1.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/burlywood.png?v=1708458224623" // Burlywood YES
    img2.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/zaffre.png?v=1708458230619" // Zaffre YES
    img3.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/vermillion.png?v=1708458230125" // Vermillion YES
    img4.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/limsa%20fake.png?v=1708458225750" // Limsa NO
    img5.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/celadon.png?v=1708458225209" // Celadon YES
    img6.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/margavane%20fake.png?v=1708458226409" // Margavane NO
    
    usedQuestions.push('3');
    
  } else if (questionNumber == 4 && usedQuestions.includes('4')){generateNumber()} else if (questionNumber == 4) {
    
    //Fake languages
    
    questionText.innerHTML = "Select the fake languages.";
    
    img1.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/english.png?v=1708459130752" // English
    img2.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/fake%201.png?v=1708459131218" // Fake
    img3.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/russian.png?v=1708459133313" // Russian
    img4.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/luxembourgish.png?v=1708459132870" // Luxembourgish
    img5.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/hindi.png?v=1708459132416" // Hindi
    img6.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/fix%20glitch%20pls.png?v=1709490781604" // Fake
    
    usedQuestions.push('4');
    
  } else if (questionNumber == 5 && usedQuestions.includes('5')){generateNumber()} else if (questionNumber == 5) {
    
    //Smiling
    
    questionText.innerHTML = "Select the people who are fake smiling.";
    
    img1.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/fake.png?v=1708460114535" // Fake
    img2.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/real%203.png?v=1708460115616" // Real
    img3.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/real%202.png?v=1708460115006" // Real
    img4.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/real.png?v=1708460117359" // Real
    img5.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/fake%202.png?v=1708460113991" // Fake
    img6.src = "https://cdn.glitch.global/6356b20f-3b77-4adc-abb9-a2d54082e3a9/real%204.png?v=1708460116819" // Real
    
    usedQuestions.push('5');
    
  }
  
}

function submitVerification(){
  
  if (questionNumber == 0) {
    
    //Select all Indian States.
    
    if (o1 == 0 && o2 == 1 && o3 == 0 && o4 == 0 && o5 == 1 && o6 == 0) {
    console.log("Success");
    answeredQuestions.push(0);
    round = round + 1;
    resetClicked()
      if (round == 2) {roundMarker.innerHTML = "2/3"} else if (round == 3) {roundMarker.innerHTML = "3/3"} else if (round == 4) {verificationComplete()}
      generateNumber()
      questionRightAnimation()
  } else {
    console.log("Failed")
    resetClicked()
    questionWrongAnimation()
  }
    
  } else if (questionNumber == 1) {
    
    //Select all self referencing paradoxes.
    
     if (o1 == 1 && o2 == 0 && o3 == 0 && o4 == 0 && o5 == 0 && o6 == 1) {
    console.log("Success")
       answeredQuestions.push(1);
       round = round + 1;
    resetClicked()
       if (round == 2) {roundMarker.innerHTML = "2/3"} else if (round == 3) {roundMarker.innerHTML = "3/3"} else if (round == 4) {verificationComplete()}
       generateNumber()
       questionRightAnimation()
  } else {
    console.log("Failed")
    resetClicked()
    questionWrongAnimation()
  }
    
  } else if (questionNumber == 2) {
    
    //Select all self referencing paradoxes.
    
     if (o1 == 1 && o2 == 0 && o3 == 1 && o4 == 1 && o5 == 0 && o6 == 0) {
    console.log("Success")
       answeredQuestions.push(2);
       round = round + 1;
    resetClicked()
       if (round == 2) {roundMarker.innerHTML = "2/3"} else if (round == 3) {roundMarker.innerHTML = "3/3"} else if (round == 4) {verificationComplete()}
       generateNumber()
       questionRightAnimation()
  } else {
    console.log("Failed")
    resetClicked()
    questionWrongAnimation()
  }
    
  } else if (questionNumber == 3) {
    
    //Select all Real Colour Names.
    
     if (o1 == 1 && o2 == 1 && o3 == 1 && o4 == 0 && o5 == 1 && o6 == 0) {
    console.log("Success")
       answeredQuestions.push(3);
       round = round + 1;
    resetClicked()
       if (round == 2) {roundMarker.innerHTML = "2/3"} else if (round == 3) {roundMarker.innerHTML = "3/3"} else if (round == 4) {verificationComplete()}
       generateNumber()
       questionRightAnimation()
  } else {
    console.log("Failed")
    resetClicked()
    questionWrongAnimation()
  }
    
  } else if (questionNumber == 4) {
    
    //Select all Real Colour Names.
    
     if (o1 == 0 && o2 == 1 && o3 == 0 && o4 == 0 && o5 == 0 && o6 == 1) {
    console.log("Success")
       answeredQuestions.push(4);
       round = round + 1;
    resetClicked()
       if (round == 2) {roundMarker.innerHTML = "2/3"} else if (round == 3) {roundMarker.innerHTML = "3/3"} else if (round == 4) {verificationComplete()}
       generateNumber()
       questionRightAnimation()
  } else {
    console.log("Failed")
    resetClicked()
    questionWrongAnimation()
  }
    
  } else if (questionNumber == 5) {
    
    //Select the people who are fake smiling.
    
     if (o1 == 1 && o2 == 0 && o3 == 0 && o4 == 0 && o5 == 1 && o6 == 0) {
    console.log("Success")
       answeredQuestions.push(5);
       round = round + 1;
    resetClicked()
       if (round == 2) {roundMarker.innerHTML = "2/3"} else if (round == 3) {roundMarker.innerHTML = "3/3"} else if (round == 4) {verificationComplete()}
       generateNumber()
       questionRightAnimation()
  } else {
    console.log("Failed")
    resetClicked()
    questionWrongAnimation()
  }
    
  }
  
  
}

function resetClicked() {
  o1 = 0;
  o2 = 0;
  o3 = 0;
  o4 = 0;
  o5 = 0;
  o6 = 0;
  document.getElementById('option1').style.border = "2px solid #3250a8";
  document.getElementById('option2').style.border = "2px solid #3250a8";
  document.getElementById('option3').style.border = "2px solid #3250a8";
  document.getElementById('option4').style.border = "2px solid #3250a8";
  document.getElementById('option5').style.border = "2px solid #3250a8";
  document.getElementById('option6').style.border = "2px solid #3250a8";
}


function questionWrongAnimation(){
  var incorrectSound = document.getElementById('incorrect');
  incorrectSound.play();
  document.getElementById('robottest').style.border = "5px solid #bf111a";
  document.getElementById('robottestheader').style.backgroundColor = "#bf111a";
  setTimeout('document.getElementById("robottest").style.border = "5px solid #00fff7";', 400);
  setTimeout('document.getElementById("robottestheader").style.backgroundColor = "#00fff7";', 400);
}

function questionRightAnimation(){
  var correctSound = document.getElementById('correct');
  correctSound.play();
  document.getElementById('robottest').style.border = "5px solid #07de00";
  document.getElementById('robottestheader').style.backgroundColor = "#07de00";
  setTimeout('document.getElementById("robottest").style.border = "5px solid #00fff7";', 400);
  setTimeout('document.getElementById("robottestheader").style.backgroundColor = "#00fff7";', 400);
}

function verificationComplete(){
  img1.style.display = 'none';
  img2.style.display = 'none';
  img3.style.display = 'none';
  img4.style.display = 'none';
  img5.style.display = 'none';
  img6.style.display = 'none';
  document.getElementById('checkrobot').style.display = 'none';
  document.getElementById('questionRound').style.display = 'none';
  document.getElementById('key').style.display = 'initial';
  document.getElementById('closeVerification').style.display = 'none';
  setTimeout('questionText.innerHTML = "Verification Complete!"', 100); //Timeout because the question automatically changes after every correct answer.
  document.getElementById('browser').style.display = 'initial';
  browserPriority()
}

function signinIncorrect(){
  console.log('test')
  var incorrectSound = document.getElementById('incorrect');
  incorrectSound.play();
  document.getElementById('vaultguardSignin').style.border = '4px solid #bf111a';
  document.getElementById('vaultguardSigninheader').style.backgroundColor = '#bf111a';
  setTimeout("document.getElementById('vaultguardSignin').style.border = '4px solid #346eeb'", 400);
  setTimeout("document.getElementById('vaultguardSigninheader').style.backgroundColor = '#346eeb'", 400);
  document.getElementById('usernameBox').value = '';
  document.getElementById('passwordBox').value = '';
}

function forgotPassword(){
  document.getElementById('usernameText').style.display = 'none';
  document.getElementById('usernameBox').style.display = 'none';
  document.getElementById('passwordText').style.display = 'none';
  document.getElementById('passwordBox').style.display = 'none';
  document.getElementById('signinSubmit').style.display = 'none';
  document.getElementById('forgotPasswordButton').style.display = 'none';
  document.getElementById('guardNote').innerHTML = 'Please enter your 3 digit security pin to reset your password.'
  document.getElementById('goback').style.display = 'initial';
  document.getElementById('submitPin').style.display = 'initial';
  document.getElementById('pinInput').style.display = 'initial';
  document.getElementById('pinText').style.display = 'initial';
}

function signinMenu(){
  document.getElementById('usernameText').style.display = 'none';
  document.getElementById('usernameBox').style.display = 'none';
  document.getElementById('passwordText').style.display = 'initial';
  document.getElementById('passwordBox').style.display = 'initial';
  document.getElementById('signinSubmit').style.display = 'initial';
  document.getElementById('forgotPasswordButton').style.display = 'initial';
  document.getElementById('goback').style.display = 'none';
  document.getElementById('submitPin').style.display = 'none';
  document.getElementById('submitNewPassword').style.display = 'none';
  document.getElementById('pinInput').style.display = 'none';
  document.getElementById('pinText').style.display = 'none';
  document.getElementById('guardNote').innerHTML = 'Please enter the password to your vault to sign in.'
}






// 3 Digit Security Pin
var pin = Math.floor(Math.random() * (999 - 100 + 1)) + 100; // generate random 3 digit number

function checkPin(){ //check if user input == 3 digit pin
  if (document.getElementById('pinInput').value == pin) {
    console.log('Pin Correct')
    
    resetPassword()
    
  } else {
    console.log('Pin Incorrect')
    signinIncorrect()
  }
}


function boogleHomePage(){
  
  if (noBack == 0) { //Go to boogle home page
    
    if (eliminateCommandLine == 1) { // make sure users cannot access the command line webpage after downloading it
      document.getElementById('commandLineWebPage').style.display = 'none';
    } else {
      
    }
    
  document.getElementById('vaultguardHeader').style.display = 'none';
  document.getElementById('passwordHint').style.display = 'none';
  document.getElementById('passwordHintBoogle').style.display = 'none';
  document.getElementById('vaultguardSidebar').style.display = 'none';
  document.getElementById('websiteName').value = 'www.boogle.com';
  document.getElementById('results').style.display = 'initial';
  document.getElementById('browser').style.backgroundColor = '#e0e0e0';
  document.getElementById('commandLineWebsiteHeader').style.display = 'none';
  document.getElementById('commandlinePromo').style.display = 'none';
  document.getElementById('commandlineLabel').style.display = 'none';
  document.getElementById('tcTitle').style.display = 'none';
  document.getElementById('termsandconditions').style.display = 'none';
  document.getElementById('tcContinue').style.display = 'none';
  document.getElementById('downloadingText').style.display = 'none';
  document.getElementById('downloadingGreen').style.display = 'none';
  document.getElementById('downloadingBar').style.display = 'none';  
  document.querySelector('.quiz').style.display = 'none';
    document.getElementById('hn').style.display = 'none';
    document.getElementById('hackernetHeader').style.display = 'none';
    
    
    
  } else {
    var incorrectSound = document.getElementById('incorrect');
    incorrectSound.play();
  }
  
  
}

loadVaultGuard()
function loadVaultGuard(){
  document.getElementById('results').style.display = 'none';
  document.getElementById('vaultguardHeader').style.display = 'initial';
  document.getElementById('passwordHint').style.display = 'initial';
  document.getElementById('passwordHintBoogle').style.display = 'initial';
  document.getElementById('vaultguardSidebar').style.display = 'initial';
  document.getElementById('websiteName').value = 'www.vaultguard.com/myVault/passwordHint.html';
  document.getElementById('browser').style.backgroundColor = 'grey';
}

function downloadCommandLine(){
  document.getElementById('results').style.display = 'none';
  document.getElementById('websiteName').value = 'www.commandline.com/download.html';
  document.getElementById('browser').style.backgroundColor = 'ghostwhite';
  document.getElementById('commandLineWebsiteHeader').style.display = 'initial';
  document.getElementById('commandlinePromo').style.display = 'initial';
  document.getElementById('commandlineLabel').style.display = 'initial';
}

function termsAndConditions(){
  document.getElementById('commandlinePromo').style.display = 'none';
  document.getElementById('commandlineLabel').style.display = 'none';
  document.getElementById('tcTitle').style.display = 'initial';
  document.getElementById('termsandconditions').style.display = 'initial';
  document.getElementById('tcContinue').style.display = 'initial';
  document.getElementById('websiteName').value = 'www.commandline.com/terms.html';
}

var noBack = 0;
function tacQuiz(){
  document.querySelector('.quiz').style.display = 'initial';
  document.getElementById('tcTitle').style.display = 'none';
  document.getElementById('termsandconditions').style.display = 'none';
  document.getElementById('tcContinue').style.display = 'none';
  noBack = 1;
}

boogleHomePage()
loadVaultGuard()


tcQuestionFunction()
var tcQuestion;

function tcQuestionFunction(){
  tcQuestion = Math.floor((Math.random() * 6)); // random number 0 - 2 inclusive
  
  if (tcQuestion == '0') {
    document.getElementById('tcQuestionTitle').innerHTML = 'Why are terms and conditions important?'
    document.getElementById('optionA').innerHTML = 'Because they are'
    document.getElementById('optionB').innerHTML = 'Because without them there are no terms and conditions' //
    document.getElementById('optionC').innerHTML = "They're not"
    document.getElementById('optionD').innerHTML = 'For legal reasons'
  } else if (tcQuestion == '1') {
    document.getElementById('tcQuestionTitle').innerHTML = "How many 'o's in 'long'?"
    document.getElementById('optionA').innerHTML = 'Looooong' //
    document.getElementById('optionB').innerHTML = 'Looong'
    document.getElementById('optionC').innerHTML = "Looooooooooong"
    document.getElementById('optionD').innerHTML = 'Looooooong'
  } else if (tcQuestion == '2') {
    document.getElementById('tcQuestionTitle').innerHTML = "Who are the protagonists?"
    document.getElementById('optionA').innerHTML = 'Jock & Bill'
    document.getElementById('optionB').innerHTML = 'Jack & Gill'
    document.getElementById('optionC').innerHTML = "John & Don"
    document.getElementById('optionD').innerHTML = 'Jack & Jill' //
  } else if (tcQuestion == '3') {
    document.getElementById('tcQuestionTitle').innerHTML = "What happens to Jack & Jill?"
    document.getElementById('optionA').innerHTML = 'Nothing'
    document.getElementById('optionB').innerHTML = 'They move to Dubai'
    document.getElementById('optionC').innerHTML = "They dance to music or something" //
    document.getElementById('optionD').innerHTML = '*Jack & Gill'
  } else if (tcQuestion == '4') {
    document.getElementById('tcQuestionTitle').innerHTML = "Closure..."
    document.getElementById('optionA').innerHTML = 'Is good'
    document.getElementById('optionB').innerHTML = 'For you and for me' //
    document.getElementById('optionC').innerHTML = "Said ____"
    document.getElementById('optionD').innerHTML = 'What?'
  } else if (tcQuestion == '5') {
    document.getElementById('tcQuestionTitle').innerHTML = "boogle, doogle..."
    document.getElementById('optionA').innerHTML = 'bugle'
    document.getElementById('optionB').innerHTML = 'doodle'
    document.getElementById('optionC').innerHTML = "poodle" //
    document.getElementById('optionD').innerHTML = 'Full Stop.'
  }
  
}

function optA() {
  if (tcQuestion == '1') {
    tcQuizRight()
  } else {
    tcQuizWrong()
  }
}

function optB() {
  if (tcQuestion == '0') {
    tcQuizRight()
  } else  if (tcQuestion == '4') {
    tcQuizRight()
  } else {
    tcQuizWrong()
  }
}

function optC() {
    if (tcQuestion == '3') {
    tcQuizRight()
  } else  if (tcQuestion == '5') {
    tcQuizRight()
  } else {
    tcQuizWrong()
  }
}

function optD() {
  if (tcQuestion == '2') {
    tcQuizRight()
  } else {
    tcQuizWrong()
  }
}

function tcQuizWrong() {
  var incorrectSound = document.getElementById('incorrect');
  incorrectSound.play();
  document.getElementById('browserheader').style.backgroundColor = 'red';
  document.getElementById('commandLineWebsiteHeader').style.backgroundColor = 'red';
  document.querySelector('.quiz').style.color = 'red';
  document.getElementById('browser').style.backgroundColor = '#fc0339'
  document.getElementById('websiteName').value = 'WRONGWRONGWRONGWRONGWRONGWRONG.com'
  setTimeout("location.reload()", 500);
}


var eliminateCommandLine = 0;
function tcQuizRight() {
  
  progressBar()
  
  var correctSound = document.getElementById('correct');
  correctSound.play();
  document.querySelector('.quiz').style.display = 'none';
  
  document.getElementById('downloadingText').style.display = 'initial';
  document.getElementById('downloadingBar').style.display = 'initial';
  document.getElementById('downloadingGreen').style.display = 'initial';
  
  var downloadingText = document.getElementById('downloadingText');
  
  setTimeout("downloadingText.innerHTML = 'Downloading.'", 500);
  setTimeout("downloadingText.innerHTML = 'Downloading..'", 1000);
  setTimeout("downloadingText.innerHTML = 'Downloading...'", 1500);
  setTimeout("downloadingText.innerHTML = 'Downloading.'", 2000);
  setTimeout("downloadingText.innerHTML = 'Downloading..'", 2500);
  setTimeout("downloadingText.innerHTML = 'Downloading...'", 3000);
  setTimeout("downloadingText.innerHTML = 'Downloading.'", 3500);
  setTimeout("downloadingText.innerHTML = 'Downloading..'", 4000);
  setTimeout("downloadingText.innerHTML = 'Downloading...'", 4500);
  setTimeout("downloadingText.innerHTML = 'Success'", 5000);
  setTimeout("noBack = 0;", 5000);
  setTimeout(addApplications, 5000);
  
  var correctSound = document.getElementById('download');
  
  setTimeout("download.play()", 5000);
  eliminateCommandLine = 1;
}

function increaseVar() {
  pbWidth++;
  document.getElementById('downloadingGreen').style.width = pbWidth + 'px';
}

var pbWidth = 0;
var increaseWidth;

function progressBar() {
  var progressBar = document.getElementById('downloadingGreen');
  increaseWidth = setInterval(increaseVar, 10);
  setTimeout("clearInterval(increaseWidth)", 5000);
}


function pastaPictures() {
  document.getElementById('results').style.display = 'none';
  document.getElementById('browser').style.backgroundColor = '#363f4d'
}



function addApplications() {
  document.getElementById('applications').style.display = 'initial';
}





function keyHoleSensor() {
  
  //console.log("running")
  //Detect i Position
  let keyel = document.getElementById("key");
  var keyRect = keyel.getBoundingClientRect();
  var keyX = keyRect.left;
  var keyY = keyRect.top;
  
  //Detect scanner img position
  let keyholeel = document.getElementById("keyhole")
  var keyholeRect = keyholeel.getBoundingClientRect();
  var keyholeX = keyholeRect.left;
  var keyholeY = keyholeRect.top;
  
  // i
  // width: 15px
  // height: 55px
  //
  // scanner img
  // width: 250px
  // height: 200px
  
  // crossreference x axises
  if (keyX + 50 > keyholeX && keyX < keyholeX + 100) {
    
    console.log("true")
    
    
    //crossreference y axises
    if (keyY + 100 > keyholeY && keyY < keyholeY + 150) {
      //if both are true
      console.log("touching")
      clearInterval(keyholeCol) // stop checking for collision
      document.getElementById('key').style.left = '500px';
      setTimeout("document.getElementById('key').style.display = 'none'", 1)
      var unlock = document.getElementById("unlock");
      unlock.play();
      document.getElementById('keyholeLabel').style.display = 'none'
      document.getElementById('keyhole').style.display = 'none'
      document.getElementById('commandLineApp').style.backgroundColor = 'black';
      document.getElementById('commandLineApp').style.cursor = 'text';
      unlocked++;
      
      if (unlocked = 1) { // stop glitching repeat open command line
        openCommandLine()
      }
      
      
    } else {
      console.log("Y false")
    }
  } else { console.log("X false")
  }
  
  
  
  //both will only output true if i is touching or overlapping retinal
    
}

var keyholeCol;
var unlocked = 0;
function openCommandLine() {
  
  if (unlocked == 0) {
    
    document.getElementById('commandLineApp').style.display = 'initial';
    commandLinePriority()
    document.getElementById('bash').style.display = 'none';
  keyholeCol = setInterval(keyHoleSensor, 500);
    
  } else if (unlocked == 1) {
    
    document.getElementById('commandLineApp').style.display = 'initial';
    commandLinePriority()
    document.getElementById('bash').style.display = 'initial';
    bash.focus();
    bash.select();
    generateShell()
    
  }
  
}

var shell = document.getElementById('shell');


var outputTxt;
var outputShell;


var rowTop = 20;
var bashDown = 60;
var shellTxt = 'user.shell';
var shellTop = 20;

var vaultguardConnected = 0;
var hintRequest = 0;

var row = 0;
var bash = document.getElementById('bash');
var bashRect;
var bashTop;
var app = document.getElementById('commandLineApp');
var appRect = app.getBoundingClientRect();
  var appTop = appRect.top;

function output() {
  
}

function enter() { // OH MY GOSH THIS THING FINALLY WORKS!!! YESSSSS
  
  
  
  

    
    
    
    
    
    var newRow = document.createElement('p');
    newRow.innerHTML = userInput;
    newRow.classList.add("rows");
    newRow.style.top = rowTop + 'px';
    rowTop = rowTop + 30;
    console.log(newRow);
    var commandlineApp = document.getElementById('commandLineApp');
    commandlineApp.appendChild(newRow);
  
  
    
  
  
  
    
    bash.style.top = bashDown + 'px';
    bashDown = bashDown + 30;

    var objDiv = document.getElementById("commandLineApp");
    objDiv.scrollTop = objDiv.scrollHeight;
  
    //bash.style.top = bashTop + 30 - appTop + 'px';
  //document.getElementById('shell' + (row + 1)).style.display = 'initial';
  //console.log(bashTop);
  //console.log(bashTop + 30);
  //row++;
  
    
    // declare variables OUTSIDE this function.
    
    //if (userInput == 'hello') {alert("hey!")} <-- Example!
    if (userInput == "connect www.vaultguard.com" && vaultguardConnected == 0) {
      
      vaultguardConnected = 1;
      
      shellTxt = 'System';
      userInput = 'Connected to www.vaultguard.com'
      enter()
      
      
      
    } else if (userInput == "connect www.vaultguard.com" && vaultguardConnected > 0) {
      shellTxt = 'System';
      userInput = 'Already connected!'
      enter()
    }
    
    if (userInput == "dir /myVault/signIn" && vaultguardConnected == 1) {
      
      vaultguardConnected = 2;
      shellTxt = 'vaultguard';
      userInput = '>> /signIn'
      enter()
      
    } else if (userInput == "dir /myVault/signIn" && vaultguardConnected == 0) {
      
      shellTxt = 'System';
      userInput = 'Directory not found in current drive.'
      enter()
      
    }
    
    if (userInput == "reveal.pin" && vaultguardConnected == 2) {
      
      shellTxt = 'vaultguard';
      userInput = 'Verification required. Please input the' //password hint to your vault.
      enter()
      
      shellTxt = '';
      userInput = 'password hint to your vault.'
      enter()
      
      hintRequest = 1;
      
    } else if (userInput == "reveal.pin" && vaultguardConnected == 1) {
      shellTxt = 'vaultguard';
      userInput = 'Directory not found.'
      enter()
    }
    
    if (userInput == "Boogle It." && hintRequest == 1) {
      
      
      
      
        shellTxt = 'vaultguard';
      userInput = 'Pin = ' + pin;
      enter()
      
      
      hintRequest = 0;
      
    
    } else if (userInput == "Boogle It." || userInput == "reveal.pin" || userInput == 'Pin = ' + pin || userInput == "password hint to your vault." || userInput == "Verification required. Please input the" || userInput == "") { // problem is here
    console.log("a")
    } else {
      
      
      
      console.log("FU...el")
      hintRequest = 0;
    }
    
    // easter eggs
    if (userInput == "Hello World!") {
      
      shellTxt = 'System';
      userInput = 'Hello User!'
      enter()
      
    }
  
  if (userInput == "dir /myVault/passwordManager" && vaultguardConnected == 1 || userInput == "dir /myVault/vaultMonitor" && vaultguardConnected == 1 || userInput == "dir /myVault/securityCheck" && vaultguardConnected == 1 || userInput == "dir /myVault/materials" && vaultguardConnected == 1 || userInput == "dir /myVault/help" && vaultguardConnected == 1) {
      
      shellTxt = 'vaultguard';
      userInput = 'Please sign in.'
      enter()
      
    } else if (userInput == "dir /myVault/passwordManager" && vaultguardConnected == 0 || userInput == "dir /myVault/vaultMonitor" && vaultguardConnected == 0 || userInput == "dir /myVault/securityCheck" && vaultguardConnected == 0 || userInput == "dir /myVault/materials" && vaultguardConnected == 0 || userInput == "dir /myVault/help" && vaultguardConnected == 0) {
      shellTxt = 'vaultguard';
      userInput = 'Directory not found in current drive.'
      enter()
    }
  
  if (userInput == "dir /myVault/passwordHint" && vaultguardConnected == 1) {
      
      shellTxt = 'vaultguard';
      userInput = 'Only available in browser.'
      enter()
      
    } else if (userInput == "dir /myVault/passwordHint" && vaultguardConnected == 0) {
      shellTxt = 'vaultguard';
      userInput = 'Directory not found in current drive.'
      enter()
    }
    

    
    
    generateShell()



  }
  
  
  



function generateShell() {
  var newShell = document.createElement('p');
    newShell.innerHTML = shellTxt;
    newShell.classList.add("shells");
    newShell.style.top = shellTop + 'px';
    shellTop = shellTop + 30;
    console.log(newShell);
    var commandlineApp = document.getElementById('commandLineApp');
    commandlineApp.appendChild(newShell);
    shellTxt = 'user.shell'
}


var userInput;



function resetPassword() {
    document.getElementById('signinSubmit').style.display = 'none';
    document.getElementById('forgotPasswordButton').style.display = 'none';
    document.getElementById('guardNote').innerHTML = 'Please enter details for a new password for your vault.';
    document.getElementById('goback').style.display = 'none';
    document.getElementById('submitPin').style.display = 'none';
    document.getElementById('pinInput').style.display = 'none';
    document.getElementById('pinText').style.display = 'none';
  document.getElementById('submitNewPassword').style.display = 'none';
  
  document.getElementById('usernameText').style.display = 'initial';
  document.getElementById('usernameText').innerHTML = 'New Password'
    document.getElementById('usernameBox').style.display = 'initial';
  document.getElementById('usernameBox').value = '';
  document.getElementById('passwordBox').value = '';
  document.getElementById('submitNewPassword').style.display = 'initial';
}

var topBox = document.getElementById('usernameBox');
var bottomBox = document.getElementById('passwordBox');
var newPass;
function addNewPass() {
  
  if (topBox.value == '') {
    console.log("invalid")
    document.getElementById('usernameText').innerHTML = '*required field';
    signinIncorrect()
    setTimeout("document.getElementById('usernameText').innerHTML = 'New Password'", 500);
  } else {
    console.log("yes")
    newPass = topBox.value;
    setPassword = newPass;
    
    var success1 = document.getElementById("passwordresetsuccess");
  success1.play(); 
    document.getElementById('vaultguardSignin').style.border = '4px solid #2a9647';
  document.getElementById('vaultguardSigninheader').style.backgroundColor = '#2a9647';
    document.getElementById('guardNote').innerHTML = 'Password has been reset. You can now access your vault with this new password.';
    document.getElementById('usernameBox').value = '';
    document.getElementById('passwordBox').value = '';
    document.getElementById('guardNote').style.color = '#2a9647';
    document.getElementById('guardNote').style.fontWeight = 'bold';
    document.getElementById('guardNote').style.fontSize = '20px';
    document.getElementById('submitNewPassword').style.display = 'none';
    document.getElementById('passwordBox').style.display = 'none';
    document.getElementById('usernameBox').style.display = 'none';
    document.getElementById('usernameText').style.display = 'none';
    document.getElementById('passwordText').style.display = 'none';
    
  
    
  }
  
 
}

function unlockSafe() {
  document.getElementById('safe').style.display = 'none';
  document.getElementById('safeFront').style.display = 'initial';
  document.getElementById('safeBack').style.display = 'initial';
}

var openAnimInterval;
var degree = 0;
var degreeFormatted = 'rotate(' + degree + 'deg)';
var safeFront = document.getElementById('safeFront');
var safeBack = document.getElementById('safeBack');
var opened = 0;
function openSafe() {
  
  if (opened == 0) {
    
    opened = 1;
    
    safeFront.style.cursor = 'default';
    safeBack.style.cursor = 'default';
    
    document.querySelector('.keypadContainer').style.display = 'none'; // make keypad invisible at start
  document.getElementById('retinalScanner').style.display = 'none'; // make retinal scanner invisible at start
  document.getElementById('robottest').style.display = 'none'; // make human verification invisible at start
  document.getElementById('key').style.display = 'none'; // key on robot test is invisible at start
  document.getElementById('browser').style.display = 'none'; // make boogle browser invisible at start
  document.getElementById('vaultguardSignin').style.display = 'none'; // make VaultGuard sign in invisible at start
  document.getElementById('applications').style.display = 'none'; // make applications tab invisible at start
  document.getElementById('commandLineApp').style.display = 'none'; // make command line invisible at start
  
  //Signin menu at start (not forgot password)
  document.getElementById('goback').style.display = 'none';
  document.getElementById('submitPin').style.display = 'none';
  document.getElementById('pinInput').style.display = 'none';
  document.getElementById('pinText').style.display = 'none';
  
  //Hide application tags
  document.getElementById('clTag').style.display = 'none';
  
  var distorted = document.getElementById("distorted");
  var opening = document.getElementById("opening");
  var creaking = document.getElementById("creaking");
  var fastTurn = document.getElementById("fastTurn");
  var drumroll = document.getElementById("drumroll");
  
  distorted.play();
  setTimeout("opening.play()", 1000);
  setTimeout("creaking.play()", 2500);
  setTimeout("fastTurn.play()", 7250);
  setTimeout("document.body.style.background = '#f0c002'", 7500);
  setTimeout("fadeOut = setInterval(fadeSafe, 5)", 10000);
  setTimeout("podiumUp = setInterval(risePodium, 11)", 11000);
  setTimeout("drumroll.play()", 11000);
  setTimeout("document.getElementById('prize').style.display = 'initial'", 15000);
  setTimeout(prizeAnimation, 15050);
  
  openAnimInterval = setInterval(openAnim, 20);
  safeBack.style.transform = scaleUp;
  } else {
    console.log("permission denied, you have been stopped.")
  }
  
  
}

var fadeOut;
var i = 1;

var podium = document.getElementById('podium');
var u = 760;
var podiumUp;

function risePodium() {
  podium.style.top = u + 'px';
  u--;
  
  if (u < 376) {
    clearInterval(podiumUp);
  }
  
}

function fadeSafe() {
  document.getElementById('safeFront').style.opacity = i;
  document.getElementById('safeBack').style.opacity = i;
  
  i = i - 0.01;
  if (i < 0) {
    clearInterval(fadeOut);
  }
  
}

function prizeAnimation() {
  document.getElementById('prize').style.transform = 'scale(8)' + 'rotate(-20deg)';
  setTimeout("document.getElementById('prize').style.transform = 'scale(3)'", 500);
}

function quickOpen(){
  unlockSafe();
  setTimeout(openSafe, 1);
}

var scaleUp = 'scale(10)';

function openAnim() {
  safeFront.style.transform = degreeFormatted;
  degree++;
  degreeFormatted = 'rotate(' + degree + 'deg) ' + scaleUp;
  
  if (degree > 359) {
    clearInterval(openAnimInterval);
  }
  
}



function hackerNetPin(){
  document.getElementById('results').style.display = 'none';
  document.getElementById('websiteName').value = 'www.hackernet.com/tutorials/hack-pin';
  document.getElementById('browser').style.backgroundColor = 'black';
  document.getElementById('hn').style.display = 'initial';
    document.getElementById('hackernetHeader').style.display = 'initial';
}



// detect enter key when in 'bash' (command line)
bash.addEventListener('keyup', (e) => {
  if(e.keyCode === 13) {
    
    // if enter is pressed while bash is selected.
    setTimeout(enter, 1);
    userInput = bash.value; // userInput is the input the user last submitted to the command line.
    bash.value = ''; // clear bash text box
    //console.log(e.target.value);
  }
})

// detect enter key when in password input (vault access)
var passBox = document.getElementById('passwordInput');
passBox.addEventListener('keyup', (e) => {
  if(e.keyCode === 13) {
    
    // if enter is pressed while bash is selected.
    checkPassword()
  }
})




// List of Draggable Divs
dragElement(document.getElementById("keypad"));
dragElement(document.getElementById("retinalScanner"));
dragElement(document.getElementById("moveableI"));
dragElement(document.getElementById("robottest"));
dragElement(document.getElementById("browser"));
dragElement(document.getElementById("vaultguardSignin"));
dragElement(document.getElementById("commandLineApp"));
dragElement(document.getElementById("key"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    /* if present, the header is where you move the DIV from:*/
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    /* otherwise, move the DIV from anywhere inside the DIV:*/
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}



