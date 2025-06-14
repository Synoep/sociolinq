import React from "react";

export const FooterSection = (): JSX.Element => {
  const footerLinks = [
    "About Us",
    "Support", 
    "Privacy Policy",
    "Report a Lost Item",
    "Privacy Policy",
    "School Website",
  ];

  return (
    <footer className="w-full py-4 bg-white border-t border-gray-200">
      <div className="px-6 flex flex-row justify-between items-center">
        {/* Footer navigation links */}
        <nav className="flex items-center gap-2">
          {footerLinks.map((link, index) => (
            <React.Fragment key={`${link}-${index}`}>
              {index > 0 && <div className="w-1 h-1 bg-gray-400 rounded-full" />}
              <a
                href="#"
                className="text-xs text-gray-600 hover:underline"
              >
                {link}
              </a>
            </React.Fragment>
          ))}
        </nav>

        {/* App download buttons */}
        <div className="flex items-center gap-2">
          {/* App Store button */}
          <div className="w-20 h-6 bg-black rounded flex items-center px-2">
            <div className="text-white text-[8px] leading-tight">
              <div>Download on the</div>
              <div className="font-semibold">App Store</div>
            </div>
          </div>

          {/* Google Play button */}
          <div className="w-20 h-6 bg-black rounded flex items-center px-2">
            <div className="text-white text-[8px] leading-tight">
              <div>GET IT ON</div>
              <div className="font-semibold">Google Play</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};