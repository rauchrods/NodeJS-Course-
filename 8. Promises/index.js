function delayFn(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, time);
  });
}

const data = delayFn(2000)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("error block", err);
  });
