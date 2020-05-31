import React from 'react'

function Person({persons}) {
    return (
        <div>
                <h2>I am {persons.Name}. I am {persons.Age} years Old. I am {persons.Religion} </h2>
        </div>
    )
}

export default Person

