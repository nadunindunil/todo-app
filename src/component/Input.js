import React from 'react';
import PropTypes from 'prop-types';

export default function Input({ type, placeholder, onChangeHandler }) {
  return <input className="todo-input" type={type} placeholder={placeholder} onChange={onChangeHandler} />;
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'number']),
  placeholder: PropTypes.string,
  onChangeHandler: PropTypes.func,
};
