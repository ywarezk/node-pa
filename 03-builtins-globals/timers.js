

let counter = 0;

const idOfInterval = setInterval(function() {
    console.log(counter);
    counter++;
}, 1000);


setTimeout(() => {
    clearInterval(idOfInterval);
}, 3000);
