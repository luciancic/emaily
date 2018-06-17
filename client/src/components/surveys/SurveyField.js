import React from 'react';

export default ({ input, label }) => {
    // return (<div>
    //         <label htmlFor={input.name}>{label}</label>
    //         <input {...input} id={input.name} />
    //     </div>)
    return <input {...input} id={input.name} placeholder={label}/>
}