import React from 'react'

export const Square = (props) => {
    // const [value , setValue]  = useState(null);
    
    return (
        <button className="square" onClick={(e)=>props.onClick(e)}>
            {props.value}
        </button>
    )
}
