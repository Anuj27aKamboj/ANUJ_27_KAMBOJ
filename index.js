const resDownloadBtn = document.querySelector(".resume-donload-btn");
const logoProfileBtn = document.querySelector(".logo-profile");

function displayResume(){
    resDownloadBtn.style.display = "block";
}

logoProfileBtn.addEventListener("click", displayResume);

