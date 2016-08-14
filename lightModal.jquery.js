//  lightModal.jquery.js
//  Author: Martin Stewart, Corg Design - http://corgdesign.github.io
//  License: MIT

(function( $ ) {

    $.fn.lightModal = function () {

        var image, imageAlt, imageURL;                                           // Set up some variables
        
        var lightboxActive = false;

        $('a[href$=".jpg"], a[href$=".png"], a[href$=".gif"]')
        .click( function( e ) {                                                  // If link href ends in .jpg
            
            e.preventDefault();                                                  // Prevent the link from working as normal
            
            if( !lightboxActive ) {                                              // Check if the lightbox has been activated already, and if not:
                
                $('body').append('<div id="lightbox-bg"/>');                     // Append the #lightbox-bg
                
                $('#lightbox-bg').fadeIn(500);                                   // Then fade it in
            
            } else {
            
                $('#lightbox-bg').fadeIn(500);                                   // Else: fade in #lightbox-bg as it's been activated
            
            }
            
            imgURL = $(this).attr('href');                                       // Get the url of the link
            
            imgAlt = $(this).children('img').attr('alt');                        // Get the image alt
            
            image = '<img src="' + imgURL + '" alt="' + imgAlt + '" />';         // Build the <image> tag
            
            $('#lightbox-bg').append(image);                                     // Append image to #lightbox-bg
            
            lightboxActive = true;                                               // Lightbox has been activated
            
        });

        function removeLightbox(){                                                // Function to fade out lightbox
            
            $('#lightbox-bg').fadeOut(500);                                       // Fade out #lightbox-bg
            
            $('#lightbox-bg').children().remove();                                // Remove any children from #lightbox-bg
            
        };

        $(document).on( 'click', '#lightbox-bg', function(e){
            
            removeLightbox();
            
        });

        $(document).keyup( function(e){                                            // Remove lightbox if esc key is pressed
            
            if (e.which == 27 && lightboxActive) {                                // escape key maps to keycode `27`
                
                removeLightbox();
            
            }
            
        });
    
    };

}( jQuery ));
