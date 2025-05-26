import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import QRCode from "qrcode.react";

/// ACHIEVEMENTS SECTION ///

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const achievementsList = [
  {
    metric: "Impressions",
    value: "500",
    postfix: "m",
  },
  {
    metric: "Book a call today.",
  },
  {
    metric: "Helping businesses grow",
    value: "8",
    postfix: "years",
  },
];

const AchievementsSection = () => {
  const qrCodeSize = 128;
  const albumQRLink =
    "https://distrokid.com/hyperfollow/expansionproject1/phenomenal-thought-2?utm_campaign=website&utm_medium=Email+&utm_source=SendGrid";

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-[#f6f3ed] text-4xl mb-2 font-bold flex flex-row determination-mono-font">
              {achievement.prefix}
              {achievement.metric === "Book a call today." ? (
                <a href={albumQRLink} target="_blank" rel="noopener noreferrer">
                  <QRCode value={albumQRLink} size={qrCodeSize} />
                </a>
              ) : (
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-[#f6f3ed] text-4xl font-bold"
                  configs={(_, index) => ({
                    mass: 1,
                    friction: 100,
                    tensions: 140 * (index + 1),
                  })}
                />
              )}
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base text-center determination-mono-font">
              {achievement.metric}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementsSection;
