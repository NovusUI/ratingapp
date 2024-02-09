import React from 'react';
import Nav from './components/Nav';
import { AuthProvider } from './ContextAPI/AuthContext';
import { AppProvider } from './ContextAPI/AppContext';


function App() {
  return (
    <div id='app'>
        <AuthProvider>
            <AppProvider>
            <Nav/>
            </AppProvider>
        </AuthProvider>
    </div>
  )
}

export default App;
