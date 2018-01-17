import React from 'react'; // содержит классы компонентов
import ReactDOM from 'react-dom'; // для работы с DOM
//import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


// прицепляем компонент App в #root
ReactDOM.render(<App />, document.getElementById('root')); // метод рендер вешает реакт компонент в дом

registerServiceWorker();



