
# React Suspense and Error Boundaries Demo

This React application demonstrates the use of Suspense for data fetching and Error Boundaries for handling errors gracefully. The app fetches the current time from an API and displays it, showcasing how Suspense can manage loading states and how Error Boundaries can handle any errors that occur during data fetching.

## Features

- **Data Fetching with Suspense:** Uses React's Suspense to handle asynchronous data fetching.
- **Error Handling with Error Boundaries:** Demonstrates the use of Error Boundaries to catch and handle errors in the component tree.
- **Custom Hook:** Encapsulates data fetching logic in a custom hook.

## Getting Started

## Usage

### Custom Hook: `useGetData`

The custom hook `useGetData` is used to fetch data from the specified URL. It leverages Suspense to handle loading states and wraps the promise to integrate with Suspense.

#### `useGetData.js` located at `src/fetch-suspense/api/useGetData.jsx`


### Promise Wrapper : `wrapPromise`

This promise wrapped is essential for the fetching to be suspense enabled data source, you can read more about it here `https://react.dev/reference/react/Suspense`

