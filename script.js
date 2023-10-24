function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// function sendemail() {
//   Email.send({
//     Host: "smtp.elasticemail.com",
//     Username: "username",
//     Password: "password",
//     To: 'them@website.com',
//     From: "you@isp.com",
//     Subject: "This is the subject",
//     Body: "And this is the body"
//   }).then(
//     message => alert(message)
//   )
// }
// function validate() {
//   var username = document.getElementById("name");
//   var email = document.getElementById("email");
//   if (username.Value.trim() == "") {
//     alert("blank username");
//     username.style.border = "solid 3px red";
//     return false;
//   }
//   else if (email.value.trim() == "") {
//     alert("blank email");
//     return false;
//   } else {
//     return true;
//   }
// }
// function message() {
//   var Name = document.getElementById('name');
//   var email = document.getElementById('email');
//   var message = document.getElementById('message');
//   const success = document.getElementById('success');
//   const danger = document.getElementById('danger');

//   if (Name.value === '' || email.value === '' || message.value === '') {
//     danger.style.display = 'block';
//   }
//   else {
//     setTimeout(() => {
//       Name.value = '';
//       email.value = '';
//       message.value = '';
//     }, 2000);

//     success.style.display = 'block';
//   }


//   setTimeout(() => {
//     danger.style.display = 'none';
//     success.style.display = 'none';
//   }, 4000);

// }const name = document.getElementById('name')
document.getElementById("submit").addEventListener("click", function () {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill in all required fields.");
    return;
  }

  var formData = {
    name: name,
    email: email
  };

  fetch("https://formsubmit.co/Sanusk9331@gmail.com", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(response => response.json())
    .then(data => {
      alert("Form submitted successfully!");
      // You can handle the response from the server here
    })
    .catch(error => {
      alert("An error occurred while submitting the form.");
      console.error(error);
    });
});