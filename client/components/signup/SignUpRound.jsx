import React from 'react';
import ButtonsGroup from '../button/Buttonsgroup';


const SignUpRound = ({ clickHandler, options }) => (
  <div>
    <h1>Select Your Funding Stage</h1>
    <ButtonsGroup classN="fluid ui button massive" clickHandler={clickHandler} options={options} />
  </div>
);

export default SignUpRound;
