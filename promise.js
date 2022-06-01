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

const checkAvailable = (resolve, reject) => {
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

const checkStock = (resolve, reject) => {
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

const brewCoffee = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("brew the ingredients");
    }, 1000);
  });
};

const makeCoffee = (resolve, reject) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Coffee is made");
    }, 2000);
  });
};

const makeCoffeeComplete = async () => {
  try {
    await checkAvailable();
    await checkStock();
    await Promise.all([brewCoffee(), makeCoffee()]);
    console.log("Coffee is made");
  } catch (error) {
    console.log(error);
  }
};

makeCoffeeComplete();
