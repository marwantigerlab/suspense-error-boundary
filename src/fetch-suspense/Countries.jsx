import { Suspense, useDeferredValue, useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

import CountryList from "./CountyList";
import Time from "./Time";

// wrapping with suspense basically means, dont block while resolving

// Todos:

// to look into error boundary triggering a re-render of failed component
// to look into triggering more promises and seeing how suspense behaves
// what happens if we wrap the ones that takes less time
// useDeferredValue gets re-computed when all queued renders are flushed

const baseurl = "http://worldtimeapi.org/api/timezone/Asia";

const Countries = () => {
  const [url, setUrl] = useState(
    "http://worldtimeapi.org/api/timezone/Asia/Kolkata"
  );
  const [city, setCity] = useState("Kolkata");
  const deferredCity = useDeferredValue(city);

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    setUrl(`${baseurl}/${deferredCity}`);
  }, [deferredCity]);

  return (
    <>
      <h2>Countries with Time - Suspense & Error Boundaries</h2>

      <input placeholder="city name" onChange={handleChange} />

      {/* 404 */}
      <ErrorBoundary
        fallback={<p>Something went wrong in fetching time</p>}
        onReset={() => {
          setCity("Kolkata");
        }}
        resetKeys={[deferredCity]}
      >
        <Suspense fallback={<p>Loading time...</p>}>
          <Time url={url} />
        </Suspense>
      </ErrorBoundary>

      <ErrorBoundary
        fallback={<p>Something went wrong in fetching countries</p>}
      >
        <Suspense fallback={<p>Loading countries...</p>}>
          <CountryList />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Countries;
