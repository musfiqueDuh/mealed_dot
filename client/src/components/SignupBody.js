import React, { useState } from 'react';
import { useTransition, animated } from 'react-spring';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/toast';
import { ReactComponent as CustomLogo } from "./images/logo.svg"; // Importing the SVG logo

function SignupBody() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const toast = useToast();
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const messages = [
    "Welcome to Mealed Dot",
    "Float in a world,",
    "where the dots connect,",
    "of meals and fitness",
    "Share your Ideas"
  ];

  const transitions = useTransition(messages[index], {
    keys: messages[index],
    from: { opacity: 0, transform: 'translate3d(0,30px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-30px,0)' },
    config: { duration: 1000 },
    unique: true, // Ensures that only one message is transitioning at any time
    reset: true,  // Resets the animation state on every re-render
    onRest: () => {
      setTimeout(() => {
        setIndex(state => (state + 1) % messages.length);
      }, 2000);
    },
  });

  const successToast = () => {
    toast({
      title: 'Successfully registered, please login',
      position: 'top',
      isClosable: true,
    });
  };

  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPerson = {
      username: userName,
      password: password,
    };

    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(newPerson),
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === "ok") {
          successToast();
          setTimeout(() => {
            navigate("/");
          }, 600);
        }
      })
      .then(() => {
        setUserName("");
        setPassword("");
      });
  };

  return (
    <div className="container">
      <div className="homeContainer">
        <div className="homeContainer-logo">
          <CustomLogo /> 
        </div>
        <div className="homeContainer-header">
        <div className="homeContainer-header">
  {transitions((style, item) => (
    <animated.h2 style={style} key={item}>
      {item}
    </animated.h2>
  ))}
</div>

        </div>
        <a className="googleSignIn" href="#">
          <FcGoogle style={{ fontSize: "1.3rem" }} />
          <div> Sign up with Google</div>
        </a>
        <div className="homeContainer-hr">
          <hr></hr>
          <span>or</span>
          <hr></hr>
        </div>
        <form
          className="homeContainer-form"
          action="http://localhost:5000/signup"
          method="post"
          onSubmit={handleSubmit}
        >
          <input
            required
            className="homeContainer-input"
            type="text"
            placeholder="Enter Username"
            value={userName}
            onChange={handleChangeUserName}
          ></input>
          <br></br>
          <input
            required
            className="homeContainer-input"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={handleChangePassword}
          ></input>
          <br></br>
          <button className="homeContainer-btn" type="submit">
            Sign up
          </button>
        </form>
        <div className="homeContainer-signup">
          Already have an account? <Link to="/">Sign in</Link>
        </div>
      </div>
    </div>
  );
}

export default SignupBody;
