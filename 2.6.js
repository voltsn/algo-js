// Prompt the user for a number between 1 and 7.
// Display the weekday associated with the input.
let number = parseInt(window.prompt("Enter a number between 1 and 7"), 10);
switch (number) {
    case 1:
        alert("Monday");
        break;
    case 2:
        alert("Tuesday");
        break;
    case 3:
        alert("Wensday");
        break;
    case 4:
        alert("Thursday");
        break;
    case 5:
        alert("Friday");
        break;
    case 6:
        alert("Saturday");
        break;
    case 7:
        alert("Sunday");
        break;

    default:
        alert("The number must be between 1 and 7...");
        break;
}
