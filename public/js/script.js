console.log('script connected');

//signup page//
const userName = document.getElementById('username');
const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPass = document.getElementById('confirmpass');
const dob = document.getElementById('dob');
const form = document.getElementById('form');
const btnSubmit = document.getElementById('signup-submit');
const green = '#4CAF50';
const red = 'F44336';

btnSubmit.addEventListener('click', function(){
   validate(); 
});

function validate(){
    console.log('validateClicked');
    if(isEmpty(firstName)) return;
    if(!checkIfOnlyLetters(firstName)) return;
    return true;
}

function checkForSpaces(field){
    if(isEmpty(field.value.trim())){
        setInvalid(field, `${field.name} must not be empty`);
        return true;
    } else{
        setValid(field);
        return false;
    }
}
function isEmpty(value){
    if(value === '') return true;
    return false;
}
function setInvalid(field, message){
    field.classList.add("invalid");
    field.nextElementSibling.innerhtml = message;
    field.nextElementSibling.style.color = red;
}
function setValid(field){
    field.classList.remove("invalid");
    field.nextElementSibling.innerhtml = '';
    field.nextElementSibling.style.color = green;
}
function checkIfOnlyLetters(field){
    if(/^[a-zA-Z ]+$/.test(field.value)){
        setValid(field);
        return true;
    }else{
        setInvalid(field, `${field.name} must contain only letters`);
        return false;
    }
}
//end of signup page//

//--------------------------------------------------dice------------------------------------------------------------//
$(document).ready(function() {
    var numDice;
    var originalNumDice;
    var diceSides;
    var die = "<div class='die'><ul></ul></div>";
    var custom = false;
    var temp,
      temp1,
      temp2,
      temp3,
      temp4,
      temp5,
      temp6 = new Array();
  
    function rollDice() {
      $("#diceTower .die").animate(
        {
          rotation: 360
        },
        {
          duration: 500,
          step: function(now, fx) {
            $(this).css({
              transform: "rotate(" + now + "deg)"
            });
          }
        }
      );
    }
  
    function randomDie(foo) {
      rollDice();
      for (var i = 0; i < foo; i++) {
        var thisDie = i + 1;
        var thisDieSide = $("#diceTower .die:nth-child(" + thisDie + ")").attr(
          "data-dieType"
        );
        var random = Math.floor(Math.random() * thisDieSide);
        /*02/22/2018 - Getting Dice Custom Value*/
        if ($("#diceSides").val() == "CV") {
          /*thisDie = temp[thisDie];
         alert(temp[1])*/
        }
        var $lists = $("#diceTower .die:nth-child(" + thisDie + ") ul li");
        $lists
          .hide()
          .eq(random)
          .addClass("showIt");
        /*  $('#diceTower .die ul li').hide();*/
        setTimeout(function() {
          $(".showIt").show();
        }, 500);
  
        /* $lists.eq(random).show();*/
        /*$('#diceTower .die:nth-child(' + thisDie + ') ul li').slice(0, thisDieSide).hide();
        $('#diceTower .die:nth-child(' + thisDie + ') ul li').delay(1000).eq(1).show();
       */
      }
    }
  
    $("#diceTower").on("click", ".die", function() {
      $(this).toggleClass("locked");
    });
  
    $("#roll").on("click", function() {
      numDice = $("#numDice").val();
      diceSides = $("#diceSides").val();
  
      $("#diceTower").empty();
      /*  $('#diceTower :not(.locked)','#diceTower :not(.locked).children').remove();*/
      if (diceSides == "X") {
        var xx = $( "#multiDice ul" ).length;  
        for (var i = 0; i < xx; i++) {
          var thisDieSides = $("#multiDice ul li #" + (i + 1) + "dieSides").val();
          var thisDieData = $("#multiDice ul:nth-child("+(i+1)+")").attr("data-dieHolder");
          if ($("#multiDice ul:nth-child("+(i+1)+")").attr("data-dieHolder") > "") {
            if (thisDieData == 1) { 
              temp1 = $("#sides1").val().split(",");
              $("#diceTower").append( "<div class=' die this" +temp1.length+"sided'' data-dieType='" +temp1.length+"' data-dieID='1' ><ul></ul></div>");
              $("#diceTower .die").draggable();
              for (var n = 0; n < temp1.length; n++) {
                var thisDie = i + 1;
                var thisSide = temp1[n];
                $("#diceTower .die:nth-child(" + thisDie + ") ul").append("<li>" + thisSide + "</li>");
              }
            } else if (thisDieData == 2) {
              temp2 = $("#sides2").val().split(",");
              $("#diceTower").append( "<div class='die this" +temp2.length+"sided'' data-dieType='" +temp2.length+"' data-dieID='2'><ul></ul></div>");
              $("#diceTower .die").draggable();
              for (var n = 0; n < temp2.length; n++) {
                var thisDie = i + 1;
                var thisSide = temp2[n];
                $("#diceTower .die:nth-child(" + thisDie + ") ul").append("<li>" + thisSide + "</li>");
              }
            } else if (thisDieData == 3) { 
              temp3 = $("#sides3").val().split(",");
               $("#diceTower").append( "<div class='die this" +temp3.length+"sided'' data-dieType='" +temp3.length+"' data-dieID='3'><ul></ul></div>");
              $("#diceTower .die").draggable();
              for (var n = 0; n < temp3.length; n++) {
                var thisDie = i + 1;
                var thisSide = temp3[n];
                $("#diceTower .die:nth-child(" + thisDie + ") ul").append("<li>" + thisSide + "</li>");
              }
            } else if (thisDieData == 4) {
              temp4 = $("#sides4").val().split(",");
               $("#diceTower").append( "<div class='die this" +temp4.length+"sided'' data-dieType='" +temp4.length+"' data-dieID='4'><ul></ul></div>");
              $("#diceTower .die").draggable();
              for (var n = 0; n < temp4.length; n++) {
                var thisDie = i + 1;
                var thisSide = temp4[n];
                $("#diceTower .die:nth-child(" + thisDie + ") ul").append("<li>" + thisSide + "</li>");
              }
            } else if (thisDieData == 5) {
              temp5 = $("#sides5").val().split(",");
               $("#diceTower").append( "<div class='die this" +temp5.length+"sided'' data-dieType='" +temp5.length+"' data-dieID='5'><ul></ul></div>");
              $("#diceTower .die").draggable();
              for (var n = 0; n < temp5.length; n++) {
                var thisDie = i + 1;
                var thisSide = temp5[n];
                $("#diceTower .die:nth-child(" + thisDie + ") ul").append("<li>" + thisSide + "</li>");
              }
            } else if (thisDieData == 6) {
              temp6 = $("#sides6").val().split(",");
               $("#diceTower").append( "<div class='die this" +temp6.length+"sided'' data-dieType='" +temp6.length+"' data-dieID='6'><ul></ul></div>");
              $("#diceTower .die").draggable();
              for (var n = 0; n < temp6.length; n++) {
                var thisDie = i + 1;
                var thisSide = temp6[n];
                $("#diceTower .die:nth-child(" + thisDie + ") ul").append("<li>" + thisSide + "</li>");
              }
            }
          } else {
            $("#diceTower").append( "<div class='die this" +thisDieSides +"sided'' data-dieType='" +thisDieSides+"'><ul></ul></div>");
            $("#diceTower .die").draggable();
            for (var n = 0; n < thisDieSides; n++) {
              var thisDie = i + 1;
              var thisSide = n + 1;
              $("#diceTower .die:nth-child(" + thisDie + ") ul").append(
                "<li>" + thisSide + "</li>"
              );
            }
          }
        }
        randomDie(numDice);
      } else {
        /*02/22/2018 - Getting Dice Custom Value*/
        if ($("#diceSides").val() == "CV") {
          temp = $("#sides")
            .val()
            .split(",");
          diceSides = temp.length;
        }
        /*end of 02/22/2018*/
        for (var i = 0; i < numDice; i++) {
          $("#diceTower").append(
            "<div class='die this" +
              diceSides +
              "sided' data-dieType='" +
              diceSides +
              "'><ul></ul></div>"
          );
          
          
          $("#diceTower .die").draggable();
          for (var n = 0; n < diceSides; n++) {
            var thisDie = i + 1;
            var thisSide = n + 1;
            if ($("#diceSides").val() == "CV") {
              $("#diceTower .die:nth-child(" + thisDie + ") ul").append(
                "<li >" + temp[thisSide - 1] + "</li>"
              );
            } else /*if (custom) {
              if (thisSide > 6) {
                thisSide = Math.floor(Math.random() * 6) + 1;
              }
              $("#diceTower .die:nth-child(" + thisDie + ") ul").append(
                "<li><svg class='icon'><use xlink:href='#custom" +
                  thisSide +
                  "'/></svg></li>"
              );
            } else*/ {
              $("#diceTower .die:nth-child(" + thisDie + ") ul").append(
                "<li >" + thisSide + "</li>"
              );
            }
          }
        }
        randomDie(numDice);
      }
    });
  
    $("#keep").on("click", function() {
      window.scrollTo(0, 0);
      $(".locked").each(function(i) {
        $(this)
          .detach()
          .appendTo($("#saved"));
        $(this).removeClass("locked");
        var selectedIndex = $("#numDice").prop("selectedIndex");
        var itemsInDropDownList = $("#numDice option").length;
        if (selectedIndex <= itemsInDropDownList - 1 && selectedIndex > 0) {
          $("#numDice").prop("selectedIndex", selectedIndex - 1);
        }
      });
      $("nav ul span").toggleClass("hide");
      $("#more i").toggleClass("hide");
    });
  
    $("#typeODice li .more").on("click", function() {
      $("#typeODice li .more i").toggleClass("hide");
      $("#typeODice section").toggleClass("hide");
    });
  
    $("#more").on("click", function() {
      $("nav ul span").toggleClass("hide");
      $("#more i").toggleClass("hide");
    });
  
    /*Added custom button to change from "custom" text to "number text" 2/22/2018*/
    $("#custom").on("click", function() {
      $("#diceSides").prop("selectedIndex", 1);
      if (custom) {
        custom = false;
        $("#custom").text("custom");
      } else {
        custom = true;
        $("#custom").text("numbers");
      }
      $("#roll").click();
      $("nav ul span").toggleClass("hide");
      $("#more i").toggleClass("hide");
    });
  
    /*Allowing custom values 02/20/2018*/
  
    function customDice() {
      $("#multiDice").removeClass("hide");
      $("#multiDice").append(
        '<li class="customLine">Custom Values seperated by comma <input class="customValue" type="text" name="values" id="sides"></li>'
      );
    }
  
    function makeXDice() {
      $("#typeODice section").empty();
      $("#typeODice section").removeClass("hide");
      numDice = $("#numDice").val();
      var countDice = 0;
     /* if (numDice == 1) {
        $("#diceSides").val("6");
        $("#diceSides").removeclass("dieXsided");
        $("#diceSides").addclass("die6sided");
        $("#typeODice li .more").addClass("hide");
        $("#typeODice section").addClass("hide");
      } else */{
        for (var i = 0; i < numDice; i++) {
          countDice = countDice + 1;
          $("#multiDice").append(
            "<ul data-dieHolder='"+countDice+"'><li><label>Die " +
              countDice +
              "</label></li><li class='oneDie'><label>Sides: </label><select class='die6sided' id='" +
              countDice +
              "dieSides'><option class='die4sided' value='4'>4</option><option class='die6sided' selected='selected' value='6'>6</option><option class='die8sided' value='8'>8</option><option class='die10sided' value='10'>10</option><option class='die12sided' value='12'>12</option><option class='die20sided' value='20'>20</option></select><input class='customValue' type='text' name='values' id='sides" +
              countDice +
              "'></li></ul>"
          );
        }
      }
    }
  
    $("#numDice").on("change", function() {
      if ($("#diceSides").val() == "X") {
        makeXDice();
      }
      originalNumDice = $("#numDice").val();
      $("#roll").click();
    });
  
    $("#multiDice").on("change", "ul li select", function() {
      /*alert(this.options[this.selectedIndex].className);*/
  
      $(this).removeClass();
      $(this).addClass(this.options[this.selectedIndex].className);
      alert($(this).nameClass());
    });
  
    /* When the user changes the number of sides */
  
    $("#diceSides").on("change", function() {
      $("#diceSides").removeClass();
      $("#diceSides").addClass(this.options[this.selectedIndex].className);
      if ($("#diceSides").val() == "X") {
        $("#typeODice li .more").removeClass("hide");
        makeXDice();
        /*Added custom value*/
      } else if ($("#diceSides").val() == "CV") {
        $("#typeODice li .more").removeClass("hide");
        customDice();
      } else {
        $("#typeODice li .more").addClass("hide");
        if (!$("#typeODice  section").hasClass("hide")) {
          $("#typeODice  section").addClass("hide");
        }
      }
    });
  
    $("#reset").on("click", function() {
      $("#saved").empty();
      $("#numDice").prop("selectedIndex", originalNumDice - 1);
      $("#roll").click();
      $("nav ul span").toggleClass("hide");
      $("#more i").toggleClass("hide");
    });
  
    $(".die").draggable();
  
    $("#saved").droppable({
      accept: ".die",
      drop: function(event, ui) {
        var droppable = $(this);
        var draggable = ui.draggable;
        // Move draggable into droppable
        draggable.appendTo(droppable);
        draggable.css({
          top: "0px",
          left: "0px"
        });
        var selectedIndex = $("#numDice").prop("selectedIndex");
        var itemsInDropDownList = $("#numDice option").length;
        if (selectedIndex <= itemsInDropDownList - 1 && selectedIndex > 0) {
          $("#numDice").prop(
            "selectedIndex",
            selectedIndex - 1
          ); 
          /*remove row die from multidice div:*/
          if ($("#diceSides").val() == "X") {
            /*makeXDice();*/
            var x = draggable.attr("data-dieID");
            alert('removing: '+x)
            /*$("#multiDice ul:nth-child("+x+")").remove();
            $("#multiDice ul:nth-child("+(i+1)+")").attr("data-dieHolder");*/
            $("[data-dieHolder='"+x+"']").remove();
          
          }
        }
      }
    });
  
    $(window).load(function() {
      $("#roll").click();
      originalNumDice = $("#numDice").val();
    });
  });
  
  //----------------------------------------------end of dice--------------------------------------------//