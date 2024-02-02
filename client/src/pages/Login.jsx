import React from "react";
import AuthForm from "../components/AuthForm";
import { useDispatch } from "react-redux";
import { request } from "../store/apiSlice.js";
import c from "../c";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function saveToken(data) {
    localStorage.setItem("token", data.token);
    navigate("/");
  }
  const postLogin = (formData) => {
    const { username, password } = formData;
    dispatch(
      request({
        method: "POST",
        url: `${c.baseUrl}/login`,
        options: {
          data: {
            username,
            password,
          },
        },
        isLoader: true,
        isOk: true,
        callback: saveToken,
      })
    );
  };
  const fields = [
    { name: "username", label: "Username", type: "text" },
    { name: "password", label: "Password", type: "password" },
  ];
  const extraLink = {
    text: "No account? ",
    to: "/register",
    linkText: "Sign up",
  };
  return (
    <main className="🕛">
      <AuthForm
        title="Login"
        fields={fields}
        extraLink={extraLink}
        callback={postLogin}
      />
    </main>
  );
}
