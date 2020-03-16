# portfolio
# Project Overview

## Project Schedule


|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | COMPLETE
|Day 1| Wireframes / Priority Matrix / Timeline | COMPLETE
|Day 3| Core Application Structure (HTML, CSS, etc.) | COMPLETE
|Day 4| MVP & Bug Fixes | COMPLETE
|Day 5| Final Touches | COMPLETE
|Day 6| Present | COMPLETE (3/16)


## Project Description

My final project will be a static site portfolio for a professional audience -- i.e., highlighting developer / career / skills, but also including links to my art projects and radio show. The appearance will be modern, sleek and minimal, but with fun and rainbow flair to add excitement. The design will be mobile first. It will mostly be one page with anchors in various points and parralax scrolling. I'll use designs I create myself as the backgrounds, or edited photos -- TBD.

Inspiration:
inspiration
* [particles js](https://www.lianapenn.com/)
* [rainbow effect text](https://meowni.ca/about/)
* [sophisticated / minimal style](http://eloise-ress-barrow.surge.sh/)

## Google Sheet

my [google sheet](https://docs.google.com/spreadsheets/d/16XjkVywfKrr5xFVnmsXPG6RyjTjue2VBurZf7dwCDUc/edit#gid=0)

## Wireframes

[wireframe 1](https://res.cloudinary.com/mzprizm/image/upload/v1583708579/Screen_Shot_2020-03-08_at_4.01.33_PM_ew4x8o.png)

[wireframe 2](https://res.cloudinary.com/mzprizm/image/upload/v1583708579/Screen_Shot_2020-03-08_at_4.01.36_PM_zufgkm.png)

[wireframe 3](https://res.cloudinary.com/mzprizm/image/upload/v1583708579/Screen_Shot_2020-03-08_at_4.01.42_PM_nb22r9.png)

[wireframe 2.1](https://res.cloudinary.com/mzprizm/image/upload/v1584362539/Screen_Shot_2020-03-16_at_5.41.03_AM_of8mxn.png)

[wireframe 2.2](https://res.cloudinary.com/mzprizm/image/upload/v1584362539/Screen_Shot_2020-03-16_at_5.41.07_AM_ltju4k.png)


## Time/Priority Matrix 

time/priority matrix [here](https://res.cloudinary.com/mzprizm/image/upload/v1583777050/time-priority-matrix_ampw7n.jpg)

### MVP
MVP
- homepage w/ sections and anchors
- pull data using google json api
- troubleshoot homepage, api
- copy on website page (About Me, skills list, etc.)
- (prepare presentation)
- implement responsivity
- implement nav

#### PostMVP 
- fonts
- social media links and icons (linkedin, fb, twitter minimum)
- signup button
- contact me form
- editing codepens more
- favicon
- parallax scrolling
- highlight recent episode of radio shows
- ecommerce embedded
- cool designs with code (particles or other animation)

## Functional Components
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 1hrs| 1hrs | 1hrs |
| Adding Grid | H | 1hrs| 1hrs | 1hrs |
| buttons| H | 1hrs| 1hrs | 1hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| Homepage | H | 3hrs| 3hrs | 3hrs |
| Working with Git | H | 1hrs| 1hrs | 1hrs |
| Wireframes | H | 3hrs| 5hrs | 5hrs |
| Working with API | H | 3hrs| 2.5hrs | 2.5hrs |
| debug/present | H | 2hrs| 2hrs | 2.5hrs |
| planning/research | H | 2hrs| 5hrs | 5hrs |
| images | H | .5hrs| .5hrs | 1hrs |
| social meda | H | .5hrs| .5hrs | 1hrs |
| Total | H | 25hrs| 5hrs | 30hrs |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 - jquery
 - font awesome icons

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  
most proud of overall API! I had a lot of trouble with the for loops at first, so I am proud to be able to utilize them with ease now. Also, the string it returns to create each card was fun to work on and design/arrange. 
```
/* API */
let id = '16XjkVywfKrr5xFVnmsXPG6RyjTjue2VBurZf7dwCDUc'

let source = `https://spreadsheets.google.com/feeds/list/16XjkVywfKrr5xFVnmsXPG6RyjTjue2VBurZf7dwCDUc/od6/public/values?alt=json`

...
  for (let i = 0; i < projects.length; i++) {
              let $card = 
              `<div class="card"> ...
```

## Issues and Resolutions
I kept getting errors that the top was undefined as I tried to implement something that would highlight the active link. Ultimately, I scrapped this as it was post-MVP anyways. I ended up keeping it really simple and building slow, using console log a lot to check my work along the way and avoid too many errors. 
Next time, I'll track my errors along the way more carefully. I can also write more pseudocode out.

#### SAMPLE.....
**ERROR**: app.js: top undefined                                
**RESOLUTION**: eliminated feature
