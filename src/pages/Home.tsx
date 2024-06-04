import  { useState } from "react";

import BmihtmlForm from "../components/BmiForm";
import GradientSlider from "../components/GradientSlider";

const Home = () => {
  const [bmi, setBMI] = useState(0);

  return (
    <>
      <div className="basis-1/2 h-3/4 ">
        <BmihtmlForm setBMI={setBMI}></BmihtmlForm>
      </div>
      <div className="basis-1/4 ">
        <div className="p-6">
          <GradientSlider bmi={bmi} />
        </div>
      </div>
    </>
  );
};

export default Home;
