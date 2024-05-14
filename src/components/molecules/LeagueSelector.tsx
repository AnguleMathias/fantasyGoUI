import React, { useState } from "react";

interface LeagueSelectorProps {
  onLeagueChange: (league: string) => void;
  onSortPlayers: () => void;
  onFilterByTeam: (team: string) => void;
  onShufflePlayers: () => void;
  onClearFilters: () => void;
  teams: string[];
}

const LeagueSelector: React.FC<LeagueSelectorProps> = ({
  onLeagueChange,
  onSortPlayers,
  onFilterByTeam,
  onShufflePlayers,
  onClearFilters,
  teams,
}) => {
  const [selectedLeague, setSelectedLeague] = useState<string>("EPL");
  const [selectedTeam, setSelectedTeam] = useState<string>("");

  const handleLeagueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLeague = event.target.value;
    setSelectedLeague(newLeague);
    onLeagueChange(newLeague);
  };

  const handleTeamChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTeam = event.target.value;
    setSelectedTeam(newTeam);
    onFilterByTeam(newTeam);
  };

  const handleClearFilters = () => {
    setSelectedLeague("EPL");
    setSelectedTeam("");
    onClearFilters();
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4 my-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 w-full sm:w-auto">
        <div>
          <label
            htmlFor="league-select"
            className="block text-sm font-medium text-gray-700"
          >
            Select a League:
          </label>
          <select
            id="league-select"
            value={selectedLeague}
            onChange={handleLeagueChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="EPL">English Premier League</option>
            <option value="UEFA">Champions League</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="team-select"
            className="block text-sm font-medium text-gray-700"
          >
            Filter by Team:
          </label>
          <select
            id="team-select"
            value={selectedTeam}
            onChange={handleTeamChange}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          >
            <option value="">All Teams</option>
            {teams.map((team) => (
              <option key={team} value={team}>
                {team}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex space-x-2 w-full sm:w-auto">
        <button
          onClick={onSortPlayers}
          className="px-2 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Sort by Points
        </button>

        <button
          onClick={onShufflePlayers}
          className="px-2 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Shuffle Players
        </button>

        <button
          onClick={handleClearFilters}
          className="px-2 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
};

export default LeagueSelector;
