class NetworkError extends Error {
  constructor(message) {
    super(message);
    this.name = "NetworkError";
  }
}

// TODO: 1
const fetchingUserFromInternet = (isOffline) => {
  return new Promise((resolve, reject) => {
    if (!isOffline) {
      resolve({ name: "John", age: 18 });
    } else {
      reject(new NetworkError("Gagal mendapatkan data dari internet"));
    }
  });
};

// TODO: 2
const gettingUserName = async () => {
  try {
    const ok = await fetchingUserFromInternet(false);
    return ok.name;
  } catch (NetworkError) {
    return NetworkError;
  }
};

gettingUserName().then((name) => {
  console.log(name);
});
