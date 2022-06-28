import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { TranslateContext } from "./ContextTest";
const Navbar = () => {
  const { translateState, HandleLanguage, lang, setLang } =
    useContext(TranslateContext);
  const [data, setData] = useState({});
  useEffect(() => {
    const currentLang = localStorage.getItem("lang");
    // currentLang ? setLang(currentLang) : localStorage.setItem("lang", lang);
    // console.log("current lang", currentLang);
    setData(translateState[currentLang]);
    console.log(currentLang, lang);

    // !currentLang?setData(translateState[lang]);
    // !currentLang
    //   ? setData(translateState[lang])
    //   : setData(translateState[currentLang]);
  }, [lang, data]);
  return (
    <nav className="navbar">
      <h1>{data && data[0]}</h1>
      <button onClick={() => HandleLanguage()}>Change</button>
      <div className="links">
        <Link to={`/`}>Home</Link>
        <Link to={`/create`}>New Blog</Link>

        {/* <a href="/">Home</a>
        <a href="/create">New Blog</a> */}
      </div>
    </nav>
  );
};

export default Navbar;
