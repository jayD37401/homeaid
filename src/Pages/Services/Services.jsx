import React, { useEffect, useState } from "react";
import "./Services.css";
import { getDatabase, ref, set, child, get } from "firebase/database";
import ServicesCard from "../../components/LandingPage/ServicesCard/ServicesCard";
const Services = () => {
  const [data, setData] = useState([]);
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
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <div className="paddings flexCenter properties">
          {data.map((card, i) => (
            <ServicesCard card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
