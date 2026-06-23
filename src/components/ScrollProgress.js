// ScrollProgress.jsx

import { useEffect, useState } from "react";
import '../CssCodes/scroll.css';


export default function ScrollProgress() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const totalHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        (window.pageYOffset / totalHeight) * 100;

      setScroll(Math.round(progress));
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
   <div className="progress-wrapper">
  <div
    className="progress-bar"
    style={{
      height: `${scroll}%`
    }}
  />
</div>
  );
}