import ButtonLink from "../Button/Button";
import BigButton from "../Button/BigButton";
import Google from "../../assets/Google.png";
import Facebook from "../../assets/Facebook.png";
import Mail from "../../assets/fi_mail.png";
import Password from "../../assets/fi_lock.png";
import { Link, useNavigate } from "react-router-dom";

const SigninForm = () => {
  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();
    navigate("home");
    console.log(e);
  };

  return (
    <div className="flex gap-4 flex-col py-[60px] px-5 md:py-[40px] lg:py-[100px] lg:justify-center lg:gap-8">
      <h5 className="font-medium text-xl leading-[24px] text-[#000]">
        Welcome back
      </h5>

      <div>
        <div className="flex flex-shrink-0 gap-3 md:gap-8">
          <ButtonLink img={Google} />
          <ButtonLink isMain img={Facebook} />
        </div>

        <div className="flex p-2 md:gap-8">
          <div className="border-t-[0.5px] w-[122px] border-black self-center md:w-[287px] lg:w-[273px]"></div>
          <p className="mx-2 text-base font-normal text-[#bcbcbc] md:text-xl leading-6">
            OR
          </p>
          <div className="border-t-[0.5px] w-[122px] border-black self-center md:w-[287px] lg:w-[273px]"></div>
        </div>

        <form className="flex flex-col gap-5 md:gap-10">
          <div className="flex flex-col gap-5 md:gap-6">
            <div className="flex flex-col gap-3">
              <label
                htmlFor=""
                className="text-base leading-[22.4px] font-medium"
              >
                Work email
              </label>
              <div className="flex h-12 items-center gap-2 rounded-lg border border-[#bcbcbc] px-4">
                <img src={Mail} className="h-5 w-5" alt="" />
                <input
                  type="text"
                  className="border-none outline-none"
                  placeholder="example@gmail.com"
                />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <label
                htmlFor=""
                className="text-base leading-[22.4px] font-medium"
              >
                Password
              </label>
              <div className="flex h-12 items-center gap-2 rounded-lg border border-[#bcbcbc] px-4">
                <img src={Password} className="h-5 w-5" alt="" />
                <input
                  type="text"
                  className="border-none outline-none"
                  placeholder="Enter your password....."
                />
              </div>
            </div>

            <Link className="self-end text-base font-medium leading-[22.4px] text-[#008080]">
              Forgotten password?
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            {/* <BigButton
              to="/signup"
              text="Create an account"
              /> */}

            <BigButton
              handleSubmit={submit}
              text="Log in"
              to="/home"
            />

            <div className="flex flex-col gap-2">
              <p className="text-center text-base font-normal text-[#535353]">
                Don’t have an account?
                <Link className="text-[#008080] block md:inline">
                  Create an account
                </Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SigninForm;