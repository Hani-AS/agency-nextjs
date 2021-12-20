import React from 'react';

const Circle = (props: React.CSSProperties) => {
  return <div className='circle' style={{ ...props }}></div>;
};

export default Circle;
