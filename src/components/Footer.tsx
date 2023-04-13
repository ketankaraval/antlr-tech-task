import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
const Footer: React.FC = () => {
  const footerData = [
    {
      header: "Company Info",
      links: ["About us", "Carrier", "We are hiring", "Blog"],
    },
    {
      header: "Legal",
      links: ["About us", "Carrier", "We are hiring", "Blog"],
    },
    {
      header: "Features",
      links: [
        "Business Marketing",
        "User Analytic",
        "Live Chat",
        "Unlimited Support",
      ],
    },
    {
      header: "Resources",
      links: [" IOS & Android", "Watch a Demo", "Customers", "API"],
    },
  ];
  const contact = {
    header: "Get in Touch",
    details: [
      { icon: <FaPhoneAlt size={24} color="#ff685b" />, data: "(480)555-0103" },
      {
        icon: <HiOutlineLocationMarker size={24} color="#ff685b" />,
        data: "4517 Washington Ave. Manchester, Kentucky 39495",
      },
      {
        icon: <IoIosMail size={24} color="#ff685b" />,
        data: "debra.holt@example.com",
      },
    ],
  };
  return (
    <div className="footer">
      <div className="footer-section1">
        {footerData.map((item) => (
          <div className="footer-links" key={item.header}>
            <h5>{item.header}</h5>
            {item.links.map((link, i) => (
              <p key={i}><a >{link}</a></p>
            ))}
          </div>
        ))}
        <div className="contact-details">
          <h5>{contact.header}</h5>
          {contact.details.map((detail) => (
            <div className="contact-data" key={detail.data}>
              <div>{detail.icon}</div>
              <p>{detail.data}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-section2">
        
      </div>
    </div>
  );
};

export default Footer;
