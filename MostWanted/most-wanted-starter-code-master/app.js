"use strict"
/*
Build all of your functions for displaying and gathering information below (GUI).
*/

// app is the function called to start the entire application
function app(people){
  let searchType = promptFor("Do you know the name of the person you are looking for? Enter 'yes' or 'no'", yesNo).toLowerCase();
  let searchResults;
  switch(searchType){
    case 'yes':
      searchResults = searchByName(people);
      break;
    case 'no':
      searchResults = searchByTrait(people);
      break;
      default:
    app(people); // restart app
      break;
  }
    
  // Call the mainMenu function ONLY after you find the SINGLE person you are looking for
  mainMenu(searchResults[0], people);
}

// Menu function to call once you find who you are looking for
function mainMenu(person, people){


  /* Here we pass in the entire person object that we found in our search, as well as the entire original dataset of people. We need people in order to find descendants and other information that the user may want. */

  if(!person){
    alert("Could not find that individual.");
    return app(people); // restart
  }

<<<<<<< HEAD
  let displayOption = prompt("Found " + person.firstName + " " + person.lastName + ". Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");

=======
  let displayOption = prompt("Found " + person[0].firstName + " " + person[0].lastName + ". Do you want to know their 'info', 'family', or 'descendants'? Type the option you want or 'restart' or 'quit'");
  let searchInfoResults;
>>>>>>> f429dab1f784c37402dd969d37fdeb9a9e394b45
  switch(displayOption){
    case "info":
    searchInfoResults = displayPerson(person);
    // TODO: get person's info
    displayInfo(person);
    break;
    case "family":
    // TODO: get person's family
    displaySpouse(person);
    break;
    case "descendants":
    // TODO: get person's descendants
    break;
    case "restart":
    app(people); // restart
    break;
    case "quit":
    return; // stop execution
    default:
    return mainMenu(person, people); // ask again
  }
}

function searchByName(people){
  let firstName = promptFor("What is the person's first name?", chars);
  let lastName = promptFor("What is the person's last name?", chars);

  let foundPerson = people.filter(function(person){
    if(person.firstName === firstName && person.lastName === lastName){
      return true;
    }
    else{
      return false;
    }
  })
  // TODO: find the person using the name they entered
  return foundPerson;
}

// alerts a list of people
function displayPeople(people){
  alert(people.map(function(person){
    return person.firstName + " " + person.lastName;
  }).join("\n"));
}

function displayPerson(person){
  // print all of the information about a person:
  // height, weight, age, name, occupation, eye color.
  let personInfo = "First Name: " + person.firstName + "\n";
  personInfo += "Last Name: " + person.lastName + "\n";
  let personAge = "Age: " + person.dob + "\n";
  let personHeight = "Height: " + person.height + "\n";
  // TODO: finish getting the rest of the information to display
  alert(personInfo + personAge + personHeight);
}

// function that prompts and validates user input
function promptFor(question, valid){
  let response;
    do{
    response = prompt(question).trim();
  }while(!response || !valid(response));
  return response;
}

// helper function to pass into promptFor to validate yes/no answers
function yesNo(input){
  return input.toLowerCase() == "yes" || input.toLowerCase() == "no";
}

// helper function to pass in as default promptFor validation
function chars(input){
  return true; // default validation only
}

// function displayInfoFam(famInfo){
//   let famInfoAlert
//   if {
//     currentSpouse !== null 
//     alert("Not Married")
//   }

//   else {

//   }
//   " Current Spouse: " + famInfo[0].currentSpouse +
//   " \n Parents: " + famInfo[0] +
//   " \n Children " + famInfo[0].;
//   alert(famInfoAlert)
// }


function displayInfo(information){
  let infoAlert = 
  " First Name: " + information.firstName + 
  " \nLast Name: " + information.lastName + 
  " \nGender: " + information.gender + 
  " \nDOB: " + information.dob +
  " \nHeight: " + information.height +
  " \nWeight " + information.weight +
  " \nEye Color: " + information.eyeColor +
  " \nOccupation: " + information.occupation +
  " \nparents: " + information.parents +
  " \nCurrent Spouse: " + information.currentSpouse;
alert(infoAlert);
}


function displaySpouse(data, personFound){
 let spouseInfoAlert =
 data.filter(function(person){
   return personFound.currentSpouse === person.id;
 });
  console.log(spouseInfoAlert.firstName);
}
 
// function search by trait, needs to be fixed, only yielding array length
function searchByTrait(people){
  let filterResult;
  console.log("It has found " + people.length + ", please continue searching to narrow down to one person.");
  let traitChoice = promptFor("Which Trait Would You Like to Search By? ex. 'Gender', 'DOB'," + " " +
  "'Height', 'Weight', 'Eye Color', 'Occupation'", chars);
  switch (traitChoice){
    case "Gender":
      let genderChoice = promptFor("Which Gender Would You Like to Search For?", chars);
      filterResult = people.filter(function(person){
        if (person.gender === genderChoice){
          return true;
        }
        else {
          return false;
        }
      }
      )
      break;
    case "DOB":
      let dobChoice = promptFor("What Date of Birth Would You Like to Search For?", chars);
       filterResult = people.filter(function(person){
          if (person.dob === dobChoice){
            return true;
          }
          else {
            return false;
          }
       }
       )
      break;
    case "Height":
      let heightChoice = promptFor ("What is the Person's Height?", chars);
       filterResult = people.filter(function(person){
        if (person.height === heightChoice){
          return true;
        }
        else { 
          return false;
        }
      })
      break
    case "Weight":
      let weightChoice = promptFor ("What is the Person's Weight", chars);
       filterResult = people.filter(function(person){
        if (person.weight === weightChoice){
          return true;
        }
      else {

       return false;
      }
      })
      break;
    case "Eye Color":
      let eyeChoice = promptFor ("What is Their Eye Color?", chars);
       filterResult = people.filter(function(person){
        if (person.eyeColor === eyeChoice){
          return true;
        }
        else {
          return false;
        }
      })
      break;
    case "Occupation":
      let occChoice = promptFor ("What is Their Occuptation?", chars);
       filterResult = people.filter(function(person){
        if (person.weight === occChoice) {
          return true;
        }
        else {
          return false;
        }
      })
      break;


  }
    if (filterResult.length === 1)
    {
    return filterResult;
    }
    else {
      return 
      searchByTrait(filterResult);
    }

<<<<<<< HEAD
}

// function displayFamily(data, personPass){
//   // let famInfoAlert = 
//   // " Direct Family: " + 
//   let nameSpouse;
//   // let nameParents;
//   // let nameChildren = [];

//   if (personPass.currentSpouse === null) {
//        nameSpouse = data.filter(function(person){
//     if (person.id === personPass.currentSpouse){
//         return true;
//     }
//     else {
//       return false;
//     }
//   }
    
//   },
//   alert(nameSpouse);
// }
    
     

  


//function displayDesc (descInfo, data){}
=======
  alert(famInfoAlert);
}

>>>>>>> f429dab1f784c37402dd969d37fdeb9a9e394b45
