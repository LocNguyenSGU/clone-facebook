import useHandleChange from "../../hooks/useHandleChange";

const Signup = () => {
  const { values, handleChange } = useHandleChange({
    email: "",
    password: "",
  });
  console.log("form ~ values", values);
  return (
    <>
      <div>
        <form className="flex flex-col gap-3 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 bg-white shadow-custom_2 rounded-lg">
          <div className="item flex items-center gap-3">
            <div className="item">
              <input
                className="w-full bg-white border outline-none border-gray-300 rounded-md py-3 px-4"
                type="text"
                name="firstname"
                placeholder="Enter your first name"
                onChange={handleChange}
              />
              <div className="error h-2"></div>
            </div>
            <div className="item">
              <input
                className="w-full bg-white border outline-none border-gray-300 rounded-md py-3 px-4"
                type="text"
                name="surname"
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
                  name="sex"
                  id="male"
                  value="male"
                />
                <label htmlFor="male" className="ml-2">
                  Male
                </label>
              </div>
              <div className="item-child flex items-center gap-2 rounded-lg border p-2">
                <input
                  className="bg-white border outline-none border-gray-300 rounded-md py-2 px-3"
                  type="radio"
                  name="sex"
                  id="female"
                  value="female"
                />
                <label htmlFor="female" className="ml-2">
                  Female
                </label>
              </div>
            </div>
            <div className="error h-2"></div>
          </div>
          <div className="item mt-3">
            <div className="btn w-full p-3 text-center bg-green-600 rounded-lg text-white font-bold text-base cursor-pointer">
              Sign up
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
