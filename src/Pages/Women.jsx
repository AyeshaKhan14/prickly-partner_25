import { SideBar } from "../Components/SideBar";
import { WomenProductPage } from "../Components/WomenProductPage";
import Style from "../Components/Women.module.css";

export const Women = () => {
  return (
    <div className={Style.womenpage_div}>
      <SideBar />
      <WomenProductPage />
    </div>
  );
};
