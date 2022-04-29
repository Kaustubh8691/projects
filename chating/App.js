import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './Component/ChatFeed'
// import LoginForm from './Components/LoginForm';
import './App.css';
import LoginForm from './Component/LoginForm';
const projectID = 'c485f8de-5958-40c0-b4bd-3bf77af8405b';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <ChatEngine
      height="100vh"
      projectID={projectID}
      userName={localStorage.getItem('username')}
      userSecret={localStorage.getItem('password')}
      renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
    />
  );
};

// infinite scroll, logout, more customizations...

export default App;
// import './App.css';
// import {ChatEngine} from 'react-chat-engine';
// import ChatFeed from './Component/ChatFeed';
// const App=()=>{
//   return(
//     <ChatEngine
//     height="100vh"
//     projectID="c485f8de-5958-40c0-b4bd-3bf77af8405b"

//     username="kaustubh"
//     userSecret="kaustubh"
//     renderChatFeed={(ChatAppPropps)=><ChatFeed {...ChatAppPropps}/>}
//     />
//   );
// }

// export default App;
