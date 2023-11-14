import React from "react";
import { Modal, Container, Stepper, Button, Group } from "@mantine/core";
import { useState } from "react";
import AddLocation from "../AddLocation/AddLocation";
import UploadImage from "../UploadImage/UploadImage";
import BasicDetails from "../BasicDetails/BasicDetails";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../../firebase";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const AddPropertyModel = ({ opened, setOpened }) => {
  const [active, setActive] = useState(0);

  const [propertyDetails, setPropertyDetails] = useState({
    title: "",
    description: "",
    price: "",
    country: "",
    city: "",
    address: "",
    image: null,
  });

  const updatePropertyDetails = (data) => {
    setPropertyDetails({ ...propertyDetails, ...data });
    console.log("Updating propertyDetails with:", data);
  };

  // Callback to upload data to Firebase when the final step is completed
  const handleFinalStepComplete = () => {
    const userId = "qwf6DRFwbPsfdRiAQScNNrdkQn8272";
    const db = getDatabase(app);
    set(ref(db, "services/" + userId), {
      title: propertyDetails.title,
      description: propertyDetails.description,
      price: propertyDetails.price,
      country: propertyDetails.country,
      city: propertyDetails.city,
      address: propertyDetails.address,
      image: propertyDetails.image,
    });
    setOpened(false);
  };

  const nextStep = () => {
    setActive((current) => (current < 4 ? current + 1 : current));
  };

  const prevStep = () => {
    setActive((current) => (current > 0 ? current - 1 : current));
  };

  return (
    <Modal
      opened={opened}
      onClose={() => setOpened(false)}
      closeOnClickOutside
      size={"90rem"}
    >
      <Container h={"40rem"} w={"100%"}>
        <Stepper
          active={active}
          onStepClick={setActive}
          allowNextStepsSelect={false}
        >
          <Stepper.Step label="Location" description="Address">
            <AddLocation
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              updatePropertyDetails={updatePropertyDetails}
            />
          </Stepper.Step>
          <Stepper.Step label="Gig Image" description="Upload">
            <UploadImage
              prevStep={prevStep}
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              updatePropertyDetails={updatePropertyDetails}
            />
          </Stepper.Step>
          <Stepper.Step label="Final step" description="Get full access">
            <BasicDetails
              prevStep={prevStep}
              nextStep={nextStep}
              propertyDetails={propertyDetails}
              updatePropertyDetails={updatePropertyDetails}
            />
          </Stepper.Step>
          <Stepper.Completed>
            Completed, click the button below to finish
            <Button variant="primary" onClick={handleFinalStepComplete}>
              Done
            </Button>
          </Stepper.Completed>
        </Stepper>
      </Container>
    </Modal>
  );
};

export default AddPropertyModel;
