import React from 'react'

const Player = {name: 'Lionel', surName : 'Messi'}

const UserContext = React.createContext(Player);


const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider, UserConsumer}