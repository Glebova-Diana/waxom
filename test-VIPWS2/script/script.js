// $('.grid').masonry({
//     // options...
//     itemSelector: '.grid-item',
//     columnWidth: 600
// });


// horizontalOrder: true

$('.grid').masonry({
    // selector of grid item
    itemSelector: '.grid-item',

// column width in pixels
    columnWidth: 400,

// sets item positions in percent values, rather than pixel values
    percentPosition: true,

// space between grid items
    gutter: 10,

// horizontal left-to-right order
    horizontalOrder: true,

// specifies which elements are stamped within the layout
    stamp: '.stamp',

// fits the available number of columns
    fitWidth: true,

// the horizontal flow of the layout
    originLeft: false,

// the vertical flow of the layout
    originTop: false,

// additianal styles for the container
    containerStyle: null,

// transition speed
    transitionDuration: '0.2s',

// staggers item transitions in milliseconds
    stagger: 30,

// enables/disables window resize events
    resize: false,

// enables/disables initial layout
    initLayout: false

});

