import axios from "axios";
import { useEffect, useState } from "react";
import wrapPromise from "./wrapPromise";

function useGetData(url) {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const promise = axios
        .get(url)
        .then((res) => {
          if (res.status === 404) {
            throw new Error("Resource not found (404)");
          }
          if (res.status === 500) {
            throw new Error("Internal Server Error (500)");
          }
          return res.data;
        })
        .catch((err) => {
          const errorMessage = err.response
            ? err.response.statusText
            : err.message;
          throw new Error(errorMessage);
        });
      setResource(wrapPromise(promise));
    };

    getData();
  }, [url]);

  return resource;
}

export default useGetData;
