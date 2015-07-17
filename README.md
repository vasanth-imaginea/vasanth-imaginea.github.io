Requirement Details:

To build a Linux Search Builder App where the end user can frame the search command with search criteria of their choice.

2 features to be implemented.

1.find command (Search by Metadata)
2.grep command (Search by Content)

Valuations :

1. Code Organisation
2. Code Extendibility
3. Learn ability

Description :

When a normal user open the app, 

 - User should be able to enter the search content in a text field
 - User should be able to select, whether want to search by metadata or search by content
 - Also user should be able to select search filters of their choice
 - Once search button is clicked, user should get the Command to search. 

Approach taken :

1. Knowledge gathering
 - Through browsing, gathered knowledge on find & grip command and also the parameters which those commands support.

2. Designing the required JSON
 - Keeping in mind the Extendibility of the project, the design of the JSON was made with minimum and selected search parameters

 - Divided into three modules : 
         a)Options in Find 
         b)Options in grep
         c)Common options.

 - First two modules will have specific options and common options will have options which are common to both the operations.

3. Implementation.

Technical Details :

Technologies used : HTML, Angular JS, Javascript & Bootstrap
