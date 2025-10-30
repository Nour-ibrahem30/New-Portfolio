"use strict";
let svgButtons = document.querySelectorAll("svg");
let svgPage = document.createElement("div");
let resume = document.querySelector(".resume");
svgPage.classList.add("svg-container");
svgButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        svgPage.classList.add("svg-page");
        ;
    });
});
const spanParent = document.createElement("div");
spanParent.className = "parent-span";
for (let i = 0; i < 3; i++) {
    const span = document.createElement("span");
    span.className = `child-${i}`;
    spanParent.appendChild(span);
}
const [exitBtn, smallBtn, bigBtn] = spanParent.querySelectorAll("span");
exitBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    svgPage.remove();
});
smallBtn.addEventListener("click", () => {
    svgPage.classList.toggle("small-page");
});
bigBtn.addEventListener("click", () => {
    svgPage.classList.toggle("Big-page");
});
document.body.appendChild(svgPage);
svgPage.appendChild(spanParent);
svgPage.appendChild(resume);
//# sourceMappingURL=svgButton.js.map