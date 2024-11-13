import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Standing } from "@/lib/types";

interface StandingsTableProps {
  standings: Standing[];
}

export function StandingsTable({ standings }: StandingsTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Pos</TableHead>
          <TableHead>Team</TableHead>
          <TableHead className="text-center">P</TableHead>
          <TableHead className="text-center">W</TableHead>
          <TableHead className="text-center">D</TableHead>
          <TableHead className="text-center">L</TableHead>
          <TableHead className="text-center">GF</TableHead>
          <TableHead className="text-center">GA</TableHead>
          <TableHead className="text-center">GD</TableHead>
          <TableHead className="text-center">Pts</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {standings.map((standing, index) => (
          <TableRow key={standing.team.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{standing.team.name}</TableCell>
            <TableCell className="text-center">{standing.matchesPlayed}</TableCell>
            <TableCell className="text-center">{standing.wins}</TableCell>
            <TableCell className="text-center">{standing.draws}</TableCell>
            <TableCell className="text-center">{standing.losses}</TableCell>
            <TableCell className="text-center">{standing.goalsFor}</TableCell>
            <TableCell className="text-center">{standing.goalsAgainst}</TableCell>
            <TableCell className="text-center">{standing.goalDifference}</TableCell>
            <TableCell className="text-center font-bold">{standing.points}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}