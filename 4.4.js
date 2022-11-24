
// Consumes 2 arguments: 
//      inputAr: an array of strings.
//      n: an integer that must be > 0 and < inputAr length.
// Returns an array of size n containing randomly selected elements 
// of inputAr. 
function pickLearner(inputAr, n) {
    if (n < 0 || n >= inputAr.length){
        console.log("Incorrect value for n");
        return;
    }

    let randomLearners = [];
    for (let i = 0; i < n; i++){
        
        // Pick random learner.
        let index = Math.floor(Math.random() * inputAr.length);

        randomLearners.push(inputAr[index]);
    }

    return randomLearners;
}