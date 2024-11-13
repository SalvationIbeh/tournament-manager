import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tournament } from "@/lib/types";

interface TournamentCardProps {
  tournament: Tournament;
  onSelect: (id: string) => void;
}

export function TournamentCard({ tournament, onSelect }: TournamentCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{tournament.name}</CardTitle>
          <Badge variant={tournament.status === 'active' ? 'default' : 'secondary'}>
            {tournament.status}
          </Badge>
        </div>
        <CardDescription>
          {tournament.participants.length} Participants • Created {new Date(tournament.createdAt).toLocaleDateString()}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-sm">
            Current Phase: {tournament.currentPhase.type}
          </div>
          <div className="text-sm">
            Matches Played: {tournament.matches.filter(m => m.status === 'completed').length}
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={() => onSelect(tournament.id)} className="w-full">
          View Tournament
        </Button>
      </CardFooter>
    </Card>
  );
}
