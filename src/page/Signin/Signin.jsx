import useHandleChange from "../../hooks/useHandleChange";

const Signin = () => {
  const {values, handleChange} = useHandleChange({
    email: "",
    password: ""
  })
  console.log("form ~ values", values)
  return (
    <>
      <div>
        <form className="flex flex-col gap-3 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 bg-white shadow-custom_2 rounded-lg">
          <div className="item w-[400px]">
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
            <div className="btn w-full p-3 text-center bg-blue-600 rounded-lg text-white font-bold text-base cursor-pointer">
              Log in
            </div>
          </div>
          <div className="item">
            <span className=" font-normal block text-center text-blue-600 mt-2 text-sm cursor-pointer">Forgotten password?</span>
          </div>
          <div className="item">
            <div className="saperate h-[1px] bg-gray-200"></div>
          </div>
          <div className="item mt-4 mx-auto pb-2">
            <div className="btn w-[200px] p-3 text-center bg-green-600 rounded-lg text-white font-semibold text-base cursor-pointer">
              Create new account
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;
