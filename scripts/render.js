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
      "<div class = 'row pt-2 pb-2 align-items-center createdBuffs' style = 'background: rgb(" + 40 + "," + 40 + "," + 40 +")'>" +
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

  if (currentClass != -1) {
    // all buffs rendering
    for (var i = 0; i < classes[currentClass].buffs.length; i++) {

      var healerBuffShow = 0;

      if (priest == true || mystic == true) {
        healerBuffShow = 1;
      }

      // alternates color between buffs
      if (i % 2 == healerBuffShow) {
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

  var healerDebuffImage;
  var healerDebuffName;

  if (priest == true) {
    healerDebuffImage = "https://teralore.com/items/icon_skills/divineretribution_tex.png";
    healerDebuffName = "Triple Nemesis";
  } else if (mystic == true) {
    healerDebuffImage = "https://teralore.com/items/icon_skills/painfulshackle_tex.png";
    healerDebuffName = "Volley of Curses";
  }

  if (priest == true || mystic == true) {
    $('#debuffs').append(
      "<div class = 'row pt-2 pb-2 align-items-center createdDebuffs' style = 'background: rgb(26, 26, 26)'>" + 
        "<div class = 'col-2'>" + 
          "<img src = 'https://i.imgur.com/t08SApc.png' class = 'img-fluid rounded' alt = 'missing image'>" +
        "</div>" +
        "<div class = 'col-4'>" +
          "<h5 class = 'text-light m-0'>Magical Shred</h5>" +
        "</div>" +
        "<div class = 'col-2'>" +
          "<div class = 'input-group'>" +
            "<input type = 'text' value = '14000' class = 'form-control bg-dark border-0 text-light text-center responsiveText' aria-label = 'Default' aria-describedby = 'inputGroup-sizing-default'>" +
          "</div>" +
        "</div>" +
        "<div class = 'col-4 pl-2'>" +
          "<div class = 'input-group'>" +
            "<div class = 'input-group-prepend'>" +
              "<span class = 'input-group-text text-white bg-primary border-0 responsiveText'>Uptime: </span>" +
            "</div>" +
            "<input type = 'text' value = '100' class = 'form-control bg-dark border-0 text-light text-center responsiveText' aria-label = 'Default' aria-describedby = 'inputGroup-sizing-default'>" +
              "<span class = 'input-group-text text-white bg-primary border-0 responsiveTextHide'>" +
                "%" +
              "</span>" +
          "</div>" +
        "</div>" +
      "</div>"
    );

    $('#debuffs').append(
    "<div class = 'row  pt-2 pb-2 align-items-center createdDebuffs " + last + "' style = 'background: rgb(" + 40 + "," + 40 + "," + 40 +")'>" +
      "<div class = 'col-2'>" + 
        "<img src = " + healerDebuffImage + " class = 'img-fluid rounded' alt = 'missing image'>" + 
      "</div>" + 
      "<div class = 'col'>" + 
        "<h5 class = 'text-light m-0'>" + healerDebuffName + "</h5>" +
      "</div>" +
      "<div class = 'col-5'>" + 
        "<div class = 'input-group'>" + 
          "<div class = 'input-group-prepend'>" + 
            "<span class = 'input-group-text text-white bg-primary border-0 responsiveText'>Uptime: </span>" +
          "</div>" + 
          "<input type = 'text' value = " + 100 + " class = 'form-control bg-dark border-0 text-light text-center responsiveText' aria-label = 'Default' aria-describedby = 'inputGroup-sizing-default'>" +
            "<span class = 'input-group-text text-white bg-primary border-0 responsiveTextHide'>" +
              "%" +
            "</span>" +
          "</div>" +
        "</div>" +
      "</div>" +
    "</div>");
  }

  if (currentTank != -1) {
    $('#debuffs').append(
      "<div class = 'row pt-2 pb-2 align-items-center createdDebuffs' style = 'background: rgb(26, 26, 26)'>" + 
        "<div class = 'col-2'>" + 
          "<img src = 'https://i.imgur.com/9czn5Km.png' class = 'img-fluid rounded' alt = 'missing image'>" +
        "</div>" +
        "<div class = 'col-4'>" +
          "<h5 class = 'text-light m-0'>Physical Shred</h5>" +
        "</div>" +
        "<div class = 'col-2'>" +
          "<div class = 'input-group'>" +
            "<input type = 'text' value = '14000' class = 'form-control bg-dark border-0 text-light text-center responsiveText' aria-label = 'Default' aria-describedby = 'inputGroup-sizing-default'>" +
          "</div>" +
        "</div>" +
        "<div class = 'col-4 pl-2'>" +
          "<div class = 'input-group'>" +
            "<div class = 'input-group-prepend'>" +
              "<span class = 'input-group-text text-white bg-primary border-0 responsiveText'>Uptime: </span>" +
            "</div>" +
            "<input type = 'text' value = '100' class = 'form-control bg-dark border-0 text-light text-center responsiveText' aria-label = 'Default' aria-describedby = 'inputGroup-sizing-default'>" +
              "<span class = 'input-group-text text-white bg-primary border-0 responsiveTextHide'>" +
                "%" +
              "</span>" +
          "</div>" +
        "</div>" +
      "</div>"
    );

    // all debuffs rendering
    for (var i = 0; i < tanks[currentTank].debuffSkills.length; i++) {

      // alternates color between debuffs
      // var healerDebuffShow = 1;
      
      // if (priest == true || mystic == true) {
      //   healerDebuffShow = 0;
      // }

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

    var critToDisplay = critSkillDisplay[i].value;

    // set the crit display color according to the value
    if (critSkillDisplay[i].value >= 100) {
      textColor = "text-success";
      critToDisplay = 100;
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
              "<h5 class = '" + textColor +" m-0'>" + critToDisplay + "%</h5>" +
            "</div>" +
          "</div>" +
        "</div>" +
      "</div>"
    );
  }
}

function renderBuild() {
  var marginRight;
  var showPlus;

  $('.createdBuild').remove();

  for (var i = 0; i < tabArray.length; i++) {
    if (i == 2) {
      marginRight = "mr-2";
    } else {
      marginRight = "mr-1";
    }

    if (i == tabArray.length - 1) {
      showPlus = "";
      if (i == 2) {
        showPlus = "d-none";
      }
    } else {
      showPlus = "d-none";
    }

    if (currentClass == -1) {
      displayBaseCrit = 0;
    } else {
      displayBaseCrit = classes[currentClass].baseCrit;
      console.log(displayBaseCrit);
    }

    $('#buildRow').append(
      "<div id = 'build" + i + "' class = 'col-3 createdBuild' style = 'align-self: flex-end' value = '" + i + "'>" +
        "<div class = 'row'>" +
          "<div class = 'col ml-1 " + marginRight + " rounded h-100 greyTab' style = 'align-self: flex-end'>" +
            "<div class = 'row align-items-center mt-2'>" +
              "<div class = 'col text-left'>" +
                "<button type='button' class='btn buildButton btn-outline-primary removeBuild" + i + "'>-</button>" +
              "</div>" +
              "<div class = 'col mt-3'>" +
                "<h3>Build " + (i + 1) + "</h3>" +
              "</div>" +
              "<div class = 'col text-right'>" +
                "<button type='button' class='btn buildButton btn-outline-primary addBuild " + showPlus + "' id = 'plus" + i + "'>+</button>" +
              "</div>" +
            "</div>" +
            "<div class = 'row mt-3 mb-3 align-items-end'>" +
              "<div class = 'col-4 text-center'>" +
                "<h5>Base Crit: " +
                  "<span class = 'text-white' id = 'baseCrit'>" + displayBaseCrit + "</span>" +
                "</h5>" +
              "</div>" +
              "<div class = 'col'>" +
                "<div class='input-group'>" +
                  "<div class='input-group-prepend'>" +
                    "<span class='input-group-text text-white bg-primary border-0 responsiveText' id='inputGroup-sizing-default'>Crit:</span>" +
                  "</div>" +
                  "<input id = 'critInput" + i + "' value = '" + getCrit(i) + "' class='form-control bg-dark border-0 text-light text-center responsiveText' type='text' aria-label='Default' aria-describedby='inputGroup-sizing-default'>" +
                  "<div class = 'input-group-append'>" +
                    "<button id = 'critButton" + i + "' type = 'button' class = 'btn btn-primary dropdown-toggle responsiveText' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' id = 'critButton'>Total Crit</button>" +
                    "<div class = 'dropdown-menu' aria-labelledby = 'critButton" + i + "'>" +
                      "<a class = 'dropdown-item critSelection" + i + "' href = '#'>Total Crit</a>" +
                      "<a class = 'dropdown-item critSelection" + i + "' href = '#'>Bonus Crit</a>" +
                    "</div>" +
                  "</div>" +
                "</div>" +
              "</div>" +
            "</div>" +
            "<div class = 'row mt-2 align-items-center'>" +
              "<div class = 'col text-center'>" +
                "<h5>Power</h5>" +
              "</div>" +
              "<div class = 'col text-center'>" +
                "<h5>Crit Power</h5>" +
              "</div>" +
            "</div>" +
            "<div class = 'row mt-2 mb-3'>" +
              "<div class = 'col'>" +
                "<div class='input-group '>" +
                  "<input id = 'powerInput" + i + "' value = '" + getpower(i) + "' class='form-control bg-dark border-0 text-light text-center responsiveText' type='text' aria-label='Default' aria-describedby='inputGroup-sizing-default'>" +
                "</div>" +
              "</div>" +
              "<div class = 'col'>" +
                "<div class='input-group '>" +
                  "<input id = 'critPowerInput" + i + "' value = '" + getcritPower(i) + "' type='text' class='form-control bg-dark border-0 text-light text-center responsiveText' aria-label='Default' aria-describedby='inputGroup-sizing-default'>" +
                "</div>" +
              "</div>" +
            "</div>" +
            "<div class = 'row mt-2 align-items-center'>" +
              "<div class = 'col text-center'>" +
                "<h5>Amplification</h5>" +
              "</div>" +
            "</div>" +
            "<div class = 'row mt-2 mb-3'>" +
              "<div class = 'col'>" +
                "<div class='input-group '>" +
                  "<div class='input-group-prepend'>" +
                    "<span class='input-group-text text-white bg-primary border-0 responsiveText' id='inputGroup-sizing-default'>Physical:</span>" +
                  "</div>" +
                  "<input id = 'physAmpInput" + i + "' value = '" + getphysAmp(i) + "' type='text' class='form-control bg-dark border-0 text-light text-center responsiveText' aria-label='Default' aria-describedby='inputGroup-sizing-default'>" +
                  "<div class='input-group-prepend'>" +
                    "<span class='input-group-text text-white bg-primary border-0 responsiveText' id='inputGroup-sizing-default'>Magical:</span>" +
                  "</div>" +
                  "<input id = 'magAmpInput" + i + "' value = '" + getmagAmp(i) + "' type='text' class='form-control bg-dark border-0 text-light text-center responsiveText' aria-label='Default' aria-describedby='inputGroup-sizing-default'>" +
                "</div>" +
              "</div>" +
            "</div>" +
            "<div class = 'row mt-2 align-items-center'>" +
              "<div class = 'col text-center'>" +
                "<h5>Special Crit Power</h5>" +
              "</div>" +
            "</div>" +
            "<div class = 'row mt-2 mb-3'>" +
              "<div class = 'col'>" +
                "<div class='input-group '>" +
                  "<div class='input-group-prepend'>" +
                    "<span class='input-group-text text-white bg-primary border-0 responsiveText' id='inputGroup-sizing-default'>Physical:</span>" +
                  "</div>" +
                  "<input id = 'physCPInput" + i + "' value = '" + getphysCP(i) + "' type='text' class='form-control bg-dark border-0 text-light text-center responsiveText' aria-label='Default' aria-describedby='inputGroup-sizing-default'>" +
                  "<div class='input-group-prepend'>" +
                    "<span class='input-group-text text-white bg-primary border-0 responsiveText' id='inputGroup-sizing-default'>Magical:</span>" +
                  "</div>" +
                  "<input  id = 'magCPInput" + i + "'value = '" + getmagCP(i) + "' type='text' class='form-control bg-dark border-0 text-light text-center responsiveText' aria-label='Default' aria-describedby='inputGroup-sizing-default'>" +
                "</div>" +
              "</div>" +
            "</div>" +
            "<div class = 'row mt-2 align-items-center'>" +
              "<div class = 'col text-center'>" +
                "<h5>Special Resistance Piercing</h5>" +
              "</div>" +
            "</div>" +
            "<div class = 'row mt-2 mb-3'>" +
              "<div class = 'col'>" +
                "<div class='input-group '>" +
                  "<div class='input-group-prepend'>" +
                    "<span class='input-group-text text-white bg-primary border-0 responsiveText' id='inputGroup-sizing-default'>Physical:</span>" +
                  "</div>" +
                  "<input id = 'physPiercingInput" + i + "' value = '" + getphysPiercing(i) + "' type='text' class='form-control bg-dark border-0 text-light text-center responsiveText' aria-label='Default' aria-describedby='inputGroup-sizing-default'>" +
                  "<div class='input-group-prepend'>" +
                    "<span class='input-group-text text-white bg-primary border-0 responsiveText' id='inputGroup-sizing-default'>Magical:</span>" +
                  "</div>" +
                  "<input id = 'magPiercingInput" + i + "' value = '" + getmagPiercing(i) + "' type='text' class='form-control bg-dark border-0 text-light text-center responsiveText' aria-label='Default' aria-describedby='inputGroup-sizing-default'>" +
                "</div>" +
              "</div>" +
            "</div>" +
            "<div class = 'row mt-2 align-items-center'>" +
              "<div class = 'col text-center'>" +
                "<h5>Special Resistance Ignore</h5>" +
              "</div>" +
            "</div>" +
            "<div class = 'row mt-2 mb-3'>" +
              "<div class = 'col'>" +
                "<div class='input-group '>" +
                  "<div class='input-group-prepend'>" +
                    "<span class='input-group-text text-white bg-primary border-0 responsiveText' id='inputGroup-sizing-default'>Physical:</span>" +
                  "</div>" +
                  "<input id = 'physIgnoreInput" + i + "' value = '" + getphysIgnore(i) + "' type='text' class='form-control bg-dark border-0 text-light text-center responsiveText' aria-label='Default' aria-describedby='inputGroup-sizing-default'>" +
                  "<div class='input-group-prepend'>" +
                    "<span class='input-group-text text-white bg-primary border-0 responsiveText' id='inputGroup-sizing-default'>Magical:</span>" +
                  "</div>" +
                  "<input id = 'magIgnoreInput" + i + "' value = '" + getmagIgnore(i) + "' type='text' class='form-control bg-dark border-0 text-light text-center responsiveText' aria-label='Default' aria-describedby='inputGroup-sizing-default'>" +
                "</div>" +
              "</div>" +
            "</div>" +
            "<div class = 'row mt-2 align-items-center'>" +
              "<div class = 'col text-center text-danger'>" +
                "<h5>HP</h5>" +
              "</div>" +
              "<div class = 'col text-center'>" +
                "<h5>MP</h5>" +
              "</div>" +
            "</div>" +
            "<div class = 'row mt-2 mb-3'>" +
              "<div class = 'col'>" +
                "<div class='input-group '>" +
                  "<input id = 'hpInput" + i + "' value = '" + gethp(i) + "' type='text' class='form-control bg-dark border-0 text-light text-center responsiveText' aria-label='Default' aria-describedby='inputGroup-sizing-default'>" +
                "</div>" +
              "</div>" +
              "<div class = 'col'>" +
                "<div class='input-group '>" +
                  "<input id = 'mpInput" + i + "' value = '" + getmp(i) + "' type='text' class='form-control bg-dark border-0 text-light text-center responsiveText' aria-label='Default' aria-describedby='inputGroup-sizing-default'>" +
                "</div>" +
              "</div>" +
            "</div>" +
            "<div class = 'row mt-2 mb-3 align-items-end'>" +
              "<div class = 'col'>" +
                "<button type='button' class='btn btn-primary save" + i + "'>Save</button>" +
              "</div>" +
            "</div>" +
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



function getCrit(currentTab) {
  var critString = tabArray[currentTab].crit;
  if (tabArray[currentTab].crit == 0) {
    critString = "";
  }
  return(critString);
}

function getpower(currentTab) {
  var powerString = tabArray[currentTab].power;
  if (tabArray[currentTab].power == 0) {
    powerString = "";
  }
  return(powerString);
}

function getcritPower(currentTab) {
  var critPowerString = tabArray[currentTab].critPower;
  if (tabArray[currentTab].critPower == 0) {
    critPowerString = "";
  }
  return(critPowerString);
}

function getphysAmp(currentTab) {
  var physAmpString = tabArray[currentTab].physAmp;
  if (tabArray[currentTab].physAmp == 0) {
    physAmpString = "";
  }
  return(physAmpString);
}

function getmagAmp(currentTab) {
  var magAmpString = tabArray[currentTab].magAmp;
  if (tabArray[currentTab].magAmp == 0) {
    magAmpString = "";
  }
  return(magAmpString);
}

function getphysCP(currentTab) {
  var physCPString = tabArray[currentTab].physCP;
  if (tabArray[currentTab].physCP == 0) {
    physCPString = "";
  }
  return(physCPString);
}

function getmagCP(currentTab) {
  var magCPString = tabArray[currentTab].magCP;
  if (tabArray[currentTab].magCP == 0) {
    magCPString = "";
  }
  return(magCPString);
}

function getphysPiercing(currentTab) {
  var physPiercingString = tabArray[currentTab].physPiercing;
  if (tabArray[currentTab].physPiercing == 0) {
    physPiercingString = "";
  }
  return(physPiercingString);
}

function getmagPiercing(currentTab) {
  var magPiercingString = tabArray[currentTab].magPiercing;
  if (tabArray[currentTab].magPiercing == 0) {
    magPiercingString = "";
  }
  return(magPiercingString);
}

function getphysIgnore(currentTab) {
  var physIgnoreString = tabArray[currentTab].physIgnore;
  if (tabArray[currentTab].physIgnore == 0) {
    physIgnoreString = "";
  }
  return(physIgnoreString);
}

function getmagIgnore(currentTab) {
  var magIgnoreString = tabArray[currentTab].magIgnore;
  if (tabArray[currentTab].magIgnore == 0) {
    magIgnoreString = "";
  }
  return(magIgnoreString);
}

function gethp(currentTab) {
  var hpString = tabArray[currentTab].hp;
  if (tabArray[currentTab].hp == 0) {
    hpString = "";
  }
  return(hpString);
}

function getmp(currentTab) {
  var mpString = tabArray[currentTab].mp;
  if (tabArray[currentTab].mp == 0) {
    mpString = "";
  }
  return(mpString);
}


// NOTE
// skills, debuffs, buffs and builds rendering is done through literal code writing within this script
// this method is really powerful but not elegant at all
// will look for a better implementation later on