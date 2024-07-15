# Pocket Translation

This project is a web application that translates text on images to English using Python and Next.js (TypeScript). In this project I experiment on three different web frameworks: Flask, Django, and FastAPI.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

### Prerequisites

- Python 3.8+
- Tesseract OCR
- Node.js (for Next.js)

### Steps

1. **Clone the repository:**
    ```bash
    git clone https://github.com/louisjoety/image_to_text.git
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

4. **Install the required Python libraries:**
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

6. **Set up the Next.js app:**
    ```bash
    cd frontend
    npx create-next-app@latest .
    ```

7. **Install Tailwind CSS (optional):**
    ```bash
    npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
    npx tailwindcss init -p
    ```

8. **Configure `tailwind.config.js`:**
    ```javascript
    /** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
      ],
      theme: {
        extend: {},
      },
      plugins: [],
    }
    ```

9. **Add Tailwind CSS to your CSS file:**
    ```css
    /* In styles/globals.css */
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

## Usage

### Python Script

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

### Next.js App

1. **Navigate to the Next.js app directory:**
    ```bash
    cd next-app
    ```

2. **Run the development server:**
    ```bash
    npm run dev
    ```

3. **Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.**

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.