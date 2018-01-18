import React from 'react'; // содержит классы компонентов
import Header from './Header'; // импортируем класс-компонент Header из файла Header
import Post from './Post/Post';
import post from '../post';

console.log(post);

class App extends React.Component {  // создаем класс App который расширяет React.Component
    render() {
        return (
            <div id="App">
                <Header text="Social book"/>
                <Post userPic={post[1].userPic} name={post[1].name} date={post[1].date} text={post[1].text}/>
                <Post userPic={post[0].userPic} name={post[0].name} date={post[0].date} text={post[0].text}/>
            </div>
        );
    }
}
export default App; // чтобы импортировать надо сперва экспортировать