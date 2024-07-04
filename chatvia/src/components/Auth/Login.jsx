import axios from "axios";
import toast from "react-hot-toast";
import { useState } from "react";
import { ChatState } from "../../Context/ChatProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = ChatState();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value, 'name value')
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const userSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    setLoading(true);

    if (!formData.email || !formData.password) {
      toast.error("Please enter all fields");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/api/user/login",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      toast.success("Login successful");
      setUser(response.data);
      localStorage.setItem("userInfo", JSON.stringify(response.data));
      setLoading(false);
      navigate("/home");
    } catch (error) {
      toast.error("Big ol error occurred");
      setLoading(false);
    }
  };

  return (
    <form
      action=""
      className="flex flex-col items-center justify-center gap-4  "
    >
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Please enter your email"
        className="w-96"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Enter password"
        className="w-96"
        onChange={handleChange}
      />

      <button onClick={userSubmit} className="w-96" type="submit">
        Sign In
      </button>
    </form>
  );
}

export default Login;
