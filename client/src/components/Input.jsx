import React from "react";

export const Input = ({data,infoname,func,type="text"}) => {
  return (
    <div className="field">
      <div className="control">
      <label>{infoname}</label>
        <input
          className="input is-primary"
          type={type}
          value={data}
          onChange={(e)=>func(e,infoname)}
        />
      </div>
    </div>
  );
};