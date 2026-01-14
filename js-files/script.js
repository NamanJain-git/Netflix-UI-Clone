
document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        let answer = item.nextElementSibling;
        let isVisible = answer.style.display === 'block';
        document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
        document.querySelectorAll('.faq-question span').forEach(span => span.textContent = '+');
        answer.style.display = isVisible ? 'none' : 'block';
        item.querySelector('span').textContent = isVisible ? '+' : '−';
    });
});

// const authBtn = document.getElementById("signlogbtn");
//  const isLoggedIn = localStorage.getItem("isLoggedIn");

// function authpage(){
//     window.location.href="authentication.html";
// }

// authBtn.addEventListener("click", authpage);

// if (isLoggedIn === "true") {
//     authBtn.textContent = "Logout";
// }

const authBtn = document.getElementById("signlogbtn");
const isLoggedIn = sessionStorage.getItem("isLoggedIn");


if (isLoggedIn === "true") {

  authBtn.textContent = "Logout";

  authBtn.addEventListener("click", function () {
   sessionStorage.removeItem("isLoggedIn");

    window.location.href = "authentication.html";
  });

} else {
 
  authBtn.textContent = "Sign Up";

  authBtn.addEventListener("click", function () {
    window.location.href = "authentication.html?action=signup";
  });
}

document.addEventListener("DOMContentLoaded", function () {
  const slider = document.getElementById("trending-slider");

  if (!slider) return;

  new Flickity(slider, {
  cellAlign: "left",
  contain: true,
  wrapAround: true,
  pageDots: false,
  autoPlay: 2000,
  pauseAutoPlayOnHover:false
});


});

