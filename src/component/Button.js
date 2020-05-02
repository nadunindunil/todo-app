import React from 'react';
import PropTypes from 'prop-types';

export default function Button({title,todoHandler}) {
  return (
    <button className="todo-button" onClick={todoHandler}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string,
  todoHandler: PropTypes.func
};