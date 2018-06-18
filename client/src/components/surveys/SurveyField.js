import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
    // return (<div>
    //         <label htmlFor={input.name}>{label}</label>
    //         <input {...input} id={input.name} />
    //     </div>)
    return (
        <div style={{ marginBottom: '15px'}}>
            <input {...input} id={input.name} placeholder={label} style={{ marginBottom: '8px'}}/>
            <span className="red-text">{ touched && error }</span>
        </div>
    )
}