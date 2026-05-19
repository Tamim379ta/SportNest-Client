"use client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Image from 'next/image';
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";


const LoginPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='mt-25 mb-10 flex gap-10 container mx-auto p-2 md:p-10 rounded-2xl  bg-[#f8fff6]'>

      <div className="hidden md:block flex-1">
        <Image
          className='h-140 rounded-2xl object-cover'
          src={'/assets/signup.png'}
          alt='Login Page'
          width={500}
          height={500}
        />
      </div>

      <div className=" flex-1   px-4">

        <div className="w-full max-w-md p-8 rounded-2xl bg-white shadow-xl border">

          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-gray-800">
              Welcome Back
            </h1>
            <p className="text-gray-500 mt-1">
              Login to continue
            </p>
          </div>

          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
          
            {/* Email */}
            <TextField
              isRequired
              name="email"
              type="email"
              validate={(value) => {
                if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                  return "Please enter a valid email address";
                }
                return null;
              }}
            >
              <Label className="text-sm font-medium text-gray-600">
                Email
              </Label>

              <Input
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Enter your gmail"
              />

              <FieldError className="text-red-500 text-sm" />
            </TextField>

            {/* Password */}
            <TextField
              isRequired
              minLength={8}
              name="password"
              type="password"
              validate={(value) => {
                if (value.length < 8) {
                  return "Password must be at least 8 characters";
                }
                if (!/[A-Z]/.test(value)) {
                  return "Must contain uppercase letter";
                }
                if (!/[0-9]/.test(value)) {
                  return "Must contain number";
                }
                return null;
              }}
            >
              <Label className="text-sm font-medium text-gray-600">
                Password
              </Label>

              <Input
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Enter your password"
              />

              

              <FieldError className="text-red-500 text-sm" />
            </TextField>

            <Button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition"
            >
              Login
            </Button>


          </Form>

          <p className="text-center my-2"> or </p>

          <div>
            <Button className={'w-full rounded-xl'} variant="outline"> <FcGoogle /> Sign in with Google</Button>
            <p className="text-center mt-2">
              Don't have an account? <Link className="text-green-900 underline " href={'/signup'}>Sign Up</Link>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default LoginPage;