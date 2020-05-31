import React from 'react'

function FunctionClick() {
    function onButtonClick(){
        console.log("Angara messi");
    }
    return (
        <div>
            <button onClick={onButtonClick}>Click</button>
        </div>
    )
}

export default FunctionClick
