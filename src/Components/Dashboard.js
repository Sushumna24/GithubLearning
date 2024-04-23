import React ,{useState}from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Form ,useSubmit} from 'react-router-dom';
import './Dashboard.css'; 
import Greets from './Greet';
import { TodoLists } from './map';
import ClassCounter from './classCounter';
import ClassTimer from './ClassTimer';
import HookCounter from './HookComponent';
import HookCounterFive from './HookCounterFive';
import HookCounterThree from './HookCounterThree';
import HookCounterTwo from './HookCounterTwo';
import HookTimer from './HookTimer';
import Counter from './hooks';
import UseEffectTwo from './UseEffectTwo';
import UseReducerOne from './UseReducerOne';
import UseMemoTwo from './UseMemoTwo';
import UseEffectOne from './UseEffectOne';
import CounterMemo from './UseMemoOne';
import FocusInput from './USeRefOne';
import EventHandlingDemo from './eventDemo';
import AlertEventDemo from './alertEventDemo';
import EventHandlersDemo from './eventHandler';
import EventHandlersDemwithParameter from './eventDemo2';
import Destructured from './propsDestructuring';
import { Sample } from './propsOne';
import { Sample1 } from './propsTwo';
import Forms from './Form';
import NotFound from './RouteNotFound';
import Calculator from './calculator';
import LocalStorage from './login';
import Storage from './storage';
import Child from './child';
import ChildTwo from './ChildToParent2';
import ClickCounter from './ClickCounter';
import Search from './searchAndSortFilter';
import AxiosTutorialTwo from './axiosPostPutDelete';
import AxiosTutorial from './Axios';
import HoverCounter from './HoverCounter';
import enhancedCounter from './EnhancedCounter';
import BmiCalculator from './BMI Calculator';
export const UserContext=React.createContext()
export const ChannelContext=React.createContext()
const Dashboard = () => {

  const[Todos,updateTodos]=useState(['task1','task2'])
  
  function getData(data)
  {
    console.log("Comming from Parent Component"+data);
  }
  const addNew=(task)=>
  {
    updateTodos([...Todos,task])
  }
  
  // Array containing objects with component name and path
  const components = [
    { name: 'ChildToParent', path: '/ChildToParent' },
    {name:'ChildToParent2',path:'/ChildToParent2'},
    { name: 'Storage', path: '/storage' },
    { name: 'LocalStorage', path: '/localstorage' },
    { name: 'Styles', path: '/styles' },
    { name: 'TodoLists', path: '/todolists' },
    { name: 'ClassCounter', path: '/classcounter' },
    { name: 'ClassTimer', path: '/classtimer' },
    { name: 'HookCounter', path: '/hookcounter' },
    { name: 'addNumberToList', path: '/addNumberToList' },
    { name: 'spreadOperator', path: '/spreadOperator' },
    { name: 'countOperations', path: '/countOperations' },
    { name: 'HookTimer', path: '/hooktimer' },
    { name: 'Counter', path: '/counter' },
    { name: 'UseEffectOne', path: '/useeffectone' },
    { name: 'UseEffectTwo', path: '/useeffecttwo' },
    { name: 'UseReducerOne', path: '/usereducerone' },
    { name: 'UseMemoOne', path: '/usememoone' },
    { name: 'UseMemoTwo', path: '/usememotwo' },
    { name: 'USeRefOne', path: '/userefone' },
    { name: 'eventDemo', path: '/eventdemo' },
    { name: 'alertEventDemo', path: '/alerteventdemo' },
    { name: 'eventHandler', path: '/eventhandler' },
    { name: 'eventDemo2', path: '/eventdemo2' },
    { name: 'propsDestructuring', path: '/propsdestructuring' },
    { name: 'propsOne', path: '/propsone' },
    { name: 'propsTwo', path: '/propstwo' },
    {name:'calculator',path:'/calculator'},
    {name:'hoc',path:'/hoc'},
    {name:'search',path:'/search'},
    {name:'axiostutorial',path:'/axiostutorial'},
    {name:'axiostutorialtwo',path:'/axiostutorialtwo'},
    {name:'bmicalculator',path:'/BMI'}
  ];

  return (
    <div> 
      
      <Router>
      <div className="dashboard-container">
        <div className="sidebar">
          
        
          <ul>
            
            {components.map((component, index) => (
              <li key={index}>
                <Link to={component.path}>{component.name}</Link>
              </li>
            ))}
          </ul>
          
        </div>
        <div className="content">
          <Routes>
            
            <Route path="/ChildToParent" element={<Child getData={getData}/>}/>
            <Route path="/ChildToParent2" element={
                 <>
                                    <ChildTwo add={addNew} />
                                    <ul>
                                        {
                                          Todos.map(
                                            (t)=><li>{t}</li>
                                          )
                                        }
                                    </ul>
                                </>}/>
            <Route path="/search" element={<Search/>}/>
            <Route path="/axiostutorial" element={<AxiosTutorial/>}/>
             <Route path="/axiostutorialtwo" element={<AxiosTutorialTwo/>}/>
            <Route path="/hoc" element={<enhancedCounter component={ClickCounter} Component1={HoverCounter}/>}/>
             <Route path="/localstorage" element={<LocalStorage/>}/>
            <Route path="/storage" element={<Storage/>}/>
            <Route path="/styles" element={<Greets />} />
            <Route path="/todolists" element={<TodoLists />} />
            <Route path="/classcounter" element={<ClassCounter />} />
            <Route path="/hookcounter" element={<HookCounter />} />
            <Route path="/countOperations" element={<HookCounterTwo />} />
            <Route path="/spreadOperator" element={<HookCounterThree />} />
            <Route path="/addNumberToList" element={<HookCounterFive />} />
            <Route path="/classtimer" element={<ClassTimer />} />
            <Route path="/hooktimer" element={<HookTimer />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/useeffectone" element={<UseEffectOne />} />
            <Route path="/useeffecttwo" element={<UseEffectTwo />} />
            <Route path="/usereducerone" element={<UseReducerOne />} />
            <Route path="/usememoone" element={<CounterMemo />} />
            <Route path="/usememotwo" element={<UseMemoTwo />} />
            <Route path="/userefone" element={<FocusInput />} />
            <Route path="/eventdemo" element={<EventHandlingDemo />} />
            <Route path="/alerteventdemo" element={<AlertEventDemo />} />
            <Route path="/eventhandler" element={<EventHandlersDemo />} />
            <Route path="/eventdemo2" element={<EventHandlersDemwithParameter />} />
            <Route path="/propsdestructuring" element={<Destructured />} />
            <Route path="/propsone" element={<Sample name='sushumna' company='Quixy' />} />
            <Route path="/propstwo" element={<Sample1 name="sriya" />} />
            <Route path="/" element={<Forms />} />
            <Route path='*' element={<NotFound/>}/>
            <Route path="/calculator" element={<Calculator/>}/> 
            <Route path="/BMI" element={<BmiCalculator/>}/>
          </Routes>
        </div>
      </div>
    </Router>  
    </div>
  );
};

export default Dashboard;
