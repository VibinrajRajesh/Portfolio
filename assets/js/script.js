window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    navbar.style.top = "0"; // Ensures it stays fixed
  });

function sendMail(event) {
    event.preventDefault();  // Prevent form submission and page reload

    var reason = document.getElementById("reason").value;
    var recipientEmail;

    // Check if reason is being set properly
    console.log('Selected reason:', reason);

    // Set the recipient email based on the selected option
    if (reason === "freelance") {
        recipientEmail = "rajeshvibinraj2001@gmail.com";
        subject = "Hiring for Freelance Work";
    } else if (reason === "feedback") {
        recipientEmail = "vibinrajesh2021@gmail.com"; 
        subject = "Feedback Review";
    } else {
        alert("Please select a reason for your message.");
        return; // Stop the function if no valid reason is selected
    }

    console.log('Recipient email:', recipientEmail);  // Debugging output

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        subject: subject,
        to_email: recipientEmail // Add the selected email here
    };

    console.log('Params to be sent:', params);  // Debugging output

    const serviceID = "service_obvbspa";
    const templateID = "template_5qxdg7i";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            // Clear form fields after successful submission
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your response sent successfully!!");
        })
        .catch(err => {
            console.log('Error sending email:', err); // Debugging output
            alert("There was an issue sending your email.");
        });
}



//Typing Effects Start
document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed(".typing-text", {
        strings: ["Frontend Developer", "Backend Developer", "Data Analyst", "Data Science","Freelancer"],
        loop: true,
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 500,
    });
});

document.addEventListener('DOMContentLoaded', function() {
    VanillaTilt.init(document.querySelectorAll(".tilts"), {
        max: 15,
        reverse: true
    });
});

function getprojects(){
    return fetch("./Projects/projects.json").then(response =>response.json()).then(data =>{return data.latestprojects});
}

function showProjects(projects){
    let projectsContainer = document.querySelector(".latestprojects .box-container");
    let projectsHTML = "";
    projects.forEach(projects =>{
        projectsHTML +=`
            <div class="col-md-3 thumb">
                <a href="${projects.link}"><img src="${projects.image}"/></a>
            </div>`
        });
    projectsContainer.innerHTML = projectsHTML;
}

getprojects().then(data => {
    showProjects(data);
})

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Portfolio | Vibinraj Rajesh";
            $("#favicon").attr("href", "assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "assets/images/favhand.png");
        }
    });

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
