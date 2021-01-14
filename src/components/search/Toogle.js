import React, { useState } from 'react'
import { DragSwitch } from 'react-dragswitch'
// import { ToggleSwitch } from 'react-dragswitch'
import 'react-dragswitch/dist/index.css'

const Toogle = () => {
  
  const [checked, setChecked] = useState(false)
  return (
    <div>
      <DragSwitch checked={checked} onChange={(e) => {
      setChecked(e)
      }}/>
    </div>
  )
}

export default Toogle
