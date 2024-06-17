import { Route, Routes, useLocation } from "react-router-dom";
import Team from "./Team";
import Events from "./Events";
import Home from "./Home";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
