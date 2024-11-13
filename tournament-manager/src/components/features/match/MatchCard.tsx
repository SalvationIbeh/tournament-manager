import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Match } from "@/lib/types";

interface MatchCardProps {
  match: Match;
  onUpdateResult?: (matchId: string, homeScore: number, awayScore: number) => void;
}

export function MatchCard({ match, onUpdateResult }: MatchCardProps) {
  const isEditable = match.status !== 'completed';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const homeScore = parseInt(formData.get('homeScore') as string);
    const awayScore = parseInt(formData.get('awayScore') as string);
    
    if (onUpdateResult && !isNaN(homeScore) && !isNaN(awayScore)) {
      onUpdateResult(match.id, homeScore, awayScore);
    }
  };

  return (
    <Card>
      <CardHeader className="text-center">
        <div className="text-sm text-muted-foreground">
          {match.phase} • Match {match.id}
        </div>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-3 gap-4 items-center">
            <div className="text-right">{match.homeTeam.name}</div>
            <div className="flex justify-center items-center gap-2">
              <Input
                type="number"
                name="homeScore"
                defaultValue={match.homeScore ?? ''}
                className="w-16 text-center"
                disabled={!isEditable}
                min={0}
              />
              <span>-</span>
              <Input
                type="number"
                name="awayScore"
                defaultValue={match.awayScore ?? ''}
                className="w-16 text-center"
                disabled={!isEditable}
                min={0}
              />
            </div>
            <div className="text-left">{match.awayTeam.name}</div>
          </div>
          {isEditable && (
            <Button type="submit" className="w-full">
              Update Result
            </Button>
          )}
        </form>
      </CardContent>
    </Card>
  );
}