import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { fetchUsers } from "../redux/users/userSlice";
import { selectAllUsers, selectUserStatus } from "../redux/users/userSelectors";
import { FilterInput } from "./FilterInput";
import {
  selectNameFilter,
  selectUsernameFilter,
  selectEmailFilter,
  selectPhoneFilter,
} from "../redux/filters/filterSelectors";
import { setSortColumn } from "../redux/sort/sortSlice";
import { RootState } from "../redux/store";
import Notiflix from "notiflix";
import "./../styles/UserTable.css";

Notiflix.Notify.init({
  position: "left-top", // Przesuwamy Notiflix na lewy górny róg
  width: "280px",
  distance: "20px",
  opacity: 0.9,
  borderRadius: "8px",
  timeout: 4000, // Powiadomienie będzie widoczne przez 4 sekundy
});

const UserTable: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const status = useSelector(selectUserStatus);

  // Pobranie wartości filtrów z Redux Store
  const nameFilter = useSelector(selectNameFilter);
  const usernameFilter = useSelector(selectUsernameFilter);
  const emailFilter = useSelector(selectEmailFilter);
  const phoneFilter = useSelector(selectPhoneFilter);

  // Pobieranie informacji o bieżącym stanie sortowania
  const { sortBy, direction } = useSelector((state: RootState) => state.sort);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUsers())
        .unwrap()
        .then((data) => {
          Notiflix.Notify.success(`Found ${data.length} users`);
        })
        .catch((error) => {
          Notiflix.Notify.failure("Failed to fetch users. Please try again.");
          console.error("Error fetching users:", error);
        });
    }
  }, [status, dispatch]);

  // Filtrowanie użytkowników
  let filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(nameFilter.toLowerCase()) &&
      user.username.toLowerCase().includes(usernameFilter.toLowerCase()) &&
      user.email.toLowerCase().includes(emailFilter.toLowerCase()) &&
      user.phone.toLowerCase().includes(phoneFilter.toLowerCase())
  );

  // Sortowanie użytkowników w zależności od kolumny i kierunku
  filteredUsers = filteredUsers.sort((a, b) => {
    if (!sortBy) return 0;

    const valueA = a[sortBy].toLowerCase();
    const valueB = b[sortBy].toLowerCase();

    if (direction === "asc") {
      return valueA < valueB ? -1 : valueA > valueB ? 1 : 0;
    } else {
      return valueA > valueB ? -1 : valueA < valueB ? 1 : 0;
    }
  });

  // Funkcja obsługująca zmianę sortowania po kliknięciu na przycisk
  const handleSort = (column: "name" | "username" | "email" | "phone") => {
    dispatch(setSortColumn(column));
  };

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>
            <div className="header-cell">
              <span>Name</span>
              <FilterInput field="name" placeholder="Filter by Name" />
              <button
                className={`sort-button ${
                  sortBy === "name" && direction === "asc" ? "asc" : ""
                }`}
                onClick={() => handleSort("name")}
              />
            </div>
          </th>
          <th>
            <div className="header-cell">
              <span>Username</span>
              <FilterInput field="username" placeholder="Filter by Username" />
              <button
                className={`sort-button ${
                  sortBy === "username" && direction === "asc" ? "asc" : ""
                }`}
                onClick={() => handleSort("username")}
              />
            </div>
          </th>
          <th>
            <div className="header-cell">
              <span>Email</span>
              <FilterInput field="email" placeholder="Filter by Email" />
              <button
                className={`sort-button ${
                  sortBy === "email" && direction === "asc" ? "asc" : ""
                }`}
                onClick={() => handleSort("email")}
              />
            </div>
          </th>
          <th>
            <div className="header-cell">
              <span>Phone</span>
              <FilterInput field="phone" placeholder="Filter by Phone" />
              <button
                className={`sort-button ${
                  sortBy === "phone" && direction === "asc" ? "asc" : ""
                }`}
                onClick={() => handleSort("phone")}
              />
            </div>
          </th>
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
  );
};

export default UserTable;
