function getprojects() {
    return fetch("projects.json")
        .then(response => response.json())
        .then(data => data.projects);
}

function showProjects(projects) {
    const projectsContainer = document.querySelector(".Projects .box-container");
    let projectsHTML = "";

    projects.forEach(project => {
        let filterClass = "";

        // Assign class based on category using switch case
        switch (project.category) {
            case "Data Analyst":
                filterClass = "DA";
                break;
            case "Web Development":
                filterClass = "WD";
                break;
            case "Data Science":
                filterClass = "DS";
                break;
            default:
                filterClass = "other"; // Assign a default class if category doesn't match
        }

        projectsHTML += `
            <div class="col-md-3 thumb ${filterClass}">
              <div class="flip-card">
        <div class="flip-card-inner">
          <!-- Front Side -->
          <div class="flip-card-front">
            <a href="${project.link}">
              <img src="${project.image}" alt="${project.name}">
            </a>
            <h3>${project.name}</h3>
          </div>
          <!-- Back Side -->
          <div class="flip-card-back">
            <h3>${project.name}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="btn">View Project</a>
          </div>
        </div>
      </div>
            </div>
        `;
    });

    projectsContainer.innerHTML = projectsHTML;
}

function filterProjects(filter) {
    const allProjects = document.querySelectorAll(".box-container .thumb");

    allProjects.forEach(project => {
        let shouldDisplay;

        // Determine visibility using switch case
        switch (filter) {
            case "*": // Show all projects
                shouldDisplay = true;
                break;
            case "DA": // Show only Data Analyst projects
                shouldDisplay = project.classList.contains("DA");
                break;
            case "WD": // Show only Web Development projects
                shouldDisplay = project.classList.contains("WD");
                break;
            case "DS": // Show only Web Development projects
                shouldDisplay = project.classList.contains("DS");
                break;
            default: // Hide projects if filter doesn't match
                shouldDisplay = false;
        }

        project.style.display = shouldDisplay ? "block" : "none";
    });
}

// Attach event listeners to filter buttons
document.querySelectorAll("#filters .btn").forEach(button => {
    button.addEventListener("click", () => {
        // Update active button class
        document.querySelectorAll("#filters .btn").forEach(btn => btn.classList.remove("is-checked"));
        button.classList.add("is-checked");

        // Get filter class from data-filter attribute
        const filter = button.getAttribute("data-filter").replace(".", ""); // Remove "." for filtering logic
        filterProjects(filter);
    });
});

// Fetch and display projects on page load
getprojects().then(data => {
    showProjects(data);
    filterProjects("*"); // Show all projects initially
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
