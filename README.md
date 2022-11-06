

## Inspiration


Our project was inspired by the closely approaching reality of space travel! This new form of transportation, although not yet practiced, is something that many consumer question on what this may look like for the free market and the average consumer.  Another driving force for our team was the drive to learn something new. Many of us have little to no experience with web design, and one member has very little coding experience at all. By pursuing an ambitious project, we can aim for the moon, and if we miss, we will at least be among the stars. 


## What it does


We plan to provide a platform that would allow consumers to book expeditions to space. These expeditions currently include an expedition to the Moon and expeditions to Mars, but would also include ventures of a simple orbit around Earth. Our website allows users to navigate the globe to see potential spaceports that they could launch from and realistic dates that we could launch (if we had the technology and infrastructure for it). It also provides realistic costs for expeditions, time frames for travel (one-way trips), and considerations for costs of food. These costs may not be attractive currently, but with awareness and continual interest and investments made to space travel prices will decrease due to the ability to afford innovations. There are some additional feature that are not entirely integrated due to the lack of resources in our team. For instance, we simulate what having booking would be like despite and signing in to an Eclipse Intragalactic account, but due to the lack of a proper database integrated, we were unable to provide actual functionalities.


## How we built it


Our group started by using Microsoft Teams to help coordinate, document, and share files between each other so that we all had access immediately to any necessary links or files. We built our website using **yarn** to compile our code written in **react js**, **css** and **html**. Using Visual Studio Code, we utilized LiveShare so that we could simultaneously make changes in real time. In addition, we developed our graphics using **Adobe Express**, and we utilized several libraries/packages to help integrate features. For instance, our globe was developed using **react-globe.gl** which allowed for the ease of using functions rather than reinventing the "sphere" with custom code. We also found some inspiration from a portfolio designed in the form of a website: [soumyajit4419](https://github.com/soumyajit4419/Portfolio). This website became a great resource for our team as we referenced this when we struggled to get portions of our own website to work speeding up our progression greatly. Other resources came from research for the reality of our project. These consisted of knowing Synodic Periods and calculating estimates of launch dates for future expeditions based on the close approach of planets. They also helped us form estimations for calculating pricing for our consumers.


## Challenges we ran into


Our first challenge was getting our website up and running using _yarn_. While two of our members worked, our other two got to work finding solutions to how we could integrate our ideas into our platform. We later ran into many different issues with getting proper layouts using **css**. This took much troubleshooting and discovered that some components of our code were oddly effecting each other through the use of their paddings. Later we had many issues finding a globe that was both suitable for our ideas and functional. Despite having several threads about using the variety of globe libraries, we struggled to get our globe to properly operate in similar fashions due to our methods of rendering and the data structures we were utilizing. We soon realized how we could fashion our rendering to be usable, and in addition, we realized our faults in how we were packing the data in their data structure. Among other issues, we attempted to use firebase to help integrate a proper database for all of our data into one secure platform. With limited understanding and time, we had to set this idea on the back burner and shift our focus to the main functionalities of our project.


## Accomplishments that we're proud of


One of our proudest parts of our project is the implementation of an interactive globe that is also non-intrusive to the rest of the website. All of us came in thinking that our idea was great, but lacked confidence in our capabilities to make something to display the potential of what it could be. At the end of this project, all four members were overly impressed with the accomplishments we were able to make in such a short time frame.


## What we learned


Our knowledge on web development was heavily expanded upon during this hackathon. This aided in plenty of front-end design and styling, on top of some back-end use cases. Combining 3D models onto a website also proved to be difficult, but we were able to successfully display that. And while it was tedious, we even expanded upon the original design, learning how to implement extra points onto the 3D model and to add locations of spaceports. We even developed back-end ideas but not to their full extent. This includes most of Google firebase, including their authentication and database services. While we didn't have enough time to optimize those features, we still learned a variety of designing skills, implementation of difficult data and models, and extra niche features.


## What's next for Eclipse Intragalactic


There are a handful of extra projects that we are ambitious about, but unfortunately did not have the sufficient resources to implement. As previously stated, the inclusion of some Google firebase services, such as the authentication/login feature, and the database for tickets and extra user data, is on our roadmap. With those ideas in mind, adding a fully-functional checkout process is also a great addition to the website. We would also like to carry over values from the home page to the checkout. So if you were to click on a particular date to travel, the checkout page would have that part of the info filled out for you. Overall, the majority of the future tasks are all possible with our team, and would improve the project greatly.
 
 
 ## Try it out
 
 - Via Powershell navigate to the "new" directory
 - Run 'yarn install'
 - Once it completes, run 'yarn start'.
