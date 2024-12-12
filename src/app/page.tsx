import MainFooter from "./components/MainFooter";
import MainHeader from "./components/MainHeader";
import MainContainer from "./components/MainContainer";
import "./assets/app.css";
import ChallengeCardList from "./components/ChallengeCardList";
function App() {
  return (
    <>
      <MainHeader />
      <MainContainer>
        <ChallengeCardList />
      </MainContainer>
      <MainFooter />
    </>
  );
}

export default App;
