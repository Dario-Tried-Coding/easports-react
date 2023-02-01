import React from 'react';
import { useNavigate } from 'react-router-dom';

function NotFound() {
  const navigate = useNavigate()
  navigate("/")

  return ( <h1>Not Found</h1> );
}

export default NotFound;