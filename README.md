cssCarton - framework for responsive style sheet design
========================================================

cssCarton is a lightweight framework that offers a simple way to transfer your grid based page layout into CSS and HTML.

# I am a Pattern, I am a Framework
If you take a look on cssCartons source code you will notice that this framework is – let's say – clearly.
I like that very mutch. If you know a little about css it will be easy for you to figure out how the different 
parts of this framework really works and than you will notice that cssCarton is more a kind of css pattern than 
a tricky css hack. But even if it's source code isn't that big a deal cssCarton is a strong basement for all kind 
of page layouts you can imagine building with html.
 
# Like words in a sentence

If you want to use CSS Carton to style your HTML page, you need to realize a few basics.
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
nothing else. So it's inproper to use other styling than the dimension properties width, min-width, 
height and min-height or the overflow attribute to handle a cells scrolling behaviour. Maybe you can also 
use background if you have to, but you shouldn't. Why? I will tell you in the next section of this readme.

# Responsive design
Lets go back to theory for a second and talk about the promised [reponsive](http://en.wikipedia.org/wiki/Responsive_Web_Design) 
part of this framework. The many different screen resolution of modern divices force us to think different about what a page layout is.
First get rid of the idear a webpage is a static layout with fixed dimensions like a page in a book, it can be flexible.
Before I go to mutch into details, take a look on [media queries](http://www.w3.org/TR/css3-mediaqueries/). As you will see, they are simple 
controls for your stylesheets to manage differnt behavior for all kind of divices. Can yo imagine a 
combination of media queries with a grid of cells?

    .Parent { width: 600px }

    @media ( max-width: 320px ) { 
      .Parent { width: 300px } 
    }
    
The same grid on different device resolutions:
    
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

Great isn't it? The sample illustrates how easy you can change the appearance of the whole grid
only by reducing the size of the parentcell ( respectively changeing the way cells break ).
Now, maybe you understand that it can be important for the flexibilty of a layout to keep
styleing out of the cells and let other parts of the framework take care about the fancy stuff. 
Still don't know why? Lets take a look on these other parts.

# The styleables

Think of syleables as books in a shelf. Every book has it's own individual styled spine and size. 
If you have a lot of books you start to stack them on each other and fill the last emty space the shelf left. 
The same way syleables where arranged to a grid. Added to a cell they follow each other and fit or 
break into a new line depending on their kind and type. Also important to say is, that these elements take care for 
the content and finaly the part of styleing your page layout. To color things up, combine every css attribute you wish  
to the styleables and put them into your grid.    

### stretch ( `<tag class="_stretch"></tag>` )
For flexible usage, stretched stylebles are always as wide as their closest
wrappinng cell ( borders, margins and paddings will be substracted from the inherited wide ).
This is great, because if you wanna use the same stretched styleable class in different cells their is 
no need for extra styles to adjust. Also you don't need to adjust in future. Stretched styleables will still fit 
after a dynamic update of the wrapping cells dimensions and also fit to cells you don't had a glue that you will need them when 
you created the css class for the styleable. Before I forget, because it demands on enough space, a stretched styleable 
will always break into a new custom line ( Even if you add a static width, that is much smaller 
than the length of the surrounding cell – What is by the way in my eyes no good approach for this element ).  
    
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
If no static width is defined a slim styleable is as wide as it's content ( borders, margins and paddings will be added 
to the wide of the styleable ). Like grids they stand next to each other, as long as their width added together fit into 
the same line ( the wrapping cells width ) or no stretched styleable is in between them. I told you, the "like-words-in-a-sentence"-rule 
is everywhere in this framework. Also you should know, that even when the slim syleables in one line have a different height
all syleables in the next line will be aligned to the bottom of the heighest styleable in the previous one.    
     
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
Stickers don't follow the "like-words-in-a-sentence"-rule instead they are positioned absolut to the bounds of the closest 
grid that wraps arround. You can define their location with position styles ( top, left, right, bottom ) from the top or bottom and from 
the left or right side of the grid. Even on document scrolling or an dynamic resize of the grid they will be glued absolute to the surrounding grid. 
If position styles with negative values where added, a sticker can be placed outside of the grid, but keep in mind that if the wrapping 
grid is set to an overflow other than visible, the grid will work like a mask and hide the parts that reach out of it.
    
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
Grids can be placed inside a styleable. Why? Because above I baned styleing the grid!
You can use the wrapping styleable like a nice frame to decorate and place your grid inside an document. 
If you abdicate the use of dimension styles ( fixed width or height ), the "frame" will always float arround the grid.
But it is also possible to scroll the grid inside the styleable – add a fixed height that is much lower than the grid and set overflow to auto or scroll. 
Done! A sparkling example to show nested grids aren't useless is the definition of a page element like every page layout has, that centers the main content inside of the body.   
    
    <body class="_alignCenter">
      <!-- page -->
      <div class="_slim" style="background-color: #A6A6A6; margin-top: 20px;">
        <div class="_cell" style="width: 600px;">
          ...
        </div>
      </div>
    </body>
    
    Will place a sytleable like this inside the browser window/body:
    
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
What is to know about the alignment classes? Not mutch. If an alignment class is added to an grid or an styleable all childrens of this element ( not the element itself ) will be
aligned as told him from above until a new alignment is added on a deeper level. 
   
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
      
      
  *  _showGrid: red dashes outlines
  *  _showStretch, _showSlim : yellow dashes outlines
  *  _showSticker: lila double outlines
  
  
# "protected" css attributes
Be aware if you use the following attributes in classes or in a style-attribute you wanna combine together with html elements that are defined as grids or styleables:

  * display 
  * vertical-align 
  * letter-spacing 
  * position 
  * text-align

# Browser compatibility
Every browser that can handle display: inline-block; or is an Internet Explorer newer than 5 ( the truth is I haven't tested below 6 ) should support this framework.
To support older versions of Internet Explorer than 8 you  need to bind the extra file ie7ie6_carton.css to you documents head: 

    <link href="carton.css" rel="stylesheet"  type="text/css">
    <!--[if lt IE 8]><link href="ie7ie6_carton.css" rel="stylesheet" type="text/css"><![endif]-->
    
# tags.css
In this file you can ( hopefully ) find all Tags modern browsers support and a discription what they are used to be. I hope that will support you on building symantic
page layouts. Also I think it is alway a good idear to define some defaults for your design and this is a good place to start.  

# Reset
By default I added Eric Meyer's [CSS reset](http://meyerweb.com/eric/tools/css/reset/) because I found it usefull to have a simple at the scratch, but cssCarton 
doesn't necesary need this special reset file or any css reset file to work. It's also an extra. Feel free to remove or replace it with the reset you prefere. 

# Licence
???

# Thanks allot
Comments or ideas are welcome at @gradety!