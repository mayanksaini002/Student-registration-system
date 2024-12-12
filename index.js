 //calling all the required elements
 
 const studentName = document.querySelector("#student-name");

 const studentId = document.querySelector("#student-id");
 
 const studentEmail = document.querySelector("#email-id");

 const studentContact = document.querySelector("#contact-no");

 const button = document.querySelector(".submit-btn");

 const detailsList = document.querySelector(".table-body");

 let editingRow = null;
  //adding eventlistener to submit details button
 button.addEventListener("click" , addStudentDetails);

  
 //function to add details from input fields to the created table(row-wise).

 function addStudentDetails(){

    if (!validateInputs()) return;
    
    if (editingRow) {
        const cells = editingRow.querySelectorAll("p");
        cells[0].textContent = studentName.value;
        cells[1].textContent = studentId.value;
        cells[2].textContent = studentEmail.value;
        cells[3].textContent = studentContact.value

        // Clear the editingRow reference and reset the form
        editingRow = null;
    } else {
    //  creating a new div
    const name = document.createElement("div");
    name.classList.add("table-row");
   
//   adding name to the table
    const text = document.createElement("p");
    text.innerHTML=studentName.value;
    name.appendChild(text);

    if(studentName.value == '') return;
  
    //adding id to table
    const num =document.createElement("p");
    num.innerHTML= studentId.value;
    name.appendChild(num);

    //adding mail to the table
    const mail =document.createElement("p");
    mail.innerHTML= studentEmail.value;
    name.appendChild(mail);

    //adding phone number to the table
    const num2 =document.createElement("p");
    num2.innerHTML= studentContact.value;
    name.appendChild(num2);
 
   //adding delete button to delete entries
    const delButton = document.createElement("button");
    delButton.classList.add("delButton");
    delButton.innerHTML = "delete";
    name.appendChild(delButton);

   //adding edit button to edit entries
    const resButton = document.createElement("button");
    resButton.classList.add("resButton");
    resButton.innerHTML = "Edit";
    name.appendChild(resButton);
   

   //appending name to detailslist
    detailsList.appendChild(name);

   
     

    // Add event listener for the Reset button
    resButton.addEventListener("click", function () {
        // Populate the input fields with values from this row
        studentName.value = text.textContent;
        studentId.value = num.textContent;
        studentEmail.value = mail.textContent;
        studentContact.value = num2.textContent;

        editingRow = name;
    });

    delButton.addEventListener("click", function () {
        // Remove the row from the table
        name.remove();
    });
}



     // Clear all input fields
     studentName.value = '';
     studentId.value = '';
     studentEmail.value = '';
     studentContact.value = '';

   
}
  //code to validate entries in the input field
function validateInputs() {
    const nameRegex = /^[a-zA-Z\s]+$/;
    const idRegex = /^\d+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const contactRegex = /^\d+$/;

    if (!nameRegex.test(studentName.value)) {
        alert("Student name must contain only letters.");
        return false;
    }
    if (!idRegex.test(studentId.value)) {
        alert("Student ID must contain only numbers.");
        return false;
    }
    if (!emailRegex.test(studentEmail.value)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (!contactRegex.test(studentContact.value)) {
        alert("Contact number must contain only numbers.");
        return false;
    }
    return true;
}
    
     


  


