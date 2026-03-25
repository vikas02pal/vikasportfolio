import sys
import os

try:
    import win32com.client
except ImportError:
    print("Installing pywin32...")
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pywin32"])
    import win32com.client

doc_path = os.path.abspath(r"C:\Users\vikas\OneDrive\Desktop\vikas cv.docx")

try:
    word = win32com.client.Dispatch("Word.Application")
    word.Visible = False
    doc = word.Documents.Open(doc_path)
    
    def find_and_replace(find_str, replace_str):
        word.Selection.Find.Execute(find_str, False, False, False, False, False, True, 1, False, replace_str, 2)
    
    # Revert 85.2 back to 68.2
    find_and_replace("85.2%", "68.2%")
    find_and_replace("85.2", "68.2")
    
    # Change B.Tech status
    find_and_replace("August 2023 - present", "August 2023 - Pursuing")
    
    doc.Save()
    doc.Close()
    word.Quit()
    print("CV successfully reverted using COM.")
except Exception as e:
    print(f"Error using COM: {e}")
