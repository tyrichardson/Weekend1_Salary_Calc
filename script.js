console.log('ty js');

//declare global variables
let totalSalaries = 0;
let employeeArray = [];

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
  console.log('entered buttonClick function');
  $('#submitButton').on('click', submitButtonClicked);
 }

//define the actions triggered by the event
function submitButtonClicked() {
  console.log('I clicked submitButton');
  //access the inputted employee data
  let firstName = $('#firstName').val();
  let lastName = $('#lastName').val();
  let id = $('#id').val();
  let title = $('#title').val();
  let annualSalary = $('#annualSalary').val();
  console.log('values from user: ',firstName, lastName, id, title, annualSalary);
  //instantiate a new instance of the Employee class with inputted employee data
  addEmployee = new Employee(firstName, lastName, id, title, annualSalary);
  console.log('New employee object from class: ', addEmployee);
  //populate table on the DOM with inputted values
  $('.tdFirstName').text(firstName);
  $('.tdLastName').text(lastName);
  $('.tdID').text(id);
  $('.tdTitle').text(title);
  $('.tdAnnualSalary').text(annualSalary);
  //populate the employeeArray with the inputted values
  employeeArray.push(addEmployee);
  console.log('The update to employeeArray: ', employeeArray);
  

}

//
// function redCounter(){
//   console.log(redClicks);
//   $('#redCounter').empty();
//   $('#redCounter').append('Red count: ' + redClicks);
// }
