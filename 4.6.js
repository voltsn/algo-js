const factorial = (a) => {
    if (a < 0) {
        return null;
    }

    if (a === 0){
        return 1;
    }

    return factorial(a - 1) * a;
}