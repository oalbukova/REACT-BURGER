// react redux types
import React from 'react';

//components
import AppHeader from '../AppHeader/AppHeader';
import Main from '../Main/Main';

// styles
import styles from './App.module.css';

const App = () => {
  return (
    <div className={ styles.App }>
      <AppHeader />
      <Main/>
    </div>
  );
}

export default App;
