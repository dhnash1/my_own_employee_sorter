//employee arrays
var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];
//Final array
var bonuses = [];
//establish employeeName var
var employeeName = null;
// Initial employees array
var employees = [atticus, jem, boo, scout, robert, mayella];
// get input from the text field
function getInputName(){
  var employeeName = document.getElementById('nameIn').value;
  console.log(employeeName);
  window.employeeName = employeeName;
}
//Show the emloyee array.
function bonusDetermine(employeeName){
  for(var i = 0; i < employees.length; i++){
      if(employeeName == employees[ i ][0]){
          alert( employees[i][0] + " found. Fetching Info");
          console.log( employees[ i ]);
      }

  }
}
