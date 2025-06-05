import React from 'react';
import { UserProvider } from './UserProvider';
import Profile from './Profile';
import {EditProfile} from './EditProfile';
import { NotificationProvider, useNotification } from "./NotificstionContext";
import './App.css';

const ExampleComponent = () => {
  const { addNotification } = useNotification();

  return (
    <div>
      <button onClick={() => addNotification("success", "Saved successfully!")}>
        Show Success
      </button>
      <button onClick={() => addNotification("error", "Something went wrong!")}>
        Show Error
      </button>
    </div>
  )
}


function App(){
  return (
    <>
    {/* <UserProvider>
      <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
        <Profile />
        <EditProfile />
      </div>
    </UserProvider> */}
    <NotificationProvider>
      <ExampleComponent />
    </NotificationProvider>
    </>
  )
}

export default App;