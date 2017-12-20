//  lightModal.jquery.js
//  Author: Martin Stewart, Corg Design - http://www.corgdesign.com
//  License: MIT

(function( $ ) {

    $.fn.lightModal = function () {
        
        // Set up some variables
        var image, imageAlt, imageURL;                                           
        
        // Add lightbox styles to body
        var styles = '<style>#lightbox-bg{position:fixed;top:0;left:0;width:100%;height:100%;display:none;background:rgba(0, 0, 0, 0.8);z-index:10000;}#lightbox-bg img{display:block;height:auto;max-width:80%;max-height:80%;overflow:auto;margin:auto;position:absolute;top:0;left:0;bottom:0;right:0;}</style>';

        $('body').append(styles);                                               
        
        // lightbox hasn't been activated yet
        var lightboxActive = false;

        // Preload the images
        $('a[href$=".jpg"], a[href$=".png"], a[href$=".gif"]').each( function(){                  
            
            var preloadImgUrl = $(this).attr('href');

            $("<img />").attr("src", preloadImgUrl);
        }); 

        
        // If link href ends in .jpg, .png, .gif
        $('a[href$=".jpg"], a[href$=".png"], a[href$=".gif"]')
        .on( 'click', function( e ) {                                            
        
            // Prevent the link from working as normal
            e.preventDefault();                                                  
            
            // Check if the lightbox has been activated already, and if not:
            if( !lightboxActive ) {                                              
                
                // Append the #lightbox-bg
                $('body').append('<div id="lightbox-bg"/>');                     
                
                // Then fade it in
                $('#lightbox-bg').fadeIn(500);                                   
            
            } else {
                // Else: fade in #lightbox-bg as it's been activated
                $('#lightbox-bg').fadeIn(500);                                   
            
            }
            
            // Get the url of the link
            imgURL = $(this).attr('href');                                       
            
            // Get the image alt
            imgAlt = $(this).children('img').attr('alt');                        
            
            // Build the <image> tag
            image = '<img src="' + imgURL + '" alt="' + imgAlt + '" />';         
            
            // Append image to #lightbox-bg
            $('#lightbox-bg').append(image);                                     
            
            // Lightbox has been activated
            lightboxActive = true;                                               
            
        });
        
        // Function to fade out lightbox
        function removeLightbox(){                                                
            
            // Fade out #lightbox-bg
            $('#lightbox-bg').fadeOut(500);                                       
            
            // Remove any children from #lightbox-bg
            $('#lightbox-bg').children().remove();                                
            
        };

        $(document).on( 'click', '#lightbox-bg', function(e){
            
            removeLightbox();
            
        });
        
        // Remove lightbox if esc key is pressed
        $(document).keyup( function(e){                                            
            
            // escape key maps to keycode `27`
            if (e.which == 27 && lightboxActive) {                                
                
                removeLightbox();
            
            }
            
        });
    
    };

}( jQuery ));
