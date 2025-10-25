
import { Button, Spinner } from "flowbite-react";

export function LoadingSpinner({ text = "Loading..." }) {
  return (
    <div className="flex flex-row gap-3">
      <Button>
        <Spinner color="pink" aria-label="Spinner button example" size="md" light />
        <span className="pl-3">{text}</span>
      </Button>
    </div>
  );
}

export default LoadingSpinner;

