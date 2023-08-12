import React from "react";
import { Link } from "react-router-dom";
import TLogo from "../assets/Icons/T-Mobile_logo.svg";
import { MdOutlineNavigateNext } from "react-icons/md";
import { PiMoney } from "react-icons/pi";
import {HiOutlineDownload, HiOutlineCalculator, HiOutlinePlusCircle } from "react-icons/hi";

function Topbar() {
  const items = [
    {
      title: "Dashboard",
      isActive: true,
    },
  ];

  return (
    <div className="topbar_nav_item">
      <div className="breadcrumb_list">
        <MdOutlineNavigateNext className="icons" />
        {items.map((item, index) => (
          <li key={index} className={item.isActive ? "active" : ""}>
            {item.title}
          </li>
        ))}
      </div>
      <div className="right_nav_item">
        <ul className="top_nav_icon_list">
          <li>
            <Link to="">
              <HiOutlineDownload className="icons" />
            </Link>
          </li>
          <li>
            <Link to="">
              <HiOutlinePlusCircle className="icons" />
            </Link>
          </li>
          <li>
            <Link to="">
              <HiOutlineCalculator className="icons" />
            </Link>
          </li>
          <li>
            <Link to="">
              <PiMoney className="icons" />
            </Link>
          </li>
          <li>
            <Link to="" className="top_nav_sell_btn">
              <PiMoney className="icons" /> Sale Now
            </Link>
          </li>
        </ul>
        <div className="T_mobile">
          <img src={TLogo} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
