import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {
  AiFillPhone,
  AiOutlineMail,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { useForm } from "react-hook-form";
import { CiUser } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import InputMask from "react-input-mask";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({ mode: "onBlur" });

  const [passView, setPassView] = useState(false);

  const password = useRef({});
  password.current = watch("password", "");

  return (
    <div className="form">
      <div action="" className="form__left">
        <p className="form__logo">Your Logo</p>
        <form noValidate action="" className="form__content">
          <h2 className="form__content-title">Sign in</h2>
          <p className="form__content-text">
            If you don`t have an account register <br />{" "}
            <Link to="/register">You can Register here!</Link>
          </p>
          <label htmlFor="" className="form__label">
            <span className="form__label-text">Email</span>
            <div className="form__label-field">
              <span className="form__label-icon">
                <AiOutlineMail />
              </span>
              <input
                {...register("email", {
                  required: {
                    message: "Email обязателен к заполнению",
                    value: true,
                  },
                  minLength: {
                    message: "Минимум 10 символов",
                    value: 10,
                  },
                  pattern: {
                    message: "Ввдеите корректный адрес email",
                    pattern: /^[^]+@[^]+\.[a-z]{2,5}$/,
                  },
                })}
                type="text"
                className="form__label-input"
                placeholder="Enter your email address"
              />
            </div>
            <p className="form__label-error">
              {errors.email && errors.email?.message}
            </p>
          </label>
          <label htmlFor="" className="form__label">
            <span className="form__label-text">Surname</span>
            <div className="form__label-field">
              <span className="form__label-icon">
                <CiUser />
              </span>
              <input
                {...register("name", {
                  required: {
                    message: "Имя обязательно к заполнению",
                    value: true,
                  },
                  minLength: {
                    message: "Минимум 2 символа",
                    value: 2,
                  },
                  pattern: {
                    message: "Напишите правильно свое имя",
                    value: /^[a-zA-Zа-яА-ЯіІїЇ]+$/,
                  },
                })}
                type="email"
                className="form__label-input"
                placeholder="Enter your name"
              />
            </div>
            <p className="form__label-error">
              {errors.name && errors.name?.message}
            </p>
          </label>
          <label htmlFor="" className="form__label">
            <span className="form__label-text">Name</span>
            <div className="form__label-field">
              <span className="form__label-icon">
                <FaUserAlt />
              </span>
              <input
                {...register("surname", {
                  required: {
                    message: "Фамилия обязательна к заполнению",
                    value: true,
                  },
                  minLength: {
                    message: "Минимум 2 символа",
                    value: 2,
                  },
                  pattern: {
                    message: "Напишите правильно свою фамилию",
                    value: /^[a-zA-Zа-яА-ЯіІїЇ]+$/,
                  },
                })}
                type="email"
                className="form__label-input"
                placeholder="Enter your surname"
              />
            </div>
            <p className="form__label-error">
              {errors.surname && errors.surname?.message}
            </p>
          </label>
          <label htmlFor="" className="form__label">
            <span className="form__label-text">Phone</span>
            <div className="form__label-field">
              <span className="form__label-icon">
                <AiFillPhone />
              </span>
              <InputMask
                mask={`+\\38\\(099)-999-99-99`}
                {...register("phone", {
                  required: {
                    message: "Телефон обязателен к заполнению",
                    value: true,
                  },
                  minLength: {
                    message: "Минимум 10 символов",
                    value: 2,
                  },
                  pattern: {
                    message: "Введите корректный номер телефона",
                    value: /^\+38\(\d{3}\)-\d{3}-\d{2}-\d{2}$/,
                  },
                })}
                type="tel"
                className="form__label-input"
                placeholder="38(0xx)-xx-xx"
              />
            </div>
            <p className="form__label-error">
              {errors.phone && errors.phone?.message}
            </p>
          </label>
          <label htmlFor="" className="form__label">
            <span className="form__label-text">Password</span>
            <div className="form__label-field">
              <span
                className="form__label-icon"
                onClick={() => setPassView((prev) => !prev)}
              >
                {passView ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </span>
              <input
                {...register("password", {
                  required: {
                    message: "Пароль обязателен к заполнению",
                    value: true,
                  },
                  pattern: {
                    message:
                      "Пароль должен содержать не менее 8 символов, заглавную букву, число!",
                    value:
                      /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/g,
                  },
                })}
                type={passView ? "text" : "password"}
                className="form__label-input"
                placeholder="Enter your password"
              />
            </div>
            <p className="form__label-error">
              {errors.password && errors.password?.message}
            </p>
          </label>
          <label htmlFor="" className="form__label">
            <span className="form__label-text">Confirm password</span>
            <div className="form__label-field">
              {/*<span*/}
              {/*  className="form__label-icon"*/}
              {/*  onClick={() => setPassView((prev) => !prev)}*/}
              {/*>*/}
              {/*  /!*{passView ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}*!/*/}
              {/*</span>*/}
              <input
                {...register("confirmPwd", {
                  validate: (value) =>
                    value === password.current ||
                    "Введенные пароли не совпадают",
                })}
                type={passView ? "text" : "password"}
                className="form__label-input"
                placeholder="Enter your password again"
              />
            </div>
            <p className="form__label-error">
              {errors.confirmPwd && errors.confirmPwd?.message}
            </p>
          </label>
          <button type="submit" className="form__btn">
            Login
          </button>
        </form>
      </div>
      <div className="form__right"></div>
    </div>
  );
};

export default Form;
