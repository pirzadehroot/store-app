import React from "react";
import Logo from "../Header/MainHeader/Logo";

export default function FooterAboutShop() {
  return (
    <div>
      <div className={"flex max-sm:justify-center"}>
        <Logo />
      </div>
      <p className="text-gray-600 max-sm:text-center dark:text-gray-200 font-light text-sm leading-7 text-justify tracking-wide">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است و برای شرایط فعلی است.
      </p>
    </div>
  );
}
