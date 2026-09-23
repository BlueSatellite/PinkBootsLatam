import re

content = open(r'c:\Users\axeda\OneDrive\Documentos\PinkBootsLatam\src\lib\members.ts', encoding='utf-8').read()
members = content.split('  {\n    id: "m-')
missing_img = []
has_img = []

for m in members[1:]:
    mid = 'm-' + m.split('"')[0]
    name_m = re.search(r'name:\s*"([^"]+)"', m)
    name = name_m.group(1) if name_m else "Unknown"
    img_match = re.search(r'image:\s*"([^"]+)"', m)
    img = img_match.group(1) if img_match else None
    fid_match = re.search(r'photoDriveId:\s*"([^"]+)"', m)
    fid = fid_match.group(1) if fid_match else None
    
    if img:
        has_img.append((mid, name, img, fid))
    else:
        missing_img.append((mid, name, fid))

print(f"Total with local image: {len(has_img)}")
print(f"Total missing local image: {len(missing_img)}")
print("\nMissing local image list:")
for mid, name, fid in missing_img:
    print(f"  {mid:5s} | {name:30s} | driveId: {fid}")
