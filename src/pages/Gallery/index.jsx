import { useDispatch, useSelector } from "react-redux";
import style from "./index.module.css";
import pic1 from "../../pic/pic (1).jpg";
import pic24 from "../../pic/pic (24).jpg";
import pic25 from "../../pic/pic (25).jpg";
import pic26 from "../../pic/pic (26).jpg";
import pic27 from "../../pic/pic (27).jpg";
import pic28 from "../../pic/pic (28).jpg";
import pic29 from "../../pic/pic (29).jpg";
import pic30 from "../../pic/pic (30).jpg";
import pic31 from "../../pic/pic (31).jpg";
import pic32 from "../../pic/pic (32).jpg";
import pic33 from "../../pic/pic (33).jpg";
import pic34 from "../../pic/pic (34).jpg";
import pic35 from "../../pic/pic (35).jpg";
import pic36 from "../../pic/pic (36).jpg";
import pic37 from "../../pic/pic (37).jpg";
import pic38 from "../../pic/pic (38).jpg";
import pic39 from "../../pic/pic (39).jpg";
import pic40 from "../../pic/pic (40).jpg";
import pic41 from "../../pic/pic (41).jpg";
import pic42 from "../../pic/pic (42).jpg";
import pic43 from "../../pic/pic (43).jpg";
import pic44 from "../../pic/pic (44).jpg";
import pic45 from "../../pic/pic (45).jpg";
import pic46 from "../../pic/pic (46).jpg";
import pic47 from "../../pic/pic (47).JPG";
import { useState } from "react";
import { toggleLock } from "../../redux/lockSlice";
const Gallery = () => {
  const pics = [
    pic24,
    pic25,
    pic26,
    pic27,
    pic28,
    pic29,
    pic30,
    pic31,
    pic32,
    pic33,
    pic34,
    pic35,
    pic36,
    pic37,
    pic38,
    pic39,
    pic40,
    pic41,
    pic42,
    pic43,
    pic44,
    pic45,
    pic46,
    pic47,
    pic1,
  ];

  const isUnlocked = useSelector((state) => state.lock.isUnlocked);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  if (isUnlocked) {
    return (
      <>
        <div className="flex flex-wrap p-5 justify-around items-center">
          {pics.map((pic) => (
            <img
              key={pic}
              className="w-[45%] rounded-lg my-3"
              src={pic}
              alt="pic"
            />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <div className={style.passContainer}>
        <div>Enter Gallery Password</div>
        <input
          onChange={({ target }) => setInput(target.value)}
          value={input}
          type="text"
          placeholder="Password"
        />
        <button
          onClick={() => {
            if (input === "mahroMehrad") {
              dispatch(toggleLock());
            } else {
              alert("Wrong Password");
              setInput("");
            }
          }}
        >
          Submit
        </button>
      </div>
    );
  }
};

export default Gallery;
