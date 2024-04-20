import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import Alert from '../Alert'
import RegistroAlert from '../RegistroAlert'
import NotFounnd from '../NotFound'
import Navbar from '../../Components/Navbar'
import './index.css'

const AppRoutes = () => {
  let routes = useRoutes([
  { path: '/', element: <Home/> },
  { path: '/alerta', element: <Alert/> },
  { path: '/registro-alertas', element: <RegistroAlert/> },
  { path: '/*', element: <NotFounnd/>}
  ])

  return routes

}

function App() {

  return (
    <BrowserRouter>
      <AppRoutes/>
      <Navbar/>
    </BrowserRouter>
  )
}

export default App
