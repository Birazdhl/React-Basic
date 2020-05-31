import React from 'react'
import Person from '../10.)ListRendering/Person'

function NameList() {

    const persons = 
    [{
      Id:1,
      Name : "Amar",
      Religion: "Hindu",
      Age: 28  
    },
    {
        Id:2,
        Name : "Akbar",
        Religion : "Muslim",
        Age : 30
    },
    {
        Id:3,
        Name : "Anthony",
        Religion: "Christian",
        Age: 32
    } 
    ]


    const personList = persons.map(person => <Person key={person.Id} persons = {person} />)

    //key helps React identify which items have changed, are added, or removed

    return (
        <div>
            {personList}
        </div>
    )
}

export default NameList
