import React, { Component } from 'react';
import data from '@emoji-mart/data';
import Picker from '@emoji-mart/react';

import './index.css'

class KeyBoardPicker extends Component {
  state = {
    isPickerVisible: false,
  };

  togglePicker = () => {
    this.setState(prevState => ({
      isPickerVisible: !prevState.isPickerVisible
    }));
  };

  selectEmoji=(event)=>{
    const{addEmoji}=this.props
    addEmoji(event.native)
  }

  
  

  render() {
    const { isPickerVisible } = this.state;
    const emojiClass=isPickerVisible?"activeEmoji emojiIcon":"emojiIcon"

    return (
      <div >
        <div className="picker-container">
        {isPickerVisible && (
          <Picker  data={data} onEmojiSelect={this.selectEmoji} />
        )}
        </div>

       

        <button className={emojiClass} onClick={this.togglePicker}>
          <img src="https://icon-library.com/images/emoji-icon-png/emoji-icon-png-20.jpg" alt="emojiIcon" className='emojiImg'/>      
        </button>

        
      </div>
    );
  }
}

export default KeyBoardPicker;
