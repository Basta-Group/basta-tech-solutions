import React from "react";
import { useParams } from "react-router-dom";
import { games } from "../data/games";
import gameImg1 from "../assets/game-img-1.png";
import gameBanner from "../assets/game-images/game-preview-1.png";

const dummyDescription =
  "This is a thrilling casino game that combines classic slot mechanics with innovative bonus features. Enjoy immersive graphics, exciting bonus rounds, and the chance to win big rewards!";

const dummyGame = {
  title: "BASTA MAGIC CASTLE",
  image: gameImg1,
  description: dummyDescription,
  features: [
    "Wild West Theme With Immersive Graphics",
    "Deno's Bounty Bonus Round With Multipliers",
    "Free Spins With Expanding Wilds",
    "Mini-Games With Instant Cash Prizes",
    "Progressive Jackpot System",
  ],
};

const GameDetailsPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const game = games.find((g) => g.slug === slug) || dummyGame;

  if (!game) {
    return (
      <div className="min-h-screen bg-[#181A29] pt-16 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-white mb-4">Game Not Found</h1>
      </div>
    );
  }

  return (
    <div className="bg-[#181A29]">
      <div className="pt-20 flex flex-col items-center justify-center px-2 md:px-4">
        {/* <div
          className="w-full max-w-6xl flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 bg-[#23263a]/60 rounded-3xl p-3 sm:p-4 md:p-6 lg:p-8 mb-12"
          role="main"
          aria-label="Game details"
        >
          <div className="flex-shrink-0 w-full md:w-[340px] lg:w-[400px] flex flex-col items-center">
            <img
              src={game.image}
              alt={`${game.title} game preview`}
              className="rounded-2xl w-full max-w-xs md:max-w-none md:w-[340px] lg:w-[400px]"
              role="img"
            />
            <button
              className="mt-4 md:mt-6 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 md:py-3 rounded-full text-base md:text-lg transition-colors"
              aria-label={`Play ${game.title} now`}
              role="button"
            >
              PLAY NOW
            </button>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-3 md:mb-4 uppercase">
              {game.title}
            </h1>
            <p className="text-white/80 text-sm sm:text-base md:text-base lg:text-lg mb-4 md:mb-6 max-w-2xl">
              {game.description}
            </p>
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
              Top Features:
            </h2>
            <ul className="text-white/90 text-sm sm:text-base md:text-base lg:text-lg list-disc list-inside mb-4 max-w-xl mx-auto md:mx-0 text-left">
              {game.features && game.features.length > 0 ? (
                game.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))
              ) : (
                <li>Exciting bonus rounds and immersive gameplay!</li>
              )}
            </ul>
          </div>
        </div> */}
        <img
          src={gameBanner}
          alt="Strike Legends Banner"
          className="w-full max-w-7xl h-auto object-cover mb-8 mx-auto rounded-xl shadow-lg"
        />
        {/* game details */}
        <div className="max-w-7xl mx-auto py-10">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            BASTA AMAZONKA
          </h1>
          <p className="text-white/80 mb-6">
            Dig Up Wins Of Up To 1,000x In Lucky Dog.
            <br />
            The Respin Feature Can Trigger Randomly, Offering Players The Choice
            Of One Of Four Doggy Bags To Decide How Many Respins They Receive.
            For Each Respin, A Win Multiplier Increases By +1x For The Duration
            Of The Feature.
            <br />
            Once Respins Are Over, Players Once Again Choose From Four Options
            For A Chance To Receive More Respins Or Return To The Base Game.
          </p>
          <ul className="list-disc pl-6 text-white/80 mb-6">
            <li>
              The Respin Feature Sees Players Choose One Of Four Doggy Bags To
              Reveal The Number Of Respins
            </li>
            <li>
              After Each Spin During The Feature, A Win Multiplier Increases By
              +1x
            </li>
            <li>
              Once Respins End, Players Have A Chance To Reveal More Respins,
              Continuing The Feature
            </li>
          </ul>
          <div className="flex flex-wrap gap-4 mb-6">
            <select
              className="bg-[#23263a] text-white px-4 py-2 text-sm"
              style={{
                clipPath:
                  "polygon(10% 0, 90% 0, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0 75%, 0 25%)",
              }}
            >
              <option>English</option>
              <option>Spanish</option>
            </select>
            <select
              className="bg-[#23263a] text-white px-4 py-2  text-sm"
              style={{
                clipPath:
                  "polygon(10% 0, 90% 0, 100% 25%, 100% 75%, 90% 100%, 10% 100%, 0 75%, 0 25%)",
              }}
            >
              <option>USD</option>
              <option>EUR</option>
            </select>
            <button className="bg-[#5da5fa] text-white font-bold px-6 py-2 rounded-full text-xs">
              RELOAD GAME
            </button>
          </div>
          <div className="text-white/60 text-xs">
            Basic Game Info
            <br />
            RTP: 96.50%
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetailsPage;
