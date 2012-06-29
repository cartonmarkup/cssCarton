cssCarton - framework for responsive style sheet design
========================================================

cssCarton is a lightweight framework that offers a simple way to transfer your grid based page layout into CSS and HTML.

# The basics – like words in a sentence

If you want to use CSS Carton to style your HTML page, you need to realize a few basics.
Most importantly, that a `<tag>` in HTML most of the time behaves much like a word in a sentence. Unless there is a reason (e.g. no more room in the line, or a manual linebreak) adding a new word in a sentence will not cause a linebreak. With cssCarton this is the basis for creating layouts and grids. A new `<tag>` (i.e. a "cell" of your design) will also only break into a new "line" if there is not enough space left for it in its current line or if it is explicitly told to break. You get it? Great! Because if you understand this behaviour, it is all you need to make creating page layouts super easy with cssCarton.
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
    | |           |           | |
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
Lets go back to theory just for a moment and take look on the promised reponsive part of this framework. 
Modern browsers allow you to give the stylesheet a choise how they will handle the styles of your page layout in consideration 
of the device it is used on. Yes, I talk about  [media queries](hhttp://www.w3.org/TR/css3-mediaqueries/). 
Can you imagine what great opportionies where opened if you combine _cells with media queryies?

                 Desktop                         Mobile
                 
    +--Parent-600px------------------+   +--Parent-300px------+
    | +--A-300px-------+--B-300px--+ |   | +--A-300px-------+ |
    | | +--D-300-px--+ |           | |   | | +--D-300-px--+ | |
    | | |            | |           | |   | | |            | | |
    | | +--E-300-px--+ |           | |   | | +--E-300-px--+ | |
    | | |            | |           | |   | | |            | | |
    | | +------------+ |           | |   | | +------------+ | |
    | +--C-100%--------+-----------+ |   | +--B-300px-------+ |
    | |                            | |   | |                | |
    | +----------------------------+ |   | +--C-100%--------+ |
    +--------------------------------+   | |                | |
                                         | +----------------+ |
                                         +--------------------+

# The styleables



### slim ( `<tag class="_slim"></tag>` )

### stretch ( `<tag class="_stretch"></tag>` )

### sticker ( `<tag class="_stretch"></tag>` )



## alignLeft, alignCenter, alignRight ( _alignLeft, _alignCenter _alignRight )

# tags
It is always a good idea to setup some defaults




Londrina Sketch