//Add dependencies 
const Employee = require("./Employee");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

// Dynamically generated html template for the employee based on his role 
function generateCardTemplate(employee,empRole){
    let empProperty ="";
    let empValue ;
    let empIcon = "";
    

    //if role is manager add the unque property, 'officenumber' and its value of to the variable
    if (empRole==="Manager") { 
        empProperty = "Office Number";
        empValue= employee.officeNumber;
        empIcon = '<i class="fas fa-mug-hot"></i>';
    }
        //if role is engineer add the unque property, 'githubname' and its value of to the variable
    if (empRole==="Engineer") {
        empProperty = "Github Name";
        let temp =employee.github;
        empValue=`<a href = 'https://github.com/${employee.github}'>${employee.github}</a>`;
        empIcon = '<i class="fas fa-glasses"></i>';
    }
    
    //if role is intern add the unque property, 'school' and its value of to the variable
    if (empRole==="Intern") {
        empProperty = "School";
        empValue= employee.school;
        empIcon = '<i class="fas fa-user-graduate"></i>';
    }
    return  `
    <div class="card m-2 shadow border-info " style="width: 18rem;">
      <div class="card-header bg-info text-white">
        <h5 class="card-title">${employee.getName()}</h5>
        <h5 class="card-title"><span style ="font-size:20px; color:White">${empIcon}</span> ${empRole}</h5>
      </div>
      <div class ="card-body">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Id: ${employee.getId()}</li>
          <li class="list-group-item">Email: <a href="mailto:${employee.getEmail()}" class="card-link">${employee.getEmail()}</a></li>
          <li class="list-group-item">${empProperty}: ${empValue}</li>
        </ul>
      </div>
    </div> `;
  
}
// fetch every employee data from the array and pass it to ''
function generateEmployee(empArr){
  let output = "";
  //for each employee in the team 
    empArr.forEach(employee =>{
        let empRole =employee.getRole(); // Identify his role -  Manager/Intern/engineer 
        // Generate a html template forv every employee and append to 'output'
        output = output.concat(generateCardTemplate(employee,empRole)); 

    })
    console.log("**** Employee html template generated successfully!******")
    return output; //return dynamically generated template 
  }


// Generate HTML output to be written into index.html 
function generateHTML (empArr){
  let data = ""; // data string 
  console.log ("***** Generating html template ...........*******");
  data =data.concat(startHTML());  // Add the first part of html template 
  data =data.concat(generateEmployee(empArr)); // add the dynamically generated html template 
  data =data.concat(endofHTML()); // Add the last part of html template 

  console.log("****  HTMl template data generated,ready to write ***");
  return data; // return the html template data 

}

//Static part of HTMl template for index.html file  to be generated  - head etc 
function startHTML(){
return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Team-Profile-Generator</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <!-- Google Fontslink -->
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <!-- Bootstrap-->
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      </head>  
    <body>
    <header class="container-fluid bg-secondary mb-3 text-white">
        <h1 class="text-center"><span style ="font-size:2x; color:White"><i class="fas fa-users"></i></span>  My Team</h1>    
    </header> 
    <main class ="container">
    <div class =" row mb-3 justify-content-center" id ="my-team">`;  
}

//Static html template  to be added at the  end of index.html 
  function endofHTML()
  {  
    return  `</div>
    </main>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
    </body>
    </html>`;

}
module.exports =generateHTML;