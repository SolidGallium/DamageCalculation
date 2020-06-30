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

// ----------------------------------------------------------------------------------------------------------------------------------- //

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
        name: "Rain of Arrows",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.18,
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
        bonusCrit: 0,
        uptime: 0.4, // approximation
        skillsAffected: [
          "Radiant Arrow",
          "Penetrating Arrow",
          "Rain of Arrows",
          "Thunderbold",
          "Rapid Fire",
          "Wind Walk",
          "Gust Arrow",
          "Crackshot"
        ]
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
        glyphBaseCrit: 0,
        bonusCrit: 5,
        uptime: 1,
        skillsAffected: [
          "Thunder Strike",
          "Cyclone",
          "Lethal Strike",
          "Sinister",
          "Dexter",
          "Rampage",
          "Beast Fury",
          "Vampiric Blow",
          "Flatten",
          "Raze",
          "Tackle"
        ],
      }
      // bloodshed (missing)
    ]
  },
  // brawler
  {
    name: "Brawler",
    baseCrit: 50,
    skills: [
      // haymaker
      {
        name: "Haymaker",
        glyphCrit: 3,
        innateSkillCrit: 5,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // jackhammer
      {
        name: "Jackhammer",
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // piledriver
      {
        name: "Piledriver",
        glyphCrit: 3,
        innateSkillCrit: 1.3333, // approximation (4 hits, first 3 @ 1.0, last hit @ 2.0)
        glyphBaseCrit: 1,
        addCrit: 0.03,
        damagePortion: 0
      },
      // counter punch
      {
        name: "Counter Punch",
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // flying kick
      {
        name: "Flying Kick",
        glyphCrit: 1,
        innateSkillCrit: 2,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // one-inch punch
      {
        name: "One-Inch Punch",
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // rhythmic blows
      {
        name: "Rhythmic Blows",
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // roundhouse kick
      {
        name: "Roundhouse Kick",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      }
    ],
    buffs: [
      // growing fury
      {
        name: "Growing Fury",
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 50,
        uptime: 1,
        skillsAffected: [
          "Haymaker",
          "Jackhammer",
          "Piledriver",
          "Counter Punch",
          "Flying Kick",
          "One-Inch Punch",
          "Rhythmic Blows",
          "Roundhouse Kick"
        ]
      }
    ]
  },
  // gunner (to be better implemented)
  {
    name: "Gunner",
    baseCrit: 47,
    skills: [
      // bombardment
      {
        name: "Bombardment",
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // mana missiles
      {
        name: "Mana Missiles",
        glyphCrit: 3,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // remote trigger
      {
        name: "Remote Trigger",
        glyphCrit: 1,
        innateSkillCrit: 3,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
    ],
    buffs: []
  },
  // lancer
  {
    name: "Lancer",
    baseCrit: 50,
    skills: [
      // super leap
      {
        name: "Super Leap",
        glyphCrit: 1,
        innateSkillCrit: 3,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // wallop
      {
        name: "Wallop",
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // spring attack
      {
        name: "Spring Attack",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // shield counter
      {
        name: "Shield Counter",
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // onslaught
      {
        name: "Onslaught",
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // shield barrage
      {
        name: "Shield Barrage",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // lockdown blow
      {
        name: "Lockdown Blow",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.36,
        damagePortion: 0
      },
      // debilitate
      {
        name: "Debilitate",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // stand fast
      {
        name: "Stand Fast",
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // guardian barrier
      {
        name: "Guardian Barrier",
        glyphCrit: 1,
        innateSkillCrit: 10,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      }
    ],
    buffs: [
      // hold the line
      {
        name: "Hold The Line",
        addCrit: 0,
        glyphBaseCrit: 0,
        bonusCrit: 50,
        uptime: 1,
        skillsAffected: [
          "Super Leap",
          "Wallop",
          "Spring Attack",
          "Shield Counter",
          "Onslaught",
          "Shield Barrage",
          "Lockdown Blow",
          "Debilitate",
          "Stand Fast",
          "Guardian Barrier"
        ]
      }
    ]
  },
  // mystic
  {
    name: "Mystic",
    baseCrit: 35,
    skills: [
      // heals
      {
        name: "Heals",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // arunic release
      {
        name: "Arunic Release",
        glyphCrit: 1,
        innateSkillCrit: 2,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // boomerang pulse
      {
        name: "Boomerang Pulse",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // volley of curses
      {
        name: "Volley of Curses",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      }
    ],
    buffs: []
  },
  // ninja
  {
    name: "Ninja",
    baseCrit: 54,
    skills: [
      // boomerang shuriken
      {
        name: "Boomerang Shuriken",
        glyphCrit: 1,
        innateSkillCrit: 1.5,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // burning heart
      {
        name: "Burning Heart",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0.1,
        damagePortion: 0
      },
      // harmonious burning heart
      {
        name: "Harmonious Burning Heart",
        glyphCrit: 1,
        innateSkillCrit: 1.5,
        glyphBaseCrit: 1,
        addCrit: 0.1,
        damagePortion: 0
      },
      // skyfall
      {
        name: "Skyfall",
        glyphCrit: 2,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // leaves on the wind
      {
        name: "Leaves on the Wind",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // quick attack
      {
        name: "Quick Attack",
        glyphCrit: 1,
        innateSkillCrit: 1.5,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // harmonious quick attack
      {
        name: "Harmonious Quick Attack",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // harmonious fire avalanche
      {
        name: "Harmonious Fire Avalanche",
        glyphCrit: 3,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // double cut
      {
        name: "Double Cut",
        glyphCrit: 3,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      },
      // impact bomb
      {
        name: "Impact Bomb",
        glyphCrit: 1,
        innateSkillCrit: 1,
        glyphBaseCrit: 1,
        addCrit: 0,
        damagePortion: 0
      }
    ],
    buffs: [
      // attunement: burning spirit
      {
        name: "Attunement: Burning Spirit",
        addCrit: 0.1,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        uptime: 0.55,  // to double check
        skillsAffected: [
          "Burning Heart",
          "Harmonious Burning Heart"
        ]
      },
      // cyclic chi
      {
        name: "Cyclic Chi",
        addCrit: 0.3,
        glyphBaseCrit: 0,
        bonusCrit: 0,
        uptime: 0.9, // to double check
        skillsAffected: [
          "Boomerang Shuriken",
          "Burning Heart",
          "Harmonious Burning Heart",
          "Leaves on the Wind"
        ]
      }

    ]
  }
];

var critSkillDisplay = [];

// classes:
// archer v
// berserker v
// brawler v
// gunner x
// lancer v
// mystic v
// ninja v (double check bufftimes)
// priest x
// reaper x
// slayer x
// sorcerer x
// valkyrie x
// warrior x
// ---------------------------------
// warrior tank x
// brawler dps x
// zerk tank x

// ----------------------------------------------------------------------------------------------------------------------------------- //

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
  classSelection.option("Brawler");
  // classSelection.option("Gunner");
  classSelection.option("Lancer");
  classSelection.option("Mystic");
  classSelection.option("Ninja");
  classSelection.selected("Berserker");
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
  var bonusCrit;
  var tmpBonusCrit;

  if (priest == true) {
    bonusCrit = input.value() - classCF + classCF * 0.36;
  } else if (mystic == true) {
    bonusCrit = input.value() - classCF + classCF * 1.2;
  } else if (priest == false && mystic == false){
    bonusCrit = input.value() - classCF;
  }

  tmpBonusCrit = bonusCrit;

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

  // scroll through the skills
  for (var i = 0; i < classes[currentClass].skills.length; i++) {
    // calculation variables take the skill values
    glyphBaseCrit = classes[currentClass].skills[i].glyphBaseCrit;
    addCrit = classes[currentClass].skills[i].addCrit;
    glyphCrit = classes[currentClass].skills[i].glyphCrit;
    innateSkillCrit = classes[currentClass].skills[i].innateSkillCrit;

    // scroll through the buffs
    for (var j = 0; j < classes[currentClass].buffs.length; j++) {
      // check if the current skill being calculated is affected by the current buff being applied
      if (classes[currentClass].buffs[j].skillsAffected.includes(classes[currentClass].skills[i].name)) {
        addCrit += (classes[currentClass].buffs[j].addCrit * classes[currentClass].buffs[j].uptime);
        glyphBaseCrit += (classes[currentClass].buffs[j].glyphBaseCrit * classes[currentClass].buffs[j].uptime);
        bonusCrit += (classes[currentClass].buffs[j].bonusCrit * classes[currentClass].buffs[j].uptime);
      }
    }

    // crit chance calculation formula
    //                       ((    D     * (  Cfo   *       B       +     Cf   )) / (5.625 *    CR     )) *     G     *       I         +    A    +     F
    critChance = Math.trunc((((direction * (classCF * glyphBaseCrit + bonusCrit)) / (5.625 * critResist)) * glyphCrit * innateSkillCrit + addCrit + levelDiff + castanic) * 100);

    // crit calculation in case of healing skills
    if ((classes[currentClass].name == "Mystic" || classes[currentClass].name == "Priest") && i == 0){
      critChance = Math.trunc((bonusCrit + classes[currentClass].baseCrit) * 0.2);
    }

    critSkillDisplay.push({name: classes[currentClass].skills[i].name, value: critChance});
    bonusCrit = tmpBonusCrit;
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
  }
}

// end :3
