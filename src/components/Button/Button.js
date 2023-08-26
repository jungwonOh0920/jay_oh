import React from 'react'
import './button.css'
import classNames from 'classnames'

const Button = ({type = 'button', size = 'md', onClick, children}) => {
    const buttonClass = classNames({
        button: true,
        'fill': type === 'fill',
        'underline': type === 'underline',
        'sm': size === 'sm'
    })

    return (
        <button onClick={onClick} className={buttonClass}>{children}</button>
    )
}

export default Button