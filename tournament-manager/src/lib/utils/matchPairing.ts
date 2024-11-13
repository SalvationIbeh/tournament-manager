export function generateMatchPairings(participants: Participant[]) {
  const numberOfParticipants = participants.length;
  const matchesPerParticipant = getMatchesPerParticipant(numberOfParticipants);
  
  // Implement round-robin algorithm based on participant count
  return generateRoundRobinMatches(participants, matchesPerParticipant);
}

function getMatchesPerParticipant(participants: number): number {
  const mapping = {
    2: 12,
    3: 12,
    4: 12,
    5: 10,
    6: 12,
    7: 7,
    8: 12,
    9: 9,
    10: 10,
    11: 11,
    12: 12
  };
  return mapping[participants as keyof typeof mapping];
}
