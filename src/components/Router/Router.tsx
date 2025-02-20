import {Route, Routes} from 'react-router-dom';
import { ROUTE } from '../../utils/constants';
import Home from '../Home/Home';

const Router = () => {
  return (
    <Routes>
    <Route path={ROUTE.HOME} element={<Home/>} />
  </Routes>
  )
}

export default Router