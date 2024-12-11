import cv2
import pytesseract
import numpy as np

def convert_image_to_text(image_file):
    try:
        image = cv2.imdecode(np.frombuffer(image_file.read(), np.uint8), cv2.IMREAD_COLOR)
        if image is None:
            raise ValueError("Invalid image file")

        rgb_image = cv2.cvtColor(image, cv2.COLOR_BGR2RGB)
        text = pytesseract.image_to_string(rgb_image)
        return text
    except Exception as e:
        print(f"Error: {e}")
        return ""
