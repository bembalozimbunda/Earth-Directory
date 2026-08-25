// Utility for parsing and calculating real-time local clock times for global sovereign nations.

export interface NationTimeInfo {
  timeFormatted: string; // e.g. "20:54"
  timeFormattedWithSeconds: string; // e.g. "20:54:12"
  timeZoneLabel: string; // e.g. "UTC+2 (CAT)"
  utcOffsetFormatted: string; // e.g. "UTC+2"
  isNight: boolean;
}

export function getNationLocalTime(timeZoneStr: string = 'UTC', baseDate: Date = new Date()): NationTimeInfo {
  let offsetHours = 0;
  
  if (!timeZoneStr) {
    timeZoneStr = 'UTC';
  }

  // Parse explicit offset like "UTC+2", "UTC-5", "UTC+5.5", "UTC+1 to UTC+2", "UTC+2 (CAT)"
  const match = timeZoneStr.match(/UTC\s*([+-]?\d+(?:\.\d+)?)/i);
  if (match) {
    offsetHours = parseFloat(match[1]);
  } else if (/CAT|SAST|EET/i.test(timeZoneStr)) {
    offsetHours = 2;
  } else if (/WAT|CET/i.test(timeZoneStr)) {
    offsetHours = 1;
  } else if (/EAT|MSK/i.test(timeZoneStr)) {
    offsetHours = 3;
  } else if (/GMT|WET/i.test(timeZoneStr)) {
    offsetHours = 0;
  } else if (/EST|EDT/i.test(timeZoneStr)) {
    offsetHours = -5;
  } else if (/CST|CDT/i.test(timeZoneStr)) {
    offsetHours = -6;
  } else if (/MST|MDT/i.test(timeZoneStr)) {
    offsetHours = -7;
  } else if (/PST|PDT/i.test(timeZoneStr)) {
    offsetHours = -8;
  } else if (/JST|KST/i.test(timeZoneStr)) {
    offsetHours = 9;
  } else if (/CST \(China\)|HKT/i.test(timeZoneStr)) {
    offsetHours = 8;
  } else if (/IST/i.test(timeZoneStr)) {
    offsetHours = 5.5;
  } else if (/AEST/i.test(timeZoneStr)) {
    offsetHours = 10;
  } else if (/NZST/i.test(timeZoneStr)) {
    offsetHours = 12;
  }

  // Calculate current UTC milliseconds
  const utcMillis = baseDate.getTime() + (baseDate.getTimezoneOffset() * 60000);
  const nationDate = new Date(utcMillis + (offsetHours * 3600000));

  const hours = String(nationDate.getHours()).padStart(2, '0');
  const minutes = String(nationDate.getMinutes()).padStart(2, '0');
  const seconds = String(nationDate.getSeconds()).padStart(2, '0');

  const offsetSign = offsetHours >= 0 ? '+' : '';
  const offsetFormatted = `UTC${offsetSign}${offsetHours}`;
  const hourNum = nationDate.getHours();
  const isNight = hourNum < 6 || hourNum >= 19;

  return {
    timeFormatted: `${hours}:${minutes}`,
    timeFormattedWithSeconds: `${hours}:${minutes}:${seconds}`,
    timeZoneLabel: timeZoneStr,
    utcOffsetFormatted: offsetFormatted,
    isNight
  };
}
