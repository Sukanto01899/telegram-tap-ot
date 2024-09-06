import { CoinsIcon, Home, Link2, Wallet } from "lucide-react";
import Link from "next/link";

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
      <Link href="/invite" className="footer-menu">
        <Link2 className="footer-icon" />
      </Link>
    </div>
  );
};

export default Footer;
