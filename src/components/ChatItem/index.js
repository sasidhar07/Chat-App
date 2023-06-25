import {Component} from 'react'

import './index.css'


import {formatDistanceToNow} from 'date-fns'

class ChatItem extends Component{
    state={likeCount:0}

    
        increaseLikeCount=()=>{
            this.setState(prev=>({likeCount:prev.likeCount+1}))
        }
    

    render(){
    
        const {eachItem}=this.props
       const{likeCount}=this.state 
        return(
            <li className='eachChatItem'>
                <div className={`profile ${eachItem.profileColor}`}><h2>{eachItem.name[0].toUpperCase()}</h2></div>
                <div className='messageCard'>
                    <div className='userNameDetailes'>
                        <h3 className='userNameHeading'>{eachItem.name}</h3>
                        <p className='date'>{formatDistanceToNow(eachItem.date)}</p>
                    </div>
                    <div className='messagePara'>
                        <div  className='messParagraph'>
                            <p>{eachItem.chatText}</p>
                        </div>
                        <div className='likeCard'>
                            <button onClick={this.increaseLikeCount} className='likeButton'>
                                <img src="https://tse4.mm.bing.net/th?id=OIP.NT-jKfHKwdk2jROyNX0i2QHaFC&pid=Api&P=0&h=180"  alt='like-icon' className='likeImg'/>
                                
                            </button>
                            <p className='noOfLikes'>{likeCount} Likes</p>
                        </div>
                    </div>
                    
                </div>
            </li>
        )
    }
}

export default ChatItem