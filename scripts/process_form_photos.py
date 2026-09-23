import os
import re
from pathlib import Path
from PIL import Image, ImageOps
import pillow_heif

pillow_heif.register_heif_opener()

INPUT_DIR = Path(r"C:\Users\axeda\Downloads\fotoperfil\Foto de perfil (por favor colocar una foto clara y preferiblemente relacionada con tu trabajo). (File responses)")
WORKSPACE_DIR = Path(r"c:\Users\axeda\OneDrive\Documentos\PinkBootsLatam")
OUTPUT_DIR = WORKSPACE_DIR / "public" / "members"
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Mapping of file to member id / slug in members.ts
# We map each downloaded filename to the exact member id (m-1 to m-38)
MAPPINGS = [
    # (Filename substring or exact, member_id, member_slug, member_name)
    ("Vericcio Beer", "m-5", "veronica-carrasco", "Verónica Carrasco"),
    ("Jesse Rodriguez", "m-27", "jessica-rodriguez", "Jessica Rodríguez"),
    ("Zarat", "m-32", "zarati-tejeira", "Zaratí Tejeira Fernández"),
    ("Analia Etcheverrito", "m-24", "analia-etcheverrito", "Analía Etcheverrito"),
    ("Andrea Zalapa Morfin", "m-15", "andrea-zalapa", "Andrea Zalapa Morfín"),
    ("Eloisa Sanjur", "m-13", "eloisa-sanjur", "Eloísa Sanjur"),
    ("Daiana Milon Mayer", "m-12", "daiana", "Daiana Milón Mayer"),
    ("Brew!!! Taller Experimental", "m-26", "sandra-rodriguez", "Sandra E. Rodríguez Roldán"),
    ("Jalen Mu", "m-14", "jalen-munoz", "Jalen N. Muñoz Carrillo"),
    ("Nikole Negron", "m-29", "nikole-negron", "Nikole Negrón"),
    ("The Growler Lady", "m-19", "alexandra-mercado", "Alexandra Mercado Correa"),
    ("Mariela Chontales", "m-20", "mariela-vazquez", "Mariela Vázquez Chontales"),
    ("Alexia Medina", "m-17", "alexia-medina", "Alexia Medina"),
    ("FERNANDA SANTOS DA COSTA", "m-6", "fernanda-da-costa", "Fernanda Santos da Costa"),
    ("Julieta Batista", "m-35", "julieta-batista", "Julieta Batista Jordán"),
    ("Cristina Palma", "m-21", "cristina-palma", "Cristina Palma"),
    ("Galaxis Ardila", "m-22", "galaxis-ardila", "Galaxis Ardila Mendizábal"),
    ("valentine zitamar", "m-11", "zitamar-valentine", "Zitamar Valentine"),
    ("Cynthia Hurtado", "m-9", "cynthia", "Cynthia Hurtado"),
    ("Carla Roa", "m-23", "carla-roa", "Carla Roa"),
    ("PBS Latin America", "m-1", "ericka", "Ericka Otero"),
    ("Minelis Mendez", "m-37", "minelis-mendez", "Minelis Méndez Vargas"),
    ("Juliehana Carrillo", "m-30", "juliehana-carrillo", "Juliehana Carrillo"),
    ("Adrede LLC", "m-18", "deborah-rodriguez", "Deborah Rodríguez Mercado"),
    ("Nilda Escobar", "m-36", "nilda-escobar", "Nilda Escobar"),
    ("Solano", "m-8", "daniela-jimenez", "Daniela Jiménez"),
    ("Karina Vega", "m-38", "karina-vega", "Karina M. Vega Escobar"),
    ("Angelica Adorno", "m-31", "angelica-adorno", "Angélica M. Adorno Santos"),
    ("Jevas Cerveceras", "m-3", "keishla-torres", "Keishla Torres"),
    ("Shairai Rivera", "m-16", "shairai-rivera", "Shairai L. Rivera Ramírez"),
    ("Viviana L. G.", "m-4", "viviana-lopez", "Viviana López Gutiérrez"),
    ("Nathaly Arriaza", "m-25", "nathaly-arriaza", "Nathaly Arriaza"),
    ("Mariana Guerrero", "m-10", "mariana-guerrero", "Mariana Guerrero"),
    ("alejandra dimas", "m-33", "ale-dimas", "Alejandra Dimas"),
    ("Karen Valderrama", "m-34", "karen-valderrama", "Karen Valderrama"),
    ("Silvia De Tom", "m-2", "silvia-de-tomas", "Silvia De Tomás Ayllón"),
    ("Karina Ibarra", "m-28", "karina-ibarra", "Elizabeth Karina Ibarra Carvajal"),
    ("Vanjga Vera", "m-7", "vanjga-vera", "Vanjga Vera Loncharich"),
]

def main():
    files = list(INPUT_DIR.iterdir())
    print(f"Found {len(files)} files in input directory.")
    
    processed = {}
    
    for file_path in sorted(files):
        fname = file_path.name
        matched = None
        for pattern, mid, slug, mname in MAPPINGS:
            if pattern.lower() in fname.lower():
                matched = (pattern, mid, slug, mname)
                break
                
        if not matched:
            print(f"WARNING: No pattern match for file: {fname}")
            continue
            
        _, mid, slug, mname = matched
        target_name = f"{slug}.jpg"
        target_path = OUTPUT_DIR / target_name
        
        try:
            with Image.open(file_path) as img:
                # Fix orientation using EXIF transpose
                img = ImageOps.exif_transpose(img)
                
                # Convert mode to RGB
                if img.mode in ("RGBA", "P", "LA"):
                    img = img.convert("RGB")
                
                # If image is very huge (> 2000px on longest side), resize down with LANCZOS to keep sharp & light
                max_dim = 1800
                w, h = img.size
                if max(w, h) > max_dim:
                    scale = max_dim / max(w, h)
                    new_w = int(w * scale)
                    new_h = int(h * scale)
                    img = img.resize((new_w, new_h), Image.Resampling.LANCZOS)
                
                img.save(target_path, "JPEG", quality=90, optimize=True)
                
            file_kb = target_path.stat().st_size // 1024
            print(f"[{mid}] {mname:30s} -> /members/{target_name} ({file_kb} KB)")
            processed[mid] = {
                "name": mname,
                "slug": slug,
                "image": f"/members/{target_name}",
                "original_file": fname
            }
        except Exception as e:
            print(f"ERROR processing {fname}: {e}")
            
    print(f"\nSuccessfully processed: {len(processed)} of {len(MAPPINGS)} photos.")
    
    import json
    with open(WORKSPACE_DIR / "scripts" / "processed_photos.json", "w", encoding="utf-8") as f:
        json.dump(processed, f, indent=2, ensure_ascii=False)

if __name__ == "__main__":
    main()
