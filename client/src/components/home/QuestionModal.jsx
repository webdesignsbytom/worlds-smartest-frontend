import React, { useContext } from "react";
// Context
import { ToggleContext } from "../../context/ToggleContext";
// Icons
import { FaQuestionCircle } from "react-icons/fa";

function QuestionModal() {
  const { toggleInfoButton, toggleInfoDisplay } = useContext(ToggleContext);

  return (
    <section
      onClick={toggleInfoButton}
      className="absolute bg-neo p-1 md:p-4 rounded-2xl no__highlights grid right-4 top-4"
    >
      <div className="flex justify-end items-center">
        <span className="mx-2">
          <p>INFO</p>
        </span>
        <FaQuestionCircle size={40} className="hidden md:grid cursor-pointer" />
        <FaQuestionCircle size={30} className="md:hidden cursor-pointer" />
      </div>
      {toggleInfoDisplay && (
        <article className="mt-10 m-2 bg-neo-in p-2 outline outline-2 outline-black dark:outline-white rounded-lg max-w-[300px]">
          <p>
            Since the loss of Sir Stephen Hawking, we ask ourselves. Who is the
            worlds smartest Person? Intelligence, testing methods, social
            opinion and data science have lead vastly forwards in the time since
            his life and death. Here on www.worlds-smartest.com anyone may enter
            the gauntlet and fight using whit, cunning, skill and achievement to
            become the uncontested heavy weight intelligence of the world!
          </p>
        </article>
      )}
    </section>
  );
}

export default QuestionModal;
