

// Error

const myError = new Error('some error happened');
myError.code = 'SOMEERROR';
// console.log(myError.stack);


try {
    throw myError;
} catch(err) {
    console.log(err.message);
} finally {
    console.log('will run if try success or failed');
}

