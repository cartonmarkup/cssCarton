cssCarton - framework for responsive style sheet design
========================================================

cssCarton is a lightweight framework that offers a simple way to transfer your grid based page layout into CSS and HTML.

# I am a Pattern, I am a Framework
If you take a look at the cssCartons source code you will notice that this framework is – let's say – clean and lean.
I personally like that very much in any project. If you know a little about css it will be easy for you to figure out how the different 
parts of this framework really work. In Turn, you will notice that cssCarton is more like a css pattern than 
a tricky css hack. But even if it's clean and simple source code isn't that big a deal for you, cssCarton still provides a reliable base for all kind 
of page layouts you might come up with.
 
# Like words in a sentence

If you want to use cssCarton to style your HTML page, you need to realize a few basics.
Most importantly, that a `<tag>` in HTML most of the time behaves much like a word in a sentence. Unless there is a reason 
(e.g. no more room in the line, or a manual linebreak) adding a new word in a sentence will not cause a linebreak. With cssCarton this is the 
basis for creating layouts and grids. A new `<tag>` (i.e. a "cell" of your design) will also only break into a new "line" if there is not
enough space left for it in its current line or if it is explicitly told to break. You get it? Great! Because if you understand this behaviour, 
it is all you need to make creating page layouts super easy with cssCarton.
To use an analogy, imagine your webpage as a set of cartons or cardboard boxes of different sizes stacked up and nested. That's just it!
Enough Theory.


# The grid

### cell ( `<tag class="_cell"></tag>` )

First you will need a bunch off cells or at least one. Because if you glue them together,
they will build a grid for your layout. To start create a first frame- or parentcell.
Please note that we don't care about the height of the cells here!
This would be determined by the content within the cells or it could be manualy set.

    <div class="_cell" style="width: 600px;"></div>

    Will give you a grid like this:

    +--Parent-600px--+
    |                |
    +----------------+

Now you will need the "like-words-in-a-sentence"-rule from above!
The parentcell defines the length of the "lines" ( 600px ). To build columns 
you can add as many cells to a "line" as you want. They will stand next to 
each other as long as their width added together is the same or smaller as parentcell ones.

    <div class="_cell" style="width: 600px;">
        <div class="_cell" style="width: 300px;">A</div>
        <div class="_cell" style="width: 300px;">B</div>
    </div>

    Will give you a grid like this:

    +--Parent-600px-------------+
    | +--A-300px--+--B-300px--+ |
    | |           |           | |
    | +-----------+-----------+ |
    +---------------------------+

If the previous cells left not enough space, a newly added cell will break 
into the next "line" and start a new row.

    <div class="_cell" style="width: 600px;">
        <div class="_cell" style="width: 300px;">A</div>
        <div class="_cell" style="width: 300px;">B</div>
        <div class="_cell" style="width: 600px;">C</div>
    </div>

    Will give you a grid like this:

    +--Parent-600px-------------+
    | +--A-300px--+--B-300px--+ |
    | |           |           | |
    | +--C-600px--+-----------+ |
    | |                       | |
    | +-----------------------+ |
    +---------------------------+


Quite simple. But what if you want to have two columns, where one column has two cells on top of each other while the other column consits of just one cell? 

      +-----+
      |  |  |
    ? |--|  | ?
      |  |  |
      +-----+

That is no problem at all. Every cell can be a parentcell, too. So first you will 
need to define two cells that share the space of one line (as A and B in the sample below do). 
Than add another pair of cells to one of them. If you provide each with the same width 
as their parent, they will break and hence stack up (as D and E in the sample below do).


    <div class="_cell" style="width: 600px;">
        <div class="_cell" style="width: 300px;">
            <!-- A is a parentcell -->
            <div class="_cell" style="width: 300px;">D</div>
            <div class="_cell" style="width: 300px;">E</div>
        </div>
        <div class="_cell" style="width: 300px;">B</div>
        <div class="_cell" style="width: 600px;">C</div>
    </div>

    Will give you a grid like this:

    +--Parent-600px------------------+
    | +--A-300px-------+--B-300px--+ |
    | | +--D-300-px--+ |           | |
    | | |            | |           | |
    | | +--E-300-px--+ |           | |
    | | |            | |           | |
    | | +------------+ |           | |
    | +--C-600px-------+-----------+ |
    | |                            | |
    | +----------------------------+ |
    +--------------------------------+


That's all you need to know about cells. 
But wait there is on last thing. The mission of the cells is to provide the dimensions for your grid, 
nothing else. So it's improper to use other styling than the dimension properties: width, min-width, 
height and min-height or the overflow attribute - to handle a cells scrolling behaviour. You might also 
use background if you have to, but really you shouldn't. 
Why? I will tell you in the next section of this readme.

# Responsive design
Lets go back to theory for a second and talk about the promised [reponsive](http://en.wikipedia.org/wiki/Responsive_Web_Design) 
part of this framework. The many different screen resolution of modern divices force us to think different about what a page layout is.
First get rid of the idea that a webpage is a static layout with fixed dimensions like a page in a book or newspaper. A Webpage can and should be flexible - to some extend at least.
Before I go into too much detail, take a look at [media queries](http://www.w3.org/TR/css3-mediaqueries/). As you will see, there is a simple 
way to control your stylesheets and to provide a differnt behavior for each kind of device. Can yo imagine a 
combination of media queries with a grid of cells? I can ;-)

    .Parent { width: 600px }

    @media ( max-width: 320px ) { 
      .Parent { width: 300px } 
    }
    
The same grid as rendered for different device resolutions:
    
    Desktop                               Mobile

    +--.Parent-600px-----------------+    +--.Parent-300px-----+
    | +--A-300px-------+--B-300px--+ |    | +--A-300px-------+ |
    | | +--D-300-px--+ |           | |    | | +--D-300-px--+ | |
    | | |            | |           | |    | | |            | | |
    | | +--E-300-px--+ |           | |    | | +--E-300-px--+ | |
    | | |            | |           | |    | | |            | | |
    | | +------------+ |           | |    | | +------------+ | |
    | +--C-100%--------+-----------+ |    | +--B-300px-------+ |
    | |                            | |    | |                | |
    | +----------------------------+ |    | +--C-100%--------+ |
    +--------------------------------+    | |                | |
                                          | +----------------+ |
                                          +--------------------+

Great isn't it? The sample illustrates how easily you can change the appearance of the whole grid
only by reducing the size of the parentcell ( respectively changeing the way cells break ).
Now, maybe you understand that it can be important for the flexibilty of a layout to keep
styling out of the cells and let other parts of the framework take care of the fancy stuff. 
Still with me? Lets take a look on these other parts.

# The styleables

Think of styleables as books in a shelf. Every book has it's own individual styled spine and size (determined by its content). 
If you have a lot of books you start to stack them onto each other and fill the last empty space that's left on the shelf. 
The same way cells where arranged to build a grid, styleables added to a cell follow each other and fit or 
break into a new line depending on their type. But most importantly, styleables contain the content and 
they are those elements that provide styling for your page layout. To color things up, attach every css attribute you wish to the styleables and put them into the cells of your grid.    

### stretch ( `<tag class="_stretch"></tag>` )
In order to gain flexibility, stretched styleables are always as wide as their closest
wrappinng cell ( borders, margins and paddings will be substracted from the inherited width ).
This is great, because if you want to use the same stretched styleable class in different cells there is 
no need for extra styles to adjust to different cell width. You won't need to adjust the stretch if you change the wrapping cell in future. Stretched styleables will also still fit 
after a dynamic update of the wrapping cells dimensions. Even more so, they will also fit to cells that you didn't have a clue you would use when 
you created the styleable. One important thing to note though is that a stretched styleable will always cause a linebreak.  
    
     ...
     <div class="_cell" style="width: 300px;">
       <!-- D is the wrapping cell -->
       <div class="_stretch"> I am a styleable, stretched<br> to my parent cell's width </div>
     </div> 
     ...
     
     Will place a styleable in the grid like this:
     
     ------------------------------------------+                                  
     --+--D-300px----------------------------+ |
       | ................................... | |
       | . I am a styleable, stretched     . | |
       | . to my parent cell's width       . | |
       | ................................... | |
      -+-------------------------------------+ |


### slim ( `<tag class="_slim"></tag>` )
If no width is defined a slim styleable is always as wide as its content ( borders, margins and paddings will be added 
to the width of the styleable ). Like grids they are placed next to each other, as long as their summed up width fits into 
the same line ( which is determined by the wrapping cells width ) or no stretched styleable is in between them. A stretched styleable in between two slim styleables will break the line. I told you, the "like-words-in-a-sentence"-rule 
is everywhere in this framework. But you should know that if the slim styleables in one line have different heights
all styleables in the next line will be vertically aligned to the bottom of the tallest styleable in the previous line.    
     
     ...
     <div class="_cell" style="width: 300px;">
       <!-- B is the wrapping cell -->
       <div class="_slim">
         As <br> 
         slim <br> 
         styleables
       </div>
       <div class="_slim">
         we <br> 
         stand <br> 
         in
       </div>
       <div class="_slim">
         a <br> 
         line
       </div>
     </div> 
     ... 
     
     Will place a styleable in the grid like this:
     
     -------------------------------------------+                                  
     --+--B-300px-----------------------------+ |
       | ..............  .........  ........  | |
       | . As         .  . we    .  . a    .  | |
       | . slim       .  . stand .  . line .  | |
       | . styleables .  . in    .  ........  | |
       | ..............  .........            | |
      -+--------------------------------------+ |


### sticker ( `<tag class="_sticker"></tag>` )
Stickers don't follow the "like-words-in-a-sentence"-rule instead they are positioned absolute in relation to the edge of its wrapping cell. 
You can define the location with position styles ( top, left, right, bottom ) from the top or bottom and from 
the left or right edge of the sticker. Even when scrolling the page or after a dynamic resize of the grid the sticker will be glued in its position relative to the wrapping cell. 
If position styles with negative values are used, a sticker can be placed outside of the wrapping cell, but keep in mind that if the wrapping 
cell is set to an overflow other than visible, the wrapping cell will work like a rectangular mask and hide those parts of the sticker that are not overlapping with it.
    
    ...
    <div class="_cell" style="width: 300px;">
      <!-- E is the wrapping cell -->
      <div class="_sticker"> I am a sticker </div>
    </div> 
    ...
    
    Will place a styleable in the grid like this:
    
      -------------------------------+
    ....................             |         
    .   +--------------.--E-300px--+ |
    .   |              .           | |
    . I am a sticker   .           | |
    .   |              .           | |
    ....................           | |
        |                          | |
       -+--------------------------+ |


### Nested grids
Grids can be placed inside a styleable. Why? Well, technically because we can and logically because - as stated above - I banned styling the grid!
You can use the wrapping styleable like a nice "frame" to decorate and place your grid inside an document. 
If you abdicate using dimension styles ( fixed width or height ), this "frame" will always float arround the grid.
It is also possible to scroll the grid inside the styleable – add a fixed height that is much lower than the grid and set overflow on the "frame" to auto or scroll. 
Done! A sparkling example to show how useful nested grids are, is the task of defining an element, that centers the main content on the page.   
    
    <body class="_alignCenter">
      <!-- page -->
      <div class="_slim" style="background-color: #A6A6A6; margin-top: 20px;">
        <div class="_cell" style="width: 600px;">
          ...
        </div>
      </div>
    </body>
    
    Will place a sytleable ( with a grid ) inside the browser window/body:
    
    ==========================================
            
            .. Styleable ............
            . +--A------+--B------+ .
            . | +--D--+ |         | .
            . | |     | |         | .
            . | +--E--+ |         | .
            . | |     | |         | .
            . | +-----+ |         | .
            . +--C------+---------+ .
            . |                   | .
            . +---------+---------+ .
            .........................
            
    ==========================================


## alignLeft, alignCenter, alignRight ( `<tag class="_alignLeft"></tag>`, `<tag class="_alignCenter"></tag>`, `<tag class="_alignRight"></tag>` )
What is to know about the alignment classes? Not much. If an alignment class is added to a grid or a styleable all children of this element ( not the element itself ) will be
aligned as specified by the alignment class of this parent element until a new alignment is added on a deeper level. 
   
     -------------------------------+
     --+--_alignLeft-------------+ |
       |                         | |
       | ...................     | |
       | . I am a slim     .     | |
       | . styleables      .     | |
       | . my content is   .     | |
       | . aligned left    .     | |
       | ...................     | |
       |                         | |
       | ..._alignRight.....     | |
       | .     I am a slim .     | |
       | .      styleables .     | |
       | .   my content is .     | |
       | .   aligned right .     | |
       | ...................     | |
       |                         | |
      -+--_alignRight------------+ |
       |                         | |
       |     .._alignLeft....... | |
       |     . I am a slim     . | |
       |     . styleables      . | |
       |     . my content is   . | |
       |     . aligned left    . | |
       |     ................... | |
       |                         | |
      
      
### showGrid, showStretch, showSlim, showSticker ( `<tag class="_showGrid"></tag>`, `<tag class="_showSlim"></tag>`, `<tag class="_showStretch"></tag>`, `<tag class="_showSticker"></tag>` )
Theese help you to identify the different parts of cssCarton inside of your page layout by adding different outlines to each element. 
In the minfied version theese classes are not supported.

     <body class="_showGrid _showStretch _showSlim _showSticker">
       ...
     </body>
      
      This will outline all grids and styleables inside the body  
      
      
  *  _showGrid: red dashed outlines
  *  _showStretch, _showSlim : yellow dashed outlines
  *  _showSticker: purple double outlines

# inherited font-size 
Without cssCarton you propably would define a default font-size in the body tag, but this won't do any good while using cssCarton. 
This is due to the specific of _cells wich set the font-size to zero to prevent "whitespace-spots" between the Sytleables. Instead I suggest to 
define the default font-size in _slim, _stretch and _sticker:
      
      ._slim, ._stretch, ._sticker { font-size: 12px; }      
  
# "protected" css attributes
Be aware if you use the following attributes in classes or in a style-attribute you want to combine together with html elements that are defined as grids or styleables:

  * display  (_cell, _slim, _stretch, _sticker) 
  * vertical-align (_cell, _slim, _stretch)
  * position (_cell, _slim, _stretch, _sticker)
  * text-align (_alignLeft, _alignCenter, _alignRight)
  * font-size (_cell)
  
# Browser compatibility
Every browser that can handle display: inline-block; or is an Internet Explorer more recent than version 5 ( the truth is I haven't tested below 6 ) should support this framework.
To support older versions of Internet Explorer than 8 you have to link to the extra file ie7ie6_carton.css to you documents head: 

    <link href="carton.css" rel="stylesheet"  type="text/css">
    <!--[if lt IE 8]><link href="ie7ie6_carton.css" rel="stylesheet" type="text/css"><![endif]-->
    
# tags.css
In this file you can ( hopefully ) find all Tags modern browsers support and a description what they are used for. I hope this will help you with building symantic
page layouts. In addition, I think it is alway a good idea to define some defaults for your design and this is a good place to start.  

# Reset
By default I added Eric Meyer's [CSS reset](http://meyerweb.com/eric/tools/css/reset/) because I found it useful to have a clean start, but cssCarton 
doesn't necessarily need this reset or any other css reset in order to work. Feel free to remove or replace it with the reset you prefer. 

# Licence
???

# Thanks a lot
Comments or ideas are welcome at support@littleweblab.com!
