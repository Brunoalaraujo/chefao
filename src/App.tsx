import { Provider } from 'react-redux';
import Routes from './Routes';
import { store } from './store';
import './App.css'; 

export default function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
