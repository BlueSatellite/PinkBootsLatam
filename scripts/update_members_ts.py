import re
import json
from pathlib import Path

WORKSPACE_DIR = Path(r"c:\Users\axeda\OneDrive\Documentos\PinkBootsLatam")
MEMBERS_TS = WORKSPACE_DIR / "src" / "lib" / "members.ts"
PROCESSED_JSON = WORKSPACE_DIR / "scripts" / "processed_photos.json"

with open(PROCESSED_JSON, "r", encoding="utf-8") as f:
    photos_map = json.load(f)

content = MEMBERS_TS.read_text(encoding="utf-8")

# We want to make sure for each mid in photos_map, the member object has `image: photos_map[mid]['image']`
# Let's inspect each member block in members.ts

updated_count = 0

for mid, pdata in photos_map.items():
    img_path = pdata["image"]
    
    # Pattern to match member block starting with id: "mid",
    # Find the member block
    pattern = rf'(id:\s*"{mid}",[\s\S]*?)(}})'
    match = re.search(pattern, content)
    if not match:
        print(f"Warning: Could not find block for {mid}")
        continue
        
    block = match.group(1)
    end_brace = match.group(2)
    
    # Check if `image:` already exists in this block
    if re.search(r'image:\s*"[^"]*"', block):
        # Replace existing image
        new_block = re.sub(r'image:\s*"[^"]*"', f'image: "{img_path}"', block)
    else:
        # Insert image property before chapter or roleBadge or at the end
        if "chapter:" in block:
            new_block = re.sub(r'(chapter:)', f'image: "{img_path}",\n    \\1', block)
        elif "roleBadge:" in block:
            new_block = re.sub(r'(roleBadge:)', f'image: "{img_path}",\n    \\1', block)
        else:
            new_block = block + f'    image: "{img_path}",\n  '
            
    content = content[:match.start()] + new_block + end_brace + content[match.end():]
    updated_count += 1
    print(f"Updated {mid} ({pdata['name']}) -> {img_path}")

MEMBERS_TS.write_text(content, encoding="utf-8")
print(f"\nSuccessfully updated {updated_count} member records in src/lib/members.ts")
