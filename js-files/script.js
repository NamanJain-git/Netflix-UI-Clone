
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
 const isLoggedIn = localStorage.getItem("isLoggedIn");

function authpage(){
    window.location.href="authentication.html";
}

document.getElementById("signlogbtn").addEventListener("click", authpage);

if (isLoggedIn === "true") {
    // User is logged in → show Logout
   document.getElementById("signlogbtn").textContent = "Logout";

// if (localStorage.getItem("isLoggedIn") === "true") {
    
// }
