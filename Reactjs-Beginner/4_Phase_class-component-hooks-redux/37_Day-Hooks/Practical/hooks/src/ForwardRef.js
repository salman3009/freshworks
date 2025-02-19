import React, { useRef } from "react";

export function Form() {
  const inputRef = useRef(null);
  const handleClick = () => inputRef.current.focus();

  return (
    <div className="form">
      <Input label="Title" ref={inputRef} />
      <button className="button" onClick={handleClick}>
        Focus Title Field
      </button>
    </div>
  );
}

export const Input = React.forwardRef((props, inputRef) => {
  const { label, ...otherProps } = props;
  return (
    <div className="form-control">
      <label className="form-label">{label}</label>
      <input className="form-field" {...otherProps} ref={inputRef} />
    </div>
  );
});