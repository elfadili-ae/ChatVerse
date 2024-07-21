import React from "react";
import { notificationImages } from "../constants";
import { notification1 } from "../assets";

const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center gap-5 p-4 pr-6 bg-n-9/50 backdrop-blur border border-n-10/10 rounded-2xl `}
    >
      <img
        className="rounded-lg"
        src={notification1}
        width={64}
        height={64}
        alt=""
      />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
        <div className="flex items-center justify-between">
          <ul className="flex gap-1">
            {notificationImages.map((item, index) => (
              <li key={index}>
                <img
                  className="rounded-full h-6 w-6 overflow-hidden"
                  src={item}
                  alt="notification image"
                />
              </li>
            ))}
          </ul>
          <p className="text-n-3 font-grotesk">1min ago</p>
        </div>
      </div>
    </div>
  );
};

export default Notification;
