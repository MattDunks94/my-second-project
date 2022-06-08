# Day Planner

<a href="https://mattdunks94.github.io/my-second-project/">Day Planner</a> is an application that demonstrates basic use of Javascript. The app is targeted for people who like to plan and organise their day ahead.
The app is a fully responsive site on most devices and allows users to add, edit times and remove activites/events from their day planner.

<img src="/assets/images/readme-images/responsive-design.png">

## Features

### Adding Activities:
<ul>
  <li>The Day Planner has an add activity feature. This is where the user can type in a daily activity into the input type and either click on the 'Add Activity' button or press the 'Enter' key.</li>
</ul>

<img src= "/assets/images/readme-images/button.png">

### Set Activity Start Time:
<ul>
  <li>The 'set start time' feature enables the user to set the start time of an activity. The user can do this by clicking on the input type itself (time input) and select desired time or type in start time.</li>
</ul>

### Removing Activities:
<ul>
  <li>The remove activity feature is self explanatory. The user can remove activities by clicking on the 'X', which is located beside the activity entered. This element also has a hover effect. When hovering over the 'X' it turns red. This indicates to the user that it does something important.(see image below for the add, remove activity and set start time features)</li>
</ul>

Added activity with time and remove features:

<img src= "/assets/images/readme-images/added-activity.png">
Remove feature hover effect:

<img src= "/assets/images/readme-images/red-x.png">

## Existing Features:

### The Welcome Area:
<ul>
  <li>This section welcomes the user to the application and explains it's purpose.</li>
  <li>It includes the title of the application 'Day Planner' alongside a logo icon, and a small paragraph welcoming the user.</li>
  <li>It also contains the 'Start Planning!' button which leads to the 'day planner' area. This button has a hover effect. When hovering over the text, it changes color from white to darkturqoise (as seen in image below).</li>
</ul>

<img src= "/assets/images/readme-images/welcome-area.png">

### The Day Planner Area:
<ul>
  <li>This area is where the user creates their list of activities, using the features provided (input type, buttons).</li>
  <li>This section also includes a step-by-step guide (located at top of page), for the user, on how to use the application.</li>
</ul>

<img src= "/assets/images/readme-images/day-planner-area.png">

### Other Features:

### Site Icon:
<ul>
  <li>A site icon is added to the page tab. This makes it easier for the user to see what tab the 'Day Planner' is on.</li>
</ul>

<img src= "/assets/images/readme-images/site-icon.png">

### Features For The Future:
<ul>
  <li>Notes:</li>
  <ul>
      <li>Would've liked to have added a note feature, where the user can add notes to each activity.</li>
  </ul>
  <li>Checkbox:</li>
  <ul>
      <li>A checkbox feature would allow the user to tick off an activity that they've already carried out.</li>
  </ul>
  <li>Disable Add Button:</li>
  <ul>
    <li>When the text bar is empty the 'Add Activity' button is active and can add an empty item (as seen below). To fix this I would disable the 'Add Activity' button when the text bar is empty and make it active again when the user types in an activity.</li>
    <img src="/assets/images/readme-images/empty-div.png">
  </ul>
</ul>

## Testing:

### Validator Testing:
<ul>
  <li>HTML
    <ul>
      <li>No errors were returned when passing through the official <a href="https://validator.w3.org/nu/?doc=https%3A%2F%2Fmattdunks94.github.io%2Fmy-second-project%2F">W3C Validator</a>.
      <img src="/assets/images/readme-images/html-checker.png"></li>
    </ul>
  </li>
  <li>CSS
    <ul>
      <li>No errors were returned when passing through the official <a href="https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fmattdunks94.github.io%2Fmy-second-project%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en">Jigsaw Validator</a>.
      <img src="/assets/images/readme-images/css-validator.png"></li>
    </ul>
  </li>
  <li>Javascript
    <ul>
      <li>No errors were found when passing through the official <a href="https://jshint.com/">Jshint Validator</a>.
        <img src="/assets/images/readme-images/jshint-validator.png">
      </li>
    </ul>
  </li>
  <li>Lighthouse Performance Report
    <ul>
      <img src="/assets/images/readme-images/lighthouse-report.png">
    </ul>
  </li>
</ul>

### Browser Testing:
<ul>
  <li>No bugs or errors occurred when testing on the following browsers:</li>
  <ul>
    <li>Google Chrome</li>
    <li>Firefox</li>
    <li>Safari</li>
  </ul>
</ul>

### Device Testing:
<ul>
  <li>Tested the application on several different devices, such as iPhone (7, 10, SE), iPad air and Google nest hub (2nd gen).</li>
  <li>No bugs or errors returned when testing on these devices.</li>
</ul>

## User Experience (UX):

### Design:
<ul>
  <li>Colour Scheme:</li>
  <ul>
    <li>The colour scheme consists of mainly darkturqoise, transparent black and white. Text is white with transparent black backgrounds. The transparent backgrounds enables the user to see the text more clearly. Without the black backgrounds the text would've gotten lost in the background image. Occasionally the text is in darkturqoise. This occurs during a hover effect over the 'Start Planning!' button, This indicates to the user that it is a link/button. And also within the application instructions the text is in darkturqoise indicating the essential steps on how to operate the site.</li>
  </ul>
  <li>Typography:</li>
  <ul>
    <li>The font used is Kanit, imported from Google fonts. Sans serif is set as the fallback font in case of any issues with loading the Kanit font. Kanit font is a modern looking font and easy for the user to read.</li>
  </ul>
  <li>Imagery:</li>
  <ul>
    <li>Only the one image was used for the application. This was the background-image. Being the only image on the site it had to be effective, appealing and relevant. It consists of objects that are considered as day-to-day hobbies, which is relevant to the application.</li>
  </ul>
  <li>Navigation:</li>
  <ul>
    <li>Apart from the welcome page 'Start Planning!' button which takes the user to the 'Day Planner' area when executed, theres very little navigation for this application. This makes it very easy for the user to use the site and to get straight to the sites general purpose.</li>
  </ul>
</ul>

## Technologies Used:

### Languages Used:
<ul>
  <li><a href="https://en.wikipedia.org/wiki/HTML5">HTML5</a></li>
  <li><a href="https://en.wikipedia.org/wiki/CSS">CSS3</a></li>
  <li><a href="https://en.wikipedia.org/wiki/JavaScript">Javascript</a></li>
</ul>

### Frameworks, Libraries and Programs Used:
<ul>
  <li><a href="https://fonts.google.com/">Google Fonts</a></li>
  <ul>
    <li>Google fonts was used to import the 'Kandit' font into the style.css file.</li>
  </ul>
    <li><a href="https://fontawesome.com/">FontAwesome</a></li>
  <ul>
    <li>Fontawesome was used to add an icon to the main heading.</li>
  </ul>
    <li><a href="https://git-scm.com/">Git</a></li>
  <ul>
    <li>Git was used for version control and using the Gitpod terminal to commit and push to GitHub.</li>
  </ul>
  <li><a href="https://github.com/">GitHub</a></li>
    <ul>
    <li>GitHub is used to store the projects code after being pushed from Git.</li>
  </ul>
  <li><a href="https://www.pixelmator.com/pro/">Pixelmator</a></li>
  <ul>
    <li>I used Pixelmator to edit the background image. Adjusted contrast, brightness and aslo rotated image for responsive design.</li>
  </ul>
</ul>

## Credits:

### Content:
<ul>
  <li>All content was written by the developer (Matt Dunkerton).</li>
</ul>

### Media:
<ul>
  <li>The shortcut icon I found was from <a href="https://www.flaticon.com/">Flaticon</a>.</li><img src="/assets/images/calendar.png">
  <li>The background image I found was from <a href="https://pixabay.com/">Pixabay</a>.</li>
  <img src="/assets/images/music-background.png">
</ul>
