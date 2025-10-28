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
            let parentProject = document.createElement("div");
            parentProject.classList.add("parent-project");
            for (let i = 0; i < fullDate.length; i++) {
                let divProject = document.createElement("div");
                divProject.classList.add("div-project");
                let paragraph = document.createElement("p");
                let linkClone = document.createElement("a");
                let livePage = document.createElement("a");
                livePage.href = `https://nour-ibrahem30.github.io/-/${fullDate[i].name}`;
                livePage.target = "_blank";
                paragraph.textContent = fullDate[i].name;
                linkClone.href = fullDate[i].html_url;
                linkClone.target = "_blank";
                linkClone.textContent = "Github";
                livePage.textContent = "Live Page";
                divProject.appendChild(paragraph);
                divProject.appendChild(livePage);
                divProject.appendChild(linkClone);
                parentProject.appendChild(divProject);
                parentDivs.appendChild(parentProject);
            }
            console.log(fullDate);
        }).catch(() => {
            console.log("Var Error");
        });
    });
}
const copyEmail = document.getElementById("copyEmail");
if (copyEmail) {
    copyEmail.addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText("nouribrahem207@gmail.com");
        alert("✅ Email copied to clipboard!");
    });
}
const copyPhone = document.getElementById("copyPhone");
if (copyPhone) {
    copyPhone.addEventListener("click", (e) => {
        e.preventDefault();
        navigator.clipboard.writeText("01141615397");
        alert("📞 Phone copied to clipboard!");
    });
}
//# sourceMappingURL=main.js.map