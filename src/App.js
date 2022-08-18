// import data from './TaskManagerData';
// import './App.css';
// import Consumer from './context/Consumer';
// import TaskManager from './TaskManager';
// import WelcomePage from './FunctionalComp/WelcomePage'
// import {Routes, Route} from "react-router-dom";
// import About from './Router/About';
// import Contact from './Router/Contact';
// import Dashboard from './Scorboard/Dasboard';
// import UserPage from './Scorboard/UserPage';
// import Login from './Scorboard/Login';
// import PageNotFound from './Scorboard/PageNotFound';
// import {NavLink} from "react-router-dom";
import ThemeContext from './ThemeContext/DarkMode-CreateContext';
import Home from './ThemeContext/Home';
import Provider from './ThemeContext/provider';
function App() {
  return (
   <div>
{/* <Routes>

<Route path='/' element={<TaskManager data={data}></TaskManager>}></Route>
<Route path='/Contact' element={<Contact/>}></Route>
<Route path='/About' element={<About/>}></Route>
</Routes> */}
{/* <WelcomePage></WelcomePage> */}
{/* <Consumer></Consumer> */}
{/* <NavLink to='/user/login'>
      {
        ({isActive})=>(
          <button className={isActive?'btn-primary':'btn-danger'}>login</button>
        )
      }
      </NavLink>
      <NavLink to='/user/dashboard'>
      {
        ({isActive})=>(
          <button className={isActive?'btn-primary':'btn-danger'}>Dashboard</button>
        )
      }
      </NavLink>
      <Routes>
        <Route path='/user' element={<UserPage></UserPage>}>
          <Route  path='login' element={<Login></Login>}>
          </Route>
          <Route  path='dashboard' element={<Dashboard></Dashboard>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>

        </Routes> */}
        <Provider>
       <Home></Home>
       </Provider>
   </div>
  )
}

export default App;
