import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/toast';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import { useTransition, animated } from 'react-spring';
import jwtDecode from 'jwt-decode';
import { ReactComponent as CustomLogo } from "./images/logo.svg"; // Importing the SVG logo

function HomeBody() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [index, setIndex] = useState(0);
  const messages = [
    "Welcome to Mealed Dot",
    "Float in a world,",
    "where the dots connect,",
    "of meals and fitness",
    "Share your Ideas"
  ];
  const toast = useToast();
  const navigate = useNavigate();

  const transitions = useTransition(messages[index], {
    keys: messages[index],
    from: { opacity: 0, transform: 'translate3d(0,30px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-30px,0)' },
    config: { duration: 1000 },
    unique: true,
    reset: true,
    onRest: () => {
      setTimeout(() => {
        setIndex(state => (state + 1) % messages.length);
      }, 2000);
    },
  });

  const successToast = () => {
    toast({
      title: 'Login successful',
      position: 'top',
      isClosable: true,
    });
  };

  const errorToast = () => {
    toast({
      title: 'Wrong username or password',
      status: 'error',
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
    const oldPerson = {
      username: userName,
      password: password,
    };

    fetch("http://localhost:5000/", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(oldPerson),
    })
      .then(res => res.json())
      .then(data => {
        if (data.user) {
          localStorage.setItem("token", data.user);
          successToast();
          setTimeout(() => {
            navigate("/feed");
          }, 600);
        } else {
          errorToast();
        }
      })
      .then(() => {
        setUserName('');
        setPassword('');
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = jwtDecode(token);
      if (user.exp <= Date.now() / 1000) {
        localStorage.removeItem("token");
      } else {
        navigate("/feed");
      }
    }
  }, []);

  return (
    <div className="container">
      <div className="homeContainer">
        <div className="homeContainer-logo">
          <CustomLogo/>
        </div>
        <div className="homeContainer-header">
          {transitions((style, item) => (
            <animated.h2 style={style} key={item}>
              {item}
            </animated.h2>
          ))}
        </div>
        <a className="googleSignIn" href="#">
          <FcGoogle style={{ fontSize: "1.3rem" }} />
          <div> Sign in with Google</div>
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
            Sign in
          </button>
        </form>
        <div className="homeContainer-signup">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
}

export default HomeBody;
