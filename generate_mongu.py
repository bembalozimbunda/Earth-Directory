import json

mongu = {
    "name": "Mongu",
    "details": {
        "population": 197816
    },
    "children": [
        {
            "name": "Mongu Central",
            "details": {
                "population": 80000
            },
            "children": [
                {"name": f"Mongu Central Ward {i+1}", "details": {"population": 80000 // 12}, "children": [{"name": f"Village {i+1}", "details": {"population": 80000 // 12}, "children": [{"name": "Citizen", "details": {"population": 1}}]}]} for i in range(12)
            ]
        },
        {
            "name": "Nalikwanda",
            "details": {
                "population": 57816
            },
            "children": [
                {"name": f"Nalikwanda Ward {i+1}", "details": {"population": 57816 // 7}, "children": [{"name": f"Village {i+1}", "details": {"population": 57816 // 7}, "children": [{"name": "Citizen", "details": {"population": 1}}]}]} for i in range(7)
            ]
        },
        {
            "name": "Mongu East",
            "details": {
                "population": 60000
            },
            "children": [
                {"name": f"Mongu East Ward {i+1}", "details": {"population": 60000 // 8}, "children": [{"name": f"Village {i+1}", "details": {"population": 60000 // 8}, "children": [{"name": "Citizen", "details": {"population": 1}}]}]} for i in range(8)
            ]
        }
    ]
}

lines = []
with open('src/data.ts', 'r') as f:
    lines = f.readlines()

out = []
in_mongu = False
for i, line in enumerate(lines):
    if i == 5420:
        out.append(line)
        # we append mongu json
        json_str = json.dumps(mongu, indent=2)
        # add indentation
        indented = "\n".join(["              " + l for l in json_str.split("\n")])
        out.append(indented + ",\n")
    elif 5421 <= i <= 5531:
        pass
    else:
        out.append(line)

with open('src/data.ts', 'w') as f:
    f.writelines(out)
