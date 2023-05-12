import "./App.css";
import { useEffect } from "react";
import cardData from "./util/data";
import Card from "./component/Card/Card";
import AOS from "aos";
import Navbar from "./component/Navbar/Navbar";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-back",
      throttleDelay: 200,
      debounceDelay: 100,
      // once:true
    });
  }, []);

  return (
    <>
      <Navbar />
      <div className="title">
        <h4 className="fw-bolder" style={{ fontSize: "1.5rem" }}>
          Lets Collaborate
        </h4>
      </div>
      <main>
        {cardData.map((item, i) => (
          <Card data={item} key={i} />
        ))}
      </main>
      <div style={{ padding: "5% 3%" }}>
        <button className="touchBtn">Get in touch</button>
      </div>
    </>
  );
}

export default App;
