import { ThemeProvider, CssBaseline, Button } from '@mui/material';
import { Routes, Route } from 'react-router';
import './App.css';
import { theme } from './common/theme';
import Home from './Home';
import MultiChoice from '../components/MultiChoice';
import { useEffect, useState } from 'react';
import TopDrawer from '../components/TopDrawer'
import DictionaryProvider from '../utils/DictionaryContext';

function App() {


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DictionaryProvider>
        <TopDrawer />

        <Routes>
          <Route path='/multi' element={<Home />} />
          <Route path='/' element={<MultiChoice />} />
        </Routes>
      </DictionaryProvider>
    </ThemeProvider>
  );
}

export default App;
