import sys
import os
import subprocess

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    import docx2pdf
except ImportError:
    print("Installing docx2pdf...")
    install("docx2pdf")
    import docx2pdf

input_file = r"C:\Users\vikas\OneDrive\Desktop\vikas cv.docx"
output_file = r"C:\Users\vikas\OneDrive\Desktop\projectgithub\vikasportfolio\public\Vikas_Pal_CV.pdf"

print(f"Attempting to convert {input_file} to {output_file}")
try:
    # docx2pdf requires Microsoft Word to be installed on Windows
    docx2pdf.convert(input_file, output_file)
    print("Conversion successful!")
except Exception as e:
    print(f"Error during conversion: {e}")
    print("Note: docx2pdf requires Microsoft Word to be installed on this computer.")
