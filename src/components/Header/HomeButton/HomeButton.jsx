import React from 'react';
import { Link } from 'react-router-dom';
import { HomeButtonWripper } from './HomeButton.styled';

const HomeButton = () => {
  return (
    <HomeButtonWripper>
      <Link className="btns" to={`/t-shirt-list`}>
			  <div>GoHome</div>
      </Link>
    </HomeButtonWripper>
  )
}

export default HomeButton;
