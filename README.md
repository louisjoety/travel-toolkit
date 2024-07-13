# Image to Text Converter

This project is a simple image-to-text converter using Python. It utilizes the Tesseract OCR engine to extract text from images.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Python 3.x
- Tesseract OCR

### Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/image_to_text.git
    cd image_to_text
    ```

2. **Set up a virtual environment:**
    ```bash
    python -m venv venv
    ```

3. **Activate the virtual environment:**
    - On Windows:
      ```bash
      venv\Scripts\activate
      ```
    - On macOS and Linux:
      ```bash
      source venv/bin/activate
      ```

4. **Install the required libraries:**
    ```bash
    pip install -r requirements.txt
    ```

5. **Install Tesseract OCR:**
    - On Windows, download it from [here](https://github.com/UB-Mannheim/tesseract/wiki).
    - On macOS, install it using Homebrew:
      ```bash
      brew install tesseract
      ```
    - On Linux, install it using:
      ```bash
      sudo apt-get install tesseract-ocr
      ```

## Usage

1. **Place your image file in the project directory.**

2. **Update the path to the image in the `image_to_text.py` file:**
    ```python
    if __name__ == "__main__":
        image_path = 'path/to/your/image.png'  # Update this path to your image file
        text = convert_image_to_text(image_path)
        print("Extracted Text:")
        print(text)
    ```

3. **Run the script:**
    ```bash
    python image_to_text.py
    ```

4. **The extracted text will be printed to the console.**

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.