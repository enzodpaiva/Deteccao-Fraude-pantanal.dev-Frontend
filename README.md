<div style="display: flex; align-items: center;">
  <img src="public/data_wizard_logo.png" alt="Data Wizard Logo" width="100" height="100" align="left">
  <h1>Data Wizard - Front-end</h1>
</div>

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT"/>
  <img alt="GitHub" src="https://img.shields.io/static/v1?label=GitHub&message=deploy&color=blue&style=for-the-badge&logo=github"/>
  <img alt="Docker" src="https://img.shields.io/static/v1?label=Docker&message=container&color=blue&style=for-the-badge&logo=docker"/>
  <img alt="ECMAScript" src="https://img.shields.io/static/v1?label=ECMAScript&message=ES12&color=yellow&style=for-the-badge&logo=javascript"/>
  <img src="http://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge"/>
  <img src="http://img.shields.io/static/v1?label=TESTES&message=%3E100&color=GREEN&style=for-the-badge"/>
   <img src="http://img.shields.io/static/v1?label=VERSAO&message=1.0.0&color=GREEN&style=for-the-badge"/>
</p>


### Topics 

:small_blue_diamond: [Project Description](#project-description)

:small_blue_diamond: [Features](#features)

:small_blue_diamond: [Application Deployment](#application-deployment-dash)

:small_blue_diamond: [Prerequisites](#prerequisites)

:small_blue_diamond: [How to Run the Application](#how-to-run-the-application-arrow_forward)

## Project Description

The project aims at fraud detection and aims to identify unusual activities or patterns (uncommon ones). For example, signature forgery on checks, credit card cloning, money laundering, deliberate bankruptcy declarations, etc.

This front-end application serves as the user interface for the fraud detection project, providing a user-friendly experience for users to view and interact with the results. It displays graphs and allows parameter visualization from different aspects, assisting in the identification of suspicious activities. It also offers real-time notifications for quick and secure reactions, enabling informed judgments.

## Features

- :heavy_check_mark: Real-time graphical visualization of transactions.
- :heavy_check_mark: Avoided loss count.
- :heavy_check_mark: Allows the operator to annotate new data for future AI training.
- :heavy_check_mark: User-customized graphical visualization of any transaction attribute using different data visualization methods (dots, histograms, etc).

## Application Layout or Deployment :dash:

<img src="dev-sec-ops-diagram.png" alt="dev-sec-ops-diagram"  align="center">

## Prerequisites

:warning: [Docker](https://docs.docker.com/engine/install/ubuntu/)

## How to Run the Application :arrow_forward:

##### In the terminal, clone the project:

```
git clone git@github.com:enzodpaiva/Deteccao-Fraude-pantanal.dev-Frontend.git
```
##### How to Create .env File from .env.example
```bash 
cp .env.example .env
```

##### Adding an API Key to .env as REACT_APP_API_TOKEN

##### To run the application using Docker:

```bash 
docker-compose up -d --build
```
##### To stop and remove a Docker container

```bash 
docker-compose down
``` 

## Use Cases
- Data visualization
- Fraud detection
- Advanced data visualization
![Loading GIF](gif-operation.gif)

## Languages, Dependencies, and Libraries Used :books:

- [React](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)
- [Docker](https://docs.docker.com/)
- [ES12](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Future Improvements We Aim to Implement

- :memo: Allow viewing reports of computed frauds.
- :memo: Provide the ability to search for past fraud occurrences.
- :memo: Implement authentication and access control to ensure user security.
- :memo: Add support for different types of data sources for fraud detection, such as social media feeds, additional financial transaction data, etc.
- :memo: Improve the user interface to make navigation more intuitive and user-friendly.
- :memo: Integrate the application with email or messaging notification services to alert users about suspicious activities.
- :memo: Implement a user feedback system to collect suggestions and continuously improve the application.
- :memo: Conduct rigorous performance testing to ensure the application can efficiently handle large volumes of data.
- :memo: Integrate the application with third-party systems, such as databases, to gather additional information for fraud analysis.

## Makers

| [<img src="https://github.com/enzodpaiva.png?size=460u=071f7791bb03f8e102d835bdb9c2f0d3d24e8a34&v=4" width=115><br><sub>Enzo Paiva</sub>](https://github.com/enzodpaiva) |  [<img src="https://github.com/AlexandreSh.png?size=460&u=071f7791bb03f8e102d835bdb9c2f0d3d24e8a34&v=4" width=115><br><sub>Alexandre Shimizu</sub>](https://github.com/AlexandreSh) |  [<img src="https://github.com/edu010101.png?size=460&u=071f7791bb03f8e102d835bdb9c2f0d3d24e8a34&v=4" width=115><br><sub>Eduardo Lopes</sub>](https://github.com/edu010101) | [<img src="https://github.com/TuskNinja.png?size=460&u=071f7791bb03f8e102d835bdb9c2f0d3d24e8a34&v=4" width=115><br><sub>Vitor Yuske</sub>](https://github.com/TuskNinja) |
| :---: | :---: | :---: | :---: |


## License 

The [MIT License]() (MIT)

Copyright :copyright: 2023 - Data Wizard - Front-end
