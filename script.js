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
  console.log('New class employee object: ', addEmployee);

  //populate the global employeeArray with the inputted values
  employeeArray.push(addEmployee);
  console.log('The update to global employeeArray: ', employeeArray);

  calculateMonthly();
  updateDom();

}

  function calculateMonthly(){
    console.log('entered calculateMonthly fuction');
    console.log(typeof employeeArray[0].annualSalary);
    for (i = 0; i < employeeArray.length; i++){
    monthlySalaries += (parseInt(employeeArray[i].annualSalary));

    }

    totalMonthly = monthlySalaries;
    totalMonthly = totalMonthly;
    console.log('totalMonthly', totalMonthly);
      $('#total').append(totalMonthly);
  }

  //populate table on the DOM with inputted values, append to table

  function updateDom(){
    console.log('updateDom function entered');
    let tableHeader ='<tr class = "tableHeader"><th>First Name</th><th>Last Name</th><th>ID</th><th>Title</th><th>Annual Salary</th></tr>';
    let outputElement = $('.table');
    outputElement.empty();
    for(let row of employeeArray){
      console.log('employee in for...of loop:', row);
  $('.table').append(tableHeader + '<tr><td>' + row.firstName + '</td><td>' + row.lastName + '</td><td>' + (row.id) + '</td><td>' + row.title + '</td><td>' + (row.annualSalary +'</td></tr>'));

  console.log('typeof row.annualSalary:', typeof row.annualSalary);

    //clear user input
    $('#firstName').val('');
    $('#lastName').val('');
    $('#id').val('');
    $('#title').val('');
    $('#annualSalary').val('');

  }
}




        // $('.tdFirstName').text(firstName);
        // $('.tdLastName').text(lastName);
        // $('.tdID').text(id);
        // $('.tdTitle').text(title);
        // $('.tdAnnualSalary').text(annualSalary);

    //access the inputted employee data
    // let firstName = $('#firstName').val();
    // let lastName = $('#lastName').val();
    // let id = $('#id').val();
    // let title = $('#title').val();
    // let annualSalary = $('#annualSalary').val();
    // console.log('values from clicking submitButton: ',firstName, lastName, id, title, annualSalary);

//
// }
//
// function calculateTotal(){
//   for(let salary of employeeArray){
//     console.log('for loop salary', salary.annualSalary);
//     salaryNumber = (salary.annualSalary);
//     console.log(typeof salaryNumber);
//     convertedToNumber = Number(salaryNumber);
//     console.log(convertedToNumber);
//     totalSalaries += salaryNumber;
//
//   }//end for of loop
//   console.log('totalSalaries', totalSalaries );
//   clearUserInput();
//
// }//end calculateTotal
//
// function clearUserInput(){
//   firstName = $('#firstName').val('');
//   lastName = $('#lastName').val('');
//   id = $('#id').val('');
//   title = $('#title').val('');
//   annualSalary = $('#annualSalary').val('');
// }


// function addDataToTableRowsOnDom(){
//
//
//   }
// }

// $('.tdFirstName').text(firstName);
// $('.tdLastName').text(lastName);
// $('.tdID').text(id);
// $('.tdTitle').text(title);
// $('.tdAnnualSalary').text(annualSalary);

//
// function redCounter(){
//   console.log(redClicks);
//   $('#redCounter').empty();
//   $('#redCounter').append('Red count: ' + redClicks);
// }
