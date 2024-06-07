import { Provider } from 'react-redux';
import './App.css';
import Body from './component/Body';
import appstore from './utils/appstore';

function App() {
  return (
    <div className="App">
       <Provider store={appstore}>
           <Body/>
       </Provider>
    </div>
  );
}

export default App;
