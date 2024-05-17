const formContactElement = document.getElementById('form-contact');


const formContactDataArray = [];




formContactElement.addEventListener('submit', function(event){
    event.preventDefault();
    console.log('vamos');

    //retrieve form values
    let name = document.getElementById('name-contact').value;
    let email = document.getElementById('email-contact').value;
    let message = document.getElementById('message-contact').value;

    const formData = {
			name: name,
			email: email,
			message: message,
		}
  formContactDataArray.push(formData);  
  console.log(formContactDataArray);

    const alertMessage = `Hallo ${name}. Vielen Dank für deine Message. Wir werden dir an ${email} antworten.`
    alert(alertMessage);
 document.getElementById('name-contact').value = "";
document.getElementById('email-contact').value = "";
document.getElementById('message-contact').value = "";
});


