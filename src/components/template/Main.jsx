import './main.css'
import React from 'react'
import Header from './Header'

export default props => {
    return (
        <>
            <Header {...props} />
            <main className='content container-fluid'>
                <div className="p-3 mt-3">
                    { props.children }
                </div>
            </main>
        </>
    )
}
