# Surf The West Country - Milestone Project 2#

![Image of Desktop View](https://github.com/inesnago/Surf-The-West-Country/blob/master/2%20(4).png)
![Image of Mobile Screen View](https://github.com/inesnago/Surf-The-West-Country/blob/master/IMG-7157.PNG)
## Overview ##

This project aims to provide information on surf spots for all-level surfers and non-surfers. 
It is primarly based on the beaches of the West Coast of France and the user can find information on surf level, break type, 
parking, beach access etc. 

## UX ##

Target audiences for this project include:

1. Surfers looking for information on new surf spots and to receive weekly notification on surf reports.
2. Tourists seeking information about beaches on the West Coast of France.

## Typography ## 

I choose 'Roboto' as the only font for this project because it allows texts and headings to be displayed in a clean and easy-to-read way. The main goal is to get information across in a minimalist display from which the user will be able to quickly read and identify key pieces of information. 

## Colour Scheme ## 

The colour palette ranges from tones of dark grey to blue in order to resemble different shades of the ocea in a neutal approach. 

- #263238 
- white
- #1e1e1e
- #3E4551

## Wireframes ##

I used both hand-drawing and wireframe.cc to sketch the layouts I had in mind. 
The main idea was to have Google Maps as the page's 'hero image' to provide visual sense of where each spot is located. 
The cards to be displayed in correlation to the map's north to south spots. 

https://wireframe.cc/6k04jO - desktop
https://wireframe.cc/9SIj1b - mobile

## Features ##

1. Map Section/Home Section
2. Add SurfSpot
3. Choose by Location
4. Cards 
5. Subscribe
6. Footer & Social Links
7. Mobile First Approach
6. Link to MagicSeaweed Website for further information on surf forecast - https://magicseaweed.com/


## Tech/Framework Used ##

1. Font Awesome Icons: Used to provide complementary visual information on each surf spot.
2. HTML5
3. CSS3
6. GitHub and GitPod: Used for version control and page hosting. 
7. Wireframe.cc: Used to create layout samples and initial ideas. 
8. JavaScript
9. jQuery
10. Google Fonts
11. Google Maps API: Map of the West Coast of France
12. EmailJS: used for client-side email communication 

## Testing ##

### Breakpoints ###

To ensure a mobile friendly approach, I have added media queries on major breakpoints:

- On screens > 1000px, the page flows horizontally; the menu and the card-style content are displayed inline.
- On screens < 1000px, the page flows vertically; the menu and card-style content are displayed in block.
- The map layout is kept in full-width mode in all screen sizes. 

I used GoogleDev Tools to test website breakpoints in mobile phones, tables and 4k desktops. 

Testing for breakpoints:

1. Open the Preview website on the browser (check 'Deploy Local' section below);
2. Right click > Inspect (Open GoogleDev Tools);
3. Select the smallest breakpoint, 320px;
4. Scroll up and down, check for overflow, text-align and element's position;
5. Repeat steps 3 and 4 at each major breakpoint;
6. If possible, launch the live website on your mobile phone.

### Add a Surf Spot/ Subscribe ###

Testing for contact form:

1. Click on 'Add a surfspot' or 'Subscribe';
2. Fill every field but, one on the contact form;
3. Click 'Submit'
4. The message 'Please fill in this field' should come up.
5. Repeat the steps above on a mobile and a tablet.

## How to Use? ##

- Once you have opened the main page, choose a location to explore more on the West Coast of France. 
- The coast runs from north to south and are divided into four main regions. Surfspots are consequently subdivided into each region. 
- Use the map to navigate your way from north to south of France's West Coast. Cards appear in accordance to their location; number 1 (northest) to number 12 (southest).
- Each information card displays icons with extra information on water temperature, beach type, parking, off-shore wind and beach access. 
- The user can suggest other surf spots via the 'Add a Surfspot' button on the top right hand side of the page. 

## Deployment ##

Deploy in GitHub

1. Follow the link to access the GitHub repository for this project - https://github.com/inesnago/Surf-The-West-Country
2. Click 'Settings' on the main bar;
3. Scroll down to the GitHub Pages section;
4. Make sure 'master branch' is selected as the source;
5. Click on the link provided to access the published website.
6. Deploy locally

1. Follow the link to access the GitHub repository for this project - https://github.com/inesnago/Surf-The-West-Country
2. Click on the 'Gitpod' green button on the right hand side to open the project in Gitpod;
3. Once the project is open, click on Terminal > New Terminal;
4. Type python3 -m "http.server"
5. A message will pop up on the bottom right corner of the page. Click 'Open Browser';
6. To run Gitpod, make sure to add the Gitpod Browser Extension to your browser. You can find out more here: https://chrome.google.com/webstore/detail/gitpod-online-ide/dodmmooeoklaejobgleioelladacbeki

## Credits ##

- Google Maps JavaScript documentation - https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple#maps_infowindow_simple-javascript
- Simon Bingham - https://gist.github.com/simonbingham repository on adding multiple markers to Google Maps with JavaScript https://gist.github.com/simonbingham/2652757
- W3 Schools - How to make a Modal Box? https://www.w3schools.com/howto/howto_css_modals.asp - for 'Add SurfSpot' and 'Susbcribe' pop-up modals.
- MagicSeaWeed Website - https://magicseaweed.com/ for further information on the surf forecast of each surf spot.





