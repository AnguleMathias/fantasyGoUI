import React, { useMemo, useState, useEffect } from "react";
import PlayerCard from "../molecules/PlayerCard";
import { useGetPlayersQuery } from "../../generated/graphql";
import Pagination from "../molecules/Pagination";
import LoadingSpinner from "../molecules/LoadingSpinner";
import ErrorPage from "../pages/ErrorPage";
import NoData from "../pages/NoDataPage";
import { getUniqueTeams } from "../../utils";

export interface Player {
  firstName: string;
  secondName: string;
  displayName: string;
  totalPoints: number;
  team: string;
  cost: number;
  selectedPercent: string;
}

type PlayerListProps = {
  league: string;
  teamFilter: string;
  sortOrder: string;
  shuffle: boolean;
  setTeams: (teams: string[]) => void;
};

const PlayerList: React.FC<PlayerListProps> = ({
  league,
  teamFilter,
  sortOrder,
  shuffle,
  setTeams,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const { data, loading, error } = useGetPlayersQuery({
    variables: { league },
  });

  const filteredPlayers = useMemo(() => {
    let filtered =
      data?.getPlayers?.filter((p) => !teamFilter || p?.team === teamFilter) ||
      [];

    if (sortOrder) {
      filtered = (filtered as Player[]).sort((a, b) =>
        sortOrder === "asc"
          ? a.totalPoints - b.totalPoints
          : b.totalPoints - a.totalPoints
      );
    }

    if (shuffle) {
      for (let i = filtered.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
      }
    }

    return filtered;
  }, [data, teamFilter, sortOrder, shuffle]);

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredPlayers.slice(indexOfFirstItem, indexOfLastItem);

  // Get unique teams when the component mounts
  useEffect(() => {
    if (data?.getPlayers) {
      const uniqueTeams = getUniqueTeams(data.getPlayers as Player[]);

      setTeams(uniqueTeams);
    }
  }, [data, setTeams]);

  if (loading) return <LoadingSpinner />;

  if (error) return <ErrorPage />;

  if (!currentItems.length) return <NoData />;

  const totalItems = filteredPlayers.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (size: number) => {
    setItemsPerPage(size);
    setCurrentPage(1);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {(currentItems as Player[]).map((player: Player) => (
          <PlayerCard key={player?.displayName} player={player} />
        ))}
      </div>

      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        paginate={setCurrentPage}
        onItemsPerPageChange={handlePageChange}
      />
    </div>
  );
};

export default PlayerList;
