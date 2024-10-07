import { Join } from "../components/CreateButton";
import GridPattern from "../components/ui/animated-grid-pattern";

export const Home = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center relative">
      <GridPattern />
      <div className="absolute flex justify-center items-center">
        <Join />
      </div>
    </div>
  );
};
