$('.classSelection').on('click', function() {
  $('#classButton').text($(this).text());
  changeClass($(this).text());
  renderBuffs();
  updateCrit();
  renderSkills();
  $('#baseCrit').text(classes[currentClass].baseCrit);
});

$('.bossSelection').on('click', function() {
  $('#bossButton').text($(this).text());
  changeBoss($(this).text());
  updateBossStats();
  updateCrit();
  renderSkills();
});

$('.critSelection').on('click', function() {
  $('#critButton').text($(this).text());
  if ($(this).text() == "Total Crit") {
    totalCrit = true;
  } else {
    totalCrit = false;
  }
  updateCrit();
  renderSkills();
});

$('.healerSelection').on('click', function() {
  $('#healerButton').text($(this).text());
  if ($(this).text() == "Priest") {
    priest = true;
    mystic = false;
  } else if ($(this).text() == "Mystic + Priest") {
    priest = true;
    mystic = true;
  } else if ($(this).text() == "Mystic") {
    mystic = true;
    priest = false;
  } else {
    mystic = false;
    priest = false;
  }
  renderBuffs();
  updateCrit();
  renderSkills();
});

$('.tankSelection').on('click', function() {
  $('#tankButton').text($(this).text());
  changeTank($(this).text());
  renderDebuffs();
});


var typingTimer;               //timer identifier
var doneTypingInterval = 100;  //time in ms, 5 second for example
var $input = $('#critInput');

// on keyup, start the countdown
$input.on('keyup', function () {
  clearTimeout(typingTimer);
  typingTimer = setTimeout(doneTyping, doneTypingInterval);
});

// on keydown, clear the countdown 
$input.on('keydown', function () {
  clearTimeout(typingTimer);
});

//user is "finished typing," do something
function doneTyping () {
  updateCrit();
  renderSkills();
}