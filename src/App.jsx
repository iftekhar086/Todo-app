import './App.css'
import Appfooter from './Components/AppFooter/Appfooter';
import AppHeader from './Components/AppHeader/AppHeader';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home';

function App() {

  return (
    <div className='App'>
    <AppHeader/>
    <main>
    <Home/>
    </main>
    <Appfooter/>
    </div>
  )
}

export default App
