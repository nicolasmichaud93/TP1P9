// Mot de passe initial
let password = localStorage.getItem("blocnotes-password") || "1234";

// Récupération des éléments
const loginForm = document.getElementById("login-form");
const passwordInput = document.getElementById("password");
const notes = document.getElementById("notes");
const buttonsDiv = document.getElementById("buttons");
const editButton = document.getElementById("edit-button");
const saveButton = document.getElementById("save-button");
const logoutButton = document.getElementById("logout-button");
const changePasswordButton = document.getElementById("change-password-button");
const loginText = document.getElementById("login-text");

// Charger les notes si elles existent
notes.value = localStorage.getItem("blocnotes-content") || "";

// Connexion
loginForm.addEventListener("submit", function(e){
    e.preventDefault();
    if(passwordInput.value === password){
        loginForm.style.display = "none";
        notes.style.display = "block";
        buttonsDiv.style.display = "block";
        loginText.style.display = "none";
    } else {
        alert("Mot de passe incorrect !");
        passwordInput.value = "";
    }
});

// Modifier notes
editButton.addEventListener("click", function(){
    notes.removeAttribute("readonly");
    notes.focus();
    editButton.style.display = "none";
    saveButton.style.display = "inline";
});

// Sauvegarder notes
saveButton.addEventListener("click", function(){
    notes.setAttribute("readonly", true);
    localStorage.setItem("blocnotes-content", notes.value);
    editButton.style.display = "inline";
    saveButton.style.display = "none";
    alert("Notes sauvegardées !");
});

// Déconnexion
logoutButton.addEventListener("click", function(){
    notes.style.display = "none";
    buttonsDiv.style.display = "none";
    loginForm.style.display = "block";
    passwordInput.value = "";
});

// Changer mot de passe
changePasswordButton.addEventListener("click", function(){
    const current = prompt("Entrez le mot de passe actuel :");
    if(current !== password){
        alert("Mot de passe actuel incorrect !");
        return;
    }
    const newPassword = prompt("Entrez le nouveau mot de passe :");
    if(newPassword) {
        password = newPassword;
        localStorage.setItem("blocnotes-password", password);
        alert("Mot de passe modifié !");
    }
});
