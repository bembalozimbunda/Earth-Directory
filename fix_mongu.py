lines = []
with open('src/data.ts', 'r') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    if line.strip() == '"name": "Senanga",':
        senanga_idx = i
        break

# Find the start of the extra `{`
for i, line in enumerate(lines):
    if line.strip() == '"name": "Mongu",':
        mongu_idx = i
        break

# we know lines[mongu_idx-1] is `{`
# lines[mongu_idx-2] is `{`
# we should remove lines[mongu_idx-2]

lines.pop(mongu_idx - 2)

# update senanga_idx after pop
senanga_idx -= 1

# before "name": "Senanga", we have `  },` at senanga_idx - 1. We should have `              {` before `    "name": "Senanga",`
lines.insert(senanga_idx, '              {\n')

with open('src/data.ts', 'w') as f:
    f.writelines(lines)
