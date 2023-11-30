//your JS code here. If required.
const form =document.getElementById("form");
const submit =document.getElementById("submit");

let data=[];

const onSubmitForm = (event)=>{
    event.preventDefault(); 
    const empdata={
        firstName:document.getElementById("name").value,
        lastName: document.getElementById("lastname").value,
        phoneNumber:document.getElementById("phonenum").value,
        email:document.getElementById("email").value,
        
    }
    let fname=`First Name: ${empdata.firstName}
Last Name: ${empdata.lastName}
Phone Number: ${empdata.phoneNumber} 
Email ID: ${empdata.email}`
   alert(fname);
}
	
form.addEventListener("submit", onSubmitForm);
