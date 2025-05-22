export type PresetConfig = {
  id: string;
  label: string;
  length: number;
  includeUpper: boolean;
  includeLower: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  excludeSimilar?: boolean;
  customSymbols?: string;
  excludeSymbols?: string;
};

export const presets: PresetConfig[] = [
  // 📂 Databases
  {
    id: 'postgres',
    label: 'PostgreSQL',
    length: 20,
    includeUpper: true,
    includeLower: true,
    includeNumbers: true,
    includeSymbols: true,
    excludeSimilar: false,
    customSymbols: '',
    // Avoid characters that can cause issues in connection strings
    excludeSymbols: "'\"\\/@",
  },
  {
    id: 'mysql',
    label: 'MySQL',
    length: 20,
    includeUpper: true,
    includeLower: true,
    includeNumbers: true,
    includeSymbols: true,
    excludeSimilar: false,
    customSymbols: '',
    // Avoid characters that can interfere with shell or connection strings
    excludeSymbols: "'\"\\/",
  },
  {
    id: 'mssql',
    label: 'SQL Server (MSSQL)',
    length: 20,
    includeUpper: true,
    includeLower: true,
    includeNumbers: true,
    includeSymbols: true,
    excludeSimilar: false,
    customSymbols: '',
    // Avoid characters that can cause issues in ODBC connection strings
    excludeSymbols: "'\" ",
  },

  // 🧩 Operating Systems / Authentication
  {
    id: 'htpasswd',
    label: 'Linux User',
    length: 16,
    includeUpper: true,
    includeLower: true,
    includeNumbers: true,
    includeSymbols: false,
    excludeSimilar: false,
    customSymbols: '',
    excludeSymbols: '',
  },
  {
    id: 'windows-admin',
    label: 'Windows Admin',
    length: 16,
    includeUpper: true,
    includeLower: true,
    includeNumbers: true,
    includeSymbols: true,
    excludeSimilar: false,
    customSymbols: '',
    // Avoid characters that can interfere with Windows command-line parsing
    excludeSymbols: "'\" ",
  },

  // 🧰 Services / Daemons
  {
    id: 'redis',
    label: 'Redis',
    length: 32,
    includeUpper: true,
    includeLower: true,
    includeNumbers: true,
    includeSymbols: false,
    excludeSimilar: false,
    customSymbols: '',
    // Avoid characters that can cause issues in connection strings
    excludeSymbols: "'\"\\,@",
  },
  {
    id: 'rabbitmq',
    label: 'RabbitMQ',
    length: 24,
    includeUpper: true,
    includeLower: true,
    includeNumbers: true,
    includeSymbols: true,
    excludeSimilar: false,
    customSymbols: '',
    // Avoid characters that can cause issues in URI parsing
    excludeSymbols: "'\";@?",
  },

  // 🛡️ Security / General Purpose
  {
    id: 'high-entropy',
    label: 'High Entropy (secure vaults)',
    length: 64,
    includeUpper: true,
    includeLower: true,
    includeNumbers: true,
    includeSymbols: true,
    excludeSimilar: true,
    customSymbols: '',
    // Avoid ambiguous or problematic characters
    excludeSymbols: "`'\"\\/",
  },
];