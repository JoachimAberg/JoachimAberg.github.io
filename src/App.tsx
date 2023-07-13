import type { Component } from 'solid-js';

import logo from './logo.svg';
import styles from './App.module.scss';
import { useParams } from "@solidjs/router";


const App: Component = () => {
  const params = useParams(); // 👈 Get the dynamic route parameters

  return (
    <div class={styles.main}>
      <h1>Hallå {params.namn??'Världen'}</h1>
    </div>
  );
};

export default App;
