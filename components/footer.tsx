import { CoinsIcon, Home, Link, Wallet } from "lucide-react";

const Footer = () => {
  return (
    <div className="flex justify-evenly items-center fixed bottom-0 w-full h-16 mb-3 bg-transparent text-white px-4">
      <div className="footer-menu">
        <Home className="footer-icon" />
      </div>
      <div className="footer-menu">
        <CoinsIcon className="footer-icon" />
      </div>
      <div className="footer-menu">
        <Wallet className="footer-icon" />
      </div>
      <div className="footer-menu">
        <Link className="footer-icon" />
      </div>
    </div>
  );
};

export default Footer;
