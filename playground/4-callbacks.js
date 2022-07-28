setTimeout(() => {
  console.log("2s done");
}, 2000);

const names = ["abc", "bd", "cferb"];
const shortNames = names.filter((name) => {
  return name.length <= 3;
});

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
    callback(data);
  }, 2000);
};

geocode("Philadelphia", (data) => {
  console.log(data);
});
