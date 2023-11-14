import React, { useEffect, useState } from "react";
import { getDatabase, ref, set, child, get } from "firebase/database";
import { app } from "../../firebase";
import { useLocation } from "react-router-dom";
import { AiFillHeart, AiTwotoneClockCircle } from "react-icons/ai";
import "./Service.css";
import { FaShower } from "react-icons/fa";
import Maps from "../../components/Maps/Maps";
import { MdMeetingRoom, MdLocationPin } from "react-icons/md";
const Service = () => {
  const { pathname } = useLocation();
  const desiredUserId = pathname.split("/").slice(-1)[0];
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async (desiredUserId) => {
      const dbRef = ref(getDatabase());

      try {
        const snapshot = await get(child(dbRef, `services/${desiredUserId}`));

        if (snapshot.exists()) {
          const userData = snapshot.val();
          if (userData) {
            const user = {
              id: userData.id,
              title: userData.title,
              description: userData.description,
              price: userData.price,
              image: userData.image,
              address: userData.address,
              city: userData.city,
              country: userData.country,
            };
            setData(user);
            console.log("service", user);
          } else {
            console.log("User data is empty");
          }
        } else {
          console.log("User not found");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData(desiredUserId);
  }, []);

  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/* like button */}
        <div className="like">
          <AiFillHeart size={24} color="white" />
        </div>

        {/* image */}
        <img src={data?.image} alt="home image" />

        <div className="flexCenter property-detail">
          {/* left side */}
          <div className="flexColStart left">
            {/* head */}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                ${data?.price}
              </span>
            </div>

            {/* facilities */}
            <div className="flexStart facilities">
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>3 Bathrooms</span>
              </div>
              <div className="flexStart facility">
                <AiTwotoneClockCircle size={20} color="#1F3E72" />
                <span>4 Bathrooms</span>
              </div>
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span>5 Bathrooms</span>
              </div>
            </div>

            {/* description */}
            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>

            {/* address */}
            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationPin size={25} />
              <span className="secondaryText">
                {data?.address}, {data?.city},{data?.country}
              </span>
            </div>
            <button className="button">Book it!</button>
          </div>

          {/* right side */}
          <div className="map">
            <Maps
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
