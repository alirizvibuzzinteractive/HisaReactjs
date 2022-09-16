import React, { useEffect, useState } from "react";
import MUIDataTable from "mui-datatables";
import { UserAddIcon,ChevronDownIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import { getUsers } from "../../../helper/users";
import SideOvers from "../../components/SideOvers";
const columns = [
  "Role",
  "Name",
  "Email",
  "Phone",
  "Gender",
  "Status",
  "Action",
];

const options = {
  filterType: "multiselect",
};
export default function Dashboard() {
  useEffect(() => {
    getUsers("Hi guys!").then((resp) => {
      console.info(resp);
      makeData(resp.data);
    });
  }, []);
  const [DataTableData, SetDataTableData] = useState([]);
  const makeData = (users) => {
    var data = [];
    users.forEach((usr) => {
      data.push([
        <div className={`cbadge ${usr.role == "operator" ? "bg1" : "bg2"}`}>
          {usr.role}
        </div>,
        usr.full_name,
        usr.email,
        usr.phone ? usr.phone : "---",
        usr.gender,
        <div
          className={`cbadge ${
            usr.status == "active"
              ? "bg4"
              : usr.status == "pending"
              ? "bg3"
              : usr.status == "deactive"
              ? "bg8"
              : usr.status == "freez"
              ? "bg10"
              : null
          }`}
        >
          {usr.status}
        </div>,
        <div className="cbadge">
          Action <ChevronDownIcon className="h-4 w-4 d-inline-block" aria-hidden="true" />
        </div>,
      ]);
    });
    SetDataTableData(data);
  };

  return (
    <div>
      <SideOvers/>
      <MUIDataTable
        className="box-shadow-unset"
        title={
          <Link to="/home">
            <button
              type="button"
              class="inline-flex items-center px-3 py-2 border border-transparent shadow-sm text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <b className="mr-5px">Create User</b>
              <UserAddIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </Link>
        }
        data={DataTableData}
        columns={columns}
        options={options}
      />
    </div>
  );
}
