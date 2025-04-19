"use client";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const FormHome = () => {
  return (
    <form className="flex w-full max-w-md flex-col gap-4 p-6 bg-amber-400 rounded-lg shadow-lg">
      <div>
        <Label htmlFor="email2" className="mb-2 block">
          Your email
        </Label>
        <TextInput id="email2" type="email" placeholder="name@flowbite.com" required shadow />
      </div>
      <div>
        <Label htmlFor="password2" className="mb-2 block">
          Your password
        </Label>
        <TextInput id="password2" type="password" required shadow />
      </div>
      <div>
        <Label htmlFor="repeat-password" className="mb-2 block">
          Repeat password
        </Label>
        <TextInput id="repeat-password" type="password" required shadow />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="agree" />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
          
        </Label>
      </div>
      <Button type="submit">Register new account</Button>
    </form>
  );
};

export default FormHome;
