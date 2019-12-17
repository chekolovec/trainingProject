import React from 'react'

export default (Component, bets) => {
    return (props) => (
        <Component bets={bets} {...props} />
    )
}