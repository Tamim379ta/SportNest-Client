"use client";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import Image from 'next/image';
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";


const SignUpPage = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className='mt-25 mb-10 flex gap-10 container mx-auto p-2 md:p-5 lg-10 rounded-2xl  bg-[#f8fff6]'>

      <div className=" flex-1 hidden md:block">
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
              Create Account
            </h1>

            <p className="text-gray-500 mt-1">
              Join us to book your favorite sports facilities
            </p>

          </div>

          <Form className="flex flex-col gap-5" onSubmit={onSubmit}>
            {/* name  */}
            <TextField
              isRequired
              name="name"
              type="text"
            >
              <Label className="text-sm font-medium text-gray-600">
                Name
              </Label>
              <Input
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Enter your name"
              />
              <FieldError className="text-red-500 text-sm" />
            </TextField>

            {/* imame */}
            <TextField
              isRequired
              name="image"
              type="url"
            >
              <Label className="text-sm font-medium text-gray-600">
                Image URL
              </Label>
              <Input
                className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-green-500 outline-none"
                placeholder="Image url"
              />
              <FieldError className="text-red-500 text-sm" />
            </TextField>

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
                placeholder="john@example.com"
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

              <Description className="text-xs text-gray-400">
                Must be 8+ characters with 1 uppercase & 1 number
              </Description>

              <FieldError className="text-red-500 text-sm" />
            </TextField>

            <Button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-lg transition"
            >
              Create Account
            </Button>


          </Form>

          <p className="text-center my-2">or</p>

          <div>
            <Button className={'w-full rounded-xl'} variant="outline"> <FcGoogle /> Signup with Google</Button>
            <p className="text-center mt-2">
              Already have an account? <Link className="text-green-900 underline " href={'/login'}>Login</Link>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
};

export default SignUpPage;