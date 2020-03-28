import React from "react";
import { Link } from "react-router-dom";
import { Button } from 'antd';

export const Btn = ({ to, children }) => (
  <Link to={to}><Button className="button">{children}</Button></Link>
)