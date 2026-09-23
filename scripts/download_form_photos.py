import os
import sys
sys.stdout.reconfigure(line_buffering=True)
sys.stderr.reconfigure(line_buffering=True)

import re
import csv
import json
import zipfile
import io
from pathlib import Path
from PIL import Image
import pillow_heif
pillow_heif.register_heif_opener()

from google.oauth2.credentials import Credentials
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from googleapiclient.discovery import build
from googleapiclient.http import MediaIoBaseDownload

print("Script starting...", flush=True)

SCOPES = [
    'https://www.googleapis.com/auth/drive.readonly',
]

WORKSPACE_DIR = Path(r"c:\Users\axeda\OneDrive\Documentos\PinkBootsLatam")
PUBLIC_MEMBERS_DIR = WORKSPACE_DIR / "public" / "members"
PUBLIC_MEMBERS_DIR.mkdir(parents=True, exist_ok=True)

CREDENTIALS_FILE = Path(r"C:\Users\axeda\Estudio\credentials.json")
TOKEN_FILE = Path(r"C:\Users\axeda\Estudio\token_axedarkxd11.json")

def get_drive_service():
    creds = None
    if TOKEN_FILE.exists():
        try:
            print(f"Checking existing token at {TOKEN_FILE}...", flush=True)
            creds = Credentials.from_authorized_user_file(str(TOKEN_FILE), SCOPES)
        except Exception as e:
            print(f"Error loading existing token: {e}", flush=True)
            creds = None

    if not creds or not creds.valid:
        if creds and creds.expired and creds.refresh_token:
            print("Refreshing expired credentials...", flush=True)
            creds.refresh(Request())
        else:
            print(f"Reading OAuth credentials from {CREDENTIALS_FILE}...", flush=True)
            flow = InstalledAppFlow.from_client_secrets_file(
                str(CREDENTIALS_FILE),
                SCOPES
            )
            print("\n" + "="*70, flush=True)
            print("POR FAVOR AUTORIZA EL ACCESO CON: axedarkxd11@gmail.com", flush=True)
            print("El navegador se abrirá en breves momentos...", flush=True)
            print("="*70 + "\n", flush=True)
            # Run local server on fixed port or 0
            creds = flow.run_local_server(port=8085, prompt='consent', open_browser=True)
        
        with open(TOKEN_FILE, 'w', encoding='utf-8') as token_f:
            token_f.write(creds.to_json())
        print(f"Saved token to {TOKEN_FILE}", flush=True)

    return build('drive', 'v3', credentials=creds)

def slugify(text: str) -> str:
    text = text.lower().strip()
    text = re.sub(r'[áàäâ]', 'a', text)
    text = re.sub(r'[éèëê]', 'e', text)
    text = re.sub(r'[íìïî]', 'i', text)
    text = re.sub(r'[óòöô]', 'o', text)
    text = re.sub(r'[úùüû]', 'u', text)
    text = re.sub(r'[ñ]', 'n', text)
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

def load_csv_data():
    csv_candidates = [
        Path(r"C:\Users\axeda\Downloads\IntegrantesPBS.csv\IntegrantesPBS.csv"),
        Path(r"C:\Users\axeda\Downloads\IntegrantesPBS.csv"),
        Path(r"c:\Users\axeda\AppData\Local\Temp\92345083-f63f-4e3b-a354-79dc61555a49_IntegrantesPBS.csv.zip.a49\IntegrantesPBS.csv"),
    ]
    
    csv_text = None
    for cand in csv_candidates:
        if cand.is_file():
            print(f"Loading CSV from {cand}", flush=True)
            csv_text = cand.read_text(encoding='utf-8', errors='ignore')
            break
            
    if not csv_text:
        zip_path = Path(r"C:\Users\axeda\Downloads\IntegrantesPBS.csv.zip")
        if zip_path.is_file():
            print(f"Extracting CSV from {zip_path}", flush=True)
            z = zipfile.ZipFile(zip_path)
            for name in z.namelist():
                if name.endswith('.csv'):
                    csv_text = z.read(name).decode('utf-8', errors='ignore')
                    break
                    
    if not csv_text:
        raise FileNotFoundError("Could not locate IntegrantesPBS.csv")
        
    reader = csv.reader(csv_text.splitlines())
    header = next(reader)
    
    rows = []
    for r in reader:
        if len(r) < 3:
            continue
        email_account = r[1].strip()
        name = r[2].strip()
        country_city = r[3].strip()
        contact_email = r[4].strip()
        dedication = r[5].strip()
        company = r[6].strip()
        social = r[7].strip()
        photo_url = r[9].strip() if len(r) > 9 else ''
        
        drive_id = ''
        m = re.search(r'id=([a-zA-Z0-9_-]+)', photo_url)
        if m:
            drive_id = m.group(1)
            
        rows.append({
            'name': name,
            'email': contact_email or email_account,
            'country_city': country_city,
            'dedication': dedication,
            'company': company,
            'social': social,
            'drive_id': drive_id,
            'photo_url': photo_url,
        })
    return rows

def download_and_optimize_photo(service, file_id: str, member_slug: str):
    try:
        meta = service.files().get(fileId=file_id, fields='id, name, mimeType, size').execute()
        orig_name = meta.get('name', 'photo')
        mime = meta.get('mimeType', '')
        print(f"  Downloading '{orig_name}' ({mime})...", flush=True)
        
        request = service.files().get_media(fileId=file_id)
        fh = io.BytesIO()
        downloader = MediaIoBaseDownload(fh, request)
        done = False
        while not done:
            status, done = downloader.next_chunk()
            
        fh.seek(0)
        img_bytes = fh.read()
        
        img = Image.open(io.BytesIO(img_bytes))
        if img.mode in ("RGBA", "P"):
            img = img.convert("RGB")
            
        target_filename = f"{member_slug}.jpg"
        target_path = PUBLIC_MEMBERS_DIR / target_filename
        
        img.save(target_path, "JPEG", quality=90, optimize=True)
        print(f"  -> Guardada: {target_path.name} ({target_path.stat().st_size // 1024} KB)", flush=True)
        return f"/members/{target_filename}"
    except Exception as e:
        print(f"  ERROR descargando {file_id}: {e}", flush=True)
        return None

def main():
    print("=== Pink Boots Latam: Descarga de Fotos del Formulario ===", flush=True)
    rows = load_csv_data()
    print(f"Cargadas {len(rows)} integrantes del archivo CSV.\n", flush=True)
    
    service = get_drive_service()
    print("Servicio de Google Drive conectado exitosamente.\n", flush=True)
    
    results = {}
    for i, r in enumerate(rows, 1):
        name = r['name']
        slug = slugify(name)
        fid = r['drive_id']
        print(f"[{i}/{len(rows)}] {name} (Slug: {slug})", flush=True)
        if not fid:
            print("  No se encontró Drive ID.", flush=True)
            continue
            
        local_path = download_and_optimize_photo(service, fid, slug)
        if local_path:
            results[name] = {
                'slug': slug,
                'image': local_path,
                'drive_id': fid
            }
            
    out_json = WORKSPACE_DIR / "scripts" / "downloaded_photos.json"
    with open(out_json, "w", encoding="utf-8") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)
        
    print(f"\n¡Completado! Se descargaron {len(results)} de {len(rows)} fotos.", flush=True)
    print(f"Metadatos guardados en {out_json}", flush=True)

if __name__ == "__main__":
    main()
