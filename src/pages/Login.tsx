import styles from "@/styles/Registration.module.css";
import React from "react";
import { useState } from "react";
import { useLoginUserMutation } from "@/api/usersApi";
import { useNavigate, NavLink } from "react-router-dom";
import Joi from "joi";
import eyeoff from "@/assets/eyeoff.svg";
import eyeon from "@/assets/eyeon.svg";

function Login() {
  const [loginUser, result] = useLoginUserMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const schema = Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.email": "Некорректный email",
        "any.required": "Email обязателен",
      }),
    password: Joi.string().min(8).required().messages({
      "string.min": "Пароль должен содержать минимум 8 символов",
      "any.required": "Пароль обязателен",
    }),
  });

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const formData = { email, password };
    const { error } = schema.validate(formData, { abortEarly: false });

    if (error) {
      const errorMessages: { [key: string]: string } = {};
      error.details.forEach((detail) => {
        errorMessages[detail.path[0]] = detail.message;
      });
      setErrors(errorMessages);
      return;
    }

    const result = await loginUser({ email, password });

    if (result.data) {
      localStorage.setItem("token", result.data.token);
      navigate("/team");
    }

    setEmail("");
    setPassword("");
    setErrors({});
  };
  return (
    <div className={styles.container}>
      {result.isError && <p className={styles.error_reg}>Произошла ошибка</p>}
      <form className={styles.modal}>
        <h1>Вход</h1>
        <div className={styles.form_group}>
          <label htmlFor="email">Электронная почта</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            placeholder="example@mail.ru"
            required
          />
          {errors.email && <p className={styles.error}>{errors.email}</p>}
        </div>
        <div className={styles.form_group}>
          <label htmlFor="password">Пароль</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            placeholder="********"
            required
          />
          <img
            onClick={() => setShowPassword(!showPassword)}
            src={showPassword ? eyeon : eyeoff}
            alt="showPass"
          />
          {errors.password && <p className={styles.error}>{errors.password}</p>}
        </div>
        <button type="submit" onClick={handleSubmit}>
          Войти
        </button>
        <NavLink to="/registration">Регистрация</NavLink>
      </form>
    </div>
  );
}

export default Login;
