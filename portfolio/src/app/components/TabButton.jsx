import React from 'react';

const TabButton = ({ active, selectTab, children}) => {
    const buttonClasses = active ? 'text-white' : 'text-[#ADB7BE]'
  return (
    <button onClick={selectTab}>
        <p className={'mr-3 font-semibold hover:text-white text-[#ADB7BE] ${buttonClasses}'}>
        {children}
        </p>
    </button>
  )
}

export default TabButton;