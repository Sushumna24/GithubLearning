import React from 'react';
import Storage from './Components/storage';
import ComponentC from './Components/ComponentC'
import Dashboard from './Components/Dashboard';
import CustomModal from './Components/customModal';
import Games from './Components/hierarchial';
export const UserContext=React.createContext()
export const ChannelContext=React.createContext()
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{textAlign:'center',marginLeft:30}}>React</h1>
      </header>
      {/* <UserContext.Provider value={'sushumna'}>
        <ComponentC/>
      </UserContext.Provider> */}
      <main>
        <Dashboard />
      </main>
      {/* <Storage/> */}
      
      
    </div>
  );
}

export default App;
