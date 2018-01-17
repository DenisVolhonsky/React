import React from 'react'; // содержит классы компонентов
import Header from './Header'; // импортируем класс-компонент Header из файда Header

class App extends React.Component {  // создаем класс App который расширяет React.Component
    render() {
        return (
            <div id="App">
                <Header />
            </div>
        );
    }
}
export default App; // чтобы импортировать надо сперва экспортировать