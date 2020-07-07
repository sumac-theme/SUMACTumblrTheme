function toggleMenuExpanded(e) {
    e.preventDefault();
    $('#wrapper').toggleClass('expanded-nav');
    $('#sumac-credits').toggleClass('expanded-nav');
}

// Menu toggle (inside nav box)
$('#retract-button').click(toggleMenuExpanded);

// Menu toggle (outside nav box)
$('#expand-button').click(toggleMenuExpanded);

// Auto-set to not expanded-nav on small devices
function retractMenuOnSmallScreen(mediaQuery) {
    if (mediaQuery.matches) { // If media query matches
        $.each( ['#wrapper', '#sumac-credits'], function(index, item){
              if ($(item).hasClass('expanded-nav')) {
                  $(item).toggleClass('expanded-nav');
              }
        }); 
    }
}

const smallScreen = window.matchMedia("(max-width: 700px)");
retractMenuOnSmallScreen(smallScreen);
smallScreen.addListener(retractMenuOnSmallScreen);