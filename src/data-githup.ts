/* 
- Select Element,
- Add Projects Page Github
*/
const textProject = document.getElementById("Projects")?.textContent
const projects = document.getElementById("Projects");

if (projects) {
    projects.addEventListener("click", (e) => {
        e.preventDefault();
        /* Add Page Project For Dom */
        const pageProject = document.createElement("div");
        /* Create Span Element*/
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
        const spanExit = spanParent.querySelector(".child-0") as HTMLSpanElement;
        const spanSmallPage = spanParent.querySelector(".child-1") as HTMLSpanElement;
        const spanBigPage = spanParent.querySelector(".child-2") as HTMLSpanElement;
        spanExit.addEventListener("click", (event) => {
            event.stopPropagation();
            pageProject.remove();
        });
        spanSmallPage.addEventListener("click", () => {
            if (pageProject.classList.contains("small-page")) {
                pageProject.classList.remove("small-page");
            } else {
                pageProject.classList.add("small-page");
            }
        });
        spanBigPage.addEventListener("click", () => {
            if (pageProject.classList.contains("Big-page")) {
                pageProject.classList.remove("Big-page");
            } else {
                pageProject.classList.add("Big-page");
            }
        });
        /* Create Div For Add Api Project*/
        const parentDivs = document.createElement("div")
        parentDivs.classList.add("parent-Api")
        /* Append Child For Page Project*/
        pageProject.appendChild(parentDivs)
        /* Create Div Project*/
        fetch("https://api.github.com/users/Nour-ibrahem30/repos")
            .then((result) => {
                let myData = result.json()
                return myData
            }).then(fullDate => {
                let parentProject = document.createElement("div") as HTMLElement;
                parentProject.classList.add("parent-project");
                for (let i = 0; i < fullDate.length; i++) {
                    /* Create Div Project*/
                    let divProject = document.createElement("div") as HTMLElement;
                    divProject.classList.add("div-project");
                    /* Select Items*/
                    let paragraph = document.createElement("p") as HTMLParagraphElement;
                    let linkClone = document.createElement("a") as HTMLAnchorElement;
                    let livePage = document.createElement("a") as HTMLAnchorElement;
                    livePage.href = `https://nour-ibrahem30.github.io/-/${fullDate[i].name}`;
                    livePage.target = "_blank";
                    /* Add Text To Items*/
                    paragraph.textContent = fullDate[i].name;
                    linkClone.href = fullDate[i].html_url;
                    linkClone.target = "_blank";
                    linkClone.textContent = "Github";
                    livePage.textContent = "Live Page";
                    /* Append Items To Parent Project*/
                    divProject.appendChild(paragraph);
                    divProject.appendChild(livePage);
                    divProject.appendChild(linkClone);
                    parentProject.appendChild(divProject);
                    parentDivs.appendChild(parentProject);
                }
                console.log(fullDate);
            }).catch(() => {
                console.log("Var Error");
            })
    });
}