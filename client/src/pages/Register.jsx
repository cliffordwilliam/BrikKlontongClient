import React from "react";
import AuthForm from "../components/AuthForm";
import { useDispatch } from "react-redux";
import { request } from "../store/apiSlice.js";
import c from "../c";

export default function Register() {
  const dispatch = useDispatch();
  const postUser = (formData) => {
    const { username, password } = formData;
    dispatch(
      request({
        method: "POST",
        url: `${c.baseUrl}/user`,
        options: {
          data: {
            username,
            password,
          },
        },
        isLoader: true,
        isOk: true,
      })
    );
  };
  const fields = [
    { name: "username", label: "Username", type: "text" },
    { name: "password", label: "Password", type: "password" },
  ];
  const extraLink = {
    text: "Got account? ",
    to: "/login",
    linkText: "Login",
  };
  return (
    <main className="🕛">
      <AuthForm
        title="Register"
        fields={fields}
        extraLink={extraLink}
        callback={postUser}
      />
    </main>
  );
}
