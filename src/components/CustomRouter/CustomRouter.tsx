import {Navigate, Route, Routes} from 'react-router-dom';
import { ROUTE } from '../../utils/constants';
import Home from '../Home/Home';
import Projects from '../../pages/Projects';
import JsonDiff from '../Projects/JsonDiff';

const CustomRouter = () => {
  return (
    <Routes>
      <Route path={ROUTE.HOME} element={<Home/>} />
      <Route path={ROUTE.PROJECTS} element={<Projects/>} />
      <Route path={ROUTE.JSON_DIFF} element={<JsonDiff/>} />

      <Route path={"/*"} element={<Navigate to={ROUTE.HOME}/>}/>
    </Routes>
  )
}

export default CustomRouter