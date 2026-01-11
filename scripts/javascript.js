/*
Author: Li Weiqi
Course: CIS133DA
Section: #31862
Lesson: 11
*/

// Display last modified date on the page
const lastModifiedElement = document.getElementById("lastModified");
if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
}


// Show alert when form is submitted
function formSubmit() {
    alert("Form has been submitted successfully!");
}

// Show reset message when form is reset
function formReset() {
    const resetMessage = document.getElementById("resetMessage");
    if (resetMessage) {
        resetMessage.style.visibility = "visible";
    }
}