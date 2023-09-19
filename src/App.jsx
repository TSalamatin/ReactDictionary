import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import { Routes, Route } from 'react-router';
import './App.css';
import { theme } from './common/theme';
import Home from './Home';
import MultiChoice from '../components/MultiChoice';
import { useEffect, useState } from 'react';
import TopDrawer from '../components/TopDrawer'


function App() {
console.log('App initiated')
  const [activeDictionary, setActiveDictionary] = useState(undefined);

  return (
    <ThemeProvider theme={theme}>
      
      
      <TopDrawer setActiveDictionary={setActiveDictionary}/>

        <Routes>
        <Route path='/multi' element={<Home activeDictionary={activeDictionary} />} />
        <Route path='/' element={<MultiChoice activeDictionary={activeDictionary}/>}/>
      
      </Routes>
    </ThemeProvider>
  );
}

export default App;
