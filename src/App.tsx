import React from "react";
import "./App.css";

interface About {
  firstname: string;
  lastname: string;
  age: number;
  title: string;
}

function App() {
  const info: About = {
    firstname: "Adeolu",
    lastname: "Amole",
    age: 0,
    title: "Software Engineer",
  };

  return (
    <>
      <div className="bg-body-background max-w-screen-lg mx-auto mt-8">
        <h2 className="text-center text-3xl font-bold mb-4">
          User Information
        </h2>
        <table className="table-auto w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Firstname</th>
              <th className="p-2">Lastname</th>
              <th className="p-2">Age</th>
              <th className="p-2">Title</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-200 transition duration-300 text-center">
              <td className="p-2">{info.firstname}</td>
              <td className="p-2">{info.lastname}</td>
              <td className="p-2">{info.age}</td>
              <td className="p-2">{info.title}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
