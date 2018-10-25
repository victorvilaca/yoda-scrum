import React from 'react';
import TextLoop from 'react-text-loop';
import YodaImg from '../../assets/img/yoda-small.png';

const Yoda = () => (
  <div className="yoda-div">
    <div className="quotes yoda">
      <TextLoop speed={4000} springConfig={{ stiffness: 180, damping: 8 }}>
        <p>Welcome, not so young Padawan...</p>
        <p>In this training, fast you must be...</p>
        <p>May the Code be with you...</p>
      </TextLoop>
    </div>
    <div>
      <img src={YodaImg} alt='YodaImg' />
    </div>
  </div>
)

export default Yoda;
