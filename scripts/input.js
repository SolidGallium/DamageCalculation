$('.classSelection').on('click', function(e) {
  e.preventDefault();
  $('#classButton').text($(this).text());
  changeClass($(this).text());
  renderBuffs();
  updateCrit();
  renderSkills();
  $('#baseCrit').text(classes[currentClass].baseCrit);
  console.log("current class: " + currentClass);
  renderBuild();
  renderClassSpecificStat();

  // console.log("total damage: " + damageCalculation(currentStats));
});

$('.bossSelection').on('click', function(e) {
  e.preventDefault();
  $('#bossButton').text($(this).text());
  changeBoss($(this).text());
  updateBossStats();
  updateCrit();
  renderSkills();
});

$('.critSelection').on('click', function(e) {
  e.preventDefault();
  $('#critButton').text($(this).text());
  if ($(this).text() == "Total Crit") {
    totalCrit = true;
    currentStats.critType = 1;
  } else {
    totalCrit = false;
    currentStats.critType = 0;
  }
  updateCrit();
  renderSkills();
});

$('.healerSelection').on('click', function(e) {
  e.preventDefault();
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
  renderDebuffs();
  updateCrit();
  renderSkills();
});

$('.tankSelection').on('click', function(e) {
  e.preventDefault();
  $('#tankButton').text($(this).text());
  changeTank($(this).text());
  renderDebuffs();
});

$('.directionSelection').on('click', function(e) {
  e.preventDefault();
  $('#directionButton').text($(this).text());
  changeDirection($(this).text());
  renderSkills();
});

$('body').on('click', '.addBuild', function(e) {
  e.preventDefault();

  tabArray.push(Object.assign({}, currentStats));

  console.log(tabArray);

  if (tabArray.length >= 1) {
    $("#firstPlus").hide();
  }

  renderBuild();
});

$('body').on('click', '.removeBuild0', function(e) {
  e.preventDefault();
  tabArray.splice(0, 1);
  if (tabArray.length <= 0) {
    $("#firstPlus").show();
  }

  console.log(tabArray);

  renderBuild();
});

$('body').on('click', '.removeBuild1', function(e) {
  e.preventDefault();
  tabArray.splice(1, 1);
  if (tabArray.length <= 0) {
    $("#firstPlus").show();
  }
  console.log(tabArray);
  renderBuild();
});

$('body').on('click', '.removeBuild2', function(e) {
  e.preventDefault();
  tabArray.splice(2, 1);
  if (tabArray.length <= 0) {
    $("#firstPlus").show();
  }
  console.log(tabArray);
  renderBuild();
});

$('body').on('click', '.save0', function(e) {
  e.preventDefault();

  tabArray[0] = {
    crit: parseInt($('#critInput0').val()),
    power: parseInt($('#powerInput0').val()),
    critPower: parseFloat($('#critPowerInput0').val()),
    physAmp: parseInt($('#physAmpInput0').val()),
    magAmp: parseInt($('#magAmpInput0').val()),
    physCP: parseFloat($('#physCPInput0').val()),
    magCP: parseFloat($('#magCPInput0').val()),
    physPiercing: parseInt($('#physPiercingInput0').val()),
    magPiercing: parseInt($('#magPiercingInput0').val()),
    physIgnore: parseInt($('#physIgnoreInput0').val()),
    magIgnore: parseInt($('#magIgnoreInput0').val()),
    hp: parseInt($('#hpInput0').val()),
    mp: parseInt($('#mpInput0').val()),
    physRes: parseInt($('#physResInput0').val()),
    damageDiff: 0,
    critType: 1
  };

  var baseDamage = damageCalculation(currentStats);
  var newBuildDamage = damageCalculation(tabArray[0]);

  var diff = calculateDiff(baseDamage, newBuildDamage);

  tabArray[0].damageDiff = Math.trunc(diff * 100) / 100;

  var powerDiff = powerDamageDifference(tabArray[0].power, currentStats.power) * 100;

  diff += powerDiff;

  console.log("damage diff: " + diff);

  renderBuild();
});

$('body').on('click', '.save1', function(e) {
  e.preventDefault();

  tabArray[1] = {
    crit: parseInt($('#critInput1').val()),
    power: parseInt($('#powerInput1').val()),
    critPower: parseFloat($('#critPowerInput1').val()),
    physAmp: parseInt($('#physAmpInput1').val()),
    magAmp: parseInt($('#magAmpInput1').val()),
    physCP: parseFloat($('#physCPInput1').val()),
    magCP: parseFloat($('#magCPInput1').val()),
    physPiercing: parseInt($('#physPiercingInput1').val()),
    magPiercing: parseInt($('#magPiercingInput1').val()),
    physIgnore: parseInt($('#physIgnoreInput1').val()),
    magIgnore: parseInt($('#magIgnoreInput1').val()),
    hp: parseInt($('#hpInput1').val()),
    mp: parseInt($('#mpInput1').val()),
    physRes: parseInt($('#physResInput1').val()),
    damageDiff: 0,
    critType: 1
  };

  var baseDamage = damageCalculation(currentStats);
  var newBuildDamage = damageCalculation(tabArray[1]);

  var diff = calculateDiff(baseDamage, newBuildDamage);

  tabArray[1].damageDiff = Math.trunc(diff * 100) / 100;

  var powerDiff = powerDamageDifference(tabArray[1].power, currentStats.power) * 100;

  diff += powerDiff;

  console.log("damage diff: " + diff);

  renderBuild();
});

$('body').on('click', '.save2', function(e) {
  e.preventDefault();

  tabArray[2] = {
    crit: parseInt($('#critInput2').val()),
    power: parseInt($('#powerInput2').val()),
    critPower: parseFloat($('#critPowerInput2').val()),
    physAmp: parseInt($('#physAmpInput2').val()),
    magAmp: parseInt($('#magAmpInput2').val()),
    physCP: parseFloat($('#physCPInput2').val()),
    magCP: parseFloat($('#magCPInput2').val()),
    physPiercing: parseInt($('#physPiercingInput2').val()),
    magPiercing: parseInt($('#magPiercingInput2').val()),
    physIgnore: parseInt($('#physIgnoreInput2').val()),
    magIgnore: parseInt($('#magIgnoreInput2').val()),
    hp: parseInt($('#hpInput2').val()),
    mp: parseInt($('#mpInput2').val()),
    physRes: parseInt($('#physResInput2').val()),
    damageDiff: 0,
    critType: 1
  };

  var baseDamage = damageCalculation(currentStats);
  var newBuildDamage = damageCalculation(tabArray[2]);

  var diff = calculateDiff(baseDamage, newBuildDamage);

  var powerDiff = powerDamageDifference(tabArray[2].power, currentStats.power) * 100;

  diff += powerDiff;

  tabArray[2].damageDiff = Math.trunc(diff * 100) / 100;

  console.log("damage diff: " + diff);

  renderBuild();
});

$('body').on('click', '.critSelection0', function(e) {
  e.preventDefault();

  $('#critButton0').text($(this).text());
});

$('body').on('click', '.critSelection1', function(e) {
  e.preventDefault();

  $('#critButton1').text($(this).text());
});

$('body').on('click', '.critSelection2', function(e) {
  e.preventDefault();

  $('#critButton2').text($(this).text());
});



var doneTypingInterval = 100;     //time in ms, 5 second for example


var critInputTimer;               //timer identifier
var critInput = $("body").find("#critInput");

// on keyup, start the countdown
critInput.on('keyup', function () {
  clearTimeout(critInputTimer);
  critInputTimer = setTimeout(doneTyping, doneTypingInterval);
});

// on keydown, clear the countdown 
critInput.on('keydown', function () {
  clearTimeout(critInputTimer);
});

//user is "finished typing," do something
function doneTyping () {
  currentStats.crit = parseInt(critInput.val());
  updateCrit();
  renderSkills();
}


var powerInputTimer;               //timer identifier
var powerInput = $("body").find("#powerInput");

// on keyup, start the countdown
powerInput.on('keyup', function () {
  clearTimeout(powerInputTimer);
  powerInputTimer = setTimeout(savePower(), doneTypingInterval);
});

// on keydown, clear the countdown 
powerInput.on('keydown', function () {
  clearTimeout(powerInputTimer);
});

//user is "finished typing," do something
function savePower () {
  currentStats.power = parseInt(powerInput.val());
}


var critPowerInputTimer;               //timer identifier
var critPowerInput = $("body").find("#critPowerInput");

// on keyup, start the countdown
critPowerInput.on('keyup', function () {
  clearTimeout(critPowerInputTimer);
  critPowerInputTimer = setTimeout(saveCritPower(), doneTypingInterval);
});

// on keydown, clear the countdown 
critPowerInput.on('keydown', function () {
  clearTimeout(critPowerInputTimer);
});

//user is "finished typing," do something
function saveCritPower () {
  currentStats.critPower = parseFloat(critPowerInput.val());
}


var physAmpInputTimer;               //timer identifier
var physAmpInput = $("body").find("#physAmpInput");

// on keyup, start the countdown
physAmpInput.on('keyup', function () {
  clearTimeout(physAmpInputTimer);
  physAmpInputTimer = setTimeout(savePhysAmp(), doneTypingInterval);
});

// on keydown, clear the countdown 
physAmpInput.on('keydown', function () {
  clearTimeout(physAmpInputTimer);
});

//user is "finished typing," do something
function savePhysAmp () {
  currentStats.physAmp = parseInt(physAmpInput.val());
}



var magAmpInputTimer;               //timer identifier
var magAmpInput = $("body").find("#magAmpInput");

// on keyup, start the countdown
magAmpInput.on('keyup', function () {
  clearTimeout(magAmpInputTimer);
  magAmpInputTimer = setTimeout(magAmpPower(), doneTypingInterval);
});

// on keydown, clear the countdown 
magAmpInput.on('keydown', function () {
  clearTimeout(magAmpInputTimer);
});

//user is "finished typing," do something
function magAmpPower () {
  currentStats.magAmp = parseInt(magAmpInput.val());
}



var physCPInputTimer;               //timer identifier
var physCPInput = $("body").find("#physCPInput");

// on keyup, start the countdown
physCPInput.on('keyup', function () {
  clearTimeout(physCPInputTimer);
  physCPInputTimer = setTimeout(savePhysCP(), doneTypingInterval);
});

// on keydown, clear the countdown 
physCPInput.on('keydown', function () {
  clearTimeout(physCPInputTimer);
});

//user is "finished typing," do something
function savePhysCP () {
  currentStats.physCP = parseFloat(physCPInput.val());
}



var magCPInputTimer;               //timer identifier
var magCPInput = $("body").find("#magCPInput");

// on keyup, start the countdown
magCPInput.on('keyup', function () {
  clearTimeout(magCPInputTimer);
  magCPInputTimer = setTimeout(saveMagCP(), doneTypingInterval);
});

// on keydown, clear the countdown 
magCPInput.on('keydown', function () {
  clearTimeout(magCPInputTimer);
});

//user is "finished typing," do something
function saveMagCP () {
  currentStats.magCP = parseFloat(magCPInput.val());
}



var physPiercingTimer;               //timer identifier
var physPiercingInput = $("body").find("#physPiercingInput");

// on keyup, start the countdown
physPiercingInput.on('keyup', function () {
  clearTimeout(physPiercingTimer);
  physPiercingTimer = setTimeout(savePhysPiercing(), doneTypingInterval);
});

// on keydown, clear the countdown 
physPiercingInput.on('keydown', function () {
  clearTimeout(physPiercingTimer);
});

//user is "finished typing," do something
function savePhysPiercing () {
  currentStats.physPiercing = parseInt(physPiercingInput.val());
}



var magPiercingInputTimer;               //timer identifier
var magPiercingInput = $("body").find("#magPiercingInput");

// on keyup, start the countdown
magPiercingInput.on('keyup', function () {
  clearTimeout(magPiercingInputTimer);
  magPiercingInputTimer = setTimeout(saveMagPiercing(), doneTypingInterval);
});

// on keydown, clear the countdown 
magPiercingInput.on('keydown', function () {
  clearTimeout(magPiercingInputTimer);
});

//user is "finished typing," do something
function saveMagPiercing () {
  currentStats.magPiercing = parseInt(magPiercingInput.val());
}



var physIgnoreInputTimer;               //timer identifier
var physIgnoreInput = $("body").find("#physIgnoreInput");

// on keyup, start the countdown
physIgnoreInput.on('keyup', function () {
  clearTimeout(physIgnoreInputTimer);
  physIgnoreInputTimer = setTimeout(savePhysIgnore(), doneTypingInterval);
});

// on keydown, clear the countdown 
physIgnoreInput.on('keydown', function () {
  clearTimeout(physIgnoreInputTimer);
});

//user is "finished typing," do something
function savePhysIgnore () {
  currentStats.physIgnore = parseInt(physIgnoreInput.val());
}



var magIgnoreInputTimer;               //timer identifier
var magIgnoreInput = $("body").find("#magIgnoreInput");

// on keyup, start the countdown
magIgnoreInput.on('keyup', function () {
  clearTimeout(magIgnoreInputTimer);
  magIgnoreInputTimer = setTimeout(saveMagIgnore(), doneTypingInterval);
});

// on keydown, clear the countdown 
magIgnoreInput.on('keydown', function () {
  clearTimeout(magIgnoreInputTimer);
});

//user is "finished typing," do something
function saveMagIgnore () {
  currentStats.magIgnore = parseInt(magIgnoreInput.val());
}



var hpInputTimer;               //timer identifier

// on keyup, start the countdown
$('body').on('keyup', '#hpInput', function () {
  clearTimeout(hpInputTimer);
  hpInputTimer = setTimeout(saveHp(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#hpInput', function () {
  clearTimeout(hpInputTimer);
});

//user is "finished typing," do something
function saveHp () {
  currentStats.hp = parseInt($('#hpInput').val());
}



var mpInputTimer;               //timer identifier

// on keyup, start the countdown
$('body').on('keyup', '#mpInput', function () {
  clearTimeout(mpInputTimer);
  mpInputTimer = setTimeout(saveMp(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#mpInput', function () {
  clearTimeout(mpInputTimer);
});

//user is "finished typing," do something
function saveMp () {
  currentStats.mp = parseInt($('#mpInput').val());
}



var physResInputTimer;               //timer identifier
var physResInput = $("body").find("#physResInput");

// on keyup, start the countdown
$('body').on('keyup', '#physResInput', function () {
  clearTimeout(physResInputTimer);
  physResInputTimer = setTimeout(savePhysRes(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#physResInput', function () {
  clearTimeout(physResInputTimer);
});

//user is "finished typing," do something
function savePhysRes () {
  currentStats.physRes = parseInt($('#physResInput').val());
}

