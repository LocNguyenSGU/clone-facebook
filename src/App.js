import "./index.scss";
import "./style/sprite.css";
import Header from "./components/header/Header";
import BodyLeft from "./components/body/BodyLeft";
import MainContent from "./components/body/MainContent";
import BodyRight from "./components/body/BodyRight";
function App() {
  return (
    <>
      <Header></Header>
      <body className="container-block bg-slate-100 w-screen h-screen mt-[57px] flex justify-between overflow-hidden">
        <BodyLeft></BodyLeft>
        <MainContent></MainContent>
        <BodyRight></BodyRight>
      </body>
    </>
  );
}

export default App;
