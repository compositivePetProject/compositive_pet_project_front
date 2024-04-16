import { View, Text } from 'react-native'
import React from 'react'

function CommunityRegisterInput({value, onChange, onKeyDown, CommunityBoardRef, isDisabled}) {
  return (
    <input
        type= "text"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        ref={CommunityBoardRef}
        disabled={isDisabled}
    />
  ); 
   
}

export default CommunityRegisterInput
