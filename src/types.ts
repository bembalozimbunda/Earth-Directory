export interface LogEntry {
  id: string;
  timestamp: string;
  message: string;
  category: 'system' | 'synthesis' | 'frequency' | 'ancestral' | 'user';
}

export interface NodeData {
  id: string;
  label: string;
  description: string;
}
