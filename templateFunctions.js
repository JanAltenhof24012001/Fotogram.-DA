/*Generating the photo collection */
function renderPhotos(ArrayPosition) {
    return `<img class="Photos" 
            role ="button" aria-label="Picture of `+PHOTO_COLLECTION[ArrayPosition]+`" aria-haspopup="dialog" aria-controls="dialog"
            onkeypress=openDialog(`+ArrayPosition+`) 
            onclick=openDialog(`+ArrayPosition+`) 
            tabindex="0"
            src="./img/`+PHOTO_COLLECTION[ArrayPosition]+`" 
            alt="`+PHOTO_COLLECTION[ArrayPosition]+`">
            </img>`;
                            
};

/*Generating header and main of the Dialog*/ 
/* X image to close the Dialog */
function innerDialog(ArrayPosition) {
    return `<header class="DialogHeader">
                <h2 id="dialog-title" class="DialogTitle" tabindex="-1">`
                    +PHOTO_COLLECTION[ArrayPosition]+
                `</h2>
                <button class="DialogClose" id="dialog-close" onclick=closeDialog()>
                    X
                </button>
            </header>
            <img class="DialogPhotos" src="./img/`+PHOTO_COLLECTION[ArrayPosition]+`" alt="`+PHOTO_COLLECTION[ArrayPosition]+`">
            </img>`;
};

/*Generating the Nav of the Dialog* 
/* Arrow images to navigate the Photo Collection */
function innerDialogNav(ArrayPosition) {
    return  `<nav class="DialogNav">
                <button class="ArrowNavigation" id="previous-picture" onclick=accesInnerDialog(`+(ArrayPosition-1)+`) aria-label="previous picture">
                    <<
                </button>
                <p class="CurrentPosition">`
                    +(ArrayPosition + 1)+'/'+PHOTO_COLLECTION.length+
                `</p>
                <button class="ArrowNavigation" id="next-picture" onclick=accesInnerDialog(`+(ArrayPosition+1)+`) aria-label="next picture">
                    >>
                </button>
            </nav>`;
};
