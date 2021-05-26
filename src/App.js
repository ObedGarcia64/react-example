import React from 'react';
import Layout from "./pages/layout/Layout"
import Main from "./pages/main/main"
import NewBadge from "./pages/NewBadge/NewBadge"

function App() {
  return (
    <React.Fragment>
      <Layout>
        <NewBadge></NewBadge>
      </Layout>
    </React.Fragment>
  );
}

export default App;
