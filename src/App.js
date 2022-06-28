import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import TranslateProvider from "./ContextTest";
function App() {
  return (
    <Router>
      <TranslateProvider>
        <div className="App">
          <Navbar />
          <div className="content">
            <Switch>
              <Route path={`/`} exact>
                <Home />
              </Route>
              <Route path={`/create`}>
                <Create />
              </Route>
              <Route path={`/blogs/:id`}>
                <BlogDetails />
              </Route>
            </Switch>
          </div>
        </div>
      </TranslateProvider>
    </Router>
  );
}

export default App;
