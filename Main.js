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
var currentClass = 1;

var classes = [
  // archer
  {
    name: "Archer",
    baseCrit: 60,

    skills: [
      // radiant arrow
      {
        name: "Radiant Arrow",
        glyphCrit: 3,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // penetrating arrow
      {
        name: "Penetrating Arrow",
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // rain of arrows
      {
        name: "Rain Of Arrows",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.2,
        damagePortion: 0
      },
      // thunderbolt
      {
        name: "Thunderbolt",
        glyphCrit: 3,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // rapid fire
      {
        name: "Rapid Fire",
        glyphCrit: 1,
        innateSkillCrit: 3,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // wind walk
      {
        name: "Wind Walk",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.42,
        damagePortion: 0
      },
      // gust arrow
      {
        name: "Gust Arrow",
        glyphCrit: 10,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // crackshot
      {
        name: "Crackshot",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.05,
        damagePortion: 0
      }],

    buffs: [
      // rapid fire pummle stack
      {
        name: "Rapid Fire: Pummel Stack",
        addCrit: 0.28,
        glyphBaseCrit: 0,
        uptime: 0.4 // approximation
      }
    ]
  },
  // berserker
  {
    name: "Berserker",
    baseCrit: 58,

    skills: [
      // thunder strike
      {
        name: "Thunder Strike",
        glyphCrit: 2.2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0, // doesn't take passive into account
        damagePortion: 0
      },
      // cyclone
      {
        name: "Cyclone",
        glyphCrit: 2.2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // lethal strike
      {
        name: "Lethal Strike",
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.1,
        damagePortion: 0
      },
      // sinister
      {
        name: "Sinister",
        glyphCrit: 1,
        innateSkillCrit: 2.2,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // dexter
      {
        name: "Dexter",
        glyphCrit: 1,
        innateSkillCrit: 2.2,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // rampage
      {
        name: "Rampage",
        glyphCrit: 1,
        innateSkillCrit: 2.2,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // beast fury
      {
        name: "Beast Fury",
        glyphCrit: 1,
        innateSkillCrit: 2.2,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // vampiric blow
      {
        name: "Vampiric Blow",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // flatten
      {
        name: "Flatten",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // raze
      {
        name: "Raze",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // tackle
      {
        name: "Tackle",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1 + 1,
        addCrit: 0,
        damagePortion: 0
      }
    ],

    buffs: [
      // fiery rage
      {
        name: "Fiery Rage",
        addCrit: 0,
        glyphBaseCrit: 0.1,
        uptime: 1
      }
      // bloodshed (missing)
    ]
  }
];

var critSkillDisplay = [];

// classes:
// archer v
// berserker v
// brawler x
// gunner x
// lancer x
// mystic x
// ninja x
// priest x
// reaper x
// slayer x
// sorcerer x
// valkyrie x
// warrior x

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(backgroundR, backgroundG, backgroundB);
  button = createButton('calculate');
  button.position(20, 105);
  button.size(80, 20);
  button.mousePressed(critCalculation);
  input = createInput();
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
  classSelection.selected("Berserker");
  classSelection.changed(changeClass);
  classSelection.size(80, 20);
  textSize(20);
}

function draw() {
  resizeCanvas(windowWidth, windowHeight);
  background(backgroundR, backgroundG, backgroundB);
  fill(255);
  text("Crit:", 20, 40);
  for (var i = 0; i < critSkillDisplay.length; i++) {
    text(critSkillDisplay[i].name + ": ", 350, 65 + 30 * i);
    if (critSkillDisplay[i].value >= 100) {
      fill(0, 255, 0);
    } else if (critSkillDisplay[i].value <= 50) {
      fill(255, 71, 71);
    }
    text(critSkillDisplay[i].value + "%", 350 + textWidth(critSkillDisplay[i].name + ": "), 65 + 30 * i);
    fill(255);
  }
}

function critCalculation() {
  var direction = position;
  var classCF = classes[currentClass].baseCrit;
  var bonusCrit;

  if (priest == true) {
    bonusCrit = input.value() - classCF + classCF * 0.36;
  } else if (mystic == true) {
    bonusCrit = input.value() - classCF + classCF * 1.2;
  } else if (priest == false && mystic == false){
    bonusCrit = input.value() - classCF;
  }

  if (bonusCrit < classCF) {
    bonusCrit = classCF;
  }

  var critResist = 220;

  if (triplenem == true) {
    critResist -= 12;
  }

  if (kaiasjudgement == true) {
    critResist -= 25;
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

  for (var i = 0; i < classes[currentClass].skills.length; i++) {
    glyphBaseCrit = classes[currentClass].skills[i].glyphBaseCrit;
    addCrit = classes[currentClass].skills[i].addCrit;
    glyphCrit = classes[currentClass].skills[i].glyphCrit;
    innateSkillCrit = classes[currentClass].skills[i].innateSkillCrit;

    for (var j = 0; j < classes[currentClass].buffs.length; j++) {
      addCrit += (classes[currentClass].buffs[j].addCrit * classes[currentClass].buffs[j].uptime);
      glyphBaseCrit += (classes[currentClass].buffs[j].glyphBaseCrit * classes[currentClass].buffs[j].uptime);
    }

    //                       ((    D     * (  Cfo   *       B       +     Cf   )) / (5.625 *    CR     )) *     G     *       I         +    A    +     F
    critChance = Math.trunc((((direction * (classCF * glyphBaseCrit + bonusCrit)) / (5.625 * critResist)) * glyphCrit * innateSkillCrit + addCrit + levelDiff + castanic) * 100);
    critSkillDisplay.push({name: classes[currentClass].skills[i].name, value: critChance});
  }
}

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
  }
}
