import React from 'react'

function MemoComp({name}) {
    console.log("Chilld Component Render")
    return (
        <div>
            {name}
        </div>
    )
}

export default React.memo(MemoComp);


// Memo is Pure Component for Function Class