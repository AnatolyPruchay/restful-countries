import {Routes, Route} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';
import {HeaderSwitcher} from '../../features/theme';
import {Main} from '../../shared';

import {HomePage} from '../../pages';
import {Details} from '../../pages';
import {NotFound} from '../../pages';


function App() {
  return (
    <>
      <ToastContainer/>
      <HeaderSwitcher/>
      <Main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/country/:name" element={<Details/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </Main>
    </>
  )
}

export default App

