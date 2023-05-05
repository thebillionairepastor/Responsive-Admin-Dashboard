# Responsive-Admin-Dashboard

Many websites, nowadays, are implementing two modules/interfaces for their sites. One is for the user and another is for the admin. In this article, we will see the process of creating a responsive admin panel using basic HTML, CSS, and Javascript.

In the admin panel, there are multiple sections for controlling the activities of the website by the admin. In the admin panel, there is a header and a side navbar will present that will help the admin to navigate into the multiple modules of the admin panel. in the header section, there will be a search button that will help the admin to search a module directly. So, see the approach to know about the creation of the Admin Dashboard.


![image](https://user-images.githubusercontent.com/101338709/236456033-bf039569-0832-497b-9755-edd43453da4c.png)

Approach: The following approach will be utilized to create the Responsive Admin Dashboard:

Create a project folder and inside it create three files “index.html“(for writing the HTML), “style.css“(for writing the CSS), and “index.js“(for writing the js). You can also create a separate file to keep the CSS code for the responsiveness of the page.
Now, create a header section to keep the header logo and other options like the menu button, Admin profile picture, and the search bar inside it.
Then create a search bar using the Input tag and give a style to it using CSS. And make the header flex to justify and align the content with a perfect space.
Then create a nav bar and make it positioned relative and place it on the left side of the screen. Add a javascript function to open and close the nav bar when the menu button will be clicked. Use “AddEventListner” for it. Then place the content of the navbar one by one.
Then create the main div to keep the main body of the dashboard. On the upper side of the main div create four cards that will contain important information like Daily views, Likes, Comments, etc. Apply flex properties in those boxes to align and justify them in the perfect position on the website and apply the “flex-wrap: wrap;” properties to make the boxes responsive according to the page size.
Then below the cards make a square div that will contain the recent article’s information. Then the overflow of the x-axis should be scrollable. So add the CSS properties to this div “overflow-x: scroll;“. Then add the content of the recent articles and make place the content in the right alignment by making the display of the div flex.
Then make the page responsive, add @media query with different breakpoints and give the styling according to the screen size. See the example to understand the responsiveness better. 
