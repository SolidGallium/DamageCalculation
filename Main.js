var critChance = 0;
var backgroundR = 74;
var backgroundG = 74;
var backgroundB = 74;
var checkboxMystic;
var checkboxPriest;
var checkboxCastanic;
var checkboxPositionBack;
var checkboxPositionSide;
var checkboxPositionFront;
var checkboxKaiasjudgement;
var checkboxTriplenem;
var mystic = true;
var priest = false;
var castanicBool = false;
var position = 1.6;
var kaiasjudgement = true;
var triplenem = true;
var currentClass = 12;
var critSkillDisplay = [];

// ----------------------------------------------------------------------------------------------------------------------------------- //

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundR, backgroundG, backgroundB);
  button = createButton('calculate');
  button.position(20, 105);
  button.size(80, 20);
  button.mousePressed(critCalculation);
  input = createInput(150);
  input.size(72, 20);
  input.position(20, 50);
  checkboxMystic = createCheckbox("Mystic", true);
  checkboxMystic.position(100 + 10, 50);
  checkboxMystic.changed(switchMystic);
  checkboxPriest = createCheckbox("Priest", false);
  checkboxPriest.position(170 + 10, 50);
  checkboxPriest.changed(switchPriest);
  checkboxCastanic = createCheckbox("Castanic", false);
  checkboxCastanic.position(100 + 10, 80);
  checkboxCastanic.changed(switchCastanic);
  checkboxPositionBack = createCheckbox("Back", true);
  checkboxPositionBack.position(100 + 10, 110);
  checkboxPositionBack.changed(switchPosition);
  checkboxPositionSide = createCheckbox("Side", false);
  checkboxPositionSide.position(170 + 10, 110);
  checkboxPositionSide.changed(switchPosition);
  checkboxPositionFront = createCheckbox("Front", false);
  checkboxPositionFront.position(240 + 10, 110);
  checkboxPositionFront.changed(switchPosition);
  checkboxKaiasjudgement = createCheckbox("Kaia's Judgement", true);
  checkboxKaiasjudgement.position(100 + 10, 140);
  checkboxKaiasjudgement.changed(switchKaiasjudgement);
  checkboxTriplenem = createCheckbox("Triple Nem / Volley", true);
  checkboxTriplenem.position(100 + 10, 170);
  checkboxTriplenem.changed(switchTriplenem);
  classSelection = createSelect();
  classSelection.position(20, 80);
  classSelection.option("Archer");
  classSelection.option("Berserker");
  classSelection.option("Brawler");
  // classSelection.option("Gunner");
  classSelection.option("Lancer");
  classSelection.option("Mystic");
  classSelection.option("Ninja");
  classSelection.option("Priest");
  classSelection.option("Reaper");
  classSelection.option("Slayer");
  classSelection.option("Sorcerer");
  classSelection.option("Valkyrie");
  classSelection.option("Warrior");
  classSelection.selected("Warrior");
  classSelection.changed(changeClass);
  classSelection.size(80, 20);
  textSize(20);
}

function draw() {
  var maxWidth = 0;
  resizeCanvas(windowWidth, windowHeight);
  background(backgroundR, backgroundG, backgroundB);
  fill(255);
  text("Crit:", 20, 40);

  for (var i = 0; i < critSkillDisplay.length; i++) {
    if (textWidth(critSkillDisplay[i].name + ": ") > maxWidth) {
      maxWidth = textWidth(critSkillDisplay[i].name + ": ");
    }
  }

  for (var i = 0; i < critSkillDisplay.length; i++) {
    text(critSkillDisplay[i].name + ": ", 350, 65 + 30 * i);
    if (critSkillDisplay[i].value >= 100) {
      fill(0, 255, 0);
    } else if (critSkillDisplay[i].value <= 50) {
      fill(255, 71, 71);
    }
    text(critSkillDisplay[i].value + "%", 350 + maxWidth, 65 + 30 * i);
    fill(255);
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function critCalculation() {
  var direction = position;
  var classCF = classes[currentClass].baseCrit;
  var inputValue = input.value();
  var bonusCrit;
  var tmpBonusCrit;

  if (inputValue < classCF) {
    inputValue = classCF;
  }

  if (priest == true) {
    bonusCrit = inputValue - classCF + classCF * 0.36;
  } else if (mystic == true) {
    bonusCrit = inputValue - classCF + classCF * 1.2;
  } else if (priest == false && mystic == false){
    bonusCrit = inputValue - classCF;
  }

  if (bonusCrit <= 0) {
    bonusCrit = 0;
  }

  tmpBonusCrit = bonusCrit;

  var critResist = 220;

  if (triplenem == true) {
    critResist -= 12;
  }

  if (kaiasjudgement == true) {
    critResist -= 25 * 0.8;
  }

  var addCrit;
  var glyphCrit;
  var innateSkillCrit;
  var levelDiff = -0.005;

  var castanic;

  if (castanicBool == true) {
    castanic = 0.01;
  } else {
    castanic = 0;
  }

  critSkillDisplay = [];

  // scroll through the skills
  for (var i = 0; i < classes[currentClass].skills.length; i++) {
    // check if the skill is a guaranteed crit
    if (classes[currentClass].skills[i].guaranteedCrit == true) {
      critChance = 100;
      critSkillDisplay.push({name: classes[currentClass].skills[i].name, value: critChance});
    } else {
      // calculation variables take the skill values
      glyphBaseCrit = classes[currentClass].skills[i].glyphBaseCrit;
      addCrit = classes[currentClass].skills[i].addCrit;
      glyphCrit = classes[currentClass].skills[i].glyphCrit;
      innateSkillCrit = classes[currentClass].skills[i].innateSkillCrit;

      // scroll through the buffs
      for (var j = 0; j < classes[currentClass].buffs.length; j++) {
        // check if the current skill being calculated is affected by the current buff being applied
        if (classes[currentClass].buffs[j].skillsAffected.includes(classes[currentClass].skills[i].name) || classes[currentClass].buffs[j].skillsAffected.includes("All")) {
          console.log("Skill: " + classes[currentClass].skills[i].name + " > Buff: " + classes[currentClass].buffs[j].name);
          glyphCrit += (classes[currentClass].buffs[j].glyphCrit * classes[currentClass].buffs[j].uptime);
          addCrit += (classes[currentClass].buffs[j].addCrit * classes[currentClass].buffs[j].uptime);
          glyphBaseCrit += (classes[currentClass].buffs[j].glyphBaseCrit * classes[currentClass].buffs[j].uptime);
          bonusCrit += (classes[currentClass].buffs[j].bonusCrit * classes[currentClass].buffs[j].uptime);
        }

        // priest edict crit buff, to be better implemented with edict times
        if (priest == true) {
          bonusCrit += 38 * 0.3; // 80k magic res priest with 30% edict
        }
      }

      // crit chance calculation formula
      //                       ((    D     * (  Cfo   *       B       +     Cf   )) / (5.625 *    CR     )) *     G     *       I         +    A    +     F
      critChance = Math.trunc((((direction * (classCF * glyphBaseCrit + bonusCrit)) / (5.625 * critResist)) * glyphCrit * innateSkillCrit + addCrit + levelDiff + castanic) * 100);

      // crit calculation in case of healing skills
      if ((classes[currentClass].name == "Mystic" || classes[currentClass].name == "Priest") && i == 0){
        critChance = Math.trunc((bonusCrit + classes[currentClass].baseCrit) * 0.2);
      }

      console.log("Total Crit: " + (bonusCrit + classes[currentClass].baseCrit));
      bonusCrit = tmpBonusCrit;
      critSkillDisplay.push({name: classes[currentClass].skills[i].name, value: critChance});
    }
  }
}

// ----------------------------------------------------------------------------------------------------------------------------------- //

function switchMystic() {
  if (mystic == false) {
    mystic = true;
    priest = false;
    checkboxPriest.checked(false);
  } else {
    mystic = false;
  }
}

function switchPriest() {
  if (priest == false) {
    priest = true;
    mystic = false;
    checkboxMystic.checked(false);
  } else {
    priest = false;
  }
}

function switchCastanic() {
  if (castanicBool == true) {
    castanicBool = false;
  } else if (castanicBool == false) {
    castanicBool = true;
  }
}

function switchPosition() {
  if (this === checkboxPositionBack) {
    position = 1.6;
    checkboxPositionSide.checked(false);
    checkboxPositionFront.checked(false);
    if (checkboxPositionBack.checked() == false) {
      checkboxPositionBack.checked(true);
    }
  } else if (this === checkboxPositionSide) {
    position = 1.2;
    checkboxPositionBack.checked(false);
    checkboxPositionFront.checked(false);
    if (checkboxPositionSide.checked() == false) {
      checkboxPositionSide.checked(true);
    }
  } else if (this === checkboxPositionFront) {
    position = 1.0;
    checkboxPositionBack.checked(false);
    checkboxPositionSide.checked(false);
    if (checkboxPositionFront.checked() == false) {
      checkboxPositionFront.checked(true);
    }
  }
}

function switchKaiasjudgement() {
  if (kaiasjudgement == false) {
    kaiasjudgement = true;
  } else if (kaiasjudgement == true) {
    kaiasjudgement = false;
  }
}

function switchTriplenem() {
  if (triplenem == false) {
    triplenem = true;
  } else if (triplenem == true) {
    triplenem = false;
  }
}

function changeClass() {
  switch (classSelection.value()) {
    case "Archer":
      currentClass = 0;
      break;
    case "Berserker":
      currentClass = 1;
      break;
    case "Brawler":
      currentClass = 2;
      break;
    case "Gunner":
      currentClass = 3;
      break;
    case "Lancer":
      currentClass = 4;
      break;
    case "Mystic":
      currentClass = 5;
      break;
    case "Ninja":
      currentClass = 6;
      break;
    case "Priest":
      currentClass = 7;
      break;
    case "Reaper":
      currentClass = 8;
      break;
    case "Slayer":
      currentClass = 9;
      break;
    case "Sorcerer":
      currentClass = 10;
      break;
    case "Valkyrie":
      currentClass = 11;
      break;
    case "Warrior":
      currentClass = 12;
      break;
  }
}

// end :3
