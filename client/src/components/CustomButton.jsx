import React from 'react'
import { useSnapshot } from 'valtio';
import state from '../store';
import { getContrastingColor } from '../config/helpers';

const CustomButton = ( {type, title, handleClick, customStyles}) => {
  
    const snap = useSnapshot(state);
    const generateStyle = (type) => {
        switch(type) {
            case 'filled':
                return {
                    backgroundColor: snap.color,
                    color: getContrastingColor(snap.color)
                }
            case 'outline':
                return {
                    backgroundColor: 'transparent',
                    color: snap.color,
                    border: `1px solid ${snap.color}`
                }
            default:
                return {
                    backgroundColor: '#000',
                    color: '#fff'
                }
        }
    }
    return (
    <button 
    className = {`px-2 py-1.5 flex-1 rounded-md ${customStyles}` }
    style={generateStyle(type)}
    onClick={handleClick}
    >
    {title}

    </button>
  )
}

export default CustomButton