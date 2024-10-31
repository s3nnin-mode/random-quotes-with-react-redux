import './App.css';
import Quote from './componentes/quote'
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  return (
    <Provider store={ store }>
        <Quote />
    </Provider>
  );
}

export default App;
