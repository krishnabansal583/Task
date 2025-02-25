# Task - Frontend Project

This is a responsive and interactive web page that mimics the design of a Netflix-like interface. It dynamically retrieves and displays data from a provided API, featuring a hero section, a carousel of episodes, and interactive elements like hover effects and modal windows.

## Features

1. **Responsive Design**:
   - The web page is fully responsive and adjusts to different screen sizes (desktop, tablet, mobile).
   - On mobile screens, episodes are displayed vertically with visible episode names and numbers.

2. **Hero Section**:
   - A large background image with a text overlay.
   - "Resume" and "My List" buttons positioned at the bottom-right of the hero image.

3. **Carousel of Episodes**:
   - Displays 4-5 episodes per slide on desktop screens.
   - On mobile screens, episodes are displayed vertically.
   - Hover effects include a red opacity overlay, a play icon, and episode information.

4. **Interactive Elements**:
   - Navigation bar with drop-down menus (not fully implemented in this version).
   - Modal window for displaying episode images (not fully implemented in this version).

5. **Dynamic Data Fetching**:
   - Uses the provided API to fetch and display episode data dynamically.

## Technologies Used

- **HTML5**: For structuring the web page.
- **CSS3**: For styling and responsive design.
- **JavaScript**: For interactivity and dynamic data fetching.
- **Bootstrap 5**: For responsive layout and pre-built components.
- **Font Awesome**: For icons (e.g., play icon, navigation icons).

## API Used

The project uses the following API to fetch episode data:

```json
{
  "characters": [...],
  "series": {...},
  "episodes": [...]
}
```

API Endpoint: [https://repo-tech2edge.github.io/tasks/sample.json](https://repo-tech2edge.github.io/tasks/sample.json)

## Setup Instructions
### Prerequisites
- A modern web browser (e.g., Chrome).
- A code editor (e.g., VS Code ).

### Steps to Run the Project
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/krishnabansal583/Task.git
   cd Task
2. **Open the Project**:
   - Open the `index.html` file in your browser.

## Folder Structure
Task/
│
├── index.html          # Main HTML file
├── styles.css          # CSS file for styling
├── script.js           # JavaScript file for interactivity
├── README.md           # Project documentation


## Customization
### Changing the API Endpoint
If you want to use a different API, update the `fetch` URL in the `script.js` file:

```javascript
fetch('https://repo-tech2edge.github.io/tasks/sample.json')
    .then(response => response.json())
    .then(data => {
        //  code 
    });

### Adding More Features
- **Navigation Bar**: Implement drop-down menus for the navigation links.
- **Modal Window**: Add functionality to display episode details in a modal.
- **Additional Pages**: Create separate pages for TV shows, movies, and recently added content.

## Contributing
Contributions are welcome! If you'd like to contribute to this project, please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a pull request.

## Acknowledgments
- **Bootstrap**: For providing a responsive and easy-to-use CSS framework.
- **Font Awesome**: For the icons used in the project.
- **API Provider**: For providing the sample data used in this project.

## Contact
For any questions or feedback, feel free to reach out:
- **Krishna Bansal**: krishnabansal583@gmail.com
- **GitHub**:https://github.com/krishnabansal583
