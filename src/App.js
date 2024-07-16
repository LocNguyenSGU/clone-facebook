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
      <body className="container-block bg-slate-100 w-screen h-[calc(100bh - 57px)] mt-[57px] grid grid-cols-12 gap-4 h-[calc(100vh-57px)] overflow-hidden">
        <BodyLeft></BodyLeft>
        <MainContent></MainContent>
        <BodyRight></BodyRight>
      </body>
    </>
  );
}

export default App;
