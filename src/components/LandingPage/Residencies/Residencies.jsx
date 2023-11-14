import React, { useEffect, useState } from "react";
import "./Residencies.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../../../firebase";
import "swiper/css";
// import data from "../../../utils/slider.json";
import { sliderSettings } from "../../../utils/common";
import ServicesCard from "../ServicesCard/ServicesCard";

const Residencies = () => {
  const [data, setData] = useState([]); // State to store user data

  // useEffect to  fetch user data when the component mounts
 useEffect(() => {
    const fetchData = async () => {
      const dbRef = ref(getDatabase()); // Get a reference to the database

      try {
        const snapshot = await get(child(dbRef, "services"));

        if (snapshot.exists()) {
          const userData = snapshot.val();
          const dataArray = [];

          for (const userId in userData) {
            if (Object.hasOwnProperty.call(userData, userId)) {
              const user = userData[userId];
              dataArray.push({
                id: user.id,
                title: user.title,
                description: user.description,
                price: user.price,
                image: user.image,
              });
            }
          }

          // Update the state with user data
          setData(dataArray);
        } else {
          console.log("No user data available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        <div className="r-head flexColStart">
          <span className="orangeText">Best Choices</span>
          <span className="primaryText">Populer Specialists</span>
        </div>

        <Swiper {...sliderSettings}>
          <SliderButtons />
          {data.slice(0, 8).map((card, i) => (
            <SwiperSlide key={i}>
              <ServicesCard card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="flexCenter rbuttons">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
