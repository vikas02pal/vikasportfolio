import shutil
import os
import subprocess
import sys

# Try to import Pillow, install if missing
try:
    from PIL import Image
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "Pillow"])
    from PIL import Image

src_img = r'C:\Users\vikas\.gemini\antigravity\brain\38037d41-b05d-4560-8856-558b3392ee7b\uploaded_media_1774204286798.png'
dest_img = r'public\uploaded_media_1774204286798.png'
dest_pdf = r'public\Vikas_Pal_CV.pdf'

os.makedirs('public', exist_ok=True)

try:
    shutil.copy(src_img, dest_img)
    print(f"Copied image to {dest_img}")
    img = Image.open(src_img)
    img = img.convert('RGB')
    img.save(dest_pdf)
    print(f"Successfully converted and saved PDF to {dest_pdf}")
except Exception as e:
    print(f"Error: {e}")
