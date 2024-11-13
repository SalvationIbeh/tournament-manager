import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function CreateTournamentForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    participants: "2",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement tournament creation logic
    navigate(`/tournaments/${/* new tournament ID */}`);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>Create New Tournament</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Tournament Name</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              placeholder="Enter tournament name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="participants">Number of Participants</Label>
            <Select
              value={formData.participants}
              onValueChange={(value) => setFormData(prev => ({ ...prev, participants: value }))}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select number of participants" />
              </SelectTrigger>
              <SelectContent>
                {[2,3,4,5,6,7,8,9,10,11,12].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num} Participants
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Create Tournament
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
}
