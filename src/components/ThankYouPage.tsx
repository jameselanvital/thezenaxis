import svgPaths from "../imports/svg-4ogy67dxoa";

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

function DecorationFrame() {
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

export function ThankYouPage() {
  return (
    <div className="min-h-screen bg-white relative flex items-center justify-center">
      {/* Main Content Container */}
      <div className="container-responsive flex items-center justify-center min-h-screen py-12">
        <div className="relative w-full max-w-4xl">
          {/* Thank You Message */}
          <div className="text-center relative z-10">
            <div className="font-['Lato:Light',_sans-serif] leading-[normal] text-[#000000] text-center">
              <p className="block mb-0 text-[clamp(1.5rem,4vw,2.25rem)] font-light leading-normal">
                Thank you for taking the first step toward your healing.
              </p>
              <p className="block text-[clamp(1.5rem,4vw,2.25rem)] font-light leading-normal">
                We'll be in touch with you soon.
              </p>
            </div>
          </div>

          {/* Decorative Elements - Hidden on mobile for better readability */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none">
            <DecorationFrame />
          </div>

          {/* Simplified decorative element for mobile */}
          <div className="lg:hidden flex justify-center mt-12 opacity-30">
            <div className="w-32 h-32 relative">
              <svg
                className="block size-full"
                fill="none"
                preserveAspectRatio="none"
                viewBox="0 0 127 136"
              >
                <g>
                  <path
                    d={svgPaths.pcbb0700}
                    fill="#424242"
                  />
                  <path
                    d={svgPaths.p1782a480}
                    fill="#424242"
                  />
                  <path
                    d={svgPaths.p4e763f0}
                    fill="#424242"
                  />
                  <path
                    d={svgPaths.p29581100}
                    fill="#424242"
                  />
                  <path
                    d={svgPaths.p342f68c0}
                    fill="#424242"
                  />
                </g>
              </svg>
            </div>
          </div>

          {/* Return to Home Button */}
          <div className="flex justify-center mt-12">
            <button
              onClick={() => window.location.hash = ''}
              className="bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg font-medium"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}