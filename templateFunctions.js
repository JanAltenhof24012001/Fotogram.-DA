/*Generating the photo collection */
function renderPhotos(ArrayPosition) {
    return `                
                            <img class="Photos" 
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
    return `                    <header class="DialogHeader">
                                    <h2 id="dialog-title" class="DialogTitle">`
                                        +PHOTO_COLLECTION[ArrayPosition]+
                                    `</h2>
                                    <img class="DialogClose" id="dialog-close" tabindex="0" onkeypress=closeDialog() onclick=closeDialog() src="img/close.svg" role="button" aria-label="close Dialog" aria-controls="Dialog" alt="X">
                                    </img>
                                </header>
                                <main class="DialogMain">
                                    <img class="DialogPhotos" src="./img/`+PHOTO_COLLECTION[ArrayPosition]+`" alt="`+PHOTO_COLLECTION[ArrayPosition]+`">
                                    </img>
                                </main>`;
};

/*Generating the Nav of the Dialog* 
/* Arrow images to navigate the Photo Collection */
function innerDialogNav(ArrayPosition) {
    return  `               <nav class="DialogNav">
                                <img class="ArrowNavigation" id="previous-picture" tabindex="0" onkeypress=accesInnerDialog(`+(ArrayPosition-1)+`) onclick=accesInnerDialog(`+(ArrayPosition-1)+`) src="./img/arrow-left.svg" role="button" aria-label="previous picture"  alt="Arrow Left">
                                </img>
                                <p class="CurrentPosition">`
                                    +(ArrayPosition + 1)+'/'+PHOTO_COLLECTION.length+
                                `</p>
                                <img class="ArrowNavigation" id="next-picture" tabindex="0" onkeypress=accesInnerDialog(`+(ArrayPosition+1)+`) onclick=accesInnerDialog(`+(ArrayPosition+1)+`) src="./img/arrow-right.svg" role="button" aria-label="next picture" alt="Arrow Right">
                                </img>
                            </nav>`;
};
