import React from 'react'

const Button = ({
    name,
    onClick,
}: {
    name: String,
    onClick: () => void,
}) => {

    return (
        <button onClick={onClick}>{name}</button>
    )
}
export default React.memo(Button)