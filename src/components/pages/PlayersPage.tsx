import React, { useState } from "react";
import MainTemplate from "../templates/MainTemplate";
import LeagueSelector from "../molecules/LeagueSelector";
import PlayerList from "../organisms/PlayerList";

const PlayersPage: React.FC = () => {
  const [league, setLeague] = useState("EPL");
  const [teamFilter, setTeamFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [shuffle, setShuffle] = useState(false);
  const [teams, setTeams] = useState<string[]>([]);

  const handleSortPlayers = () => {
    // Toggle sort order
    setSortOrder((prev) => (prev === "desc" ? "asc" : "desc"));
  };

  const handleFilterByTeam = (team: string) => {
    setTeamFilter(team);
  };

  const handleShufflePlayers = () => {
    setShuffle((prev) => !prev);
  };

  const handleClearFilters = () => {
    setLeague("EPL");
    setTeamFilter("");
    setSortOrder("");
    setShuffle(false);
  };

  return (
    <MainTemplate>
      <LeagueSelector
        onLeagueChange={setLeague}
        onSortPlayers={handleSortPlayers}
        onFilterByTeam={handleFilterByTeam}
        onShufflePlayers={handleShufflePlayers}
        teams={teams}
        onClearFilters={handleClearFilters}
      />
      <PlayerList
        league={league}
        teamFilter={teamFilter}
        sortOrder={sortOrder}
        shuffle={shuffle}
        setTeams={setTeams}
      />
    </MainTemplate>
  );
};

export default PlayersPage;
