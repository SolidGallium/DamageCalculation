// render buffs through html elements
function renderBuffs() {
  // remove all previous buff elements
  $('.createdBuffs').remove();

  // color variables for background color
  var r;
  var g;
  var b;

  // variable for making the last element rounded
  var last;

  // priest edict of judgement
  if (priest == true) {
    $('#buffs').append(
      "<div class = 'row pt-2 pb-2 align-items-center createdBuffs' style = 'background: rgb(" + r + "," + g + "," + b +")'>" +
        "<div class = 'col-2'>" +
          "<img src = 'https://teralore.com/items/icon_skills/judgment_tex.png' class = 'img-fluid rounded' alt = 'missing image'>" +
        "</div>" +
        "<div class = 'col'>" + 
          "<h5 class = 'text-light m-0'>Edict of Judgement</h5>" +
        "</div>" +
        "<div class = 'col-5'>" +
          "<div class = 'input-group'>" +
            "<div class = 'input-group-prepend'>" +
              "<span class = 'input-group-text text-white bg-primary border-0 responsiveText'>Uptime: </span>" +
            "</div>" +
            "<input type = 'text' value = '33' class = 'form-control bg-dark border-0 text-light text-center responsiveText' aria-label = 'Default' aria-describedby = 'inputGroup-sizing-default'>" +
            "<div class = 'input-group-append'>" + 
              "<span class = 'input-group-text text-white bg-primary border-0 responsiveTextHide'>" +
                "%" +
              "</span>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>");
  }

  // all buffs rendering
  for (var i = 0; i < classes[currentClass].buffs.length; i++) {
    // alternates color between buffs
    if (i % 2 == 0) {
      r = 40;
      b = 40;
      g = 40;
    } else {
      r = 26;
      b = 26;
      g = 26;
    }

    // makes the last buff rounded
    if (i == classes[currentClass].buffs.length - 1) {
      last = "rounded-bottom";
    } else {
      last = "";
    }

    console.log(classes[currentClass].buffs[i].name);
    // buffs html elements creaction
    $('#buffs').append(
      "<div class = 'row pt-2 pb-2 align-items-center createdBuffs " + last + "' style = 'background: rgb(" + r + "," + g + "," + b +")'>" +
        "<div class = 'col-2'>" +
          "<img src = '" + classes[currentClass].buffs[i].skillImage + "' class = 'img-fluid rounded' alt = 'missing image'>" +
        "</div>" +
        "<div class = 'col'>" + 
          "<h5 class = 'text-light m-0'>" + classes[currentClass].buffs[i].name + "</h5>" +
        "</div>" +
        "<div class = 'col-5'>" +
          "<div class = 'input-group'>" +
            "<div class = 'input-group-prepend'>" +
              "<span class = 'input-group-text text-white bg-primary border-0 responsiveText'>Uptime: </span>" +
            "</div>" +
            "<input type = 'text' value = " + classes[currentClass].buffs[i].uptime * 100 + " class = 'form-control bg-dark border-0 text-light text-center responsiveText' aria-label = 'Default' aria-describedby = 'inputGroup-sizing-default'>" +
            "<div class = 'input-group-append'>" + 
              "<span class = 'input-group-text text-white bg-primary border-0 responsiveTextHide'>" +
                "%" +
              "</span>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>");
  }
}

// render debuffs through html elements
function renderDebuffs() {
  // remove all previous debuffs elements
  $(".createdDebuffs").remove();

  // color variables for background color
  var r;
  var g;
  var b;

  // variable for making the last element rounded
  var last;

  // all debuffs rendering
  for (var i = 0; i < tanks[currentTank].debuffSkills.length; i++) {

    // alternates color between debuffs
    if (i % 2 == 0) {
      r = 40;
      b = 40;
      g = 40;
    } else {
      r = 26;
      b = 26;
      g = 26;
    }

    // makes the last debuff rounded
    if (i == tanks[currentTank].debuffSkills.length - 1) {
      last = "rounded-bottom";
    } else {
      last = "";
    }

    // debuffs html elements creation
    $("#debuffs").append(
      "<div class = 'row  pt-2 pb-2 align-items-center createdDebuffs " + last + "' style = 'background: rgb(" + r + "," + g + "," + b +")'>" +
        "<div class = 'col-2'>" + 
          "<img src = " + tanks[currentTank].debuffSkills[i].image + " class = 'img-fluid rounded' alt = 'missing image'>" + 
        "</div>" + 
        "<div class = 'col'>" + 
          "<h5 class = 'text-light m-0'>" + tanks[currentTank].debuffSkills[i].name + "</h5>" +
        "</div>" +
        "<div class = 'col-5'>" + 
          "<div class = 'input-group'>" + 
            "<div class = 'input-group-prepend'>" + 
              "<span class = 'input-group-text text-white bg-primary border-0 responsiveText'>Uptime: </span>" +
            "</div>" + 
            "<input type = 'text' value = " + (tanks[currentTank].debuffSkills[i].uptime * 100) + " class = 'form-control bg-dark border-0 text-light text-center responsiveText' aria-label = 'Default' aria-describedby = 'inputGroup-sizing-default'>" +
              "<span class = 'input-group-text text-white bg-primary border-0 responsiveTextHide'>" +
                "%" +
              "</span>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>"
    ); 
  }
  
}

// render skills through html elements
function renderSkills() {
  // remove all previous skills elements
  $('.createdSkills').remove();
  
  // calculate crit chance of every skill
  critCalculation();

  // color variables for background color
  var r;
  var g;
  var b;

  // all skills rendering
  for (var i = 0; i < classes[currentClass].skills.length; i++) {
    // variable for setting the crit text color
    var textColor = "text-light";

    // alternates color between skills
    if (i % 2 == 1) {
      r = 40;
      g = 40;
      b = 40;
    } else {
      r = 26;
      g = 26;
      b = 26;
    }

    // set the crit display color according to the value
    if (critSkillDisplay[i].value >= 100) {
      textColor = "text-success";
    } else if (critSkillDisplay[i].value <= 50) {
      textColor = "text-danger";
    }

    // skills html elements creation
    $('#skills').append(
      "<div class = 'row pt-2 pb-2 align-items-center createdSkills' style = 'background: rgb(" + r + "," + g + "," + b + ")'>" +
        "<div class = 'col-1'>" +
          "<img src = " + classes[currentClass].skills[i].image + " class = 'img-fluid rounded' alt = 'missing image'>" +
        "</div>" +
        "<div class = 'col-2'>" + 
          "<h5 class = 'text-light m-0'>" + classes[currentClass].skills[i].name + "</h5>" +
        "</div>" +
        "<div class = 'col-1'>" +
          "<h5 class = 'text-light m-0'>" + Math.trunc((classes[currentClass].skills[i].damagePortion * 100)) + "%</h5>" +
        "</div>" +
        "<div class = 'col-1'>" +
          "<div class = 'row'>" +
            "<div class = 'col'>" +
              "<h5 class = '" + textColor +" m-0'>" + critSkillDisplay[i].value + "%</h5>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }
}

// update crit
function updateCrit() {
  // default crit value
  var crit = 0;

  // check for the input number to actually be a number
  if (!Number.isNaN(parseInt($("#critInput").val()))) {
    // crit takes the input value
    crit += parseInt($("#critInput").val());
  }
  
  // if the input value refers to the total crit
  if (totalCrit == true) {
    // set the total crit to the class base crit in case the input value is lower than the class base crit
    if (crit < classes[currentClass].baseCrit) {
      crit = classes[currentClass].baseCrit;
    }
  }

  // if the selected healer is priest
  if (priest == true) {
    // apply the blessing of shakan buff (36% crit buff)
    crit += classes[currentClass].baseCrit * 0.36;
  }

  // if the selected healer is mystic
  if (mystic == true) {
    // apply the aura buff (120% crit buff)
    crit += classes[currentClass].baseCrit * 1.2;
  }

  // pass the crit value to the calculation crit variable
  if (totalCrit == false) {
    bonusCrit = crit;
    crit += classes[currentClass].baseCrit;
  } else if (totalCrit == true) {
    bonusCrit = crit - classes[currentClass].baseCrit;
  }

  // update the buffed crit element value
  $('#buffedCrit').text(Math.trunc(crit));
}

// update the boss stats according to the selected boss
function updateBossStats() {
  $("#bossLevel").val(bosses[currentBoss].level);
  $("#critResist").val(bosses[currentBoss].critResist);
  $("#ampResist").val(bosses[currentBoss].ampResist);
}

// NOTE
// skills, debuffs and buffs rendering is done through literal code writing within this script
// this method is really powerful but not elegant at all
// will look for a better implementation later on