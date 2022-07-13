import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./routes/About";
import AboutIconLink from "./components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

export default function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={
              <>
                <FeedbackForm />
                <FeedbackStats/>
                <FeedbackList />
              </>
            }/>
            <Route path="/about" element={ <About /> }/>
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  )
}