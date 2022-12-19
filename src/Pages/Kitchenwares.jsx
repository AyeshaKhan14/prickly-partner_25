import { KitchenwareProductPage } from "../Components/KitchenwareProductPage";
import { KitchenwareSideBar } from "../Components/KitchenwareSideBar";
import Style from "../Components/Women.module.css";

export const Kitchenwares = () => {
  return (
    <div className={Style.womenpage_div}>
      <KitchenwareSideBar />
      <KitchenwareProductPage />
    </div>
  );
};
