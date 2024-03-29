import "./LoginScreen.css";
import Logo from "./Logo/Logo";

import { useState, useRef } from "react";

function Regestration({ viewSetter, regSetter }) {
  const fFio = useRef(null);
  const fInn = useRef(null);
  const fName = useRef(null);
  const fEmail = useRef(null);
  const fTel = useRef(null);
  const fPass = useRef(null);

  const sendRegistration = async () => {
    regSetter(false);
  };

  return (
    <div className="Regestration">
      <div className="Regestration-Form">
        <h1>Регистрация в личном кабинете</h1>
        <input ref={fFio} placeholder="ФИО" />
        <input ref={fInn} placeholder="ИНН" />
        <input ref={fName} placeholder="Название компании" />
        <input ref={fTel} placeholder="Телефон" />
        <br />

        <input ref={fEmail} placeholder="Email" />
        <input ref={fPass} type="password" placeholder="Пароль" />
        <input type="password" placeholder="Подтверждение" />
        <br />

        <button className="btn" onClick={async () => await sendRegistration()}>
          Зарегистрироваться
        </button>
        <button className="btn btn-secondary" onClick={() => regSetter(false)}>
          Отмена
        </button>
      </div>
    </div>
  );
}

function LoginScreen({ viewSetter }) {
  const [isRegistration, setIsRegistration] = useState(false);

  const fLogin = useRef(null);
  const fPass2 = useRef(null);

  const login = async () => {
    viewSetter("Main");
  }

  return (
    <div>
      {isRegistration && (
        <Regestration regSetter={setIsRegistration} viewSetter={viewSetter} />
      )}
      <div className="LoginScreen">
        <div className="LoginScreen-Left">
          <div className="LoginScreen-Left-SignUpForm">
            <div className="LoginScreen-Left-SignUpForm-Inner">
              <h1>Вход</h1>
              <input ref={fLogin} placeholder="Электронная почта"></input>
              <input ref={fPass2} type="password" placeholder="Пароль"></input>
              <button
                className="btn"
                onClick={async () => {
                  await login();
                }}
              >
                Войти
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => setIsRegistration(true)}
              >
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
        <div className="LoginScreen-Right">
          <div className="LoginScreen-RightInner">
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
