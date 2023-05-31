# YouTube Clone

This is a YouTube Clone project that replicates the basic functionality of the popular video-sharing platform, YouTube. It allows users to view a list of videos and play them in a video player.

## Features

- **Navigation:** The project includes a navigation bar at the top, allowing users to navigate through different sections of the clone.
- **Responsive Design:** The project is responsive and adjusts its layout based on the screen size. On smaller screens, a collapsible hamburger menu is displayed.
- **Video Player:** The project includes a video player section where the selected video is dynamically loaded and played.
- **Video List:** The project displays a list of videos with their thumbnails, titles, and descriptions. Users can click on a video thumbnail or title to load and play the corresponding video in the video player.

## Technologies Used

The project utilizes the following technologies:

- **HTML:** The structure and layout of the project are defined using HTML.
- **CSS:** The project includes CSS stylesheets to define the visual appearance and layout of the elements.
- **JavaScript:** JavaScript is used to dynamically update the video player and video list based on user interactions.

## How to Use

To use the YouTube Clone project, follow these steps:

1. Clone or download the project files to your local machine.
2. Open the `index.html` file in a web browser.

## Project Structure

The project consists of the following files and directories:

- `index.html`: The main HTML file that defines the structure and layout of the project.
- `main.css`: The CSS file that contains styles for the main project layout.
- `nav.css`: The CSS file that contains styles for the navigation bar.
- `index.js`: The JavaScript file that contains functions to load and play videos in the video player.
- `nav.js`: The JavaScript file that contains functions to handle the navigation bar's toggle functionality.
- `README.md`: The README file that provides information about the project.

## Video Data

The project includes a JavaScript variable named `videoList` that stores an array of video objects. Each video object contains the following properties:

- `title`: The title of the video.
- `description`: A description of the video.
- `videoId`: The unique identifier of the video.

The `generateVideoList` function uses this data to dynamically generate the video list in the HTML.

## Contributing

Contributions to the YouTube Clone project are welcome. If you find any issues or would like to add new features, feel free to submit a pull request.

## License

The YouTube Clone project is open source and available under the [MIT License](LICENSE). Feel free to modify and use the code for your own purposes.


