$(document).ready(function(){
    window_width = $(window).width();
        
    // Make the images from the card fill the hole space
    hipster_cards.fitBackgroundForCards();
      
});

hipster_cards = {
    misc:{
        navbar_menu_visible: 0
    },
    
    fitBackgroundForCards: function(){
        $('[data-background="image"]').each(function(){
            $this = $(this);
                        
            background_src = $this.data("src");                                
            
            if(background_src != "undefined"){                
                new_css = {
                    "background-image": "url('" + background_src + "')",
                    "background-position": "center center",
                    "background-size": "cover"
                };
                
                $this.css(new_css);                
            }              
        });
        
        $('.card .header img').each(function(){
            $card = $(this).parent().parent();
            $header = $(this).parent();
                        
            background_src = $(this).attr("src");                                
            
            if(background_src != "undefined"){                
                new_css = {
                    "background-image": "url('" + background_src + "')",
                    "background-position": "center center",
                    "background-size": "cover"
                };
                
                $header.css(new_css);                
            }              
        });
        
    },   
}