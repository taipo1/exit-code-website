"use client";

import { useEffect, useState } from "react";

const CookieBanner = () => {
  const [hasAccepted, setHasAccepted] = useState(true);

  const handleAccept = () => {
    localStorage.setItem("cookieBannerAccepted", "true");
    setHasAccepted(true);
  };

  useEffect(() => {
    // Check if the cookie banner has already been accepted
    const hasAccepted = localStorage.getItem("cookieBannerAccepted") === "true";
    if (!hasAccepted) {
      setHasAccepted(false);
    }
  }, []);

  return (
    <>
      {!hasAccepted && (
        <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto flex max-w-4xl flex-col items-start justify-between gap-4 rounded-xl border border-white bg-secondary-400 p-4 text-white shadow-xl lg:flex-row lg:items-center">
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold text-primary-400">
              We houden van koekjes, daarom hebben we ze zelf opgegeten.
            </p>
            <p className="text-sm text-white">
              Deze site gebruikt geen tracking, geen analytics, geen scriptjes
              die je stiekem volgen. Gewoon rust. Net als de rest van ons werk.
            </p>
          </div>
          <button
            onClick={handleAccept}
            className="rounded-lg bg-primary-300 px-4 py-2 font-semibold text-white transition hover:bg-primary-400"
          >
            Klinkt goed
          </button>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
