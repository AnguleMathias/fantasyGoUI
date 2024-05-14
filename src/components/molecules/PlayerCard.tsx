import React from "react";
import { Player } from "../organisms/PlayerList";

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center text-center hover:shadow-lg hover:cursor-pointer">
      <img
        src="https://placehold.co/400"
        alt="Profile"
        className="w-24 h-24 rounded-full mb-4"
      />
      <h3 className="text-lg font-bold">{player.displayName}</h3>
      <p className="text-sm text-gray-600">
        {player.firstName} {player.secondName}
      </p>
      <p className="text-sm text-gray-800">Team: {player.team}</p>
      <div className="mt-2">
        <span className="inline-block bg-blue-200 text-blue-800 text-xs px-2 rounded">
          Points: {player.totalPoints}
        </span>
      </div>
      <div className="mt-1">
        <span className="inline-block bg-green-200 text-green-800 text-xs px-2 rounded mr-1">
          Cost: {player.cost}
        </span>
        <span className="inline-block bg-red-200 text-red-800 text-xs px-2 rounded ml-1">
          Selected: {player.selectedPercent}%
        </span>
      </div>
    </div>
  );
};

export default PlayerCard;
