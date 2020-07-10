function renderBuffs() {
  $('.createdBuffs').remove();

  var r;
  var g;
  var b;

  var last;

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

  for (var i = 0; i < classes[currentClass].buffs.length; i++) {
    if (i % 2 == 0) {
      r = 40;
      b = 40;
      g = 40;
    } else {
      r = 26;
      b = 26;
      g = 26;
    }

    if (i == classes[currentClass].buffs.length - 1) {
      last = "rounded-bottom";
    } else {
      last = "";
    }

    console.log(classes[currentClass].buffs[i].name);
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

function renderDebuffs() {
  $(".createdDebuffs").remove();

  var r;
  var g;
  var b;

  var last;

  for (var i = 0; i < tanks[currentTank].debuffSkills.length; i++) {

    if (i % 2 == 0) {
      r = 40;
      b = 40;
      g = 40;
    } else {
      r = 26;
      b = 26;
      g = 26;
    }

    if (i == tanks[currentTank].debuffSkills.length - 1) {
      last = "rounded-bottom";
    } else {
      last = "";
    }

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

    // $("#debuffs").append("ciao");
  }
  
}

function renderSkills() {
  $('.createdSkills').remove();

  critCalculation();

  var r;
  var g;
  var b;

  for (var i = 0; i < classes[currentClass].skills.length; i++) {
    var textColor = "text-light";

    if (i % 2 == 1) {
      r = 40;
      g = 40;
      b = 40;
    } else {
      r = 26;
      g = 26;
      b = 26;
    }

    if (critSkillDisplay[i].value >= 100) {
      textColor = "text-success";
    } else if (critSkillDisplay[i].value <= 50) {
      textColor = "text-danger";
    }

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
        "<div class = 'col-2'>" +
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

function updateCrit() {
  var crit = 0;

  if (!Number.isNaN(parseInt($("#critInput").val()))) {
    crit += parseInt($("#critInput").val());
  }
  
  if (totalCrit == true) {
    if (crit < classes[currentClass].baseCrit) {
      crit = classes[currentClass].baseCrit;
    }
  }

  if (priest == true) {
    crit += classes[currentClass].baseCrit * 0.36;
  }

  if (mystic == true) {
    crit += classes[currentClass].baseCrit * 1.2;
  }

  if (totalCrit == false) {
    bonusCrit = crit;
    crit += classes[currentClass].baseCrit;
  } else if (totalCrit == true) {
    bonusCrit = crit - classes[currentClass].baseCrit;
  }
  
  
  console.log(">" + bonusCrit);


  $('#buffedCrit').text(Math.trunc(crit));
}

function updateBossStats() {
  $("#bossLevel").val(bosses[currentBoss].level);
  $("#critResist").val(bosses[currentBoss].critResist);
  $("#ampResist").val(bosses[currentBoss].ampResist);
}