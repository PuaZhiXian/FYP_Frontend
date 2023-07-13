export interface IProjectStatistics {
  timestamp: Date | string;
  api: string;
  method: string;
  responseSize: number;
  responseTime: number;
  status: string;
}
