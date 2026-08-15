const fs = require('fs');

// App.tsx
let appContent = fs.readFileSync('src/App.tsx', 'utf8');
appContent = appContent.replace('const [isLocked, setIsLocked] = useState(true);', 'const [isLocked, setIsLocked] = useState(false);');
fs.writeFileSync('src/App.tsx', appContent);

// DirectoryTree.tsx
let dirContent = fs.readFileSync('src/components/DirectoryTree.tsx', 'utf8');
dirContent = dirContent.replace('const [isVisible, setIsVisible] = useState(false);', 'const [isVisible, setIsVisible] = useState(true);');
fs.writeFileSync('src/components/DirectoryTree.tsx', dirContent);

// SystemCurrencyPortal.tsx
let portalContent = fs.readFileSync('src/components/SystemCurrencyPortal.tsx', 'utf8');
portalContent = portalContent.replace('const [isOpen, setIsOpen] = useState(false);', 'const [isOpen, setIsOpen] = useState(true);');
fs.writeFileSync('src/components/SystemCurrencyPortal.tsx', portalContent);

