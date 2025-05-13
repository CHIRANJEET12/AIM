import React from 'react';
import { UserProvider } from './UserProvider';
import Profile from './Profile';
import {EditProfile} from './EditProfile';


function App(){
  return (
    <>
    <UserProvider>
      <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
        <Profile />
        <EditProfile />
      </div>
    </UserProvider>
    </>
  )
}

export default App;