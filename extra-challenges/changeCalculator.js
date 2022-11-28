function computeChange(price, moneyHanded) {
    if (price < 0 || moneyHanded < 0){
        return [];
    }

    if (moneyHanded < price) {
        return [];
    }
    
    // calculate the change owed in cents
    let changeOwed = Math.floor((moneyHanded - price) * 100);
    if (changeOwed === 0){
        return [];
    }

    let euros = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.50, 0.20, 0.10, 0.05, 0.02, 0.01]

    let notesAndCoins = [];
    let i = 0;
    while (changeOwed > 0 && i < euros.length){
        
        // Calculate how much of one note or coin to give back.
        let quantity = Math.floor(changeOwed / toCents(euros[i]));
        for (let j = 0; j < quantity; j++){
            notesAndCoins.push(euros[i]);
        }

        // Reduce the change owed.
        changeOwed = Math.floor(changeOwed % toCents(euros[i]));
        i++;
    }

    return notesAndCoins;
}


const toCents = (amount) => {
    return amount * 100;
}


// An item costs 12,30€ 
// We hand a 50€ bill
const change1 = computeChange(12.3, 50)

// Should return 37,70€
console.log(change1) // [20, 10, 5, 2, 0.5, 0.2]


const change2 = computeChange(17.41, 20)
console.log(change2) // [2, 0.5, 0.05, 0.02, 0.02]