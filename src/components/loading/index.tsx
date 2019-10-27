import * as React from 'react';

export const DotsLoading: React.FC = () => {
  React.useEffect(() => {
    if (document.querySelector("#goo-svg")) return;
    const domNode = gooSvg('goo-svg');
    document.body.appendChild(domNode);

    return () => {
      document.body.removeChild(domNode)
    }
  }, [])


  return (
    <>
      <div className="loading">
        <div className="loading__main-dot"></div>
        <div className="loading__dots-wrapper">
          <div className="loading__dot"></div>
          <div className="loading__dot"></div>
          <div className="loading__dot"></div>
        </div>
      </div>
    </>
  )
}

const gooSvg = (id: string): SVGSVGElement => {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('version', "1.1");
  svg.id = id;
  svg.innerHTML = `
    <defs>
    <filter id="gooey">
      <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
      <feColorMatrix 
        in="blur" 
        mode="matrix" 
        values="1 0 0 0
                0  0 1 0 
                0 0  0 0 
                1 0 0  1
                0 0 19 -8 "
        result="gooey" 
      />
      <feBlend in="SourceGraphic" in2="gooey" />
    </filter>
    </defs>
  `;
  return svg;
}