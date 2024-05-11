const promiseAll = function (promises) {
  const resPromise = new Promise((resolve, reject) => {
    const res = [];

    if (promises.length === 0) {
      resolve(res);
      return;
    }

    let done = 0;

    promises.forEach((promise, index) => {
      promise
        .then(value => {
          res[index] = value;
          done++;
          if (done === promises.length) {
            const hasEmpty = res.some(result => result === undefined);
            if (hasEmpty) {
              reject(index);
            } else {
              resolve(res);
            }
          }
        })
        .catch(error => {
          reject(error);
        });
    });
  });

  return resPromise;
};









//test
const promises = [
    Promise.resolve(1),
    Promise.reject(2),
    Promise.reject(3)
  ];
  
  promiseAll(promises)
    .then(results => {
      console.log("All promises resolved:", results); 
    })
    .catch(error => {
      console.error("At least one promise rejected:", error);
    });