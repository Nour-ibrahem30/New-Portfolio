"use strict";
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
let hours = today.getHours();
const minutes = today.getMinutes();
const ampm = hours >= 12 ? "PM" : "AM";
hours = hours % 12;
hours = hours ? hours : 12;
const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
const spanTime = document.querySelector('.time');
if (spanTime) {
    spanTime.innerHTML = `${hours}:${formattedMinutes} ${ampm} : ${day}/${month}/${year}`;
}
const textProject = document.getElementById("Projects")?.textContent;
const projects = document.getElementById("Projects");
if (projects) {
    projects.addEventListener("click", (e) => {
        e.preventDefault();
        const pageProject = document.createElement("div");
        const spanParent = document.createElement("div");
        for (let i = 0; i < 3; i++) {
            const spanChild = document.createElement("span");
            spanChild.classList.add(`child-${i}`);
            spanParent.appendChild(spanChild);
        }
        spanParent.classList.add("parent-span");
        pageProject.classList.add("page-project");
        pageProject.appendChild(spanParent);
        document.body.appendChild(pageProject);
        const spanExit = spanParent.querySelector(".child-0");
        const spanSmallPage = spanParent.querySelector(".child-1");
        const spanBigPage = spanParent.querySelector(".child-2");
        spanExit.addEventListener("click", (event) => {
            event.stopPropagation();
            pageProject.remove();
        });
        spanSmallPage.addEventListener("click", () => {
            if (pageProject.classList.contains("small-page")) {
                pageProject.classList.remove("small-page");
            }
            else {
                pageProject.classList.add("small-page");
            }
        });
        spanBigPage.addEventListener("click", () => {
            if (pageProject.classList.contains("Big-page")) {
                pageProject.classList.remove("Big-page");
            }
            else {
                pageProject.classList.add("Big-page");
            }
        });
        const parentDivs = document.createElement("div");
        parentDivs.classList.add("parent-Api");
        pageProject.appendChild(parentDivs);
        fetch("https://api.github.com/users/Nour-ibrahem30/repos")
            .then((result) => {
            let myData = result.json();
            return myData;
        }).then(fullDate => {
            let div = document.createElement("div");
            for (let i = 0; i < fullDate.length; i++) {
                let h1 = document.createElement("p");
                h1.textContent = fullDate[i].name;
                div.appendChild(h1);
                console.log(fullDate[i].name);
                parentDivs.appendChild(div);
            }
            console.log(fullDate);
            return fullDate;
        }).catch(() => {
            console.log("Var Error");
        });
    });
}
//# sourceMappingURL=main.js.map