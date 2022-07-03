import "./spinner.scss";

import CircularProgress from "@mui/material/CircularProgress";

const Spinner = () => {
  return (
    <div className="spinner">
      <CircularProgress size={256} />
    </div>
  );
};

export default Spinner;
