// content.js

document.addEventListener("DOMContentLoaded", function () {
    const projectsData = [
        // UI/UX
        {
            category: "ui/ux",
            title: "Coming soon",
            imgSrc: "./assets/images/shape.png",
            link: "",
        },


        // Application
        {
            category: "applications",
            title: "Coming soon",
            imgSrc: "./assets/images/shape.png",
            link: "",
        },


        //  Web Development
        {
            category: "web development",
            title: "Light Yellow Monochrome",
            imgSrc: "./assets/images/porto-web1.jpg",
            link: "https://www.instagram.com/p/C1l2mR0r77v/?utm_source=ig_web_copy_link&igsh=NTYzOWQzNmJjMA==",
        },

        {
            category: "web development",
            title: "Dark Yellow Monochrome",
            imgSrc: "./assets/images/porto-web2.jpg",
            link: "https://www.instagram.com/p/C1l29eELop4/?utm_source=ig_web_copy_link&igsh=NTYzOWQzNmJjMA==",
        },

        {
            category: "web development",
            title: "Light Green Monochrome",
            imgSrc: "./assets/images/porto-web3.jpg",
            link: "https://www.instagram.com/p/C1l3eV-LwhA/?utm_source=ig_web_copy_link&igsh=NTYzOWQzNmJjMA==",
        },

        {
            category: "web development",
            title: "Dark Green Monochrome",
            imgSrc: "./assets/images/porto-web4.jpg",
            link: "https://www.instagram.com/p/C1l4ei9LzOW/?utm_source=ig_web_copy_link&igsh=NTYzOWQzNmJjMA==",
        },

    ];

    const projectList = document.querySelector(".project-list");
    const filterButtons = document.querySelectorAll(".filter-item button");
    const selectValue = document.querySelector(".select-value");
    const selectItems = document.querySelectorAll(".select-item button");

    function createProjectItem(data) {
        const projectItem = document.createElement("li");
        projectItem.classList.add("project-item", "active");
        projectItem.setAttribute("data-filter-item", "");
        projectItem.setAttribute("data-category", data.category);

        projectItem.innerHTML = `
        <a href="${data.link}" target="_blank">
          <figure class="project-img">
            <div class="project-item-icon-box">
            <ion-icon name="eye-outline"></ion-icon>
            </div>
            <img src="${data.imgSrc}" alt="${data.title}" loading="lazy">
          </figure>
          <h3 class="project-title">${data.title}</h3>
          <p class="project-category">${data.category.toUpperCase()}</p>
        </a>
      `;

        return projectItem;
    }

    function renderProjects() {
        projectsData.forEach((projectData) => {
            const projectItem = createProjectItem(projectData);
            projectList.appendChild(projectItem);
        });
    }

    function filterProjects(category) {
        const projectItems = document.querySelectorAll(".project-item");

        projectItems.forEach((item) => {
            const itemCategory = item.getAttribute("data-category").toLowerCase();

            if (category.toLowerCase() === "all" || itemCategory === category.toLowerCase()) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    }

    function handleFilterClick(e) {
        const category = e.target.textContent;
        filterProjects(category);
    }

    function handleSelectItemClick(e) {
        const category = e.target.textContent;
        selectValue.textContent = category;
        filterProjects(category);
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", handleFilterClick);
    });

    selectItems.forEach((item) => {
        item.addEventListener("click", handleSelectItemClick);
    });

    renderProjects();
});
