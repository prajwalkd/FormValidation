const form = document.getElementById("f1");

form.addEventListener("submit", function() 
{
  

  const name = document.getElementById("uname").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name) 
  {
    alert("Username is required");
  } 
  else if(!email)
   {
    alert("Email is required.");
  }
  else if(!password)
  {
   alert("Password is required.");
 }

  else {
    alert("Form submitted successfully!");
  }
});
