import { ThemeProvider, CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router';
import './App.css';
import { theme } from './common/theme';
import Home from './Home';
import MultiChoice from '../components/MultiChoice';
import DictionarySelect from '../components/DictionarySelect';
import { useEffect, useState } from 'react';
import TopDrawer from '../components/TopDrawer'


function App() {

  const [activeDictionary, setActiveDictionary] = useState(undefined);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <TopDrawer setActiveDictionary={setActiveDictionary}/>

        <Routes>
        <Route path='/multi' element={<Home activeDictionary={activeDictionary} />} />
        <Route path='/' element={<MultiChoice activeDictionary={activeDictionary}/>} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
