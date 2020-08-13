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

var magShred = 14000;
var physShred = 14000;

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
  physRes: 0,
  damageDiff: 0
};

// ----------------------------------------------------------------------------------------------------------------------------------- //

function critCalculation(calcCrit) {
  var classCF = classes[currentClass].baseCrit;
  
  var tmpBonusCrit;

  // console.log("bonus crit in crit calc " + bonusCrit);
  tmpBonusCrit = calcCrit;

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
          // console.log("Skill: " + classes[currentClass].skills[i].name + " > Buff: " + classes[currentClass].buffs[j].name);
          glyphCrit += (classes[currentClass].buffs[j].glyphCrit * classes[currentClass].buffs[j].uptime);
          addCrit += (classes[currentClass].buffs[j].addCrit * classes[currentClass].buffs[j].uptime);
          glyphBaseCrit += (classes[currentClass].buffs[j].glyphBaseCrit * classes[currentClass].buffs[j].uptime);
          calcCrit += (classes[currentClass].buffs[j].bonusCrit * classes[currentClass].buffs[j].uptime);
        }

        // priest edict crit buff, to be better implemented with edict times
        // if (priest == true) {
        //   bonusCrit += 38 * 0.3; // 80k magic res priest with 30% edict
        // }
      }

      // crit chance calculation formula
      //                       ((    D     * (  Cfo   *       B       +     Cf   )) / (5.625 *    CR     )) *     G     *       I         +    A    +     F
      critChance = Math.trunc((((direction * (classCF * glyphBaseCrit + calcCrit)) / (5.625 * critResist)) * glyphCrit * innateSkillCrit + addCrit + levelDiff + castanic) * 100);

      // crit calculation in case of healing skills
      if ((classes[currentClass].name == "Mystic" || classes[currentClass].name == "Priest") && i == 0){
        critChance = Math.trunc((calcCrit + classes[currentClass].baseCrit) * 0.2);
      }

      calcCrit = tmpBonusCrit;
      critSkillDisplay.push({name: classes[currentClass].skills[i].name, value: critChance});
      classes[currentClass].skills[i].critChance = critChance;
    }
  }
}

function damageCalculation(build) {
  var damageCrit;
  var damageNonCrit;
  var skillDamage;
  var tmpBuild = Object.assign({}, build);
  
  tmpBuild = addBuffs(tmpBuild);

  var totalDamage = 0;

  for (var i = 0; i < classes[currentClass].skills.length; i++) {
    damageCrit = skillDamageCalculation(classes[currentClass].skills[i], build, true) * (Math.min(classes[currentClass].skills[i].critChance, 100));
    damageNonCrit = skillDamageCalculation(classes[currentClass].skills[i], build, false) * (100 - Math.min(classes[currentClass].skills[i].critChance, 100));
    skillDamage = (damageCrit + damageNonCrit) * (classes[currentClass].skills[i].damagePortion / 100);
    totalDamage += skillDamage;
  }

  return(totalDamage);
}

function skillDamageCalculation(skill, build, isACrit) {
  var totalMod;
  var physMod;
  var magMod;
  var specialDef;
  var physPiercing;
  var magPiercing;
  var newPhysShred = physShred + (2000 * 0.8);
  var newMagShred = magShred + (2000 * 0.8);

  var normalCritPower = build.critPower * 0.9;
  var physCritPower = build.physCP;
  var magCritPower = build.magCP;

  if (isACrit == false) {
    normalCritPower = 1;
    physCritPower = 1;
    magCritPower = 1;
  }

  if (skill.damageType == "Physical") {
    physPiercing = build.physPiercing / (build.physPiercing + 10000);
    specialDef = (bosses[currentBoss].ampResist - newPhysShred - build.physIgnore) * (1 - physPiercing);
  } else if (skill.damageType == "Magical") {
    magPiercing = build.magPiercing / (build.magPiercing + 10000);
    specialDef = (bosses[currentBoss].ampResist - newMagShred - build.magIgnore) * (1 - magPiercing);
  }
  
  physMod = (build.physAmp * skill.physFactor) / (100000 + specialDef);

  magMod = (build.magAmp * skill.magFactor) / (100000 + specialDef);

  totalMod = normalCritPower + physMod * physCritPower + magMod * magCritPower;

  return(totalMod);
}

function powerDamageDifference(power1, power2) {
  return((power2 - power1) / (power1 + 100));
}

function hpDamageDifference(hp1, hp2) {
  return(((hp2 - hp1) * 0.0906) / 2000);
}

function mpDamageDifference(mp1, mp2) {
  return(((mp2 - mp1) * 0.09) / 100);
}

function physCPDamageDifference(cp1, cp2) {
  var baseBuildDamageScythe = cp1 * 0.058 * classes[currentClass].skills[1].damagePortion;
  var baseBuildDamageAScythe = cp1 * 0.074 * classes[currentClass].skills[0].damagePortion;

  var newBuildDamageScythe = cp2 * 0.058 * classes[currentClass].skills[1].damagePortion;
  var newBuildDamageAScythe = cp2 * 0.074 * classes[currentClass].skills[0].damagePortion;

  return((newBuildDamageScythe + newBuildDamageAScythe) - (baseBuildDamageScythe + baseBuildDamageAScythe));
}

function physAmpReflectDamageDifference(physAmp1, physAmp2) {
  var reflectDPS = 0.125;

  return((calculateReflectDamage(physAmp2) - calculateReflectDamage(physAmp1)) * reflectDPS);
}

function calculateReflectDamage(physAmp) {
  var physAmpDamageIncrease = Math.trunc(physAmp / 10000) / 100;

  var totalReflectDamage = 0;

  for (var i = 0; i < classes[currentClass].skills.length; i++) {
    totalReflectDamage += classes[currentClass].skills[i].reflectDamage * physAmpDamageIncrease;
  }

  return(totalReflectDamage);
}

function addBuffs(build) {
  for (var i = 0; i < classes[currentClass].buffs.length; i++) {
    if (classes[currentClass].buffs[i].name == "Ragnarok" || classes[currentClass].buffs[i].name == "Godsfall") {
      build.power += (classes[currentClass].buffs[i].power + Math.trunc(build.magAmp / 10000)) * classes[currentClass].buffs[i].uptime;
    } else if (classes[currentClass].buffs[i].name == "Growing Fury") {
      build.power += (classes[currentClass].buffs[i].power + Math.trunc(build.physAmp / 20000)) * classes[currentClass].buffs[i].uptime;
    } else {
      build.power += classes[currentClass].buffs[i].power * classes[currentClass].buffs[i].uptime;
    }
  }

  return(build);
}

function updateClassSpecificStats(build) {
  if (classes[currentClass].name == "Ninja") {
    if (build.magPiercing < (build.magAmp / 100)) {
      build.magPiercing = Math.trunc(build.magAmp / 100);
    }
  }

  if (classes[currentClass].name == "Valkyrie") {
    if (build.magAmp < (build.physAmp / 2)) {
      build.magAmp = Math.trunc(build.physAmp / 2);
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

function calculateDiff(num1, num2) {
  return(100 - ((100 * num1) / num2));
}

// end :3
