/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useEffect, useRef, useState } from "react";

const container = css`
    position: relative;
    display: flex;
    border-radius: 15px;
    overflow: hidden;
    width: 100%;
    height: 100%
`;

const image = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    transition: transform 0.3s ease-in-out;
    img {
        width: 100%;
        height: 100%;
    }
`;

const target = (offset, opacity) => css`
    ${image}
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: ${offset.left}px; 
    top: ${offset.top}px;
    width: 120px; 
    height: 120px;
    border: 1px solid #00adb7;
    opacity: ${opacity};
    transition: left 0.1s, top 0.1s;
    cursor: pointer;
`;

const enlargedImage = (src, offset, sourceRect) =>  css`
    position: absolute;
    top: 200px; 
    left: 500px; 
    width: ${sourceRect.width}px; 
    height: ${sourceRect.height}px; 
    background-image: url(${src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: ${-offset.left}px ${-offset.top}px; 
    z-index: 50;
    img {
        width: 100%;
        height: 100%;  
    }
    &:hover {
        transform: scale(4);
    }
`;



function ProductImage({ src }) {
  const sourceRef = useRef(null);
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const enlargedImageRef = useRef(null); 

  const [opacity, setOpacity] = useState(0);
  const [offset, setOffset] = useState({ left: 0, top: 0 });
  const [sourceRect, setSourceRect] = useState(null); 

  useEffect(() => {
    if (sourceRef.current) {
      const rect = sourceRef.current.getBoundingClientRect();
      setSourceRect(rect);
    }
  }, [src]);

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  const handleMouseMove = (e) => {
    const targetRect = targetRef.current.getBoundingClientRect();
    const sourceRect = sourceRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const xRatio = (targetRect.width - containerRect.width) / sourceRect.width;
    const yRatio = (targetRect.height - containerRect.height) / sourceRect.height;

    const left = Math.max(
      Math.min(e.pageX - sourceRect.left, sourceRect.width),
      0
    );
    const top = Math.max(
      Math.min(e.pageY - sourceRect.top, sourceRect.height),
      0
    );

    setOffset({
      left: left * -xRatio,
      top: top * -yRatio
    });
  };

  console.log(offset)
  return (
    <div>
      <div css={container} ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
        <div>
          <img css={image} src={src} alt="Product" ref={sourceRef} />
          <div css={() => target(offset, opacity)} ref={targetRef}></div>
        </div>
      </div>
        {opacity === 1 && offset.left !== 0 && offset.top !== 0 && (
          <div css={() => enlargedImage(src, offset, sourceRect)} ref={enlargedImageRef}>
          </div>
        )}
    </div>
  );
}

export default ProductImage;