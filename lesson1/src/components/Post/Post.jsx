import React from 'react';
import './Post.css';
//import userPic from './assets/man_icon-21-512.png';

//console.log(this);
class Post extends React.Component {
   render() {
       const {name, text, date, userPic} = this.props;
       return (
           <div className="Post">
               <img src={userPic} alt="111" className="Post__img"/>
               <h3 className="Post__name">{name}</h3>
               <p className="Post__text">{text}</p>
               <span className="Post__date">{JSON.stringify(date)}</span>
           </div>
       );
   }
}

export default Post;