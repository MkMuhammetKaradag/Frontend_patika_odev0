import React from "react";
import { localBmis } from "./BmiForm";
interface TableItemProps {
  userBmi: localBmis;
}
const TableItem: React.FC<TableItemProps> = ({ userBmi }) => {
  return (
    <tr className="bg-white border-b  ">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
      >
        {userBmi.userName}
      </th>
      <td className="px-6 py-4">kilolu</td>
      <td className="px-6 py-4">{userBmi.height}</td>
      <td className="px-6 py-4">{userBmi.weight}</td>
      <td className="px-6 py-4">{userBmi.bmi}</td>
      <td className="px-6 py-4">
        <a
          href="#"
          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          info
        </a>
      </td>
    </tr>
  );
};

export default TableItem;
