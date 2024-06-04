import  { useEffect, useState } from "react";
import { localBmis } from "../components/BmiForm";
import TableItem from "../components/TableItem";

const HistoryBmi = () => {
  const [bmis, setbmis] = useState<localBmis[]>([]);
  useEffect(() => {
    const localArr = JSON.parse(
      localStorage.getItem("bmis") || "[]"
    ) as localBmis[];

    if (localArr.length > 0) {
      setbmis(localArr);
    }
  }, []);

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-800">
          <tr>
            <th scope="col" className="px-6 py-3">
              User Name
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Weight
            </th>
            <th scope="col" className="px-6 py-3">
              Height
            </th>
            <th scope="col" className="px-6 py-3">
              bmi
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {bmis.map((item, index) => (
            <TableItem key={index} userBmi={item}></TableItem>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryBmi;
