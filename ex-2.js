//Exercise #2
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

// Start coding here
getJohnProfile().then(function(data){
  console.log(data);
}).catch(function(error) {
  console.error('Error fetching John\'s profile:', error);
});