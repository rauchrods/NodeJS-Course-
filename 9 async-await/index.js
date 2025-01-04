function delayFn(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Done");
    }, time);
  });
}

async function asyncFunction() {
  try {
    const data = await delayFn(2000);
    console.log(data);
  } catch (error) {
    console.log("error block", error);
  }
}

asyncFunction();
