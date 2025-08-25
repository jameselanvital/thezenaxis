import svgPaths from "./svg-4ogy67dxoa";

function Background() {
  return (
    <div
      className="absolute bottom-[0.26%] left-[0.22%] right-[28.43%] top-[47.22%]"
      data-name="Background"
    >
      <div className="absolute bottom-[-0.59%] left-[-0.34%] right-[-0.34%] top-[-0.59%]">
        <svg
          className="block size-full"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 151 87"
        >
          <g id="Background">
            <path
              d={svgPaths.p1f25cd00}
              id="Vector"
              stroke="var(--stroke-0, #484759)"
              strokeDasharray="3 8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Objects() {
  return (
    <div
      className="absolute bottom-[16.56%] left-[39.45%] right-[-0.03%] top-0"
      data-name="Objects"
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 127 136"
      >
        <g id="Objects">
          <path
            d={svgPaths.pcbb0700}
            fill="var(--fill-0, #424242)"
            id="Vector"
          />
          <path
            d={svgPaths.p1782a480}
            fill="var(--fill-0, #424242)"
            id="Vector_2"
          />
          <path
            d={svgPaths.p4e763f0}
            fill="var(--fill-0, #424242)"
            id="Vector_3"
          />
          <path
            d={svgPaths.p29581100}
            fill="var(--fill-0, #424242)"
            id="Vector_4"
          />
          <path
            d={svgPaths.p342f68c0}
            fill="var(--fill-0, #424242)"
            id="Vector_5"
          />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div
      className="absolute h-[162px] left-[592px] overflow-clip top-[269px] w-[209px]"
      data-name="Frame"
    >
      <Background />
      <Objects />
    </div>
  );
}

export default function Frame4464() {
  return (
    <div className="bg-[#ffffff] relative size-full">
      <div className="absolute font-['Lato:Light',_sans-serif] leading-[normal] left-[720px] not-italic text-[#000000] text-[36px] text-center top-[127px] translate-x-[-50%] w-[860px]">
        <p className="block mb-0">{`Thank you for taking the first step toward your healing. `}</p>
        <p className="block">We’ll be in touch with you soon.</p>
      </div>
      <Frame />
    </div>
  );
}