//Set up on clicks for numbers
$("#1").click(function() {
  newEntryCond();
  $("#display").append("1");
});
$("#2").click(function() {
  newEntryCond();
  $("#display").append("2");
});
$("#3").click(function() {
  newEntryCond();
  $("#display").append("3");
});
$("#4").click(function() {
  newEntryCond();
  $("#display").append("4");
});
$("#5").click(function() {
  newEntryCond();
  $("#display").append("5");
});
$("#6").click(function() {
  newEntryCond();
  $("#display").append("6");
});
$("#7").click(function() {
  newEntryCond();
  $("#display").append("7");
});
$("#8").click(function() {
  newEntryCond();
  $("#display").append("8");
});
$("#9").click(function() {
  newEntryCond();
  $("#display").append("9");
});
$("#0").click(function() {
  newEntryCond();
  $("#display").append("0");
});
$("#dot").click(function() {
  newEntryCond();
  $("#display").append(".");
});

//Set up on clicks for functions
$("#plus").click(function() {
  createString("plus");
});
$("#minus").click(function() {
  createString("minus");
});
$("#times").click(function() {
  createString("times");
});
$("#divide").click(function() {
  createString("divide");
});
$("#equals").click(function() {
  if (
    Number.isInteger(
      $("#strandopers").html()[$("#strandopers").html().length - 1]
    ) === false &&
    $("#display").html() === 0
  ) {
    $("#strandopers").html($("#strandopers").html().slice(0, -1));
  }
  $("#strandopers").append($("#display").html());
  calculateStr();
});

//setup on clicks for clears
$("#clearentry").click(function() {
  $("#display").html("0");
});
$("#arithclear").click(function() {
  $("#solution").prop("id", "display");
  $("#lockedstr").prop("id", "strandopers");
  clearEntry();

  $("#strandopers").html("");
});

//Arithmetic Javascript Functions
function createString(oper) {
  if ($("#display").html() === 0) {
  } else if (oper == "plus") {
    if (Number.isInteger($("#strandopers").html()[$("#strandopers").html().length - 1]) === false && $("#display").html() === "") {
      $("#strandopers").html($("#strandopers").html().slice(0, -1));
      $("#strandopers").append($("#display").html() + "+");
    }
    else {$("#strandopers").append($("#display").html() + "+");}
    clearEntry();
  } else if (oper == "minus") {
    if (Number.isInteger($("#strandopers").html()[$("#strandopers").html().length - 1]) === false && $("#display").html() === "") {
      $("#strandopers").html($("#strandopers").html().slice(0, -1));
      $("#strandopers").append($("#display").html() + "-");
    }
    else {$("#strandopers").append($("#display").html() + "-");}
    clearEntry();
  } else if (oper == "times") {
    if (Number.isInteger($("#strandopers").html()[$("#strandopers").html().length - 1]) === false && $("#display").html() === "") {
      $("#strandopers").html($("#strandopers").html().slice(0, -1));
      $("#strandopers").append($("#display").html() + "*");
    }
    else {$("#strandopers").append($("#display").html() + "*");}
    clearEntry();
  } else if (oper == "divide") {
    if (Number.isInteger($("#strandopers").html()[$("#strandopers").html().length - 1]) === false && $("#display").html() === "") {
      $("#strandopers").html($("#strandopers").html().slice(0, -1));
      $("#strandopers").append($("#display").html() + "/");
    }
    else {$("#strandopers").append($("#display").html() + "/");}
    clearEntry();
  }
}

function calculateStr() {
  var string = $("#strandopers").html();
  var solution = eval(string);
  $("#display").html(solution);
  $("#display").prop("id", "solution");
  $("#strandopers").prop("id", "lockedstr");
  console.log(string);
}

//random assist functions
function newEntryCond() {
  //CHECKS IF ZERO FIRST DIGIT/DELETES IT
  if ($("#display").html() == 0) {
    $("#display").html("");
  }
}
function clearEntry() {
  $("#display").html("");
}