import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Circle from "../components/Circle";

const Home = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const handleClick = () => {
    if (selected === null) {
      return alert("you have to rate us!");
    }
    navigate("done", { state: { value: selected } });
  };
  return (
    <div className="max-w-sm bg-VeryDarkBlue rounded-3xl p-6 mx-8 ">
      <div className="w-14 h-14  rounded-full cursor-pointer  shadow-md flex justify-center items-center bg-DarkBlue ">
        <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
          <path
            d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
            fill="#FC7614"
          />
        </svg>
      </div>
      <h1 className="text-2xl text-White font-medium mt-6">How did we do?</h1>
      <p className="text-LightGrey mt-6 text-[15px]">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex justify-center items-center gap-4 mt-6 text-LightGrey">
        {Array.from(Array(5).keys()).map((item, i) => (
          <Circle
            key={i + 1}
            selected={i + 1 == selected}
            setSelected={setSelected}
            value={i + 1}
          >
            {i + 1}
          </Circle>
        ))}
      </div>
      <button
        onClick={handleClick}
        className="mt-6 bg-Orange text-White py-2 w-full rounded-3xl uppercase tracking-wider hover:bg-White hover:text-Orange transition"
      >
        Submit
      </button>
    </div>
  );
};

export default Home;
