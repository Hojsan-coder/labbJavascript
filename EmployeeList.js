import { useEffect, useState } from "react";
import Employee from "./Employee";

function EmployeeList() {
  const [employess, setEmployess] = useState([
    {
      name: "Hoi Man Phung",
      email: "napster_hhh@hotmail.com",
      phone: "0766656565",
      skills: "react,C++,Java,Nodejs",
      avatar: "https://i.imgur.com/Q9qFt3m.png",
    },
    {
      name: "Test Test",
      email: "testemail@hotmail.com",
      phone: "07324343434",
      skills: "phyton,Sql,go",
      avatar: "https://i.imgur.com/t9HFQvX.png",
    },
  ]);
  function handleAddNewEMP() {
    setEmployess((prevState) => {
      return [
        ...prevState,
        {
          name: "Geralt of Rivia",
          email: "geralt@hotmail.com",
          phone: "073324435",
          skills: "C#,Nodejs",
          avatar: "https://i.imgur.com/TUhCrsY.png",
        },
      ];
    });
  }

  return (
    <div>
      <h3>EmployeeList</h3>
      <button onClick={handleAddNewEMP} className="button">
        Add Employee
      </button>
      {employess.map((employee) => (
        <Employee EmployeeData={employee} />
      ))}
    </div>
  );
}

export default EmployeeList;
