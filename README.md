# ☕ Coffee Tracker

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

A simple and intuitive frontend application to track your daily coffee consumption. Built with modern web technologies and powered by Firebase.

## 🌟 Features

-   **Log Coffee:** Easily log every cup of coffee you drink.
-   **View History:** Keep track of your consumption over time.
-   **AI-Powered Insights:** Get fun facts or recommendations about your coffee habits (powered by Firebase AI).
-   **User-Friendly Interface:** Clean, simple, and easy to use.

## 🛠️ Tech Stack

-   **Frontend:** JavaScript / TypeScript
-   **Backend Services:**
    -   [Firebase](https://firebase.google.com/): For authentication, database, and AI features.
    -   [Firebase AI](https://firebase.google.com/docs/ai): For generative AI capabilities.
-   **Package Manager:** [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/get-npm) (or [yarn](https://yarnpkg.com/)) installed.

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/josephus-git/FrontEnd.git
    cd FrontEnd/coffee-tracker
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    # or
    yarn install
    ```

3.  **Set up Firebase:**
    -   Create a Firebase project at [https://console.firebase.google.com/](https://console.firebase.google.com/).
    -   Add a new Web App to your project to get your Firebase configuration.
    -   Create a `.env.local` file in the root of the project and add your Firebase configuration keys. It's common to prefix these with your framework's convention (e.g., `REACT_APP_` or `VITE_`).
        ```env
        # Example for Create React App
        REACT_APP_FIREBASE_API_KEY=your_api_key
        REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
        REACT_APP_FIREBASE_PROJECT_ID=your_project_id
        REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
        REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
        REACT_APP_FIREBASE_APP_ID=your_app_id
        ```
    -   Enable the Firebase AI API (`firebasevertexai.googleapis.com`) in your Firebase project console.

4.  **Run the application:**
    ```sh
    npm start
    # or
    yarn start
    ```
    The application should now be running on `http://localhost:3000` (or another port depending on your setup).

## 🖼️ Screenshots

*(Add screenshots of your application here to give users a preview!)*

<!-- 
!Screenshot 1
!Screenshot 2
-->

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the `LICENSE` file for details.