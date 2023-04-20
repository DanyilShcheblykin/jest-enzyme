import React from 'react';
import './styles.scss'
import PropTypes from 'prop-types'

interface ButtonProps {
    buttonText: string,
    emitEvent: () => void
}

const Button = (props: ButtonProps) => {
    
    const { buttonText, emitEvent } = props

    const submitEvent = async () => {
        
        await props.emitEvent();
      }

    return (
        <button onClick={()=>submitEvent()} data-test="buttonComponent">
            {buttonText}
        </button>
    );
};

Button.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
};



export default Button;