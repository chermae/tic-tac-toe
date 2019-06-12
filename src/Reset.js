import React from 'react'

const Reset = (props) => {
    return (
            <button onClick={() => document.location.reload()}>
            {props.reset} 
            </button>      
        )
    }

export default Reset