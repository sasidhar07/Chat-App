import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ChatItem from '../ChatItem/index';
import './index.css';

import KeyBoardPicker  from '../keyBoard/index';

const profileBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'red',
  'light-blue',
];

const user_list = ['Alan', 'Bob', 'Carol', 'Dean', 'Elin'];

class ChatBox extends Component {

    state = {
      chatList: [],
      chatText: '',
      
    };
  

  ChatInputChange = (event) => {
    this.setState({ chatText: event.target.value });
  };

   addEmoji=(key)=>{
    this.setState(prev=>({chatText:(prev.chatText+key)}))
   }

  addChatItem = () => {
    const { chatText } = this.state;
    const num = Math.floor(Math.random() * user_list.length);
    const newItem = {
      id: uuidv4(),
      name: user_list[num],
      profileColor: profileBackgroundClassNames[num],
      chatText,
      date: new Date(),
    };
    this.setState((prev) => ({ chatList: [...prev.chatList, newItem],chatText:"" }));
  };

  render() {
    const { chatList,chatText } = this.state;
    return (
      <div className='container'>
        <div>
          <h1>Introductions</h1>
          <p>This Channel is For Company Wide Chatter</p>
          <hr/>
        </div>
        <ul>
          {chatList.map((each) => (
            <ChatItem key={each.id} eachItem={each} />
          ))}
        </ul>
        <div className="inputCard">
          <input
          value={chatText}
            onChange={this.ChatInputChange}
            placeholder="Type Message"
            type="text"
          />
          <div className='emojiAndSendCard'>
            <KeyBoardPicker addEmoji={this.addEmoji}/>

            {
              chatText.length>0?(<button className="sendButton" onClick={this.addChatItem}>
              <img
                src="http://icons.iconarchive.com/icons/vexels/office/1024/email-send-icon.png" alt="send-icon"
                className="sendImg"
              />
            </button>):("")
            }
          
          </div>
          
        </div>
        
      </div>
    );
  }
}

export default ChatBox;
