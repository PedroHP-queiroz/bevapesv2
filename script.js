function isOldEnough(birthYear) {
    // Get the current year
    const currentYear = new Date().getFullYear();

    // Calculate the age
    const age = currentYear - birthYear;

    // Set the minimum age requirement
    const minimumAge = 18;

    // Check if the user is old enough
    return age >= minimumAge;
}

// Example usage:
const birthYear = 2020; // Replace with the user's actual birth year
const oldEnough = isOldEnough(birthYear);

if (oldEnough) {
    console.log("You are old enough. Access granted!");
} else {
    console.log("Sorry, you are not old enough. Access denied.");
}
// isOldEnough()
const menu = document.querySelector(".menu");
const NavMenu = document.querySelector(".nav-menu");

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})