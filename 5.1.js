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

const main = () => {
    let tvSerie = askTvSerie();
    alert(JSON.stringify(tvSerie));
}

main();