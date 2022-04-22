import Front from './components/pages/Front';
import { Routes, Route, } from 'react-router-dom';
import Root from './components/pages/Root';
import Profile from './components/pages/Profile';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/front' element={<Front/>}/>
        <Route path='/' element={<Root/>}/>
        <Route path='/profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
