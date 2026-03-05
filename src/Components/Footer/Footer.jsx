import React from "react";
import {
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
  TiSocialFacebookCircular,
} from "react-icons/ti";
import { CgMail } from "react-icons/cg";
import Container from "../Container/Container";

const Footer = () => {
  // Shared style tokens to keep classNames consistent and easy to update.
  const linkClass = "footerLink cursor-pointer w-fit";
  const socialTextClass =
    "transition-colors duration-300 group-hover:text-white";

  // Footer link groups rendered dynamically.
  const sections = [
    {
      title: "Company",
      links: ["About Us", "Our Mission", "Contact Sales"],
    },
    {
      title: "Services",
      links: ["Products & Services", "Customer Stories", "Download Apps"],
    },
    {
      title: "Information",
      links: ["Privacy Policy", "Terms & Conditions", "Join Us"],
    },
  ];

  // Social/contact rows with icon + label.
  const socialLinks = [
    { icon: TiSocialTwitterCircular, label: "@CS - Ticket System" },
    { icon: TiSocialLinkedinCircular, label: "@CS - Ticket System" },
    { icon: TiSocialFacebookCircular, label: "@CS - Ticket System" },
    { icon: CgMail, label: "support@cst.com" },
  ];

  return (
    <footer className="mt-10 bg-black md:mt-20">
      <Container>
        <div className="grid grid-cols-1 gap-8 px-3 py-10 text-white md:grid-cols-6 md:py-20">
          {/* Brand block */}
          <div className="md:col-span-2">
            <h2 className="mb-2 text-center text-xl font-bold md:text-start md:text-2xl">
              CS <span className="text-lg">- Ticket System</span>
            </h2>
            <p className="text-sm text-justify text-zinc-400 md:w-96">
              CS Ticket System helps teams manage customer support requests with
              speed, clarity, and better collaboration.
            </p>
          </div>

          {/* Link columns */}
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="mb-2 font-bold md:text-lg">{section.title}</h2>
              <ul className="space-y-2 text-sm text-zinc-400">
                {section.links.map((link) => (
                  <li key={link} className={linkClass}>
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social + email block */}
          <div>
            <h2 className="mb-2 font-bold md:text-lg">Social Links</h2>
            <ul className="space-y-2 text-sm text-zinc-400">
              {socialLinks.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="group flex w-fit cursor-pointer items-center gap-2"
                >
                  <Icon size={30} />
                  <span className={socialTextClass}>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom copyright strip */}
        <div className="border-t py-5 md:py-7">
          <p className="text-center text-sm text-zinc-100">
            © 2026 CS - Ticket System.
            <span className="block md:inline-block"> All rights reserved.</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
