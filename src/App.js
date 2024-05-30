import logo from './logo.svg';
import './App.css';
import FetchOnRender from './fetch-on-render';
import FetchThenRender from './fetch-then-render';
import FetchSuspense from './fetch-suspense';

function App() {
  return (
    <div className="App">
      {/* <FetchOnRender/> */}
      {/* <FetchThenRender/> */}
      <FetchSuspense/>
    </div>
  );
}

export default App;
