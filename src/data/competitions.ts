export type Competition = {
  id: string;
  title: string;
  category: string;
  summary: string;
  artworkLabel: string;
  accent: 'primary' | 'secondary';
};

export const competitions: Competition[] = [
  {
    id: 'tactical-protocol',
    title: 'Tactical Protocol: Invite',
    category: 'Esports',
    summary: 'Team-based tactical competition.',
    artworkLabel: 'TACTICAL // ESPORTS',
    accent: 'primary',
  },
  {
    id: 'synapse-forge',
    title: 'Synapse: Full-Stack Forge',
    category: 'Engineering',
    summary: 'A full-stack software hackathon.',
    artworkLabel: 'BUILD // ENGINEERING',
    accent: 'secondary',
  },
  {
    id: 'mecha-clash',
    title: 'Mecha-Clash Destruction',
    category: 'Robotics',
    summary: 'A combat robotics competition.',
    artworkLabel: 'MECHA // ROBOTICS',
    accent: 'primary',
  },
  {
    id: 'zero-day-ctf',
    title: 'Zero-Day Cyber Defense CTF',
    category: 'Security',
    summary: 'A cybersecurity capture-the-flag competition.',
    artworkLabel: 'DEFENSE // SECURITY',
    accent: 'secondary',
  },
  {
    id: 'rocket-league',
    title: 'Rocket League: Boost Clash',
    category: 'Esports',
    summary: 'A Rocket League esports competition.',
    artworkLabel: 'BOOST // ESPORTS',
    accent: 'primary',
  },
  {
    id: 'latent-vector',
    title: 'Latent Vector: AI Derby',
    category: 'Machine intelligence',
    summary: 'An AI-focused competition.',
    artworkLabel: 'VECTOR // MACHINE INTELLIGENCE',
    accent: 'secondary',
  },
];
