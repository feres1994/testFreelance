import React from "react";
import MenuItem from "./mainHomeItemsLink";
import "./mainHome.css";

/**********start Menu data items object************* */
const menuItem = [
  {
    context: " مالجديد ",
    image: "",
    link: "/news"
  },
  {
    context: "خدماتنا",
    image: "",
    link: "/services"
  },
  {
    context: "  الدعم الفني ",
    image: "",
    link: "/supports"
  },
  {
    context: "تقرير الطلبات",
    image: "",
    link: "/demandes"
  }
];
export default function MainContainer() {
  return (
    <div className="container ">
      <div className="row items-container">
        {menuItem.map((item, i) => (
          <MenuItem data={item} key={i} sm={i} />
        ))}
      </div>
    </div>
  );
}
