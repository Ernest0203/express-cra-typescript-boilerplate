import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './redux/store';
import styled, { createGlobalStyle } from 'styled-components';
import Layout from './containers/Layout';
import ErrorHandler from "./containers/ErrorHandler/index";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Provider store={store}>
        <Router>
          <ErrorHandler>
            <AppWrapper>
              <header className="appHeader">
                <h1>Express - Cra</h1>
              </header>
              <main className="appMain">
                <Layout/>
              </main>
            </AppWrapper>
          </ErrorHandler>
        </Router>
      </Provider>
    </Fragment>
  );
}

const AppWrapper = styled.div`
  width: 1200px;
  margin: 0 auto;
  box-shadow: 0 3px 10px rgba(0,0,0, .2);
  background-color: #fff;
  .appHeader {
    border-bottom: 2px solid #ddd;
    padding: 20px 0;
    h1 {
      text-align: center;
    }
  }
`;

const GlobalStyle = createGlobalStyle`
 * {
   box-sizing: border-box;
 }
  body {
    background-color: #eee;
    color: #828684;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  li {
    list-style: none;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;

export default App;