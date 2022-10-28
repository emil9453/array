import React from 'react'

const List = ({ elements }: { elements: String[] }) => <>{elements?.map((element
    , index) => <div key={index}>{element}</div>)}</>

export default React.memo(List);