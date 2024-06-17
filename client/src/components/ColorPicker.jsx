import React from 'react'
import {SketchPicker} from 'react-color'
import {useSnapshot} from 'valtio'

import state from '../store'

const ColorPicker = () => {
  const snap = useSnapshot(state);

  const popularShirtColors = [
    "#000000", // Black
    "#FFFFFF", // White
    "#FF0000", // Red
    "#00FF00", // Green
    "#0000FF", // Blue
    "#FFFF00", // Yellow
    "#FF00FF", // Magenta
    "#00FFFF", // Cyan
    "#800080", // Purple
    "#FFA500", // Orange
  ];

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAplpha
        presetColors={popularShirtColors}
        onChange={(color) => (state.color = color.hex)}
      />
    </div>
  );
}

export default ColorPicker