import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";
import Pagination from "./Pagination";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(3);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const paginate = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="m-2">
        {currentUsers.map((user: any) => (
          <Card key={user.id} user={user} />
        ))}
      </div>

      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default UserList;
