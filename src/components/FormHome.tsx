"use client";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";

const FormHome = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    repeatPassword: "",
    agree: false,
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/signup", { state: formData });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-md flex-col gap-4 p-6 bg-amber-400 rounded-lg shadow-lg"
    >
      <div>
        <Label htmlFor="email" className="mb-2 block">
          Your email
        </Label>
        <TextInput
          id="email"
          type="email"
          placeholder="name@flowbite.com"
          value={formData.email}
          onChange={handleChange}
          shadow
        />
      </div>
      <div>
        <Label htmlFor="password" className="mb-2 block">
          Your password
        </Label>
        <TextInput
          id="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          shadow
        />
      </div>
      <div>
        <Label htmlFor="repeatPassword" className="mb-2 block">
          Repeat password
        </Label>
        <TextInput
          id="repeatPassword"
          type="password"
          value={formData.repeatPassword}
          onChange={handleChange}
          shadow
        />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox
          id="agree"
          checked={formData.agree}
          onChange={handleChange}
        />
        <Label htmlFor="agree" className="flex">
          I agree with the&nbsp;
        </Label>
      </div>
      <Button type="submit">Register new account</Button>
    </form>
  );
};

export default FormHome;
