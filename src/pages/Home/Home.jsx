import React, { useState, useEffect } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExplorePair from '../../components/ExplorePair/ExplorePair';
import FootWearDisplay from '../../components/FootWearDisplay/FootWearDisplay';

const Home = () => {
  const [category, setCategory] = useState("All");
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());
  const [userMessage, setUserMessage] = useState("");

  const getWelcomeMessage = () => {
    const hour = new Date().getHours();
    if (hour < 12) {
      return "Good Morning!";
    } else if (hour < 18) {
      return "Good Afternoon!";
    } else {
      return "Good Evening!";
    }
  };

  const [welcomeMessage, setWelcomeMessage] = useState(getWelcomeMessage());

  useEffect(() => {
    setWelcomeMessage(getWelcomeMessage());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);


    return () => clearInterval(timer);
  }, []);

  const handleInputChange = (event) => {
    setUserMessage(event.target.value);
  };

  useEffect(() => {
    if (userMessage) {
      setWelcomeMessage(userMessage);
    } else {
      setWelcomeMessage(getWelcomeMessage());
    }
  }, [userMessage]);

  return (
    <div>
      
      <h1  className='welcomemsg'>{welcomeMessage}</h1>
      <h2 className='clock'>{currentTime}</h2>
      <br />
      <input className='Himsg'
        type="text"
        placeholder="Enter your welcome msg"
        value={userMessage}
        onChange={handleInputChange}
      />
      <Header />
      <br /><br />
      <ExplorePair category={category} setCategory={setCategory} />
 
      <FootWearDisplay category={category} />
    </div>
  );
}

export default Home;
