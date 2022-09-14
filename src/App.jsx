import { createContext, useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { Header, Footer, Layout } from "./components/common";
import {
  Register,
  Sponsors,
  Speakers,
  Prizes,
  Rules,
  Timeline,
  Competition,
  Landing,
} from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
export const RegistrationOpenContext = createContext({});

function App() {
  const [registration, setRegistration] = useState(false);

  useEffect(() => {
    Aos.init({ offset: 0, duration: 1500 });
    window.addEventListener("load", Aos.refresh);
    if (window.location.href.includes("#rules")) {
      document.getElementById('rules').scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <RegistrationOpenContext.Provider
    value={{ registration, setRegistration }}
  >
    <Router>
      <Header />
      <Routes>
        <Route path="/"  element={<Landing/>}/>
        <Route path="/timeline"  element={<Timeline />}/>
        <Route path="/competition"  element={<Competition />}/>
        <Route path="/rules"  element={<Rules />}/>
        <Route path="/speakers"  element={<Speakers />}/>
        <Route path="/register"  element={ <Register />}/>
      </Routes>
      <Footer />
    </Router>
    </RegistrationOpenContext.Provider>
    // <Layout>
      // <RegistrationOpenContext.Provider
      //   value={{ registration, setRegistration }}
      // >
    //     <Header />
    //     <Landing />
    //     <Timeline />
    //     <Competition />
    //     <Rules />
    //     {/* <Prizes /> */}
    //     <Speakers />
    //     {/* <Sponsors /> */}
    //     <Register />
    //     <Footer />
      // </RegistrationOpenContext.Provider>
    // </Layout>
  );
}

export default App;
