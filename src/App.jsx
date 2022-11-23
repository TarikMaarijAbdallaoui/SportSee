import Header from "./components/Header";
import Layout from "./components/Layout";
import MenuVertical from "./components/MenuVertical";
import Profile from "./components/Profile";

/**
 * Component App
 * @returns App container
 */
function App() {
  return (
      <div className="App">
        <Header />
        <Layout>
          <MenuVertical />
          <Profile />
        </Layout>
      </div>
  );
}

export default App;
