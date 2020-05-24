import React, { useState } from 'react';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import { ThemeProvider} from 'styled-components';

import GlobalStyle from './styles/global';
import Header from './components/Header';

function App() {

  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
   <ThemeProvider theme={theme}>
      <div className="App">
      <GlobalStyle/>
      <Header toggleTheme={toggleTheme} />
    </div>
   </ThemeProvider>
  );
}

export default App;
