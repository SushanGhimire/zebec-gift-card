import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { CrossIcon, LoadingIcon } from "../../../assets/icons";
import { signupInputs } from "./sign-up-inputs";
import { toast } from "react-toastify";
import axios from "axios";

const SignupForm = ({ closeModal }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoading] = useState(false);
  const onSubmit = async (data) => {
    const formData = {
      ...data,
      middleName: "",
    };
    try {
      setLoading(true);
      await axios.post(
        `https://boj3ssjjla.execute-api.us-east-2.amazonaws.com/stage/cardwaitlist`,
        formData
      );
      toast.success("Signed up for updates.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setLoading(false);
    } catch (err) {
      setLoading(false);
      if (err.response) {
        toast.error("Something went wrong!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      } else {
        toast.error("Internal Server Error!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  return (
    <div className="relative">
      <button
        className="absolute -top-20 -right-28 cursor-pointer"
        onClick={closeModal}
      >
        <CrossIcon />
      </button>
      <h1 className="text-[30px] leading-[34px] tracking-[-0.9px] text-zebec-black">
        Sign Up for Updates
      </h1>
      <p className="text-sm text-[#757575] mt-2 max-w-sm">
        Be one of the first to receive updates on Zebec’s gift card launch
        coming soon!
      </p>

      <form action="" className="mt-8" onSubmit={handleSubmit(onSubmit)}>
        {signupInputs.map((data, index) => {
          return (
            <div className="mt-[28px]" key={index}>
              <input
                type={data.type}
                placeholder={data.placeholder}
                {...register(data.name, data.validation)}
                className={`${
                  errors?.[data?.name]?.message &&
                  "border-red-500 ring-1 ring-red-500 focus:ring-red-500 focus:border-red-500"
                } `}
              />
              <div className="text-xs text-red-500">
                {errors?.[data?.name]?.message}
              </div>
            </div>
          );
        })}

        <button
          className="bg-primary w-full text-center flex justify-center rounded-full text-lg py-3 mt-16"
          disabled={loading}
        >
          {loading ? <LoadingIcon /> : <span>Sign Up</span>}
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
