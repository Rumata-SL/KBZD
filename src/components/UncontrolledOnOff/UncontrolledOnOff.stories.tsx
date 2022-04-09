import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {UncontrolledOnOff} from "./UncontrolledOnOff";


export default {
    title: 'UncontrolledOnOff',
    component:UncontrolledOnOff,
}
const callback = action("clicked")

export const ModeOn = ()=>{return<UncontrolledOnOff default={true} onClick={callback}/>}
export const ModeOff = ()=>{return<UncontrolledOnOff default={false} onClick={callback}/>}

