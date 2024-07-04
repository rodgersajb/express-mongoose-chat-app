import toast from "react-hot-toast";
import axios from "axios";
import { useState } from "react";

export default function SignUp() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const userSignUp = async (e) => {
    e.preventDefault()
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      toast.message("Please fill out all of the fields");
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      toast.message("Hey these passwords are not matching");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/user",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("Successfully signed up!");
      localStorage.setItem("userInfo", JSON.stringify(response));
    } catch (error) {
      toast.error("An error occurred...");
    }
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault(); // Prevent the default form submission

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:3001/api/user",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     login(response.data)
  //     toast("You signed up successfully!");
  //     navigate("/home");
  //   } catch (error) {
  //     console.log(error)
  //     toast.error("There was an error during the signup process.");
  //   }
  // };

  return (
    <form
      method="POST"
      encType="multipart/form-data"
      action=""
      className="flex flex-col items-center justify-center gap-4  "
      onSubmit={userSignUp}
    >
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Please enter a username"
        className="w-96"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter email"
        className="w-96"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        id="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter password"
      />
      <input
        type="password"
        name="confirmPassword"
        id="confirmPassword"
        placeholder="confirm password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <button className="w-96" type="submit">
        Sign Up
      </button>
    </form>
  );
}
