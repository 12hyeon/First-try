import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import { createGlobalStyle } from 'styled-components';
const GlobalStyle = createGlobalStyle`
  body {
    background: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle/>
      <TodoTemplate>안녕하세요</TodoTemplate>
    </>
  );
}

export default App;
