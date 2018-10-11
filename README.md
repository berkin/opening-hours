# Opening Hours 

## “Opening Hours” - Frontend developer flair

In short Your task is to write a program that takes JSON-formatted opening hours
of a restaurant as an input and outputs hours in a human readable format. That
output is presented in a design provided with this task.  Input Input JSON
consist of keys indicating days of a week and corresponding opening hours as
values. One JSON file includes data for one restaurant.  

{ 
<dayofweek>: <opening hours> 
<dayofweek>: <opening hours> ...  
} 

<dayofweek>:  monday / tuesday / wednesday / thursday / friday / saturday / sunday 
<opening hours>: an array of objects containing opening hours. 

Each object consist of two keys: 
•	type: open or close 
•	value: opening / closing time as UNIX time (1.1.1970 as date),
e.g. 32400 = 9 AM, 37800 = 10.30 AM, max value is 86399 = 11.59:59 PM

Example: on Mondays a restaurant is open from 9 AM to 8 PM 
{ 
	"monday" : [
		{"type" : "open", "value" : 32400 }, 
		{ "type" : "close", "value" : 72000 } ], ….
}


##	Special cases 
- If a restaurant is closed the whole day, an array of opening hours is empty.  
- “tuesday”: [] means a restaurant is closed on Tuesdays
- A restaurant can be opened and closed multiple times during the same day,
  E.g. on Mondays from 9 AM - 11 AM and from 1 PM to 5 PM

- A restaurant might not be closed during the same day 	E.g. a restaurant is
opened on a Friday evening and closed on small hours of Saturday. In that case
friday-object includes only the opening time. Closing time is part of the
saturday-object.  

- When printing opening hours which span between multiple
days, closing time is always a part of the day when a restaurant was opened
(e.g. Friday 8 PM - 1 AM)

{ "friday" : [ { "type" : "open", "value" : 64800 } ], “saturday”: [ { "type" :
"close", "value" : 3600 }, { "type" : "open", "value" : 32400 }, { "type" :
"close", "value" : 39600 }, { "type" : "open", "value" : 57600 }, { "type" :
"close", "value" : 82800 } ] }



A restaurant is open: Friday: 6 PM - 1 AM Saturday: 9 AM -11 AM, 4 PM - 11 PM

Logical Output Opening hours must be printed using 12-hour clock. Example of an
output: Monday: 8 AM - 10 AM, 11 AM - 6 PM Tuesday: Closed Wednesday: 11 AM - 6
PM Thursday: 11 AM - 6 PM Friday: 11 AM - 9 PM Saturday: 11 AM - 9 PM Sunday:
Closed

Design and visuals The task comes with a zip file, containing exported PNG:s for
reference. Your job is to create the layout exactly as in the designs. Take care
in fine tuning the details of the layout to match the intended design. 

 Example output design (Zip file included with more detailed instructions) The
font used can be found from here for example:
https://github.com/elartix/circular-std/tree/master/fonts Reading input and
formatting output A minimum requirement is to read JSON data from a file and
output opening hours in a view that is designed based on the layouts provided.
However, this is where you can dazzle us with your platform specific skills.
Tech Feel free to use any programming language you prefer (unless specifically
asked to write the program using e.g. Native platforms or JS). 3rd party
libraries and frameworks are also allowed.  Deliverable Send a link to your
GitHub repo or bundle everything into a Zip archive and mail it to us. Remember
that it is easier for us to review your task if we can test / run it.  A good
check before sending you task is to clone the repository / unzip the Zip archive
into a new folder and check that building and running the project works, using
the steps you define in readme.md. Forgotten dependencies and instructions can
sometimes happen even to the best of us.



FULL EXAMPLE ON THE NEXT PAGE









Full Example INPUT OUTPUT { 
"monday" : [], 
"tuesday" : [ { "type" : "open",
"value" : 36000 }, { "type" : "close", "value" : 64800 } ], "wednesday" : [],
"thursday" : [ { "type" : "open", "value" : 36000 }, { "type" : "close", "value"
: 64800 } ], "friday" : [ { "type" : "open", "value" : 36000 } ], "saturday" : [
{ "type" : "close", "value" : 3600 }, { "type" : "open", "value" : 36000 } ],
"sunday" : [ { "type" : "close", "value" : 3600 }, { "type" : "open", "value" :
43200 }, { "type" : "close", "value" : 75600 } ] }






















Monday: Closed Tuesday: 10 AM - 6 PM Wednesday: Closed Thursday: 10 AM - 6 PM
Friday: 10 AM - 1 AM Saturday: 10 AM - 1 AM Sunday: 12 PM - 9 PM

