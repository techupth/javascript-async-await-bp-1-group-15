// Exercise #6
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
async function fetchData() {
  try{
    const profileData = await getJohnProfile();
    console.log('Profile Data:',profileData);

    const orderData = await getJohnOrders();
    console.log('Orders Data:',orderData);
  } catch(error){
    console.error('Error:',error);
  }
}
fetchData();