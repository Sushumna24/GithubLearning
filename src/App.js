import React, { useCallback, useState } from 'react';
import AxiosTutorial from './Components/Axios';
import Storage from './Components/storage';
import ComponentC from './Components/ComponentC'
import Dashboard from './Components/Dashboard';
import CustomModal from './Components/customModal';
import Games from './Components/hierarchial';
import AxiosTutorialTwo from './Components/axiosPostPutDelete';
import Callback from './Components/useCallback';
import Search from './Components/searchAndSortFilter';
import ClickCounter from './Components/ClickCounter';
import HoverCounter from './Components/HoverCounter';
export const UserContext=React.createContext()
export const ChannelContext=React.createContext()
function App() {
  const[num,setNum]=useState(0)
  const[count,setCount]=useState(0)
  const learning=useCallback(()=>{

  },[count])

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{textAlign:'center',marginLeft:30}}>React </h1>
      </header>
      {/* <UserContext.Provider value={'sushumna'}>
        <ComponentC/>
      </UserContext.Provider> */}
    {/* <Callback Learning={learning} count={count}/>
      <center>
      {num}
      <br></br>
      <button onClick={()=>setNum(num+1)}>Add</button>
      <br></br>
      {count}
      <button onClick={()=>setCount(count+1)}>Increment</button>
      </center> */}
      <main>
        <Dashboard/>
      </main>
   
   
      {/* 
      <ClickCounter name="sushumna"/>
      <HoverCounter/> */}
    </div>
  );
}

export default App;
