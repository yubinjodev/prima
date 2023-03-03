import { Contents } from "../components/Contents";
import { Slider } from "../components/Slider";

export const Home = () => {
  return (
    <div className="main-container">
      <Slider />
      <div className="page-title">READY FOR DELIVERY</div>
      <Contents />
    </div>
  );
};
