import json
import re

with open('src/data.ts', 'r') as f:
    content = f.read()

# We need to find Mongu in the JSON-like structure.
# Wait, parsing src/data.ts might be hard because it's a TS file exporting an array.
