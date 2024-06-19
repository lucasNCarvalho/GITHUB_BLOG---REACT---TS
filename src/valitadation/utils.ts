export function timeAgo(dateString: string | undefined): string {
    const now: Date = new Date();
    const date: Date = new Date(dateString ? dateString : '00:00');
    const seconds: number = Math.floor((now.getTime() - date.getTime()) / 1000);
  
    const intervals: { [key: string]: number } = {
      'ano': 31536000,
      'mês': 2592000,
      'dia': 86400,
      'hora': 3600,
      'minuto': 60,
      'segundo': 1
    };
  
    for (const [unit, value] of Object.entries(intervals)) {
      const interval: number = Math.floor(seconds / value);
      if (interval >= 1) {
        if (unit === 'mês') {
          return interval === 1 ? `há ${interval} ${unit}` : `há ${interval} meses`;
        }
        return interval === 1 ? `há ${interval} ${unit}` : `há ${interval} ${unit}s`;
      }
    }
  
    return 'agora mesmo';
  }