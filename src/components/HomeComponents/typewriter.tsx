import { Typewriter } from "react-simple-typewriter";

export default function Typing() {
  return (
    <>
      <Typewriter
        words={["I Am A Developer", "Designer", "Programmer"]}
        loop={Infinity}
        cursor
        cursorStyle="|"
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
      />
    </>
  );
}
