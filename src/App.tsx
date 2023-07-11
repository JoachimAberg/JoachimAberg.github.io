import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.scss';

const App: Component = () => {
  return (
    <div class={styles.main}>
      <h1>Hallå Världen</h1>
    </div>
  );
};

export default App;
