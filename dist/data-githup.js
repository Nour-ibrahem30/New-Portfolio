"use strict";
window.addEventListener("load", () => {
    const projects = document.getElementById("Projects");
    if (!projects)
        return;
    projects.addEventListener("click", (e) => {
        e.preventDefault();
        if (document.querySelector(".page-project"))
            return;
        const pageProject = document.createElement("div");
        pageProject.className = "page-project";
        const spanParent = document.createElement("div");
        spanParent.className = "parent-span";
        for (let i = 0; i < 3; i++) {
            const span = document.createElement("span");
            span.className = `child-${i}`;
            spanParent.appendChild(span);
        }
        const parentApi = document.createElement("div");
        parentApi.className = "parent-Api";
        const search = document.createElement("input");
        search.className = "projects-search";
        search.placeholder = "Search projects...";
        parentApi.appendChild(search);
        const parentProject = document.createElement("div");
        parentProject.className = "parent-project";
        parentApi.appendChild(parentProject);
        pageProject.append(spanParent, parentApi);
        document.body.appendChild(pageProject);
        const [exitBtn, smallBtn, bigBtn] = spanParent.querySelectorAll("span");
        exitBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            pageProject.remove();
        });
        smallBtn.addEventListener("click", () => {
            pageProject.classList.toggle("small-page");
        });
        bigBtn.addEventListener("click", () => {
            pageProject.classList.toggle("Big-page");
        });
        fetch("https://api.github.com/users/Nour-ibrahem30/repos")
            .then((res) => res.json())
            .then((repos) => {
            repos.forEach((repo) => {
                const div = document.createElement("div");
                div.className = "div-project";
                const name = document.createElement("p");
                name.textContent = repo.name;
                const live = document.createElement("a");
                live.href = `https://nour-ibrahem30.github.io/-/${repo.name}`;
                live.target = "_blank";
                live.textContent = "Live Page";
                const git = document.createElement("a");
                git.href = repo.html_url;
                git.target = "_blank";
                git.textContent = "Github";
                const download = document.createElement("a");
                download.href = `https://github.com/Nour-ibrahem30/${repo.name}/archive/refs/heads/${repo.default_branch}.zip`;
                download.textContent = "Download ZIP";
                download.target = "_blank";
                div.append(name, live, git, download);
                parentProject.appendChild(div);
            });
        })
            .catch(() => {
            const err = document.createElement("p");
            err.textContent = "Error loading projects.";
            parentProject.appendChild(err);
        });
        search.addEventListener("input", () => {
            const q = search.value.toLowerCase();
            const cards = parentProject.querySelectorAll(".div-project");
            cards.forEach((card) => {
                const name = card.querySelector("p")?.textContent?.toLowerCase() || "";
                card.style.display = name.includes(q) ? "block" : "none";
            });
        });
    });
});
//# sourceMappingURL=data-githup.js.map