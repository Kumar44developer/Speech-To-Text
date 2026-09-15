<div align="center">

# Speech to Text

### Turn your voice into text in real time

A browser-based speech recognition app that transcribes spoken words into text as you talk. Built with vanilla HTML, CSS, and JavaScript using the Web Speech API, with no dependencies and no build step.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?logo=javascript&logoColor=black)
![Web Speech API](https://img.shields.io/badge/API-Web%20Speech-8A2BE2)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [How It Works](#how-it-works)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Browser Support](#browser-support)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

---

## Overview

Speech to Text is a front-end only application that runs entirely in the browser. It uses the Web Speech API to listen through the microphone and convert speech into text on the fly, showing both interim and finalized results in a live display. The interface is simple: a microphone button to start and a stop button to end the session.

## Features

- Real-time voice transcription with live interim results
- Continuous recognition that keeps listening until stopped
- Start and stop controls with clear microphone and stop icons
- Cross-browser detection with a helpful message on unsupported browsers
- Clean, centered, responsive interface with an animated control
- Zero dependencies and no build tooling

## Tech Stack

| Technology | Role |
| --- | --- |
| HTML5 | Page structure and controls |
| CSS3 | Styling, layout, and animation |
| JavaScript | Speech recognition and rendering |
| Web Speech API | Browser-native speech-to-text engine |
| Font Awesome | Microphone and stop icons |

## How It Works

When the microphone button is pressed, the app creates a speech recognition instance, enables continuous listening and interim results, and starts capturing audio. Each recognition event returns a list of results that are split into finalized and interim text, combined, and rendered to the display. Pressing the stop button ends the session.

## Project Structure

```
project29/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Getting Started

No installation or server dependencies are required, but the Web Speech API needs a secure context.

Clone the repository:

```bash
git clone https://github.com/Kumar44developer/Speech-To-Text.git
```

Serve the folder over `http://localhost` or `https`, for example with the VS Code Live Server extension, then open the page. Opening directly from the file system may block microphone access in some browsers.

## Usage

1. Click the microphone button and allow microphone access when prompted.
2. Start speaking and watch the text appear in real time.
3. Click the stop button to end the session.

## Browser Support

The app relies on the Web Speech API, which is best supported in Google Chrome and Microsoft Edge. Browsers without support display a message prompting the user to switch. A working microphone and a secure context such as localhost or HTTPS are required.

## Roadmap

- Language selection for multilingual transcription
- Copy to clipboard and export as a text file
- Pause and resume controls
- Punctuation and formatting options
- Light and dark theme options

## Contributing

Contributions are welcome. Fork the repository, create a feature branch, commit your changes, and open a pull request with a clear description.

## License

This project is released under the MIT License.

## Author

Created by [Kumar44developer](https://github.com/Kumar44developer).
