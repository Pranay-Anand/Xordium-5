export type Competition = {
  id: string;
  title: string;
  category: string;
  summary: string;
  artworkLabel: string;
  thumbnail?: string;
  accent: 'primary' | 'secondary';
};

export const competitions: Competition[] = [
  {
    id: '12-hour-hackathon',
    title: '12-Hour Hackathon',
    category: 'Technology',
    summary:
      'Build and present a working solution in a fast-paced, twelve-hour hackathon.',
    artworkLabel: 'BUILD // HACKATHON',
    thumbnail: '/event-cards/hackathon.jpg',
    accent: 'primary',
  },
  {
    id: 'competitive-programming',
    title: 'Competitive Programming',
    category: 'Technology',
    summary:
      'Take on timed programming problems that put algorithmic thinking and coding skills to the test.',
    artworkLabel: 'CODE // ALGORITHMS',
    thumbnail: '/event-cards/competitive-programming.jpg',
    accent: 'secondary',
  },
  {
    id: 'treasure-hunt',
    title: 'Treasure Hunt',
    category: 'Interactive',
    summary:
      'Follow clues, solve puzzles, and work together to uncover the hidden treasure.',
    artworkLabel: 'DISCOVER // TREASURE HUNT',
    thumbnail: '/event-cards/treasure-hunt.jpg',
    accent: 'primary',
  },
  {
    id: 'gen-ai-competition',
    title: 'Gen AI Competition',
    category: 'Technology',
    summary:
      'Explore generative AI by creating and presenting an original AI-powered idea or project.',
    artworkLabel: 'GENERATE // ARTIFICIAL INTELLIGENCE',
    thumbnail: '/event-cards/gen-ai.jpg',
    accent: 'secondary',
  },
  {
    id: 'technocrat-of-the-year',
    title: 'Technocrat of the Year',
    category: 'Technology',
    summary:
      'Showcase your technology knowledge, creativity, and problem-solving skills.',
    artworkLabel: 'INNOVATE // TECHNOCRAT',
    thumbnail: '/event-cards/technocrat.jpg',
    accent: 'primary',
  },
  {
    id: 'workshop',
    title: 'Workshop',
    category: 'Learning',
    summary:
      'Learn and explore new ideas through a practical, hands-on workshop session.',
    artworkLabel: 'LEARN // WORKSHOP',
    thumbnail: '/event-cards/workshop.jpg',
    accent: 'secondary',
  },
  {
    id: 'bgmi',
    title: 'BGMI',
    category: 'Esports',
    summary:
      'Compete in BGMI and put your squad coordination and in-game strategy to the test.',
    artworkLabel: 'SQUAD // BGMI',
    thumbnail: '/event-cards/bgmi.jpg',
    accent: 'primary',
  },
  {
    id: 'valorant',
    title: 'Valorant',
    category: 'Esports',
    summary:
      'Team up for tactical Valorant matches built around communication, aim, and strategy.',
    artworkLabel: 'TACTICAL // VALORANT',
    thumbnail: '/event-cards/valorant-jett.jpg',
    accent: 'secondary',
  },
  {
    id: 'ad-making',
    title: 'Ad Making',
    category: 'Creative',
    summary:
      'Create a memorable advertisement that brings a concept or message to life.',
    artworkLabel: 'CREATE // AD MAKING',
    thumbnail: '/event-cards/ad-making.jpg',
    accent: 'primary',
  },
  {
    id: 'fifa-tournament',
    title: 'FIFA Tournament',
    category: 'Esports',
    summary:
      'Take to the virtual pitch and compete for the FIFA tournament title.',
    artworkLabel: 'KICK OFF // FIFA',
    thumbnail: '/event-cards/fifa.jpg',
    accent: 'secondary',
  },
];
