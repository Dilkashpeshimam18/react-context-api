import React from 'react'
import AppContext from '../context/context'
const GrandChild = () => {
    return (
        <AppContext.Consumer>
            {(context) => {
                return (
                    <div>
                        <input onChange={(e) => context.setUserName(e.target.value)} value={context.username} />
                        <button onClick={context.setUserName(context.username)}>Change username</button>
                    </div>
                )
            }}
        </AppContext.Consumer>

    )
}

export default GrandChild