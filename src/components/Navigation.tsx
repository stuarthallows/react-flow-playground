import { FC } from "react";
import { Link } from "react-router-dom";

export const Navigation: FC = () => { 
  return <div className="flex gap-2 p-1">
    <Link to="/basic">
      <button type="button" className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        Basic
      </button>
    </Link>
    <Link to="/pc1-mine">
      <button type="button" className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        PC1 Mine
      </button>
    </Link>
    <Link to="/pc1-cx">
      <button type="button" className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-sm hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
        PC1 CX
      </button>
    </Link>
  </div>
};
