import { FormRegister } from "./FormRegister/FormRegister";
import { Info } from "./Info/Info";
import "./index.css";

export function Home() {
  return (
    <div className="home-container">
      <Info />
      <FormRegister />
    </div>
  );
}
