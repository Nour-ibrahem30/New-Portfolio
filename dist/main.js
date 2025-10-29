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