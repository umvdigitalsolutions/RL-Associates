"use client";

import { useState, useEffect } from "react";

export default function DisclaimerModal() {
  // Show disclaimer once per browser session (not on every client-side route click).
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      const shown = sessionStorage.getItem("bciDisclaimerShown");
      if (!shown) {
        setIsOpen(true);
        sessionStorage.setItem("bciDisclaimerShown", "true");
      }
    } catch (e) {
      // sessionStorage may be unavailable in some environments — default to showing
      setIsOpen(true);
    }
  }, []);

  const handleAccept = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-[#110338] border border-white/20 rounded-2xl p-6 md:p-8 max-w-2xl w-full shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-4">
          Disclaimer
        </h2>
        
        <div className="space-y-4 text-sm md:text-base text-gray-300 leading-relaxed max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar">
          <p>
            The rules of the Bar Council of India prohibit law firms from soliciting work or advertising in any manner. By clicking on "I Agree" below, the user acknowledges the following:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              There has been no advertisement, personal communication, solicitation, invitation, or inducement of any sort whatsoever from us or any of our members to solicit any work through this website.
            </li>
            <li>
              The user wishes to gain more information about RL Associates for their own information and use.
            </li>
            <li>
              The information about us is provided to the user only on their specific request and any information obtained or materials downloaded from this website is completely at the user's volition.
            </li>
            <li>
              Any transmission, receipt, or use of this site does not create any lawyer-client relationship.
            </li>
          </ul>
          <p>
            The information provided under this website is solely available at your request for informational purposes only and should not be interpreted as soliciting or advertisement. We are not liable for any consequence of any action taken by the user relying on material/information provided under this website. In cases where the user has any legal issues, they must in all cases seek independent legal advice.
          </p>
        </div>

        <div className="mt-8 flex justify-end">
          <button 
            onClick={handleAccept} 
            className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-8 py-2.5 rounded-lg font-medium transition-colors"
          >
            I Agree
          </button>
        </div>
      </div>
    </div>
  );
}