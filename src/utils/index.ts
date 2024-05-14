import { Player } from "../components/organisms/PlayerList";

// Function to get unique team names from a list of players
export const getUniqueTeams = (playerList: Player[]): string[] => {
  const teamsSet = new Set<string>();

  playerList.forEach((player: Player) => {
    teamsSet.add(player.team);
  });

  return Array.from(teamsSet);
};
