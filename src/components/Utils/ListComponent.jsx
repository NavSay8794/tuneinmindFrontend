import React from 'react'

const ListComp = ({data}) =>{
    return (
        <ul>
            {data.map((item, index)=>{
                return <li key={index}>
                    <p>
                    <span className='item'>{item}</span>
                    </p>
                </li>
            })}
        </ul>
    )
}

export default ListComp