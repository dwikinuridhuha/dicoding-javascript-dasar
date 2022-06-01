const state = {
  stock: {
    coffeeBeans: 5000,
    water: 20000,
  },
  available: false,
};

const isStockReady = () => {
  if (state.stock.coffeeBeans > 500 && state.stock.water > 200) {
    return true;
  } else {
    return false;
  }
};

const isAvailable = () => {
  if (!state.available) {
    return true;
  } else {
    return false;
  }
};

const callBackPromiseAvailable = (resolve, reject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (isAvailable()) {
        resolve("Coffee is available");
      } else {
        reject("Coffee is not available");
      }
    }, 1000);
  });
};

const callBackPromiseStock = (resolve, reject) => {
  return new Promise((resolve, reject) => {
    state.available = true;
    if (isStockReady()) {
      resolve("Coffee is to make, because we have enough ingredients");
    } else {
      reject(
        "Coffee is not ready to make, because we don't have enough ingredients"
      );
    }
  });
};

const callBackPromiseMakeCoffee = (resolve, reject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Coffee is made");
    }, 2000);
  });
};

const makeCoffee = () => {
  callBackPromiseAvailable()
    .then((resolve) => {
      console.log(resolve);
      return callBackPromiseStock();
    })
    .then((resolve) => {
      console.log(resolve);
      return callBackPromiseMakeCoffee();
    })
    .then((resolve) => {
      console.log(resolve);
    })
    .catch((reject) => {
      console.log(reject);
    });
};

makeCoffee();
