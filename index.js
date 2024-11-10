document.addEventListener("DOMContentLoaded", function () {
    var toggleButton = document.getElementById("toggleSkillsButton");
    var skillsList = document.getElementById("skillsList");
    var toggleIcon = document.getElementById("toggleIcon");
    toggleButton.addEventListener("click", function () {
        // Toggle the visibility of the skills list
        skillsList.classList.toggle("hidden");
        // Change the button text and icon based on the visibility of the skills list
        if (skillsList.classList.contains("hidden")) {
            toggleButton.innerHTML = '<i class="fas fa-eye"></i> Show Skills'; // Eye icon for showing skills
        }
        else {
            toggleButton.innerHTML = '<i class="fas fa-eye-slash"></i> Hide Skills'; // Eye-slash icon for hiding skills
        }
    });
});
