# Valerie Kraucunas Personal Project Proposal

##Uses and Users
My project will be a dinner selector, using my own Trello list as a database. I have shown my meal planning Trello list to many with awed response being the most common. It will be for those who have intermediate level cooking skills and lackluster decision-making skills. I am calling it "DINK Kitchen", as in "Dual Income No Kids", since some recipes take a decent amount of time and probably couldn't be executed with brats running around.

##Mockup
In repo as mockup1.png

##Technologies
I will be using HTML, CSS, JavaScript, jQuery to build the site structure and functionality. I want to build 2 pages: the landing/home page, as well as a pantry items page. The homepage will be an interactive long form, that as you make a selection, it scrolls you forward to the next logical step. The pantry page will be a static list of pantry staples, simply a complement to the main functionality.

This project will send AJAX calls to the Trello API, jsonIP.com, freegeoIP.net, and forecast.io.

*Why weather?*

*After the user has made all their selections, a final piece of data based on the weather will be added to the JSON that will be entered into my function. Basically, if it is 80 degrees outside, you don't want to make a recipe that includes more than 30 minutes of oven time.*

##The User Experience
The user will start at the top of the page. They will select whether they're feeling adventurous or choosy. Adventurous will send them to the last question of whether they want a side recommendation or not. The choosy selection will send them through the rest of the questions.

###After this they will be asked:
  - Vegetarian or Meat options? (if yes to meat, go to protein selection, if vegetarian, skip protein selection)
  - Meal weight (light, comfort, or don't care)
  - Time commitment? (quick or not)
  - Side recommendation? (yes or no)
  - Go!

##Behind the Curtain
When the user lands on the page, three calls will be immediately made: to Trello for the entree list(1) and the side list(2), to jsonIP.com(3). When the jsonIP.com returns, the IP address will be sent to freegeoIP.com. The longitude and latitude informatin from freegeoIP.net will then be used in the forecast.io request. I will then be pulling the temperature from the returned JSON and inputting to the user input JSON that will be put into my function.

When the user presses the go button, their selections are put into a JSON that is then used to filter the array(s) of entree objects from Trello. After a new, filtered array is produced, a math.random is run to select a Trello card. The name information and description(all descriptions will have a link) are then pulled and put onto the DOM in the form of the name of the entree and the word "recipe" will have the description link put into the href.

If the user says they want a side recommendation, the entree result is then used to filter the sides and output the same as the entree on the DOM.


##Stretch Goals
A menu planning mode that lets user select how many meals they want to plan, then how many will be vegetarian/beef/chicken/pork/fish based.

Adding a "not in the mood" button to the results. This will keep the user input, but run another math.random on the filtered array.

Adding a start over button, which will clear the user input JSON (except the weather info) and scroll them to the top to start over. Without having to refresh page.

Adding an intro page that fades out, like Zoe Adelman's Handy ASL.

##PivotalTracker
[G19 - Valerie Kraucunas](https://www.pivotaltracker.com/n/projects/1525387)
