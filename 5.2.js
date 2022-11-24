const askTvSerie = () => {
    let name = window.prompt("Name of the tv series");
    let productionYear = parseInt(window.prompt("Year of production"));
    let cast = [];

    let castMemeber = "";
    while (true) {
        castMemeber = window.prompt("Cast Memebers (type q to end prompt");
        if (castMemeber === "q") {
            break;
        }

        cast.push(castMemeber);
    }

    return {name, productionYear, cast};
}

const randomizeCast = (tvSerie) => {
    let randomizedCast = [];
    let numberOfCastMemebers = tvSerie["cast"].length;

    for (let i = 0; i < tvSerie["cast"].length; i++){
        let randomIndex = Math.floor(Math.random() * numberOfCastMemebers);
        randomizedCast.push(tvSerie["cast"][randomIndex]);
    }

    return randomizedCast;
}

const main = () => {
    let tvSerie = askTvSerie(); 
    let randomizedCast = randomizeCast(tvSerie);

    console.log(randomizedCast);
}

main();