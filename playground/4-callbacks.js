// setTimeout(() => {
//   console.log("2s done");
// }, 2000);

// const names = ["abc", "bd", "cferb"];
// const shortNames = names.filter((name) => {
//   return name.length <= 3;
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     callback(data);
//   }, 2000);
// };

// geocode("Philadelphia", (data) => {
//   console.log(data);
// });

const doWorkCallback = (callback) => {
  setTimeout(() => {
    // callback("This is my error", undefined);
    callback(undefined, [1, 4, 7]);
  }, 2000);
};

doWorkCallback((error, result) => {
  if (error) {
    return console.log(error);
  }

  console.log(result);
});
