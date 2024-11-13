# API & Data Structure Documentation

## Data Models

### 1. Tournament
```typescript
interface Tournament {
  id: string;
  name: string;
  status: 'setup' | 'active' | 'knockout' | 'completed';
  createdAt: Date;
  updatedAt: Date;
  participants: Participant[];
  config: TournamentConfig;
  currentPhase: TournamentPhase;
  matches: Match[];
  standings: Standing[];
}

interface TournamentConfig {
  numberOfParticipants: number;
  teamsPerParticipant: number;
  numberOfPots: number;
  teamsPerPot: number;
  matchesPerParticipant: number;
  advancementRules: AdvancementRules;
}

interface TournamentPhase {
  type: 'setup' | 'league' | 'knockout' | 'quarterfinal' | 'semifinal' | 'final';
  status: 'pending' | 'active' | 'completed';
  startDate: Date;
  endDate: Date;
}
```

### 2. Participant
```typescript
interface Participant {
  id: string;
  name: string;
  tournamentId: string;
  teams: Team[];
  statistics: ParticipantStatistics;
}

interface ParticipantStatistics {
  matchesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}
```

### 3. Team
```typescript
interface Team {
  id: string;
  name: string;
  pot: number;
  participantId: string;
  statistics: TeamStatistics;
}

interface TeamStatistics {
  matchesPlayed: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  rank: number;
}
```

### 4. Match
```typescript
interface Match {
  id: string;
  tournamentId: string;
  phase: TournamentPhase['type'];
  homeParticipantId: string;
  awayParticipantId: string;
  homeTeam: Team;
  awayTeam: Team;
  homeScore: number | null;
  awayScore: number | null;
  status: 'scheduled' | 'in_progress' | 'completed';
  date: Date;
  statistics: MatchStatistics;
}

interface MatchStatistics {
  possession: [number, number];
  shots: [number, number];
  shotsOnTarget: [number, number];
  corners: [number, number];
  fouls: [number, number];
}
```

## API Endpoints

### Tournament Management

```typescript
// Create Tournament
POST /api/tournaments
Request: {
  name: string;
  numberOfParticipants: number;
}
Response: Tournament

// Get Tournament
GET /api/tournaments/:id
Response: Tournament

// Update Tournament
PUT /api/tournaments/:id
Request: Partial<Tournament>
Response: Tournament

// Delete Tournament
DELETE /api/tournaments/:id
Response: { success: boolean }

// List Tournaments
GET /api/tournaments
Query Parameters: {
  status?: TournamentStatus;
  page?: number;
  limit?: number;
}
Response: {
  tournaments: Tournament[];
  total: number;
  page: number;
  totalPages: number;
}
```

### Participant Management

```typescript
// Add Participant
POST /api/tournaments/:id/participants
Request: {
  name: string;
}
Response: Participant

// Update Participant
PUT /api/tournaments/:id/participants/:participantId
Request: Partial<Participant>
Response: Participant

// Remove Participant
DELETE /api/tournaments/:id/participants/:participantId
Response: { success: boolean }

// List Participants
GET /api/tournaments/:id/participants
Response: Participant[]
```

### Match Management

```typescript
// Create Match
POST /api/tournaments/:id/matches
Request: {
  homeParticipantId: string;
  awayParticipantId: string;
  date: Date;
}
Response: Match

// Update Match Result
PUT /api/tournaments/:id/matches/:matchId/result
Request: {
  homeScore: number;
  awayScore: number;
  statistics?: MatchStatistics;
}
Response: Match

// Get Match
GET /api/tournaments/:id/matches/:matchId
Response: Match

// List Matches
GET /api/tournaments/:id/matches
Query Parameters: {
  phase?: TournamentPhase['type'];
  status?: Match['status'];
  participantId?: string;
  page?: number;
  limit?: number;
}
Response: {
  matches: Match[];
  total: number;
  page: number;
  totalPages: number;
}
```

### Statistics & Standings

```typescript
// Get Tournament Statistics
GET /api/tournaments/:id/statistics
Response: {
  totalMatches: number;
  completedMatches: number;
  totalGoals: number;
  averageGoals: number;
  topScorers: Array<{
    team: Team;
    goals: number;
  }>;
}

// Get Tournament Standings
GET /api/tournaments/:id/standings
Response: {
  standings: Standing[];
  updated: Date;
}
```

## Error Handling

```typescript
interface APIError {
  code: string;
  message: string;
  details?: Record<string, any>;
}

// Common Error Codes
enum ErrorCode {
  INVALID_REQUEST = 'INVALID_REQUEST',
  NOT_FOUND = 'NOT_FOUND',
  UNAUTHORIZED = 'UNAUTHORIZED',
  FORBIDDEN = 'FORBIDDEN',
  CONFLICT = 'CONFLICT',
  INTERNAL_ERROR = 'INTERNAL_ERROR'
}
```

## Data Validation Rules

```typescript
// Tournament Validation
const tournamentValidation = {
  name: {
    required: true,
    minLength: 3,
    maxLength: 50
  },
  numberOfParticipants: {
    required: true,
    min: 2,
    max: 12
  }
};

// Match Result Validation
const matchResultValidation = {
  homeScore: {
    required: true,
    min: 0,
    max: 99
  },
  awayScore: {
    required: true,
    min: 0,
    max: 99
  }
};
```

## State Management

```typescript
// Redux Store Structure
interface RootState {
  tournament: {
    current: Tournament | null;
    list: Tournament[];
    loading: boolean;
    error: APIError | null;
  };
  matches: {
    items: Record<string, Match>;
    loading: boolean;
    error: APIError | null;
  };
  standings: {
    items: Standing[];
    loading: boolean;
    error: APIError | null;
  };
}
```
