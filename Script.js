var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var bonuses = [];

var employeeName = "Boo";
var employees = [atticus, jem, boo, scout, robert, mayella];
function getInputName(){
  var employeeName = document.getElementById('nameIn').value;

  console.log(employeeName);
  window.employeeName = employeeName;
}

function addName(){




}




function bonusDetermine(employeeName){

  for(var i = 0; i < employees.length; i++){
      if(employeeName == employees[ i ][0]){

          alert( employees[i][0] + " found. Fetching Info");
          console.log( employees[ i ]);

      }



  }



}
