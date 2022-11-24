// Prompt user for their favorite number
// untill they enter 42.
while (true) {
    let favoriteNumber = parseInt(window.prompt("What is your favorite number?"), 10);
    if (favoriteNumber !== 42) {
        alert("Are you sure?");
    } else {
        break;
    }   
}
