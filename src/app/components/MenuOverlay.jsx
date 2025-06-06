import React from "react";
import NavLink from "./NavLink";

/// MENU OVERLAY ///

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink
            href={link.path}
            title={link.title}
            openInNewTab={link.openInNewTab}
            color={link.color}
          />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
