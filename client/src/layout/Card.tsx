import React from 'react';

const Card: React.FC<{children?: React.ReactNode}> =(props) =>{
    return (
        <div className={"cardClass"}>
            {props.children}
        </div>
    );
}

export default Card;