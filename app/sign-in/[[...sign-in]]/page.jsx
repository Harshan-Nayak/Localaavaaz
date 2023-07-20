import React from "react";
import { SignIn } from "@clerk/nextjs";

export const metadata = {
  title: "SignIn",
  description: "Meet and Get Guided",
};

const SignInPage = () => {
  return (
    <div className=" mx-96">
      <SignIn />
    </div>
  );
};

export default SignInPage;
