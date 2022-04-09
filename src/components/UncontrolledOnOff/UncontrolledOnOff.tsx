import React, {useState} from 'react';

type UncontrolledOnOffPropsType = {
    onClick:(on:boolean)=>void
    default?:boolean
}

export const UncontrolledOnOff = (props: UncontrolledOnOffPropsType) => {
    let [on, setOn ] = useState(props.default? props.default :false)

    const onOffStyle = {
        display: 'flex',
        margin: '20px'
    }
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        backgroundColor: on ? 'green' : 'white',

    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        marginLeft: '1px',
        backgroundColor: on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '15px',
        border: '1px solid black',
        marginLeft: '5px',
        backgroundColor: on ? 'green' : 'red',
    }

    const onClick = () => {
        setOn(true)
        props.onClick(true)
    }
    const offClick = () => {
        setOn(false)
        props.onClick(false)
    }


    return (
        <div style={onOffStyle}>
            <div onClick={onClick} style={onStyle}>On</div>
            <div onClick={offClick} style={offStyle}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};
