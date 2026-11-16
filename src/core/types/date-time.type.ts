import { formatDateTime } from '../../shared/utils/date-time';

export class DateTime extends Date {
  constructor(value: string) {
    super(value.endsWith('Z') ? value : `${value}Z`);
  }

  timestamp(): number {
    return this.getTime();
  }

  format(timeFormat: string): string {
    return formatDateTime(this.timestamp(), timeFormat);
  }
}
