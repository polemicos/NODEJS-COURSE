const promiseAllSettled = function (promises) {
    const resPromise = new Promise((resolve) => {
        const res = [];

        if (promises.length === 0) {
            resolve(res);
            return;
        }
        let done = 0;

        promises.forEach((promise, index) => {
            promise
                .then(value => {
                    res[index] = { status: 'fulfilled', value };
                })
                .catch(reason => {
                    res[index] = { status: 'rejected', reason };
                })
                .finally(() => {
                    done++;
                    if (done === promises.length) {
                        resolve(res);
                    }
                });
        });
    });
    return resPromise;
};



//test

const promises = [
    Promise.resolve(1),
    Promise.reject("Error occurred"),
    Promise.resolve(3)
];

promiseAllSettled(promises)
    .then(results => {
        console.log("All promises settled:", results);
        // Expected: [{ status: 'fulfilled', value: 1 },
        //            { status: 'rejected', reason: 'Error occurred' },
        //            { status: 'fulfilled', value: 3 }]
    });