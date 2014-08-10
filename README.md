# Spectacle digital signage publishing

Spectacle is a digital signage publishing system for displaying content on any screen. The content is administered by Drupal and displayed using Meteor.js.

This is the Spectacle frontend project

[See The Spectacle administration poject](https://drupal.org/project/spectacle)

See [Trello](https://trello.com/spectacle1) for issue/planning tracking for the Spectacle project.

## Terminology

### Displays
A Display is a given "location" or "device" that content is being displayed on.

* Fields
  * Name
  * Location
  * Contact
  * Contact Phone Number
  * Screen Description
  * Branding reference
  * Geo Location

### Layouts
The glue between the Content Groups, Posts, and Templates.

* Fields
  * Content Groups
  * Template (Taxonomy Reference)

### Posts
A Post is a single entity of content that relates to a group of content (Content Group).

* Fields
  * Title
  * Description
  * Content Group
  * Text
  * Image
  * YouTube video (link)
  * Duration
  * Sheduler

### Branding
TODO: Describe what Branding is and what it is used for

* Fields
  * Logo
    * Right now this is just being displayed on the lower left-hand corner of each layout.
  * Background color
    * By default we are using a color picker widget, but to manually input a hex value, just change the widget type in (TODO: Add url path to setting page)
  * Background image

### Content Group
TODO: Describe what Content Group is and what it is used for