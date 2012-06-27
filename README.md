cssCarton - framework for Responsive style sheet Design
========================================================

cssCarton is a lightweight framework that offers a simple way to transfer your page layout into CSS and HTML.

# The basics – Take it like words in a sentence

If you wanna use CSS Carton to style some HTML, you need to realize that `<tags>` in
HTML behave like words in a sentence. A `<tag>` will only break a sentence into a second line if it is
eplicit told so, or there is not enough space left for it in its current line, to fit in.
You get it? Great! Because if you understand this behaviour, it is all you need to create super
simple page layouts with CSS Carton.
Enough Theory.

# Getting started

# cell ( _cell, <tag class="_cell"></tag> )

First you will need a bunch off cells or at least one. Because if you glue them together,
they will build a grid for your layout. To start create a first Frame- or Parentcell.

    <div class="_cell" style="width: 600px;"></div>

    +--Parent-600px--+
    |                |
    +----------------+

Now you will need the "like-words-in-a-sentence"-rule from above!
The parentcell defines the length of the "lines" ( 600px ). To build columns 
you can add as many cells to a "line" as you want. They will stand next to 
each other as long as their width added together is the same as Parentcell ones.

    +--Parent-600px-------------+
    | +--A-300px--+--B-300px--+ |
    | |           |           | |
    | +-----------+-----------+ |
    +---------------------------+

    <div class="_cell" style="width: 600px;">
    <div class="_cell" style="width: 300px;">A</div>
    <div class="_cell" style="width: 300px;">B</div>
    </div>

Else if the previous cells left not enough space a new added cell will break 
into the next "line" and build a new row.

    +--Parent-600px-------------+
    | +--A-300px--+--B-300px--+ |
    | |           |           | |
    | +--C-600px--+-----------+ |
    | |           |           | |
    | +-----------------------+ |
    +---------------------------+

    <div class="_cell" style="width: 600px;">
        <div class="_cell" style="width: 300px;">A</div>
        <div class="_cell" style="width: 300px;">B</div>
        <div class="_cell" style="width: 600px;">C</div>
    </div>

Quite simple. But what if you wanna have two rows in the same "line" next to a column? 

      +-----+
      |  |  |
    ? |--|  | ?
      |  |  |
      +-----+

That is no Problem at all. Every cell can be a parentcell, too. So first you will 
need to define two cells that share the space of one line (As A and B in the sample do ). 
Than add another pair of cells to one of them. If you provide each with the same width 
as their parent, they will build the parallel rows together.

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

    <div class="_cell" style="width: 600px;">
        <div class="_cell" style="width: 300px;">
            <!-- A is a parentcell -->`<br>
            <div class="_cell" style="width: 300px;">D</div>
            <div class="_cell" style="width: 300px;">E</div>
        </div>
        <div class="_cell" style="width: 300px;">B</div>
        <div class="_cell" style="width: 600px;">C</div>
    </div>

That's all you need to know about cells. 
But wait there is on last thing. The mission of the cells is to provide the dimensions for your grid, 
nothing else. So it's inproper to use other styling than the dimension properties width, min-width, 
height and min-height or the overflow attribute to handle a cells scrolling behaviour. Maybe you can also 
use background if you have to, but you schouldn't. Why? I will tell you in the next lines.

# The cartons

# slim ( _slim, <tag class="_slim"></tag> )
<div class="_slim"></div>

# stretch ( _stretch, <tag class="_stretch"></tag> )
<div class="_stretch"></div>

# sticker ( _sticker )

# alignLeft, alignCenter alignRight ( _alignLeft, _alignCenter _alignRight )

# tags
It is always a good idea to setup some defaults




Londrina Sketch