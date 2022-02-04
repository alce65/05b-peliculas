async function makeAsync() {
    return [1, 2, 3];
}

(async () => {
    const data = await makeAsync();
    console.log(data);
    // pinta(data)
})();

/* const x = makeAsync();
x.then((data) => {
    console.log(data)
    pinta(data)
}); */
