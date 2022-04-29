import MyMessage from './MyMessage';
import TheirMessage from './TheirMessage';
import MessageForm from './MessageForm';

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMessage) => chat.people.map((person, index) => person.last_read === message.id && (
    <div
      key={`read_${index}`}
      className="read-receipt"
      style={{
        float: isMyMessage ? 'right' : 'left',
        backgroundImage: person.person.avatar && `url(${person.person.avatar})`,
      }}
    />
  ));

  const renderMessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.username;

      return (
        <div key={`msg_${index}`} style={{ width: '100%' }}>
          <div className="message-block">
            {isMyMessage
              ? <MyMessage message={message} />
              : <TheirMessage message={message} lastMessage={messages[lastMessageKey]} />}
          </div>
          <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px' }}>
            {renderReadReceipts(message, isMyMessage)}
          </div>
        </div>
      );
    });
  };

  if (!chat) return <div />;

  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle">
          {chat.people.map((person) => ` ${person.person.username}`)}
        </div>
      </div>
      {renderMessages()}
      <div style={{ height: '100px' }} />
      <div className="message-form-container">
        <MessageForm {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default ChatFeed;
// import React from 'react'
// import MessageForm from './MessageFor';
// import MyMessage  from './MyMessage';
// import TheirMessage from './TheirMessage';

// const ChatFeed=(props)=> {
//     const {chats, activeChat, userName, messages }=props;
//     const chat=chats && chats[activeChat];
//     console.log(chat,userName,messages);
//     const renderMessage=()=>{
//       const keys=Object.keys(messages);
//       return keys.map((key,index)=>{
//         const message=messages[key];
//         const lastMessagekey=index===0? null:keys[index-1];
//         const isMymessage=userName===message.sender.userName;
//         return(
//           <div key={`msg_${index}`} style={{width:'100%'}}>
//             <div className='message-block'>
//               {
//                 isMymessage
//                 ?<MyMessage   message={message}/>
//                 :<TheirMessage message={message} lastMessage={messages[lastMessagekey]}/>
//               }
//             </div>
//             <div className='read-receipts' style={{marginRight: isMymessage?'18px' : '0px',marginLeft:isMymessage?'0px':'68px'}}>
//             read-receipts
//             </div>
//           </div>
//         )
//       })
//     }
//     renderMessage()
//   if (!chat)
//   return 'Loading...';
//   return (
//     <div className='chat-feed'>
//       <div className='chat-title-container'>
//         <div className='chat-title'>{chat.title}</div>
//         <div className='chat-subtitle'>
//           {chat.people.map((person)=> ` ${person.person.username}`)}
//         </div>
//       </div>
//       {renderMessage()}
//       <div style={{height:'100px' }}/>
//       <div className='message-form-container'>
//         <messageForm {...props} chatId={activeChat}/>
//       </div>
//      </div>
//   );
// }
// export default ChatFeed;