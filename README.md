# Restaurant Page

This project dynamically generates a restaurant homepage using JavaScript to manipulate the DOM. The goal is to practice DOM manipulation and modular JavaScript while building a multi-tabbed website.

## Features

- Dynamic content rendering using JavaScript
- Tabbed navigation for Home, Menu, and Contact pages
- Modular code structure with separate modules for each page
- Styled using a separate CSS file

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine
- Basic knowledge of Webpack and npm

### Installation

1. Clone the repository:
   
   ```bash
   git clone https://github.com/yuri-italo/restaurant-page.git
   ```

2. Navigate to the project directory:
   
   ```bash
   cd restaurant-page
   ```

3. Install dependencies:
   
   ```bash
   npm install
   ```

### Development

1. Start the development server:
   
   ```bash
   npx webpack serve
   ```

2. Open [http://localhost:8080](http://localhost:8080) in your browser to view the project.

### Project Structure

- **`src/template.html`**: Contains the initial HTML skeleton with a `<header>` and `<div id="content">`.
- **`src/index.js`**: The entry point for the application, handles tab-switching logic.
- **Modules**:
  - **Home**: Generates the homepage content.
  - **Menu**: Generates the menu page content.
  - **Contact**: Generates the contact page content.

## Lessons Learned

- Using JavaScript to create and append DOM elements dynamically
- Structuring projects with modular JavaScript
- Setting up Webpack for modern web development
- Deploying projects to GitHub Pages

## Acknowledgments

This project is part of [The Odin Project](https://www.theodinproject.com/) curriculum.
