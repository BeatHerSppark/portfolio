const projectsButtonsDiv = document.getElementById("projects__buttons");
const projectsButtons = projectsButtonsDiv.getElementsByTagName("button");

window.onload = function () {
  setProjects("All");
};

let projectSelectionState = "All";

const projects = [
  {
    title: "Twitter Clone",
    technology: "MERN Stack",
    description: "A full feature responsive social media application.",
    img: "images/twitter_clone.png",
  },
  {
    title: "Budgeting App",
    technology: "Django",
    description:
      "A handy app for tracking and analyzing spendings and earnings.",
    img: "images/budgeting_app.png",
  },
  {
    title: "Restaurant website",
    technology: "Designs",
    description: "A modern and intuitive design for a restaurant's website.",
    img: "images/restaurant_design.png",
  },
  {
    title: "Inventory management app",
    technology: "Django",
    description: "Lightweight user-friendly app for inventory management.",
    img: "images/inventory_app.png",
  },
];

const handleProjClick = (e) => {
  if (e.classList.contains("button__active")) return;

  for (let i = 0; i < projectsButtons.length; i++) {
    if (projectsButtons[i].classList.contains("button__active")) {
      projectsButtons[i].classList.remove("button__active");
      break;
    }
  }
  document.getElementById("projects__container").innerHTML = "";
  e.classList.add("button__active");
  projectSelectionState = e.innerText;
  showItems(projectSelectionState);
};

const showItems = (selection) => {
  switch (selection) {
    case "All":
      setProjects("All");
      break;
    case "MERN Stack":
      setProjects("MERN Stack");
      break;
    case "Django":
      setProjects("Django");
      break;
    case "Designs":
      setProjects("Designs");
      break;
    default:
      break;
  }
};

const setProjects = (type) => {
  for (let i = 0; i < projects.length; i++) {
    if (projects[i].technology == type || type == "All") {
      const project = document.createElement("div");
      const ProjectImg = document.createElement("div");
      const ProjectText = document.createElement("div");
      const Title = document.createElement("h3");
      const Description = document.createElement("p");

      Title.appendChild(document.createTextNode(projects[i].title));
      Description.appendChild(document.createTextNode(projects[i].description));
      ProjectText.appendChild(Title);
      ProjectText.appendChild(Description);
      ProjectText.classList.add("project__text");
      ProjectImg.classList.add("project__img");
      ProjectImg.style.backgroundImage = `url(${projects[i].img})`;
      project.classList.add("project");
      project.appendChild(ProjectImg);
      project.appendChild(ProjectText);
      project.innerHTML += `<svg
              viewBox="0 0 20 20"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              fill="#ffffff"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                <title>github [#ffffff]</title>
                <desc>Created with Sketch.</desc>
                <defs></defs>
                <g
                  id="Page-1"
                  stroke="none"
                  stroke-width="1"
                  fill="none"
                  fill-rule="evenodd"
                >
                  <g
                    id="Dribbble-Light-Preview"
                    transform="translate(-140.000000, -7559.000000)"
                    fill="#ffffff"
                  >
                    <g id="icons" transform="translate(56.000000, 160.000000)">
                      <path
                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                        id="github-[#ffffff]"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </svg>`;
      document.getElementById("projects__container").appendChild(project);
    }
  }
};

const burgerClick = () => {
  const mobileMenu = document.getElementById("mobile__menu");
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("mobile__list");
  } else {
    mobileMenu.classList.remove("mobile__list");
    mobileMenu.classList.add("hidden");
  }
};

window.addEventListener("mouseup", (event) => {
  const mobileMenu = document.getElementById("mobile__menu");
  if (
    mobileMenu.classList.contains("mobile__list") &&
    !event.target.closest("#mobile__menu")
  ) {
    mobileMenu.classList.remove("mobile__list");
    mobileMenu.classList.add("hidden");
  }
});

const burger = document.getElementById("burger");
burger.addEventListener("click", burgerClick);
