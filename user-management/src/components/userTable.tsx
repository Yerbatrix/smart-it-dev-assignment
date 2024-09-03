import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { fetchUsers } from "../redux/users/userSlice";
import {
  setNameFilter,
  setUsernameFilter,
  setEmailFilter,
  setPhoneFilter,
} from "../redux/filters/filterSlice";
import { selectAllUsers, selectUserStatus } from "../redux/users/userSelectors";
import {
  selectNameFilter,
  selectUsernameFilter,
  selectEmailFilter,
  selectPhoneFilter,
} from "../redux/filters/filterSelectors";

const UserTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  const users = useSelector(selectAllUsers);
  const status = useSelector(selectUserStatus);

  const nameFilter = useSelector(selectNameFilter);
  const usernameFilter = useSelector(selectUsernameFilter);
  const emailFilter = useSelector(selectEmailFilter);
  const phoneFilter = useSelector(selectPhoneFilter);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers());
    }
  }, [status, dispatch]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        dispatch(setNameFilter(value));
        break;
      case "username":
        dispatch(setUsernameFilter(value));
        break;
      case "email":
        dispatch(setEmailFilter(value));
        break;
      case "phone":
        dispatch(setPhoneFilter(value));
        break;
    }
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      user.username.toLowerCase().includes(usernameFilter.toLowerCase()) &&
      user.email.toLowerCase().includes(emailFilter.toLowerCase()) &&
      user.phone.toLowerCase().includes(phoneFilter.toLowerCase())
  );

  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Filter by Name"
          value={nameFilter}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Filter by Username"
          value={usernameFilter}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="email"
          placeholder="Filter by Email"
          value={emailFilter}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="phone"
          placeholder="Filter by Phone"
          value={phoneFilter}
          onChange={handleFilterChange}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
