import React from 'react';
import "./index.css";
import Avatar from './Avatar';
import Author from './Author';
import Time from './Time';
import Message from './Message';
export const Tweet = () => {
    return(
     <div className="tweet"> 
         <Avatar />
         <div className="content">
         <Author />
         <Time />
         <Message />
         </div>
    </div>
    )
}