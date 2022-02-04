const f = function (callback) {
    const z = 22;

    const foo = function () {
        callback();
        console.log(z);
    };

    return foo;
};

f(() => {
    console.log('callback');
})();
