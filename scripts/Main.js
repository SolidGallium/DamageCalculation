var critChance = 0;
var mystic = false;
var priest = false;
var castanicBool = false;
var kaiasjudgement = true;
var triplenem = true;
var currentClass = -1;
var critSkillDisplay = [];
var currentBoss = 8;
var totalCrit = true;
var currentTank = -1;
var bonusCrit;
var direction = 1.6;

// var currentStats;

var tabArray = [];

var currentStats = {
  critType: 1,
  crit: 0,
  power: 0,
  critPower: 0,
  physAmp: 0,
  magAmp: 0,
  physCP: 0,
  magCP: 0,
  physPiercing: 0,
  magPiercing: 0,
  physIgnore: 0,
  magIgnore: 0,
  hp: 0,
  mp: 0,
  physRes: 0
};

// ----------------------------------------------------------------------------------------------------------------------------------- //

function critCalculation() {
  var classCF = classes[currentClass].baseCrit;
  
  var tmpBonusCrit;

  console.log("bonus crit in crit calc " + bonusCrit);
  tmpBonusCrit = bonusCrit;

  var critResist = bosses[currentBoss].critResist;

  if (triplenem == true) {
    critResist -= 12;
  }

  if (kaiasjudgement == true) {
    critResist -= 25 * 0.8;
  }

  var addCrit;
  var glyphCrit;
  var innateSkillCrit;
  var levelDiff = 0;

  if (70 - bosses[currentBoss].level > 0) {
    levelDiff = (70 - bosses[currentBoss].level) * 0.015;
  } else if (70 - bosses[currentBoss].level < 0) {
    levelDiff = (70 - bosses[currentBoss].level) * 0.005;
  }

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
        // if (priest == true) {
        //   bonusCrit += 38 * 0.3; // 80k magic res priest with 30% edict
        // }
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

function changeClass(className) {
  switch (className) {
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
  console.log(currentClass + " - " + className);
}

function changeBoss(bossName) {
  switch (bossName) {
    case "Nightmare Kalligar (DAHM)":
      currentBoss = 0;
      break;
    case "Kalligar (DANM)":
      currentBoss = 1;
      break;
    case "Immortal Kelsaik (CSHM)":
      currentBoss = 2;
      break;
    case "Kelsaik (CSNM)":
      currentBoss = 3;
      break;
    case "Hagufna (FA)":
      currentBoss = 4;
      break;
    case "Ironfang Dixie (SOH)":
      currentBoss = 5;
      break;
    case "Bahaar":
      currentBoss = 6;
      break;
    case "Akalath Travan (AQ)":
      currentBoss = 7;
      break;
    case "Akalath Kashir (AQ)":
      currentBoss = 8;
      break;
    case "Hellgramite (GVH)":
      currentBoss = 9;
      break;
    case "Nightmare Gossamer Reagent (GVH)":
      currentBoss = 10;
      break;
    case "Nightmare Nedra (GLSH)":
      currentBoss = 11;
      break;
    case "Nightmare Ptakum (GLSH)":
      currentBoss = 12;
      break;
    case "Nightmare Kylos (GLSH)":
      currentBoss = 13;
      break;
    case "Nightmare Ghergof (AAH)":
      currentBoss = 14;
      break;
    case "Nightmare Kalioth (AAH)":
      currentBoss = 15;
      break;
    case "Nightmare Antaroth (AAH)":
      currentBoss = 16;
      break;
    case "Kalavese (RR)":
      currentBoss = 17;
      break;
    case "Thormentum (RR)":
      currentBoss = 18;
      break;
    case "Argog (RR)":
      currentBoss = 19;
      break;
    case "Ventarun (RK9)":
      currentBoss = 19;
      break;
    case "Hexapleon (RK9)":
      currentBoss = 19;
      break;
    case "RK-9 (RK9)":
      currentBoss = 19;
      break;
  }
  console.log(currentBoss + " - " + bossName);
}

function changeTank(tankName) {
  switch (tankName) {
    case "Lancer":
      currentTank = 0;
      break;

    case "Warrior":
      currentTank = 1;
      break;

    case "Brawler":
      currentTank = 2;
      break;

    case "Berserker":
      currentTank = 3;
      break;
  }
}

function changeDirection(directionName) {
  if (directionName == "Back") {
    direction = 1.6;
  } else if (directionName == "Side") {
    direction = 1.2;
  } else if (directionName == "Front") {
    direction = 1;
  }
}

// end :3
