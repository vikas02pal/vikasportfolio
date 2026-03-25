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
    
    # Simple Find and Replace
    def find_and_replace(find_str, replace_str):
        word.Selection.Find.Execute(find_str, False, False, False, False, False, True, 1, False, replace_str, 2)
    
    find_and_replace("aspiring software developer and engineer", "Full Stack Developer")
    find_and_replace("Aspiring software developer and engineer", "Full Stack Developer")
    find_and_replace("Aspiring Software Developer and Engineer", "Full Stack Developer")
    find_and_replace("aspiring software developer", "Full Stack Developer")
    find_and_replace("Aspiring software developer", "Full Stack Developer")
    find_and_replace("68.2%", "85.2%")
    find_and_replace("68.2", "85.2")
    
    # Append the new section at the end
    rng = doc.Content
    rng.Collapse(0) # Collapse to end
    rng.InsertParagraphAfter()
    rng.Collapse(0)
    rng.Text = "\nTechnical Philosophy & Approach\nAs a Full Stack Developer, my primary objective is to build scalable, secure, and user-centric applications. I believe that great software is built on a foundation of clean code, robust architecture, and seamless user experiences. Whether I am developing a high-performance backend system using Java and Spring Boot, or crafting responsive interfaces with React, my focus remains on solving complex problems through elegant technical solutions.\nI approach every project with a strong emphasis on system design and software architecture. By utilizing best practices in database management and building RESTful APIs, I ensure that data flow is efficient and secure."
    
    # Make 'Technical Philosophy & Approach' bold and larger
    # This is a bit complex in COM, let's just insert it as text.

    doc.Save()
    doc.Close()
    word.Quit()
    print("CV successfully modified using COM.")
except Exception as e:
    print(f"Error using COM: {e}")
