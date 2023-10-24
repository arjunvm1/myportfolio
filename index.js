// function sendMail() {
//     var params = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         message: document.getElementById("message").value, 
//     };

//     const serviceID = "service_gfwjszd";
//     const templateID = "template_mgszwrf";

// emailjs
//     .send(serviceID,templateID, params)
//     .then((res) => {
//         document.getElementById("name").value = "";
//         document.getElementById("email").value = "";
//         document.getElementById("message").value = "";
//         console.log(res);
//         alert("your message sent successfully")
//     })
//     .catch((err) => console.log(err));
// }


const contactForm = document.querySelector("#contact-form");
const submitBtn = document.querySelector(".btn-primary");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const publicKey = "twQimUHPt_1lG6T-g";
const serviceID = "service_gfwjszd";
const templateID = "template_mgszwrf";

emailjs.init(publicKey);

contactForm.addEventListener("submit", e => {

    e.preventDefault();

    submitBtn.innerText = "Just A Moment...";

    const inputFields = {
        name: nameInput.value,
        email: emailInput.value,
        message:messageInput.value

    }

    emailjs.send(serviceID, templateID, inputFields)
    .then(() => {

        submitBtn.innerText = "Message Sent Successfully";

        nameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }, (error) => {

        console.log(error);

        submitBtn.innerText = "Something went wrong";
    });

});


