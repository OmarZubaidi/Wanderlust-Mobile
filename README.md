# Wanderlust Mobile App

<div align='center'>
  <img
    height='150'
    src='./Logo.png'
    alt='Logo'
  />
</div>

<p align='center'>
  A companion app for the <a href='https://github.com/OmarZubaidi/Wanderlust'>
    Wanderlust
  </a> project.
</p>

<hr>

<details>
  <summary>Table of Contents</summary>
  <ul>
    <li>
      <a href='#about-the-project'>
        About the Project
      </a>
      <ul>
        <li>
          <a href='#built-with'>
            Built With
          </a>
        </li>
      </ul>
    </li>
    <li>
      <a href='#getting-started'>
        Getting Started
      </a>
      <ul>
        <li>
          <a href='#prerequisites'>
            Prerequisites
          </a>
        </li>
        <li>
          <a href='#installation'>
            Installation
          </a>
        </li>
      </ul>
    </li>
    <li>
      <a href='#contributing'>
        Contributing
      </a>
    </li>
    <li>
      <a href='#contact'>
        Contact
      </a>
    </li>
    <li>
      <a href='#acknowledgements'>
        Acknowledgements
      </a>
    </li>
  </ul>
</details>

## About the Project

When it's time to travel, the companion app is your best friend. You'll have access to the calendar of the itinerary as well as a map showing all the locations. You'll also be able to see all flights and hotels you've booked. If you select something coming up in the calendar, it will give you directions to it.

### Built With

- [React Native](http://reactnative.dev/)
- [Expo](https://expo.dev/)

## Getting Started

To get a local copy up and running, follow these steps.

### Prerequisites

You need to have:

- An [Auth0](https://auth0.com/) account, with a Native application.
- A [Google Maps](https://console.cloud.google.com/project/_/google/maps-apis/credentials) account, with a Directions API key.
- Installed Node Version Manager
- Installed the latest LTS version of Node

```shell
nvm install npm@lts -g
```

### Installation

- Clone the repo

```shell
git clone https://github.com/OmarZubaidi/Wanderlust-Mobile.git
```

- Install NPM packages

```shell
npm i
```

- Create your `env.ts` file in the `config` folder as below.

```
const ENV = {
  apiUrl: 'YOUR_BACK_END_URL',
  googleClientId: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
  googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
};

export default ENV;
```

- Run the app using

```
npm start
```

## Contributing

Contributions are welcome!

If you have a suggestion that would make this better:

- [Fork the project](https://github.com/OmarZubaidi/Wanderlust-Mobile/fork).
- Create a branch using `git checkout -b feat-YOUR_FEATURE_NAME`.
- Work on it and commit changes using `npx cz` (you'll get an interactive prompt for the commit message).
- Push to your branch using `git push origin feat-YOUR_FEATURE_NAME`.
- [Open a pull request](https://github.com/OmarZubaidi/Wanderlust-Mobile/compare).

## Contact

Creators: [Daniele Capano](https://github.com/daniele24134/), [Gabriele Zannini](https://github.com/CosmicZanna/), [Omar Zubaidi](https://github.com/OmarZubaidi/), and [Stefan Feldner](https://github.com/stefanfeldner/).

Project Link: [on GitHub](https://github.com/OmarZubaidi/Wanderlust/).

## Acknowledgements

- [Auth0](https://auth0.com/)
- [Google Maps](https://developers.google.com/maps/)
