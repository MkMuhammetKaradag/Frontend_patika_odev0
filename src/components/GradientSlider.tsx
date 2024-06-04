import React, { useEffect, useState } from "react";
interface GradientSliderProps {
  bmi: number;
}
const GradientSlider: React.FC<GradientSliderProps> = ({ bmi }) => {
  const [pointerPosition, setPointerPosition] = useState(bmi > 50 ? 49 : bmi);

  const divStyle = {
    background:
      "linear-gradient(to right, #54bce8, #68c99f 22%, #f5e664 41%, #ffc366 63%, #f37b50 84%, #d25b64)", // İstediğiniz renkleri kullanın
  };
  useEffect(() => {
    setPointerPosition(bmi > 50 ? 49 : bmi);
  }, [bmi]);

  return (
    <div>
      <div
        className="h-4  relative  w-full flex rounded-lg mb-3"
        style={divStyle}
      >
        {bmi > 0 && (
          <div
            className=" absolute  w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-black"
            style={{
              left: `${Math.floor(pointerPosition) * 2}%`,
              transform: "translateX(-50%)",
              bottom: "-10px",
            }}
          />
        )}
      </div>
      {bmi > 0 && (
        <div className="border-2 mt-5 text-center">
          <span className="block">VÜCUT KİTLE İNDEKSİ (BMI)</span>
          <span className="block">{bmi}</span>
        </div>
      )}
    </div>
  );
};

export default GradientSlider;
