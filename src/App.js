import React from 'react';
import Layout from "./pages/layout/Layout"
import Main from "./pages/main/main"
import Badge from "./components/Badge"

function App() {
  return (
    <React.Fragment>
      <Layout>
        <Badge 
        profile_picture="https://upload.wikimedia.org/wikipedia/commons/9/9a/200126_Dua_Lipa_on_the_2020_Grammys_Red_Carpet.jpg">
          
        </Badge>
      </Layout>
    </React.Fragment>
  );
}

export default App;
