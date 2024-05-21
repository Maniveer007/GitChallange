// ImageComponent.js
import React from 'react';
import { useDrag } from 'react-dnd';

const ImageComponent = ({ src, alt, type }) => {
  const [{ isDragging }, drag] = useDrag({
    type,
    item: { src, type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1, cursor: 'move' }}>
      <img src={src} alt={alt} style={{ width: '100px', height: '100px', margin: '5px' }} />
    </div>
  );
};

export default ImageComponent;
