import Header from "./components/Header";
import Layout from "./components/Layout";
import MenuVertical from "./components/MenuVertical";
import Profile from "./components/Profile";
// import UserContext from "./contexts/user";

function App() {
  return (
    // <UserContext>
      <div className="App">
        <Header />
        <Layout>
          <MenuVertical />
          <Profile />
        </Layout>
      </div>
    // </UserContext>
  );
}

export default App;
