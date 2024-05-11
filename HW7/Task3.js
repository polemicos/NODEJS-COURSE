const chainPromises = function(funcs) {
  return new Promise((resolve, reject) => {
    let res, index = 0;
    const execute = function() {
      if (index < funcs.length) {
        const curr = funcs[index];
        curr(res)
          .then(chainRes => {
            res = chainRes;
            index++;
            execute();
          })
          .catch(error => {
            reject(error);
          });
      } else {
        resolve(res);
      }
    };

    execute();
  });
};





//test

function asyncFunction1() {
    return Promise.resolve("Result from asyncFunction1");
  }
  
  function asyncFunction2(data) {
    return Promise.resolve(data + " - Result from asyncFunction2");
  }
  
  function asyncFunction3(data) {
    return Promise.resolve(data + " - Result from asyncFunction3");
  }
  
  const functionsArray = [asyncFunction1, asyncFunction2, asyncFunction3];
  
  chainPromises(functionsArray)
    .then(result => {
      console.log("Chained promise result:", result);
      // Expected: "Result from asyncFunction1 - Result from asyncFunction2 - Result from asyncFunction3"
    })
    .catch(error => {
      console.error("Chained promise error:", error);
    });