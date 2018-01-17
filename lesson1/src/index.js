import React from 'react'; // содержит классы компонентов
import ReactDOM from 'react-dom'; // для работы с DOM
//import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';


class App extends React.Component {  // создаем класс App который расширяет React.Component
    render() {
        return <h1>Hello</h1>;
    }
}

// прицепляем компонент в #root
ReactDOM.render(<App />, document.getElementById('root')); // метод рендер вешает реакт компонент в дом

registerServiceWorker();



