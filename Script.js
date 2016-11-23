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
// Math goes here
          alert( employees[i][0] + " found. Fetching Info");
          console.log( employees[ i ][ 3 ]);
          var two = 0
          var three = .04
          var four = .06
          var five = .1
      // if they have a rating of 2 or less
        if( employees[ i ][ 3 ] <= 2){
          alert(employees[i][0] + " gets no bonus!");
          console.log(two);
      // If they have a rating of 3
        } else if ( employees[ i ][ 3 ] = 3 ){
        var percentage =  employees[ i ][ 2 ] * three;
        console.log(three);
      //if they have a rating of 4
      } else if ( employees[ i ][ 3 ] = 4){
        var percentage =  employees[ i ][ 2 ] * four;
        console.log(four);
        // if they have a rating of 5
      }else if ( employees[ i ][ 3 ] = 5){
        var percentage =  employees[ i ][ 2 ] * five;
        console.log(five);
      }

    console.log(percentage);
  }
}
}
