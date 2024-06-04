import React, { useState } from "react";

interface BmihtmlFormProps {
  setBMI: React.Dispatch<React.SetStateAction<number>>;
}

export interface localBmis {
  userName: string;
  weight: number;
  height: number;
  bmi: number;
}

const BmihtmlForm: React.FC<BmihtmlFormProps> = ({ setBMI }) => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [userName, setUserName] = useState("");

  const calculateBMI = () => {
    if (height > 0) {
      const bmiValue = (weight / ((height / 100) * (height / 100))).toFixed(2);
      setBMI(+bmiValue);
      console.log(userName);
      saveToLocalStorage({
        bmi: +bmiValue,
        height,
        userName,
        weight,
      });
    }
  };

  const saveToLocalStorage = (userBmi: localBmis) => {
    const localArr = JSON.parse(
      localStorage.getItem("bmis") || "[]"
    ) as localBmis[];

    const newArr = localArr.filter((item) => item.userName != userBmi.userName);
    newArr.push(userBmi);

    localStorage.setItem("bmis", JSON.stringify(newArr));
  };

  return (
    <form className="max-w-sm mx-auto">
      <div className="mb-5">
        <label
          htmlFor="userName"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
        >
          userName
        </label>
        <input
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeholder=" verilere çerezden ulaşa bilmek için kullanıcı adını giriniz"
          id="userName"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />

        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
        >
          Height (cm)
        </label>
        <input
          onChange={(e) => setHeight(+e.target.value)}
          type="number"
          placeholder="Boyunuzu cm olarak girin"
          id="Height"
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-800"
        >
          Weight (kg)
        </label>
        <input
          type="number"
          onChange={(e) => setWeight(+e.target.value)}
          placeholder="Kilonuzu kg olarak girin"
          id="Weight "
          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
          required
        />
      </div>

      <button
        onClick={calculateBMI}
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Calculate
      </button>
    </form>
  );
};

export default BmihtmlForm;
