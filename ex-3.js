//Exercise #3
let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

// Start coding here
getJohnProfile()
  .then(function(profileData) {
    console.log('Profile Data:', profileData);
    return getJohnOrders(); 
  })
  .then(function(ordersData) {
    console.log('Orders Data:', ordersData);
  })
  .catch(function(error) {
    console.error('Error:', error);
  });