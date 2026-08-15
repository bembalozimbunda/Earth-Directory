const fs = require('fs');
let content = fs.readFileSync('src/data/zambiaDistricts.ts', 'utf-8');
// Strip export and types to eval
content = content.replace('export interface PollingStation', 'interface PollingStation')
content = content.replace('export interface Ward', 'interface Ward')
content = content.replace('export interface Constituency', 'interface Constituency')
content = content.replace('export interface District', 'interface District')
content = content.replace('export interface ProvinceDetailed', 'interface ProvinceDetailed')
content = content.replace('export const ZAMBIA_DETAILED_PROVINCES: ProvinceDetailed[] = ', 'module.exports = ')

fs.writeFileSync('temp_data.js', content.replace(/interface [a-zA-Z]+ \{[\s\S]*?\}/g, ''));
