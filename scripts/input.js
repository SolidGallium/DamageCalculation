// static one time inputs
// ------------------------------------------------------------------------------------------------

// class selection dropdown input
$('.classSelection').on('click', function(e) {
  e.preventDefault();
  $('#classButton').text($(this).text());
  changeClass($(this).text());
  renderBuffs();
  updateCrit();
  renderSkills();
  $('#baseCrit').text(classes[currentClass].baseCrit);
  renderBuild();
  renderClassSpecificStat();
});

// boss selection dropdown input
$('.bossSelection').on('click', function(e) {
  e.preventDefault();
  $('#bossButton').text($(this).text());
  changeBoss($(this).text());
  updateBossStats();
  updateCrit();
  renderSkills();
});

// bonus / total crit selection input for base stats
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

// healer selection input for healer dropdown
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

  if (priest == true || mystic == true) {
    magShredInput = $("body").find("#magShredInput");
  }
});

// tank selection input for tank dropdown
$('.tankSelection').on('click', function(e) {
  e.preventDefault();
  $('#tankButton').text($(this).text());
  changeTank($(this).text());
  renderDebuffs();
  physShredInput = $("body").find("#physShredInput");
});

// hit direction selection input
$('.directionSelection').on('click', function(e) {
  e.preventDefault();
  $('#directionButton').text($(this).text());
  changeDirection($(this).text());
  renderSkills();
});


// dinamically created one time inputs
// ------------------------------------------------------------------------------------------------

// build create button ("+")
$('body').on('click', '.addBuild', function(e) {
  e.preventDefault();

  tabArray.push(Object.assign({}, currentStats));

  if (tabArray.length >= 1) {
    $("#firstPlus").hide();
  }

  renderBuild();
});

// build remove button ("-"), one for each build
$('body').on('click', '.removeBuild0', function(e) {
  e.preventDefault();
  tabArray.splice(0, 1);
  if (tabArray.length <= 0) {
    $("#firstPlus").show();
  }

  renderBuild();
});

$('body').on('click', '.removeBuild1', function(e) {
  e.preventDefault();
  tabArray.splice(1, 1);
  if (tabArray.length <= 0) {
    $("#firstPlus").show();
  }
  renderBuild();
});

$('body').on('click', '.removeBuild2', function(e) {
  e.preventDefault();
  tabArray.splice(2, 1);
  if (tabArray.length <= 0) {
    $("#firstPlus").show();
  }
  renderBuild();
});

// build save button, one for each build
$('body').on('click', '.save0', function(e) {
  e.preventDefault();

  tabArray[0] = {
    crit:         (isNaN(parseInt($('#critInput0').val())) ? 0 : parseInt($('#critInput0').val())),
    power:        (isNaN(parseInt($('#powerInput0').val())) ? 0 : parseInt($('#powerInput0').val())),
    critPower:    (isNaN(parseFloat($('#critPowerInput0').val())) ? 0 : parseFloat($('#critPowerInput0').val())),
    physAmp:      (isNaN(parseInt($('#physAmpInput0').val())) ? 0 : parseInt($('#physAmpInput0').val())),
    magAmp:       (isNaN(parseInt($('#magAmpInput0').val())) ? 0 : parseInt($('#magAmpInput0').val())),
    physCP:       (isNaN(parseFloat($('#physCPInput0').val())) ? 0 : parseFloat($('#physCPInput0').val())),
    magCP:        (isNaN(parseFloat($('#magCPInput0').val())) ? 0 : parseFloat($('#magCPInput0').val())),
    physPiercing: (isNaN(parseInt($('#physPiercingInput0').val())) ? 0 : parseInt($('#physPiercingInput0').val())),
    magPiercing:  (isNaN(parseInt($('#magPiercingInput0').val())) ? 0 : parseInt($('#magPiercingInput0').val())),
    physIgnore:   (isNaN(parseInt($('#physIgnoreInput0').val())) ? 0 : parseInt($('#physIgnoreInput0').val())),
    magIgnore:    (isNaN(parseInt($('#magIgnoreInput0').val())) ? 0 : parseInt($('#magIgnoreInput0').val())),
    hp:           (isNaN(parseInt($('#hpInput0').val())) ? 0 : parseInt($('#hpInput0').val())),
    mp:           (isNaN(parseInt($('#mpInput0').val())) ? 0 : parseInt($('#mpInput0').val())),
    physRes:      (isNaN(parseInt($('#physResInput0').val())) ? 0 : parseInt($('#physResInput0').val())),
    damageDiff:   0,
    critType:     $('#critButton0').text() == "Total Crit" ? 1 : 0
  };

  critCalculation(bonusCrit);

  var baseDamage = damageCalculation(currentStats);

  var newBonusCrit = tabArray[0].crit;

  if (tabArray[0].critType == 1) {
    newBonusCrit -= classes[currentClass].baseCrit;
    if (newBonusCrit < 0) {
      newBonusCrit = 0;
    }
  }

  if (priest == true) {
    newBonusCrit += classes[currentClass].baseCrit * 0.36;
  }

  if (mystic == true) {
    newBonusCrit += classes[currentClass].baseCrit * 1.2;
  }

  critCalculation(newBonusCrit);

  updateClassSpecificStats(tabArray[0]);

  var newBuildDamage = damageCalculation(tabArray[0]);

  var diff = calculateDiff(baseDamage, newBuildDamage);

  var powerDiff = powerDamageDifference(currentStats.power, tabArray[0].power) * 100;

  var classSpecificDamageDiff = 0;

  if (classes[currentClass].name == "Berserker") {
    classSpecificDamageDiff = hpDamageDifference(currentStats.hp, tabArray[0].hp);
  } else if (classes[currentClass].name == "Sorcerer") {
    classSpecificDamageDiff = mpDamageDifference(currentStats.mp, tabArray[0].mp);
  } else if (classes[currentClass].name == "Warrior") {
    classSpecificDamageDiff = physCPDamageDifference(currentStats.physCP, tabArray[0].physCP);
  } else if (classes[currentClass].name == "Brawler") {
    classSpecificDamageDiff = physAmpReflectDamageDifference(currentStats.physAmp, tabArray[0].physAmp);
  }
  
  console.log("class specific damage diff: " + classSpecificDamageDiff);

  diff += powerDiff + classSpecificDamageDiff;

  tabArray[0].damageDiff = Math.trunc(diff * 100) / 100;

  renderBuild();
});

$('body').on('click', '.save1', function(e) {
  e.preventDefault();

  tabArray[1] = {
    crit:         (isNaN(parseInt($('#critInput1').val())) ? 0 : parseInt($('#critInput1').val())),
    power:        (isNaN(parseInt($('#powerInput1').val())) ? 0 : parseInt($('#powerInput1').val())),
    critPower:    (isNaN(parseFloat($('#critPowerInput1').val())) ? 0 : parseFloat($('#critPowerInput1').val())),
    physAmp:      (isNaN(parseInt($('#physAmpInput1').val())) ? 0 : parseInt($('#physAmpInput1').val())),
    magAmp:       (isNaN(parseInt($('#magAmpInput1').val())) ? 0 : parseInt($('#magAmpInput1').val())),
    physCP:       (isNaN(parseFloat($('#physCPInput1').val())) ? 0 : parseFloat($('#physCPInput1').val())),
    magCP:        (isNaN(parseFloat($('#magCPInput1').val())) ? 0 : parseFloat($('#magCPInput1').val())),
    physPiercing: (isNaN(parseInt($('#physPiercingInput1').val())) ? 0 : parseInt($('#physPiercingInput1').val())),
    magPiercing:  (isNaN(parseInt($('#magPiercingInput1').val())) ? 0 : parseInt($('#magPiercingInput1').val())),
    physIgnore:   (isNaN(parseInt($('#physIgnoreInput1').val())) ? 0 : parseInt($('#physIgnoreInput1').val())),
    magIgnore:    (isNaN(parseInt($('#magIgnoreInput1').val())) ? 0 : parseInt($('#magIgnoreInput1').val())),
    hp:           (isNaN(parseInt($('#hpInput1').val())) ? 0 : parseInt($('#hpInput1').val())),
    mp:           (isNaN(parseInt($('#mpInput1').val())) ? 0 : parseInt($('#mpInput1').val())),
    physRes:      (isNaN(parseInt($('#physResInput1').val())) ? 0 : parseInt($('#physResInput1').val())),
    damageDiff:   0,
    critType:     $('#critButton1').text() == "Total Crit" ? 1 : 0
  };

  critCalculation(bonusCrit);

  var baseDamage = damageCalculation(currentStats);

  var newBonusCrit = tabArray[1].crit;

  if (tabArray[1].critType == 1) {
    newBonusCrit -= classes[currentClass].baseCrit;
    if (newBonusCrit < 0) {
      newBonusCrit = 0;
    }
  }

  if (priest == true) {
    newBonusCrit += classes[currentClass].baseCrit * 0.36;
  }

  if (mystic == true) {
    newBonusCrit += classes[currentClass].baseCrit * 1.2;
  }

  critCalculation(newBonusCrit);

  updateClassSpecificStats(tabArray[1]);

  var newBuildDamage = damageCalculation(tabArray[1]);

  var diff = calculateDiff(baseDamage, newBuildDamage);

  var powerDiff = powerDamageDifference(currentStats.power, tabArray[1].power) * 100;

  var classSpecificDamageDiff = 0;

  if (classes[currentClass].name == "Berserker") {
    classSpecificDamageDiff = hpDamageDifference(currentStats.hp, tabArray[0].hp);
  } else if (classes[currentClass].name == "Sorcerer") {
    classSpecificDamageDiff = mpDamageDifference(currentStats.mp, tabArray[0].mp);
  } else if (classes[currentClass].name == "Warrior") {
    classSpecificDamageDiff = physCPDamageDifference(currentStats.physCP, tabArray[0].physCP);
  } else if (classes[currentClass].name == "Brawler") {
    classSpecificDamageDiff = physAmpReflectDamageDifference(currentStats.physAmp, tabArray[0].physAmp);
  }
  
  diff += powerDiff + classSpecificDamageDiff;

  tabArray[1].damageDiff = Math.trunc(diff * 100) / 100;

  renderBuild();
});

$('body').on('click', '.save2', function(e) {
  e.preventDefault();

  tabArray[2] = {
    crit:         (isNaN(parseInt($('#critInput2').val())) ? 0 : parseInt($('#critInput2').val())),
    power:        (isNaN(parseInt($('#powerInput2').val())) ? 0 : parseInt($('#powerInput2').val())),
    critPower:    (isNaN(parseFloat($('#critPowerInput2').val())) ? 0 : parseFloat($('#critPowerInput2').val())),
    physAmp:      (isNaN(parseInt($('#physAmpInput2').val())) ? 0 : parseInt($('#physAmpInput2').val())),
    magAmp:       (isNaN(parseInt($('#magAmpInput2').val())) ? 0 : parseInt($('#magAmpInput2').val())),
    physCP:       (isNaN(parseFloat($('#physCPInput2').val())) ? 0 : parseFloat($('#physCPInput2').val())),
    magCP:        (isNaN(parseFloat($('#magCPInput2').val())) ? 0 : parseFloat($('#magCPInput2').val())),
    physPiercing: (isNaN(parseInt($('#physPiercingInput2').val())) ? 0 : parseInt($('#physPiercingInput2').val())),
    magPiercing:  (isNaN(parseInt($('#magPiercingInput2').val())) ? 0 : parseInt($('#magPiercingInput2').val())),
    physIgnore:   (isNaN(parseInt($('#physIgnoreInput2').val())) ? 0 : parseInt($('#physIgnoreInput2').val())),
    magIgnore:    (isNaN(parseInt($('#magIgnoreInput2').val())) ? 0 : parseInt($('#magIgnoreInput2').val())),
    hp:           (isNaN(parseInt($('#hpInput2').val())) ? 0 : parseInt($('#hpInput2').val())),
    mp:           (isNaN(parseInt($('#mpInput2').val())) ? 0 : parseInt($('#mpInput2').val())),
    physRes:      (isNaN(parseInt($('#physResInput2').val())) ? 0 : parseInt($('#physResInput2').val())),
    damageDiff:   0,
    critType:     $('#critButton2').text() == "Total Crit" ? 1 : 0
  };

  critCalculation(bonusCrit);

  updateClassSpecificStats(tabArray[2]);

  var baseDamage = damageCalculation(currentStats);

  var newBonusCrit = tabArray[2].crit;

  if (tabArray[2].critType == 1) {
    newBonusCrit -= classes[currentClass].baseCrit;
    if (newBonusCrit < 0) {
      newBonusCrit = 0;
    }
  }

  if (priest == true) {
    newBonusCrit += classes[currentClass].baseCrit * 0.36;
  }

  if (mystic == true) {
    newBonusCrit += classes[currentClass].baseCrit * 1.2;
  }

  critCalculation(newBonusCrit);

  var newBuildDamage = damageCalculation(tabArray[2]);

  var diff = calculateDiff(baseDamage, newBuildDamage);

  var powerDiff = powerDamageDifference(currentStats.power, tabArray[2].power) * 100;

  var classSpecificDamageDiff = 0;

  if (classes[currentClass].name == "Berserker") {
    classSpecificDamageDiff = hpDamageDifference(currentStats.hp, tabArray[0].hp);
  } else if (classes[currentClass].name == "Sorcerer") {
    classSpecificDamageDiff = mpDamageDifference(currentStats.mp, tabArray[0].mp);
  } else if (classes[currentClass].name == "Warrior") {
    classSpecificDamageDiff = physCPDamageDifference(currentStats.physCP, tabArray[0].physCP);
  } else if (classes[currentClass].name == "Brawler") {
    classSpecificDamageDiff = physAmpReflectDamageDifference(currentStats.physAmp, tabArray[0].physAmp);
  }
  
  diff += powerDiff + classSpecificDamageDiff;

  tabArray[2].damageDiff = Math.trunc(diff * 100) / 100;

  renderBuild();
});

// crit type selection button (bonus / total), one for each build
$('body').on('click', '.critSelection0', function(e) {
  e.preventDefault();

  $('#critButton0').text($(this).text());

  if ($(this).text() == "Total Crit") {
    tabArray[0].critType = 1;
  } else if ($(this).text() == "Bonus Crit") {
    tabArray[0].critType = 0;
  }
});

$('body').on('click', '.critSelection1', function(e) {
  e.preventDefault();

  if ($(this).text() == "Total Crit") {
    tabArray[0].critType = 1;
  } else if ($(this).text() == "Bonus Crit") {
    tabArray[0].critType = 0;
  }

  $('#critButton1').text($(this).text());
});

$('body').on('click', '.critSelection2', function(e) {
  e.preventDefault();

  if ($(this).text() == "Total Crit") {
    tabArray[0].critType = 1;
  } else if ($(this).text() == "Bonus Crit") {
    tabArray[0].critType = 0;
  }

  $('#critButton2').text($(this).text());
});


// real time inputs (updates as soon as the user finishes the input)
// ------------------------------------------------------------------------------------------------

// time threshold to update the result
var doneTypingInterval = 100;     //time in ms, 5 second for example


var critInputTimer;
var critInput = $("body").find("#critInput");

// on keyup, start the countdown
critInput.on('keyup', function () {
  clearTimeout(critInputTimer);
  critInputTimer = setTimeout(saveCrit(), doneTypingInterval);
});

// on keydown, clear the countdown 
critInput.on('keydown', function () {
  clearTimeout(critInputTimer);
});

//user is "finished typing," do something
function saveCrit () {
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
  currentStats.physAmp = (isNaN(parseInt(physAmpInput.val())) ? 0 : parseInt(physAmpInput.val()));
  updateClassSpecificStats(currentStats);
  if (classes[currentClass].name == "Valkyrie") {
    updateCurrentStatsDisplay();
  }
}



var magAmpInputTimer;               //timer identifier
var magAmpInput = $("body").find("#magAmpInput");

// on keyup, start the countdown
magAmpInput.on('keyup', function () {
  clearTimeout(magAmpInputTimer);
  magAmpInputTimer = setTimeout(saveMagAmp(), doneTypingInterval);
});

// on keydown, clear the countdown 
magAmpInput.on('keydown', function () {
  clearTimeout(magAmpInputTimer);
});

//user is "finished typing," do something
function saveMagAmp () {
  currentStats.magAmp = (isNaN(parseInt(magAmpInput.val())) ? 0 : parseInt(magAmpInput.val()));
  updateClassSpecificStats(currentStats);
  
  if (classes[currentClass].name == "Ninja") {
    updateCurrentStatsDisplay();
  }
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
  currentStats.magPiercing = (isNaN(parseInt(magPiercingInput.val())) ? 0 : parseInt(magPiercingInput.val()));
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
  currentStats.physIgnore = (isNaN(parseInt(physIgnoreInput.val())) ? 0 : parseInt(physIgnoreInput.val()));
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



var physShredInputTimer;               //timer identifier
var physShredInput = $("body").find("#physShredInput");

// on keyup, start the countdown
$('body').on('keyup', '#physShredInput', function () {
  clearTimeout(physShredInputTimer);
  physShredInputTimer = setTimeout(savePhysShred(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#physResInput', function () {
  clearTimeout(physShredInputTimer);
});

//user is "finished typing," do something
function savePhysShred () {
  physShred = parseInt($('#physShredInput').val());
  console.log(physShred);
}



var magShredInputTimer;               //timer identifier
var magShredInput = $("body").find("#magShredInput");

// on keyup, start the countdown
$('body').on('keyup', '#magShredInput', function () {
  clearTimeout(magShredInputTimer);
  magShredInputTimer = setTimeout(saveMagShred(), doneTypingInterval);
});

// on keydown, clear the countdown 
$('body').on('keydown', '#magResInput', function () {
  clearTimeout(magShredInputTimer);
});

//user is "finished typing," do something
function saveMagShred () {
  magShred = parseInt($('#magShredInput').val());
  console.log(magShred);
}

