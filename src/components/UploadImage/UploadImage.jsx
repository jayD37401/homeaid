import React, { useState } from "react";
import { AiOutlineCloudUpload, AiOutlineClose } from "react-icons/ai";
import "./UploadImage.css";
import { Button, Group } from "@mantine/core";
import { storage } from "../../firebase";
import { ref, uploadBytes } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
const UploadImage = ({
  propertyDetails,
  updatePropertyDetails,
  nextStep,
  prevStep,
}) => {
  const handleNext = () => {
    console.log("imageURL:", imageURL);
    updatePropertyDetails((prev) => ({ ...prev, image: imageURL }));
    nextStep();
  };
  const [imageURL, setImageURL] = useState(propertyDetails.image);

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
  
    if (file) {
      try {
        // Create a reference to the location in Firebase Storage where you want to upload the image
        const id = 123;
        const storageRef = ref(storage, `gigs/${id}`);
        // Upload the file to Firebase Storage
        await uploadBytes(storageRef, file);
  
        // Get the download URL of the uploaded file
        const downloadURL = await getDownloadURL(storageRef);
  
        // Update the propertyDetails state with the download URL first
        updatePropertyDetails({
          ...propertyDetails,
          image: downloadURL,
        });
  
        // Update the state with the selected image (to display it in the upload zone)
        setImageURL(URL.createObjectURL(file));
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };
  

  // ...

  // Function to discard the selected image
  const discardImage = () => {
    // Clear the imageURL state
    setImageURL(null);

    // You can also clear the image from propertyDetails if needed
    updatePropertyDetails({
      ...propertyDetails,
      image: null,
    });
  };

  return (
    <div className="flexColCenter uploadWrapper">
      <label htmlFor="imageUpload" className="uploadZone">
        {!imageURL ? (
          <>
            <AiOutlineCloudUpload size={50} color="grey" />
            <span>Upload Image</span>
          </>
        ) : (
          <>
            <span onClick={discardImage} className="closeButton">
              <AiOutlineClose size={20} color="red" />
            </span>
            <img src={imageURL} alt="" className="imagePreview" />
          </>
        )}
      </label>
      <input
        type="file"
        id="imageUpload"
        accept="image/*" // Specify accepted file types (images)
        style={{ display: "none" }}
        onChange={handleImageUpload}
      />
      <Group>
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
        <Button onClick={handleNext} disabled={!imageURL}>
          Next
        </Button>
      </Group>
    </div>
  );
};

export default UploadImage;
