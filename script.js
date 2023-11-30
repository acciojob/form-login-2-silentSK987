//your JS code here. If required.
const form =document.getElementById("form");
const submit =document.getElementById("submit");

let data=[];

const onSubmitForm = (event)=>{
    event.preventDefault(); 
    const empdata={
        firstName: event.target.firstname.value,
        lastName: event.target.lastname.value,
        phoneNumber: event.target.phone.value,
        email: event.target.email.value,
        
    }
    let fname=`First Name: ${empdata.firstName}
Last Name: ${empdata.lastName}
Phone Number: ${empdata.phoneNumber} 
Email ID: ${empdata.email}`
   alert(fname);
}
	
form.addEventListener("submit", onSubmitForm);
