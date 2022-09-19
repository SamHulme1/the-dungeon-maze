# The Dungeon Maze
To see the live version of the site click [here!](https://samhulme1.github.io/the-dungeon-maze/)

![mockup-image](./readme-img/dungeon-maze-mockup.png)

---
## Contents

### [UX](#ux)
### [User Requirements and Expectations](#user-requirements-and-expectations-1) 
### [Developer goals](#developer-goals-1) 
### [User Stories/scenarios](#user-storiesscenarios-1)
### [Design Choices](#design-choices-1) 
### [Wireframes](#wireframes-1)
### [Features](#features-1)
### [Technologies Used](#technologies-used-1)
### [Depolyment](#deployment) 
### [Testing](#testing-1) 
### [Bugs](#bugs-1)
### [Credits](#credits-1)
---
## UX:

### Project goals: 
- To create a fun interact game based upon classic board game mechanics
- To expermiment with Javascript 

---
### Target Auidence: 
- The website is targeted at people of all ages who enjoy playing games
- Users who enjoy the classic fantasy genre

---
### Target Audience goals: 
- To be able to clearly navigate around the site and access the right information the need to play the game
- To be able to interact with the website and play the game
---
## User Requirements and Expectations 
The website feature both visual and written content with interactive elements. Feedback will be give to the user whenever they make a decision and there will be clear descriptions of how to play the game. The web content will be structured into different webpages that display appropriate information to the user. There will be social links in the footer for the user to visit. 

The dungeon maze is a great website for this as it give good feedback to the user through the use of alerts on larger screens and outputting text into a div to display alerts users on smaller screens where alerts are disabled. The webpages contents follow a nice structured flow. Creating a nice pathways for the users to follow.

---
## Developer goals: 

- To create a fun and engaging site for users to visit
- To experiment with JavaScript and create an interactive front end project
- To build on and develop a better understaing of javascript

---
## User Stories: 

### First-Time users:

- As a first time user I want to be able to interact with the website and play the game
- I need to be able to find the information I need to play the game easily
- I want to know how my decisions impact the game
- When I play the game i want the game information both written and visual displayed to me in an easy to follow format
- I need to be able to reset the game when I need to

### Returning users:

- I want to be able to replay the game
- I want to be able to beat my old score

## Design Choices 

---
### Colors: 
I used this colour palette on the site. The colors from this pallete came from the images I generated. I also used colour which I thought contrasted well with the other colours such as whites and blacks. 

---
### Fonts:
 
I used the google font Press Start 2P across the website. I decided to use this font for both the titles and 
then other text to keep consistency and because it built upon the retro style that I wanted to create. Another reason was that the font was easily readable in smaller sizes. 
---
### Imagery: 
The images for the website were created using an online ai art generation tool. I then used another tool to pixalate them. I chose to use the image title dungeon maze title image because it was the most unique image that I generated. Injecting a unique fantasy feeling to the site to try and get an get an emotional response from the user when they first land on the site. The emotion I wanted to capture was nustalia. The other images that are on the site in the generated image section were created using the same approch as the hero image. I matched the images to the text descriptions to create a nice flow of written and visual information and so that the images displayed made sense visually as to what the text was descibing. I took quite a loose approch to this on some of the image. However, this was to create a retro/unique feeling and because of what the ai art genertor created. 
---
### Styling: 
All the containers on the site are set to be fluid so that they cover the screen size. Which creates a more modern look than other retro games, were the game is in a normal container. The area behind the images was set to black to emulate a small screen. The information given to the user in all areas follows the format of image then written information so that the image is the first piece of information the user sees. On smaller screens an output area was created in order for the user to be given feedback from the game. Javascript alerts replace this on larger screens. The buttons are colour cordinated so that the user can see which buttons can be pressed at different stages of the game. The how to play modal is styled to contrast with the rest of game. Finally the images and text areas use a fade animation to try and emulate the effect older stlye games used to have when they loaded.
---
## WireFrames: 

![wireframes]()
---
## Features: 

### Current Features:
### Navbar 
![navbar](../the-dungeon-maze/img/readme-img/dungeon-maze-navbar.jpg)
- The navbar includes the links to all the different pages on the site and a logo which links to the home page
- On smaller screens the navbar collapses behind a burger icon making it responsive across screen sizes
- The navbar has a modal built into the how to play link which gives users accurate descriptions of how to play the game without having to leave the page they're on. 
- The navbar for this site is not fixed to the top of the page to save screen space and because the site doesn't have much vertical content
### Footer 
![footer](../the-dungeon-maze/img/readme-img/dungeon-maze-footer.png)
- The footer includes links to external sources in particluar social media links that all open on seperate web tabs
- The footer is responsive across all screen sizes 
### Hero Image
![hero-image](../the-dungeon-maze/img/readme-img/dungeon-maze-hero-img.png)
- creates an emotional resonsive of wonder and nostalgia when the user first lands on the site because of the nature of the image and the retro stlying 
- Is responsive across all devices
### User Form 
![user-form](../the-dungeon-maze/img/readme-img/dungeon-maze-form-input.jpg)
- The form element on the site allows the user to access the game page through interacting with the input and submitting their name
- Uses local storage to validate input information and store the users name. This later results in the user recieving an alert message when they enter the game. 
- The form is responsve accross all device sizes
### Reset Button
![reset-button](../the-dungeon-maze/img/readme-img/dungeon-maze-reset-button.jpg)
- The reset button resets all the game areas and game js ready for the user to start over
- Is responsive across all device sizes 
### Small screen text output area and alerts 
![small-screen-output-and-health-inventory-areas](../the-dungeon-maze/img/readme-img/dungeon-maze-smallscreen-and-health-inventory-areas.jpg)
- The small screen text output area works as a way of dispalying alerts to users who are on smaller devices or using browsers where alert messages are not supported 
- The alerts give feedback to the user based on their actions and decisions in the game
- On larger screens the small screen output is hidden. 
### Health areas and inventory area
- The health and inventory areas allow the user to see their status in the game. How many hearts they have left, how many the monster has and which items they have in their inventory. 
- The health and inventory areas are resonsive across all devices

### Gameplay buttons 
![gameplay-controlbar-buttons](../the-dungeon-maze/img/readme-img/dungeon-maze-controlbar.jpg)
- The gameplay buttons allow the user to interact and progress in the game. The have the option of moving to the next room, drinking a potion to heal their hit points back up and attacking/blocking. 
- The buttons are colour coded to show the user which actions they can take at a certain time. For example when they go to a new room. They have to fight and beat the monster in order to progress. 

### Game image output area 
![game-image-output-area](../the-dungeon-maze/img/readme-img/dungeon-maze-img-output.jpg)
- Outputs an image to the user that is generated and assigned with the matching output text giving them a visual decription of what's happening in the game
- When the images are generated the alt attributes are also changed for good practice and also to give an alternative discription to visually impared users
- The images are responsive across all device sizes
- Changes to reflect if they die or or when they lose the game
### Game text output area
![game-text-output-area](../the-dungeon-maze/img/readme-img/dungeon-maze-text-output.png)
- Outputs text to the user giving them descriptions of whats happening in the game 
- Changes to reflect if they die or or when they lose the game
- Tells the user their score and rank at the end of the game 
---
### Future Features:
- Due to the time restraint I had to remove the scoreboard page from the site. However, this will be fixed in the future 
- Id like to add different classes for the user to select. Different classes will do more damage and have differnet abilities and vunerablitites. Such as a wizard that can do 2 damage on attacking but only has 3 life 
- Id like to add a shop so that the users can purchace upgrades for their character such as better weapons and more life 
### Naming Conventions and Structure of Files 
- All the files on the site have been named with consistency and structured into their appropriate sections 
- Names contain lowercase and no special characters 
- Javascript variables follow the format of camelsCase
- Images have been organise into different sections, the first image folder contains all the images used on the site and the nested folder contains all the images used on the readme 
- Seperate Javascript files have been created for the different webpages, constant variables have been structured into a seperate const.js file 

## Technologies used: 

### Languages: 
1. [HTML5](https://www.w3schools.com/html/default.asp) To create the structure and the content of the website
2. [CSS3](https://www.w3schools.com/css/) To create the style for the website and its content
3. [JAVASCRIPT](https://www.w3schools.com/js/)To create the functionality for the website 
---
### Tools and libraries:
1. [Gitpod](https://www.gitpod.io/) To create and code the site
2. [Github](https://github.com/) To host, deploy and store the site
3. [Balsamiq]() To create the wireframes for the site
4. [Bootstrap]() Used to create site reponsivness across different screen sizes
5. [Tinypng]() To compress images for better page load times 
6. [Google Fonts]() To import fonts to the site
7. [Grammarly]() To correct spelling, punctuation and grammar
8. [Font Awesome]() To create the icons used on the site in the navbar, modal, buttons and footer
9. [Adobe Colourwheel]() To create the colour scheme for the website
10. [Jigsaw]() To validate CSS
11. [nu Html Checker]() To validate HTML 
12. [JigSaw]() To validate CSS
13. [Jshint](https://jshint.com/) To validate Javascript 
14. [NightCafe](https://nightcafe.studio/) To created the images used on the site

---
## Deployment

### This site is deployed in Github pages. These steps were taken on deployment
1. Login and locate the repository titled [the dungeon maze](https://github.com/SamHulme1/the-dungeon-maze).
2. Locate the settings at the top of the repository menu. Make sure not to click the settings at the top of the page
3. Scroll down the page, to the left you should be able to see pages under Code and Automation click pages
4. Change the source branch from none to main using the dropdown menu
5. Doing this will refresh the page, scroll back down and locate the link to the active page. Click the link to see the deployed site!

### This site was developed using Git. Here is the development lifecycle:
1. I created a new repository from using Code Institutes template
2. In the terminal, I typed git init to initialise
3. I created all the files and folders for the project
4. I used the command git add . in the terminal to add the files to the repository
5. I enter git commit and wrote a commit message in "" 
6. For each change that I made I used the git add . and commit commands
7. I used git push to push the changes in Git to Github

## Testing 

### Testing User's Stories 
#### First Time User
As a first time user, the first time I land on the site I can gain an understanding of what the website is about, I can easily navigate around the website easily and use the site on all my devices. I can play the game eaily and see how the website gives me feedback based on my input. I can do all this by: 
- Reading the description on the landing page of how to play the game 
- If i'm unsure on the controls I can visit the how to play section in the navbar
- Reading the alerts that the game gives to me when I enter my name and when I make desisions in the game on larger screens and reading the information given to me in the small screen output section
- I can see at which stage of the game i'm in and which buttons I need to press during the game through the use of colour coded buttons and the output images and text displayed to me 
- I can track my session progress when im playing the game by checking which items I have in my inventory and how much health I have left. I can also see how much heath my opponant has
- I can reset my progress if I need to 

#### Returning User
As a returning user my main focus is to replay the game and try and beat my old highscore I can do this by:
- Re entering the website and replaying the game 
- Seeing my highscore displayed to them when they first play the game and coming back onto the site to beat it(the score is displayed to the user when they beat the game or die. Future versions of the game will include a scoreboard to display the data or all users who play the game)
---
### Developer goals have been met by: 
- I have creating an interactive and engaging front end website for users and to put in my portfolio
- Developing this site has allowed me to develop a much better understanding of Javascript through experimenting and trial and error
---
### Site responsiveness and compatibility 
The site has been tested for responsiveness on the following devices using Google Developer tools:
- Blackberry Z30
- Blackberry PlayBook
- Galaxy Note 3
- Galaxy Note 2
- Galaxy S3 
- Galaxy S8
- Galaxy S9 Plus
- Galaxy Tab S4 
- Galaxy S20 Ultra
- Galaxy Fold
- Galaxy A51
- Kindle Fire HDX
- LG Optimus L70
- Microsoft Lumia 550
- Microsoft Lumia 950
- Moto G4 
- Nexus 10, 4, 5, 5X, 6, 6P, 7, 
- Nokia Lumia 520
- Nokia N9
- Pixel 3, 4, 3 XL, 5
- Ipad mini, Ipad, Ipad Pro
- iPhone 4, SE, XR, 12 Pro
- JioPhone 2
- Ipad air, mini
- Surface Pro 7, Duo
- Nest Hub, Hub Max
- iPhone 5, SE, 6, 7, 8, X
Bootstrap as well as media queries were used to achieve responsiveness
---
#### LightHouse 

---
### Online validators 
The final validator results can be seen here:

#### Javascript Validation
![js-validation-const-game](../the-dungeon-maze/img/readme-img/js-val-const-game.jpg)
![js-validation-index](../the-dungeon-maze/img/readme-img/js-val-index.jpg)

#### CSS Validation
![css-validation](../the-dungeon-maze/img/readme-img/css-validation.jpg)

#### HTML Validation
![html-validation-index](../the-dungeon-maze/img/readme-img/js-val-index.jpg)
![html-validation-game-start](../the-dungeon-maze/img/readme-img/js-val-index.jpg)
---
### Manual Tests run on site
1. Do all the navigation elements work on the site?
    -Result: All the navigation element work as intended 
2. Do all the buttons work on the site?
    -Result: All of the buttons work as intended
3. Does the website give the correct feedback?
    -Result: The website gives the correct feedback to the user through alerts and the small screen feedback screen. The buttons and game areas dsplay different colours to reflect stages of the game and the text and images change. The code works as intended
4. What happens when I drink a potion?
    -Result: The health array is passed more hearts and the user gains more hearts in the html. The code works as intended
5. What happens when I beat the game? 
    -Result: I'm given the endgame screen with the correct text and image content. The score and rank is displayed to me. The code works as intended.
6. What happens when I lose the game?
    -Result: I'm given the death screen with the correct text and image content. The score and rank is displayed to me. The code works as intended.
7. What happens when I attack? 
    -Result: I can damage or be damaged by the moster.Code works as expected
8. What happens when I block?
    Result: I can block or be damaged by the moster.Code works as expected
9. What happens when I drink a potion?
    -Result: My health increases back to maximum. Code works as intended
10. Can I have more than one potion in my inventory?
    -Old result: All my potions were removed from my inventory. New result: I can have multiple potions in my inventory at the same time. Code now works as intended. I can still drink a potion when i'm at max health but this was intended.
11. Do all the external links open in seperate tabs?
    -result: All the links open in seperate tabs as intended
12. Does the input work on the idex page?
    -result: The input works as intended 
---
### Unit Testing


---
### Browser testing 
The site has been tested on Chrome, Firefox, Safari and Microsoft Edge
## Bugs 
Here are some of the bugs that I've found and fixed throughout development: 



### Bugs Left in Code:
- Sometimes the score doesn't map correctly for certain items inparticlar the gold coins.
- In chrome the website gives a violation warning when clicking the attack and block buttons because of the length of the code. I've left this in because its not an error but I wanted to mention it and so that I can refer back to this in the future 
## Credits 

### Code
- Bootstrap 4 was used throughout development to make the site responsive, I used this for layout and used some of Bootstraps classes
- I used code from this source to fix a bug with my footer not sticking to the bottom of the webpage https://www.freecodecamp.org/news/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c/
- I used an animation from this source in my code to create the fade effects on the text and images https://medium.com/cloud-native-the-gathering/how-to-use-css-to-fade-in-and-fade-out-html-text-and-pictures-f45c11364f08

### Content 
- All written content for the site came from me the developer
### Media 
- The images for the site were created using an online AI image generator [NightCafe](https://nightcafe.studio/)
- The favicon was created using [Favicon Io](https://favicon.io/favicon-converter/)
### Acknowledgements 
- My mentor for the amazing help and support 
- Other students on slack for their support 
- Code Institute for the helpful materials and support
- W3C for their library of informations when I needed to a refresher on content I'd learnt about during the course