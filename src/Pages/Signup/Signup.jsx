import React from "react";
import NavBar from "../../Components/NavBarComponent/NavBar";
import Footer from "../../Components/FooterComponent/Footer";
import SignupValidate from "./SignupValidate";

function Signup() {
  return (
    <>
      <NavBar />
      <SignupValidate />
      <Footer />
    </>
  );
}

export default Signup;
