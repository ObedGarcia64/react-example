import React from 'react';
import Layout from "./pages/layout/Layout"
import Main from "./pages/main/main"

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Main title={"Welcome"}></Main>
      </Layout>
    </React.Fragment>
  );
}

export default App;
