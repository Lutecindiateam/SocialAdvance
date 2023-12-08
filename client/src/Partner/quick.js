import React from "react";
import { Link } from "react-router-dom";
import "./quick-links.css";

export default function QuickLinks({ sideNavOpenKeysHandler }) {
  const QuickLinksContainer = ({ link, icon, bg, linkName }) => {
    return (
      <Link to={link}>
        <div className="quick-links-inner-container">
          <div style={{ backgroundColor: bg }} className="quick-link">
            {icon}
          </div>
          <span className="quick-link-title">{linkName}</span>
        </div>
      </Link>
    );
  };

  return (
    <div className="quick-links-wrapper">
      <p className="quick-links-title">Quick Links</p>

      <div className="quick-links-container">
        <QuickLinksContainer
          link="/product"
          bg="#344D6740"
          linkName="Upload Data"
          icon={
            <i
              style={{ color: "#344D67" }}
              class="bi bi-box-fill quick-links-icon"></i>
          }
        />
        <QuickLinksContainer
          link="/supplier"
          bg="#6ECCAF40"
          linkName="All Data"
          icon={
            <i
              style={{ color: "#6ECCAF" }}
              class="bi bi-bag-fill quick-links-icon"></i>
          }
        />
        <QuickLinksContainer
          link="/customer"
          bg="#FD841F40"
          linkName="Account"
          icon={
            <i
              style={{ color: "#FD841F" }}
              class="bi bi-receipt quick-links-icon"></i>
          }
        />
        <QuickLinksContainer
          link="/account"
          bg="#00ABB340"
          linkName="Report"
          icon={
            <i
              style={{ color: "#00ABB3" }}
              class="bi bi-wallet-fill quick-links-icon"></i>
          }
        />
        {/* <QuickLinksContainer
          link="/account/trial-balance"
          bg="#8CB8ED40"
          linkName="REPORT"
          icon={
            <i
              style={{ color: "#8CB8ED" }}
              class="bi bi-flag-fill quick-links-icon"></i>
          }
        /> */}
        {/* <QuickLinksContainer
          link="/hr/staffs"
          bg="#E14D2A40"
          linkName="HR"
          icon={
            <i
              style={{ color: "#E14D2A" }}
              class="bi bi-person-circle quick-links-icon"></i>
          }
        /> */}

        <QuickLinksContainer
          link="/invoice-setting"
          bg="#0D4C9240"
          linkName="SETTINGS"
          icon={
            <i
              style={{ color: "#0D4C92" }}
              class="bi bi-gear-fill quick-links-icon"></i>
          }
        />
      </div>
    </div>
  );
}
