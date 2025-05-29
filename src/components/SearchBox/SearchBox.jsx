// import css from "./SearchBox.module.css";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filtersSlice";

export default function SearchBox() {
  const filter = useSelector((state) => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = (value) => {
    dispatch(changeFilter(value));
  };

  return (
    <label>
      Find contacts by name
      <input
        type="text"
        value={filter}
        onChange={(e) => handleChange(e.target.value)}
      />
    </label>
  );
}
