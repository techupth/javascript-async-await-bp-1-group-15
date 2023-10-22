// Exercise #4
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
// Start coding here
async function fetchData() {
  try {
    const profileData = await getJohnProfile(); 
    console.log('Profile Data:', profileData);
  } catch (error) {
    console.error('Error fetching John\'s profile:', error);
  }
}
fetchData();

