# Clear Space - Design Project

###### Mock website design based on example client desires

#### By **Travis Toal**

### Description

* _This project is an exercise in the design process, from defining the target users, to creating wireframes, to navigable prototypes, and finally to a coded, live site._

### Target Users

* _Potential coworkers can get a feeling of openness - both physical and mental - from the site, and can get information about how to join the workspace. Minimal text-blocks and stuff in your face. It feels high-end, but not exclusive._

* _The clients' personalities are reflected in the site - the company is not soulless, but warm, quirky, and connected to their Portland roots - definitely not your traditional corporation._

* _Non-technical folk will feel welcome and represented in the company, as opposed to a code-focused site._

* _Social clients can see the many modern amenities and luxuries the company has, and the group activities they would have access to if they join the space._

### User Personas / Stories

#### Derek
##### "As a modern professional, I want to feel like I'm in the forefront of the field."
###### Needs
* _Clean, polished site_
* _A company with high-tech amenities_

###### Pain Points
* _Companies that do not provide amenities to clients_
* _Clunky, busy sites_

###### How we can serve
* _Make it 'cool,' minimalistic and soft._
* _Showcase the many technologies the space contains._

#### Sharon
##### "I don't want to lose sight of *who I am* when I go to work."
###### Needs
* _A space to work_
* _Freedom of expression_
* _Feeling of community_

###### Pain Points
* _Companies where all employees feel the same - no diversity in personality or in background_
* _Workplaces that don't offer any recreational activities to break up the monotony of the day_
* _Boxy, confined areas_

###### How we can serve
* _Showcase the welcoming and adaptable spirit of the space._
* _Display how the company differs from the monocultured giants in the field._
* _Show the weekly activities._
* _Show the wide, open spaces in the office_

#### Carol
##### "As a businessperson, I don't want to feel alienated from the tech crowd."
###### Needs
* _A local workplace_
* _A feeling of representation_

###### Pain Points
* _Over-technical sites and jargon_

###### How we can serve
* _Cater the site to a wide crowd, not to any one occupation._

### Process
* _Similar sites include WeWork, Techspace, Regus, Proximity, CO+HOOTS, Workbar, Nextspace, Bond Collective, and NGIN Workplace._

* _Techspace, Regus and Nextspace are examples of the things I *don't* want in my project -- busy, word-heavy, claustrophobic sites that drive me away._

* _My three biggest inspirations out of these similar companies are the Bond Collective, CO+HOOTS, and Workbar, for their minimalistic content, aesthetic style, and user experience, respectively._

* _I want to incorporate Bond Collective's stylistic choices into my product. They let their product speak for itself -- not a wall of text, but simple pictures and icons for the most part, a sleek, modern site with a lot of breathing room, which gives off the right vibes for the comfortable, casual environment of Clear Space._

* _A complaint I have with most *all* of these sites is the fact that they try to shove everything into the landing page, forcing the user to scroll excessively to find the information they want. In my design, I want to keep the page feeling light and concise. A small header, a picture showcasing the area with minimal text, and tabs to the contact, amenities, location, and subscription pages. No need to scroll, even on the smallest screens, and the layout to the whole site is presented to the user, without being overly busy._

## Sketches

#### Landing Page Views

* _Mobile_

![Landing Page](src/assets/img/landing.png)
* _Tablet_

![Landing Page](src/assets/img/main-tablet.png)
* _Desktop_

![Landing Page](src/assets/img/main-desktop.png)

#### Other Pages

* _Contact Page_

![Contact Us](src/assets/img/contact.png)
* _Amenities Page_

![Amenities](src/assets/img/amenities.png)
* _Location Page_

![Location](src/assets/img/location.png)
* _Join Page_

![Join Us](src/assets/img/join.png)

## Result

#### Main Page Views

* _Main - Mobile_

![mobile main](src/assets/img/main-mobile-sketch.png)

* _Main - Tablet_

![tablet main](src/assets/img/main-tablet-sketch.png)
* _Main - Computer_

![computer main](src/assets/img/main-computer-sketch.png)

#### Other pages

* _Contact Us - Mobile_

![contact](src/assets/img/contact-sketch.png)
* _Amenities - Mobile_

![amenities](src/assets/img/amenities-sketch.png)
* _Locations - Mobile_

![locations](src/assets/img/location-sketch.png)
* _Join Us - Mobile_

![join us](src/assets/img/join-sketch.png)

## Technologies Used

* _Sketch, v50.2_

* _Node Package Manager_

* _Sass_

* _jQuery_

* _And the following dependencies:_
  * _clean-webpack-plugin v0.1.18_
  * _css-loader v2.1.0_
  * _file-loader v1.1.6_
  * _html-srcsets-loader v0.5.1_
  * _html-webpack-plugin v3.2.0_
  * _node-sass v4.9.3_
  * _sass-loader v7.1.0_
  * _style-loader v0.20.2_
  * _uglifyjs-webpack-plugin v1.2.2_
  * _webpack v4.0.1_
  * _webpack-cli v2.0.9_
  * _webpack-dev-server v^3.1.0_

### Setup / Installation Requirements

* _Clone this directory to your machine's desktop_

* _In your terminal, at the project's top level, run the command:_

  _npm install_

* _If no errors occur, run the command:_

  _npm run start_

* _If errors occur, instead of 'npm run start', run the following line:_

  _npm run build; webpack-dev-server --open --mode development_

* _To view the mock-up site plan, open clearspace.sketch in Sketch, version 50.2_

### Known Bugs

* _The project fails to compile on my machine upon running 'npm run start', which should run the line 'npm run build; webpack-dev-server --open --mode development', claiming that 'build' is undefined. However, my machine perfectly compiles the 'npm run build' command and the 'webpack-dev-server --open --mode development' commands when run on their own, so I'm not sure where this problem traces back to. It might just be my machine, but please contact me if you have a fix or if you encounter any additional bugs._

#### General Issues

* _How do you import fonts into a node module / webpack bundle? Heck if I know. If you can give some advice on that, it'd be much appreciated. I spent a GOOD amount of time downloading different font loaders / managers, looking through *SO* for different workarounds and 'easy fixes', but gave up eventually. Mediocre font it is! Seriously though, please contact me if you know any good ways to import .otf files, because I sure don't._  

### Support and Contact Details

* _You can reach the developer by [email](mailto:travisty12@gmail.com), or view additional work through [github](https://www.github.com/travisty12/)_

#### License
* _This software is licensed under the MIT license_

Copyright (c) 2019 **Travis Toal**
