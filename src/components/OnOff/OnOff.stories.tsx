import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {OnOff} from "./OnOff";


export default {
    title: 'OnOff',
    component:OnOff,
}

const callback = action("clicked")

export const ChangedOnOff = ()=>{
    const [onoff, setOnoff] = useState<boolean>(false)
    return<OnOff on={onoff} onClick={setOnoff}/>
}
export const OnMode = ()=> <OnOff on={true} onClick={callback}/>
export const OffMode = ()=> <OnOff on={false} onClick={callback}/>
