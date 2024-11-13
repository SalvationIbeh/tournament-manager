export function assignTeams(numberOfParticipants: number) {
    const teamsPerParticipant = getTeamsPerParticipant(numberOfParticipants);
    const potSystem = generatePotSystem(teamsPerParticipant);
    
    return {
      teamsPerParticipant,
      potSystem,
      totalTeams: teamsPerParticipant * numberOfParticipants
    };
  }
  
  function getTeamsPerParticipant(participants: number): number {
    const mapping = {
      2: 12,
      3: 8,
      4: 6,
      5: 4,
      6: 4,
      7: 2,
      8: 3,
      9: 2,
      10: 2,
      11: 2,
      12: 2
    };
    return mapping[participants as keyof typeof mapping];
  }