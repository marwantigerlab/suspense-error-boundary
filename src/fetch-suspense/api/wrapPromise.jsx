function wrapPromise(promise) {
  let status = "pending";
  let response;

  const suspender = promise.then(
    (res) => {
      status = "success";
      response = res;
    },
    (err) => {
      status = "error";
      response = err;
    }
  );

  return () => {
    switch (status) {
      case "pending":
        throw suspender;
      case "success":
        return response;
      case "error":
        throw response;
      default:
        throw new Error("Unknown status");
    }
  };
}


export default wrapPromise;

