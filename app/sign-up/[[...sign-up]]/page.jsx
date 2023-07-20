import { SignUp } from "@clerk/nextjs";

import React from "react";

export const metadata = {
  title: "SignUp",
  description: "Meet and Get Guided",
};

const SignUpPage = () => {
  return (
    <div className=" mx-96">
      <SignUp />
    </div>
  );
};

export default SignUpPage;
