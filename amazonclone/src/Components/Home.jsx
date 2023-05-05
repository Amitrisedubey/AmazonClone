import { ItemsList } from "./Allitems";
import { Footer } from "./Footer";
import { Sliders } from "./slider";

export const Home = () => {
  return (
    <div>
      <Sliders />
      <ItemsList />
      <Footer />
    </div>
  );
};
