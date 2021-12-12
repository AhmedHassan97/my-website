import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TitleAnimated = ({ text, textSize, breakText, extraStyle = "" }) => {
  const contRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const options = {
      //Get the text to animate it, it come like a array
      strings: text,
      typeSpeed: 60,
      backSpeed: 70,
      //when the animation finish, it set to the line none for don't show it anymore
      onComplete: () => (contRef.current.nextSibling.style.display = "none"),
    };

    textRef.current = new Typed(contRef.current, options);

    return () => {
      textRef.current.destroy();
    };
  });
  return (
    <>
      <div className={`type-wrap font-extrabold ${extraStyle} ${textSize}`}>
        <span style={breakText ? { whiteSpace: "normal" } : {}} ref={contRef} />
      </div>
    </>
  );
};
TitleAnimated.defaultProps = {
  breakText: false,
};

export default TitleAnimated;
