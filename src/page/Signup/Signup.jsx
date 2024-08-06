import { useNavigate } from "react-router-dom";
import useHandleChange from "../../hooks/useHandleChange";

const Signup = () => {
  const navigate = useNavigate();
  const { values, handleChange } = useHandleChange({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
  });
  const handleLogin = () => {
    navigate("/login");
  };
  const handleSingup = async () => {
    try {
      const response = await fetch("http://localhost:8080/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      console.log(data);
      if (data.message === "Signup success") {
        window.location.href = "/login";
        alert("Signup success");
      } else if (data.message === "Email already exists") {
        alert("Email already exists");
      } else if (data.message === "Signup failed") {
        alert("Email failed");
      } else {
        alert("An error occurred during signup");
      }
    } catch (e) {
      console.error("Error during login", e);
      alert("An error occurred while logging in. Please try again.");
    }
  };
  console.log("form ~ values", values);
  return (
    <>
      <div>
        <form
          className="flex flex-col gap-3 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 bg-white shadow-custom_2 rounded-lg"
          onSubmit={(e) => {
            e.preventDefault();
            handleSingup();
          }}
        >
          <div className="item flex items-center gap-3">
            <div className="item">
              <input
                className="w-full bg-white border outline-none border-gray-300 rounded-md py-3 px-4"
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                onChange={handleChange}
              />
              <div className="error h-2"></div>
            </div>
            <div className="item">
              <input
                className="w-full bg-white border outline-none border-gray-300 rounded-md py-3 px-4"
                type="text"
                name="lastName" // equal surname (changed lastName because in backend i use lastName, not use surname)
                placeholder="Enter your surname"
                onChange={handleChange}
              />
              <div className="error h-2"></div>
            </div>
          </div>
          <div className="item">
            <input
              className="w-full bg-white border outline-none border-gray-300 rounded-md py-3 px-4"
              type="text"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
            />
            <div className="error h-2"></div>
          </div>
          <div className="item">
            <input
              className="w-full bg-white border outline-none border-gray-300 rounded-md py-3 px-4"
              type="password"
              name="password"
              placeholder="Enter your password"
              onChange={handleChange}
            />
            <div className="error h-2"></div>
          </div>
          <div className="item">
            <div className="flex item-center gap-4 justify-center">
              <div className="item-child flex items-center gap-2 rounded-lg border p-2">
                <input
                  className="bg-white border outline-none border-gray-300 rounded-md py-2 px-3"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  onChange={handleChange}
                />
                <label htmlFor="male" className="ml-2">
                  Male
                </label>
              </div>
              <div className="item-child flex items-center gap-2 rounded-lg border p-2">
                <input
                  className="bg-white border outline-none border-gray-300 rounded-md py-2 px-3"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  onChange={handleChange}
                />
                <label htmlFor="female" className="ml-2">
                  Female
                </label>
              </div>
            </div>
            <div className="error h-2"></div>
          </div>
          <div className="item mt-3">
            <button
              type="submit"
              className="btn w-full p-3 text-center bg-green-600 rounded-lg text-white font-bold text-base cursor-pointer"
            >
              Sign up
            </button>
          </div>
          <div
            className="item text-center cursor-pointer text-blue-500"
            onClick={handleLogin}
          >
            Already have account
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
