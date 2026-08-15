const fs = require('fs');

const data = {
  ALKEBULAN: [
    { name: "Algeria", flag: "🇩🇿" }, { name: "Angola", flag: "🇦🇴" }, { name: "Benin", flag: "🇧🇯" },
    { name: "Botswana", flag: "🇧🇼" }, { name: "Burkina Faso", flag: "🇧🇫" }, { name: "Burundi", flag: "🇧🇮" },
    { name: "Cabo Verde", flag: "🇨🇻" }, { name: "Cameroon", flag: "🇨🇲" }, { name: "Central African Republic", flag: "🇨🇫" },
    { name: "Chad", flag: "🇹🇩" }, { name: "Comoros", flag: "🇰🇲" }, { name: "Congo (Brazzaville)", flag: "🇨🇬" },
    { name: "Congo (Kinshasa)", flag: "🇨🇩" }, { name: "Djibouti", flag: "🇩🇯" }, { name: "Egypt", flag: "🇪🇬" },
    { name: "Equatorial Guinea", flag: "🇬🇶" }, { name: "Eritrea", flag: "🇪🇷" }, { name: "Eswatini", flag: "🇸🇿" },
    { name: "Ethiopia", flag: "🇪🇹" }, { name: "Gabon", flag: "🇬🇦" }, { name: "Gambia", flag: "🇬🇲" },
    { name: "Ghana", flag: "🇬🇭" }, { name: "Guinea", flag: "🇬🇳" }, { name: "Guinea-Bissau", flag: "🇬🇼" },
    { name: "Ivory Coast", flag: "🇨🇮" }, { name: "Kenya", flag: "🇰🇪" }, { name: "Lesotho", flag: "🇱🇸" },
    { name: "Liberia", flag: "🇱🇷" }, { name: "Libya", flag: "🇱🇾" }, { name: "Madagascar", flag: "🇲🇬" },
    { name: "Malawi", flag: "🇲🇼" }, { name: "Mali", flag: "🇲🇱" }, { name: "Mauritania", flag: "🇲🇷" },
    { name: "Mauritius", flag: "🇲🇺" }, { name: "Morocco", flag: "🇲🇦" }, { name: "Mozambique", flag: "🇲🇿" },
    { name: "Namibia", flag: "🇳🇦" }, { name: "Niger", flag: "🇳🇪" }, { name: "Nigeria", flag: "🇳🇬" },
    { name: "Rwanda", flag: "🇷🇼" }, { name: "Sao Tome & Principe", flag: "🇸🇹" }, { name: "Senegal", flag: "🇸🇳" },
    { name: "Seychelles", flag: "🇸🇨" }, { name: "Sierra Leone", flag: "🇸🇱" }, { name: "Somalia", flag: "🇸🇴" },
    { name: "South Africa", flag: "🇿🇦" }, { name: "South Sudan", flag: "🇸🇸" }, { name: "Sudan", flag: "🇸🇩" },
    { name: "Tanzania", flag: "🇹🇿" }, { name: "Togo", flag: "🇹🇬" }, { name: "Tunisia", flag: "🇹🇳" },
    { name: "Uganda", flag: "🇺🇬" }, { name: "Zambia", flag: "🇿🇲" }, { name: "Zimbabwe", flag: "🇿🇼" }
  ],
  JAMBUDVIIPA: [
    { name: "Afghanistan", flag: "🇦🇫" }, { name: "Armenia", flag: "🇦🇲" }, { name: "Azerbaijan", flag: "🇦🇿" },
    { name: "Bahrain", flag: "🇧🇭" }, { name: "Bangladesh", flag: "🇧🇩" }, { name: "Bhutan", flag: "🇧🇹" },
    { name: "Brunei", flag: "🇧🇳" }, { name: "Cambodia", flag: "🇰🇭" }, { name: "China", flag: "🇨🇳" },
    { name: "Cyprus", flag: "🇨🇾" }, { name: "Georgia", flag: "🇬🇪" }, { name: "India", flag: "🇮🇳" },
    { name: "Indonesia", flag: "🇮🇩" }, { name: "Iran", flag: "🇮🇷" }, { name: "Iraq", flag: "🇮🇶" },
    { name: "Israel", flag: "🇮🇱" }, { name: "Japan", flag: "🇯🇵" }, { name: "Jordan", flag: "🇯🇴" },
    { name: "Kazakhstan", flag: "🇰🇿" }, { name: "Kuwait", flag: "🇰🇼" }, { name: "Kyrgyzstan", flag: "🇰🇬" },
    { name: "Laos", flag: "🇱🇦" }, { name: "Lebanon", flag: "🇱🇧" }, { name: "Malaysia", flag: "🇲🇾" },
    { name: "Maldives", flag: "🇲🇻" }, { name: "Mongolia", flag: "🇲🇳" }, { name: "Myanmar", flag: "🇲🇲" },
    { name: "Nepal", flag: "🇳🇵" }, { name: "North Korea", flag: "🇰🇵" }, { name: "Oman", flag: "🇴🇲" },
    { name: "Pakistan", flag: "🇵🇰" }, { name: "Palestine", flag: "🇵🇸" }, { name: "Philippines", flag: "🇵🇭" },
    { name: "Qatar", flag: "🇶🇦" }, { name: "Saudi Arabia", flag: "🇸🇦" }, { name: "Singapore", flag: "🇸🇬" },
    { name: "South Korea", flag: "🇰🇷" }, { name: "Sri Lanka", flag: "🇱🇰" }, { name: "Syria", flag: "🇸🇾" },
    { name: "Taiwan", flag: "🇹🇼" }, { name: "Tajikistan", flag: "🇹🇯" }, { name: "Thailand", flag: "🇹🇭" },
    { name: "Timor-Leste", flag: "🇹🇱" }, { name: "Turkey", flag: "🇹🇷" }, { name: "Turkmenistan", flag: "🇹🇲" },
    { name: "United Arab Emirates", flag: "🇦🇪" }, { name: "Uzbekistan", flag: "🇺🇿" }, { name: "Vietnam", flag: "🇻🇳" },
    { name: "Yemen", flag: "🇾🇪" }
  ],
  KRAUNCADVIIPA: [
    { name: "Albania", flag: "🇦🇱" }, { name: "Andorra", flag: "🇦🇩" }, { name: "Austria", flag: "🇦🇹" },
    { name: "Belarus", flag: "🇧🇾" }, { name: "Belgium", flag: "🇧🇪" }, { name: "Bosnia & Herzegovina", flag: "🇧🇦" },
    { name: "Bulgaria", flag: "🇧🇬" }, { name: "Croatia", flag: "🇭🇷" }, { name: "Cyprus", flag: "🇨🇾" }, { name: "Czech Republic", flag: "🇨🇿" },
    { name: "Denmark", flag: "🇩🇰" }, { name: "Estonia", flag: "🇪🇪" }, { name: "Finland", flag: "🇫🇮" },
    { name: "France", flag: "🇫🇷" }, { name: "Germany", flag: "🇩🇪" }, { name: "Greece", flag: "🇬🇷" },
    { name: "Hungary", flag: "🇭🇺" }, { name: "Iceland", flag: "🇮🇸" }, { name: "Ireland", flag: "🇮🇪" },
    { name: "Italy", flag: "🇮🇹" }, { name: "Kosovo", flag: "🇽🇰" }, { name: "Latvia", flag: "🇱🇻" },
    { name: "Liechtenstein", flag: "🇱🇮" }, { name: "Lithuania", flag: "🇱🇹" }, { name: "Luxembourg", flag: "🇱🇺" },
    { name: "Malta", flag: "🇲🇹" }, { name: "Moldova", flag: "🇲🇩" }, { name: "Monaco", flag: "🇲🇨" },
    { name: "Montenegro", flag: "🇲🇪" }, { name: "Netherlands", flag: "🇳🇱" }, { name: "North Macedonia", flag: "🇲🇰" },
    { name: "Norway", flag: "🇳🇴" }, { name: "Poland", flag: "🇵🇱" }, { name: "Portugal", flag: "🇵🇹" },
    { name: "Romania", flag: "🇷🇴" }, { name: "Russia", flag: "🇷🇺" }, { name: "San Marino", flag: "🇸🇲" },
    { name: "Serbia", flag: "🇷🇸" }, { name: "Slovakia", flag: "🇸🇰" }, { name: "Slovenia", flag: "🇸🇮" },
    { name: "Spain", flag: "🇪🇸" }, { name: "Sweden", flag: "🇸🇪" }, { name: "Switzerland", flag: "🇨🇭" },
    { name: "Ukraine", flag: "🇺🇦" }, { name: "United Kingdom", flag: "🇬🇧" }, { name: "Vatican City", flag: "🇻🇦" }
  ],
  PLAKSHADVIIPA: [
    { name: "Antigua & Barbuda", flag: "🇦🇬" }, { name: "Argentina", flag: "🇦🇷" }, { name: "Bahamas", flag: "🇧🇸" },
    { name: "Barbados", flag: "🇧🇧" }, { name: "Belize", flag: "🇧🇿" }, { name: "Bolivia", flag: "🇧🇴" },
    { name: "Brazil", flag: "🇧🇷" }, { name: "Canada", flag: "🇨🇦" }, { name: "Chile", flag: "🇨🇱" },
    { name: "Colombia", flag: "🇨🇴" }, { name: "Costa Rica", flag: "🇨🇷" }, { name: "Cuba", flag: "🇨🇺" },
    { name: "Dominica", flag: "🇩🇲" }, { name: "Dominican Republic", flag: "🇩🇴" }, { name: "Ecuador", flag: "🇪🇨" },
    { name: "El Salvador", flag: "🇸🇻" }, { name: "Grenada", flag: "🇬🇩" }, { name: "Guatemala", flag: "🇬🇹" },
    { name: "Guyana", flag: "🇬🇾" }, { name: "Haiti", flag: "🇭🇹" }, { name: "Honduras", flag: "🇭🇳" },
    { name: "Jamaica", flag: "🇯🇲" }, { name: "Mexico", flag: "🇲🇽" }, { name: "Nicaragua", flag: "🇳🇮" },
    { name: "Panama", flag: "🇵🇦" }, { name: "Paraguay", flag: "🇵🇾" }, { name: "Peru", flag: "🇵🇪" },
    { name: "St. Kitts & Nevis", flag: "🇰🇳" }, { name: "St. Lucia", flag: "🇱🇨" }, { name: "St. Vincent & Grenadines", flag: "🇻🇨" },
    { name: "Suriname", flag: "🇸🇷" }, { name: "Trinidad & Tobago", flag: "🇹🇹" }, { name: "United States", flag: "🇺🇸" },
    { name: "Uruguay", flag: "🇺🇾" }, { name: "Venezuela", flag: "🇻🇪" }
  ],
  SHALMALIDVIIPA: [
    { name: "Australia", flag: "🇦🇺" }, { name: "Fiji", flag: "🇫🇯" }, { name: "Kiribati", flag: "🇰🇮" },
    { name: "Marshall Islands", flag: "🇲🇭" }, { name: "Micronesia", flag: "🇫🇲" }, { name: "Nauru", flag: "🇳🇷" },
    { name: "New Zealand", flag: "🇳🇿" }, { name: "Palau", flag: "🇵🇼" }, { name: "Papua New Guinea", flag: "🇵🇬" },
    { name: "Samoa", flag: "🇼🇸" }, { name: "Solomon Islands", flag: "🇸🇧" }, { name: "Tonga", flag: "🇹🇴" },
    { name: "Tuvalu", flag: "🇹🇻" }, { name: "Vanuatu", flag: "🇻🇺" }
  ]
};

const output = `export const NATIONS_BY_CONTINENT = ${JSON.stringify(data, null, 2)};\n`;
fs.writeFileSync('src/data/nations.ts', output);
