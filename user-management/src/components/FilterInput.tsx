import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setNameFilter,
  setUsernameFilter,
  setEmailFilter,
  setPhoneFilter,
} from "../redux/filters/filterSlice";
import {
  selectNameFilter,
  selectUsernameFilter,
  selectEmailFilter,
  selectPhoneFilter,
} from "../redux/filters/filterSelectors";
import { RootState } from "../redux/store";

interface FilterInputProps {
  field: "name" | "username" | "email" | "phone";
  placeholder: string;
}

export const FilterInput: React.FC<FilterInputProps> = ({
  field,
  placeholder,
}) => {
  const dispatch = useDispatch();

  const filterValue = useSelector((state: RootState) => {
    switch (field) {
      case "name":
        return selectNameFilter(state);
      case "username":
        return selectUsernameFilter(state);
      case "email":
        return selectEmailFilter(state);
      case "phone":
        return selectPhoneFilter(state);
      default:
        return "";
    }
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    switch (field) {
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

  return (
    <input
      type="text"
      value={filterValue}
      placeholder={placeholder}
      onChange={handleFilterChange}
    />
  );
};
