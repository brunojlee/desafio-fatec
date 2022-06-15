import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import FeedbackContext from '../../context/FeedbackContext';
import './LoginCard.css';

function LoginCard() {
  const navigate = useNavigate();
  const {
    userEmail,
    setUserEmail,
    password,
    setPassword,
    setLoading,
    isButtonDisabled,
    setIsButtonDisabled
  } = useContext(FeedbackContext);

  const handleEmail = ({ target: { value } }) => {
    setUserEmail(value);
  };

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  const handleClick = () => {
    localStorage.setItem('user', JSON.stringify({ email: userEmail }));
    setLoading(true);
    navigate('/question');
  };

  useEffect(() => {
    const validateButton = async () => {
      const minPasswordLength = 6;
      const emailFormatRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
      if (password.length > minPasswordLength && userEmail.match(emailFormatRegex)) {
        await setIsButtonDisabled(false);
      } else {
        await setIsButtonDisabled(true);
      }
    };
    validateButton();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userEmail, password]);

  return (
    <div className="login_container">
      <img
        className="login_image"
        src={require('../../imgs/logo.png')}
        alt="logo app"
      />
      <form className="input_container">
        <label className="email_label" htmlFor="email">
          <input
            className="email_input"
            type="email"
            name="email"
            placeholder="Email"
            value={ userEmail }
            onChange={ (event) => handleEmail(event) }
          />
        </label>
        <label className="password_label" htmlFor="password">
          <input
            className="password_input"
            type="password"
            name="password"
            placeholder="Senha"
            value={ password }
            onChange={ (event) => handlePassword(event) }
          />
        </label>
        <button
          className="login_button"
          disabled={ isButtonDisabled }
          type="button"
          onClick={ () => handleClick() }
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LoginCard;
