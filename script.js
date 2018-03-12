  console.log('ty js');

//declare global variables
let employeeArray = [];
let monthlySalaries = 0;

//define a new class
class Employee {
  constructor(firstNameIn, lastNameIn, idIn, titleIn, annualSalaryIn){
    this.firstName = firstNameIn;
    this.lastName = lastNameIn;
    this.id = idIn;
    this.title = titleIn;
    this.annualSalary = annualSalaryIn;
  }//end of constructor
}//end of class Employee

//wait, then confirm the DOM loaded
$(document).ready(readyNow);

//kickoff the application
function readyNow() {
    console.log('entered readyNow function');
  buttonClick();
}

//define the listerner
function buttonClick(){
    console.log('entered the listener: buttonClick function');
  $('#submitButton').on('click', submitButtonClicked);
 }

//define the actions triggered by the event
function submitButtonClicked() {
    console.log('I clicked submitButton');

  let firstName = $('#firstName').val();
  let lastName = $('#lastName').val();
  let id = $('#id').val();
  let title = $('#title').val();
  let annualSalary = $('#annualSalary').val();

  //create new instance of the Employee class with inputted employee data
  addEmployee = new Employee(firstName, lastName, id, title, annualSalary);

  //populate the global employeeArray with the inputted values
  employeeArray.push(addEmployee);
    console.log('The updated global employeeArray: ', employeeArray);

  calculateMonthly();
  updateTableOnDom();

}

  function calculateMonthly(){
      console.log('entered calculateMonthly fuction');
    let loopValue = 0;
    for (i = 0; i < employeeArray.length; i++){
    loopValue += (parseInt(employeeArray[i].annualSalary));
      console.log('did the strings turn into numbers?', typeof loopValue);

    }
      console.log('the loopValue: ', loopValue);
    totalMonthly = loopValue * 1000 / 12;
      console.log('the totalMonthly: ', totalMonthly);
    monthlySalaries = totalMonthly.toFixed();
      console.log('monthlySalaries on DOM...the totalMonthly toFixed: ', monthlySalaries);

    updateTotalOnDom();

  }

    function updateTotalOnDom(){
        console.log('updateTotalOnDom function entered');
      $('#total').empty();
      $('#total').append(monthlySalaries);
        if(monthlySalaries > 20000){
          $('#total').css('color', 'red');
        }
    }

  //populate table on the DOM with inputted values, append to table
  function updateTableOnDom(){
    console.log('updateTableOnDom function entered');

      // let tableHeader ='<tr class = "tableHeader"><th>First Name</th><th>Last Name</th><th>ID</th><th>Title</th><th>Annual Salary</th></tr>';

    let outputElement = $('.table');
    outputElement.empty();

    for(let row of employeeArray){
      console.log('employee in for...of loop:', row);
      $('.table').append('<tr><td>' + row.firstName + '</td><td>' + row.lastName + '</td><td>' + (row.id) + '</td><td>' + row.title + '</td><td>' + (row.annualSalary +'</td></tr>'));

      console.log('typeof row.annualSalary:', typeof row.annualSalary);

      //clear user input
      $('#firstName').val('');
      $('#lastName').val('');
      $('#id').val('');
      $('#title').val('');
      $('#annualSalary').val('');

    }
  }

//
// function redCounter(){
//   console.log(redClicks);
//   $('#redCounter').empty();
//   $('#redCounter').append('Red count: ' + redClicks);
// }
