import { ClipLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "1.25rem auto",
};

export default function Loader({ loading }) {
  return (
    <div className="loader">
      <ClipLoader
        color="#36d7b7"
        loading={loading}
        cssOverride={override}
        size={60}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
