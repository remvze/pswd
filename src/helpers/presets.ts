export type PresetConfig = {
  customSymbols?: string;
  excludeSimilar?: boolean;
  excludeSymbols?: string;
  id: string;
  includeLower: boolean;
  includeNumbers: boolean;
  includeSymbols: boolean;
  includeUpper: boolean;
  label: string;
  length: number;
};

export const presets: PresetConfig[] = [
  // 📂 Databases
  {
    customSymbols: '',
    excludeSimilar: false,
    // Avoid characters that can cause issues in connection strings
    excludeSymbols: '\'"\\/@',

    id: 'postgres',

    includeLower: true,

    includeNumbers: true,

    includeSymbols: true,

    includeUpper: true,

    label: 'PostgreSQL',

    length: 16,
  },
  {
    customSymbols: '',
    excludeSimilar: false,
    // Avoid characters that can interfere with shell or connection strings
    excludeSymbols: '\'"\\/',

    id: 'mysql',
    includeLower: true,
    includeNumbers: true,
    includeSymbols: true,
    includeUpper: true,
    label: 'MySQL / MariaDB',

    length: 20,
  },
  {
    customSymbols: '',
    excludeSimilar: false,
    // Avoid characters that can cause issues in ODBC connection strings
    excludeSymbols: '\'" ',

    id: 'mssql',

    includeLower: true,

    includeNumbers: true,

    includeSymbols: true,

    includeUpper: true,

    label: 'SQL Server (MSSQL)',

    length: 20,
  },

  // 🧩 Operating Systems / Authentication
  {
    customSymbols: '',
    excludeSimilar: false,
    excludeSymbols: '',
    id: 'htpasswd',
    includeLower: true,
    includeNumbers: true,
    includeSymbols: false,
    includeUpper: true,
    label: 'Linux user (htpasswd)',
    length: 12,
  },
  {
    customSymbols: '',
    excludeSimilar: false,
    // Avoid characters that can interfere with Windows command-line parsing
    excludeSymbols: '\'" ',

    id: 'windows-admin',

    includeLower: true,

    includeNumbers: true,

    includeSymbols: true,

    includeUpper: true,

    label: 'Windows Admin',

    length: 15,
  },

  // 🧰 Services / Daemons
  {
    customSymbols: '',
    excludeSimilar: false,
    // Avoid characters that can cause issues in connection strings
    excludeSymbols: '\'"\\,@',

    id: 'redis',

    includeLower: true,

    includeNumbers: true,

    includeSymbols: false,

    includeUpper: true,

    label: 'Redis',

    length: 32,
  },
  {
    customSymbols: '',
    excludeSimilar: false,
    // Avoid characters that can cause issues in URI parsing
    excludeSymbols: '\'";@?',

    id: 'rabbitmq',

    includeLower: true,

    includeNumbers: true,

    includeSymbols: true,

    includeUpper: true,

    label: 'RabbitMQ',

    length: 24,
  },

  // 🛡️ Security / General Purpose
  {
    customSymbols: '',
    excludeSimilar: true,
    // Avoid ambiguous or problematic characters
    excludeSymbols: '`\'"\\/',

    id: 'high-entropy',

    includeLower: true,

    includeNumbers: true,

    includeSymbols: true,

    includeUpper: true,

    label: 'High Entropy (secure vaults)',

    length: 64,
  },
];
