/** @jsxImportSource @emotion/react */
import * as s from "./style";
import { useEffect, useRef, useState } from "react";

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
  
  return (
    <div>
      <div css={s.container} ref={containerRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onMouseMove={handleMouseMove}>
        <div>
          <img css={s.image} src={src} alt="Product" ref={sourceRef} />
          <div css={() => s.target(offset, opacity)} ref={targetRef}></div>
        </div>
      </div>
        {opacity === 1 && offset.left !== 0 && offset.top !== 0 && (
          <div css={() => s.enlargedImage(src, offset, sourceRect)} ref={enlargedImageRef}>
          </div>
        )}
    </div>
  );
}

export default ProductImage;