"use strict";
function extractFirstImageFromMarkdown(markdown) {
    const imageRegex = /!\[[^\]]*\]\(([^\s)]+)(?:\s+"[^"]*")?\)/i;
    const match = markdown.match(imageRegex);
    return match ? match[1] : null;
}
function resolveRelativeImageUrl(path, repo) {
    const branch = repo?.default_branch || "main";
    return `https://raw.githubusercontent.com/Nour-ibrahem30/${repo.name}/${branch}/${path.replace(/^\//, "")}`;
}
async function urlExists(url) {
    try {
        const res = await fetch(url, { method: "HEAD" });
        return res.ok;
    }
    catch {
        return false;
    }
}
async function getRepoImageUrl(repo) {
    try {
        const readmeRes = await fetch(`https://api.github.com/repos/Nour-ibrahem30/${repo.name}/readme`);
        if (readmeRes.ok) {
            const readmeJson = await readmeRes.json();
            if (readmeJson?.content) {
                const md = atob(readmeJson.content.replace(/\n/g, ""));
                const imgUrl = extractFirstImageFromMarkdown(md);
                if (imgUrl) {
                    const isAbsolute = /^(https?:)?\/\//i.test(imgUrl);
                    const finalUrl = isAbsolute ? imgUrl : resolveRelativeImageUrl(imgUrl, repo);
                    if (await urlExists(finalUrl))
                        return finalUrl;
                }
            }
        }
    }
    catch { }
    const commonNames = [
        "screenshot.png", "screenshot.jpg", "screenshot.jpeg",
        "preview.png", "preview.jpg", "preview.jpeg",
        "cover.png", "cover.jpg", "cover.jpeg",
        "assets/screenshot.png", "assets/preview.png", "assets/cover.png",
        "images/screenshot.png", "images/preview.png", "images/cover.png"
    ];
    for (const name of commonNames) {
        const guess = resolveRelativeImageUrl(name, repo);
        if (await urlExists(guess))
            return guess;
    }
    return `https://opengraph.githubassets.com/1/Nour-ibrahem30/${repo.name}`;
}
function openProjectsOverlay() {
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
            const img = document.createElement("img");
            img.loading = "lazy";
            img.alt = `${repo.name} preview image`;
            const liveUrl = `https://nour-ibrahem30.github.io/${repo.name}/`;
            const microlink = `https://api.microlink.io/?url=${encodeURIComponent(liveUrl)}&screenshot=true&meta=false&embed=screenshot.url`;
            img.src = microlink;
            img.onerror = async () => {
                try {
                    const realUrl = await getRepoImageUrl(repo);
                    img.onerror = () => {
                        const fallback = repo?.owner?.avatar_url || "https://avatars.githubusercontent.com/u/0?v=4";
                        img.src = fallback;
                    };
                    img.src = realUrl;
                }
                catch {
                    const fallback = repo?.owner?.avatar_url || "https://avatars.githubusercontent.com/u/0?v=4";
                    img.src = fallback;
                }
            };
            const name = document.createElement("p");
            name.textContent = repo.name;
            const live = document.createElement("a");
            live.href = `https://nour-ibrahem30.github.io/${repo.name}/`;
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
            div.append(img, name, live, git, download);
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
}
window.addEventListener("load", () => {
    const projects = document.getElementById("Projects");
    if (projects) {
        projects.addEventListener("click", (e) => {
            e.preventDefault();
            openProjectsOverlay();
        });
    }
    document.addEventListener("click", (e) => {
        const target = e.target;
        const trigger = target?.closest?.("#Projects");
        if (trigger) {
            e.preventDefault();
            openProjectsOverlay();
        }
    });
});
//# sourceMappingURL=data-githup.js.map