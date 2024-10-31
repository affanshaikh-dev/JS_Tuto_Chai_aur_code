// Immediately Invoked Function Expression (IIFE)
(function con() { // this function is a named IIFE
    console.log(`DB Connected`);
})();

((name) => { // and this is unnamed or simple IIFE
    console.log(`DB CONNECT TWO ${name}`);
})('affan');