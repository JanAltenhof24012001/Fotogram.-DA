const PHOTO_COLLECTION = [
    "winter-City.jpg",
    "mountain-lake.jpg",
    "forest-lake-1.jpg",
    "landscape.jpg",
    "mountains.jpg",
    "desert-mountains.jpg",
    "river.jpg",
    "winter-gallery-1.jpg",
    "sunset.jpg",
    "forest-lake-2.jpg",
    "winter-gallery-2.jpg",
    "winter-gallery-3.jpg"
];

const PHOTO_CONTENT = document.getElementById("photo-collection");

const DIALOG_CONTENT = document.getElementById("dialog");

/* Generating the Photo Collection */

function accesInnerHTML() {
    for (let ArrayPosition = 0; ArrayPosition < PHOTO_COLLECTION.length; ArrayPosition++) {
        
        PHOTO_CONTENT.innerHTML += renderPhotos(ArrayPosition);
    }
};

function renderPhotos(ArrayPosition) {
    return `                
                            <img class="Photos" 
                            role ="button" aria-label="Picture of `+PHOTO_COLLECTION[ArrayPosition]+`" aria-haspopup="dialog" aria-controls="Dialog"
                            onkeypress=openDialog(`+ArrayPosition+`) 
                            onclick=openDialog(`+ArrayPosition+`) 
                            tabindex="0"
                            src="./img/`+PHOTO_COLLECTION[ArrayPosition]+`" 
                            alt="`+PHOTO_COLLECTION[ArrayPosition]+`">
                            </img>`;
                            
};

/* Opening and closing the Dialog */

function openDialog(ArrayPosition) {
    
    DIALOG_CONTENT.showModal();
    
    accesInnerDialog(ArrayPosition);
    
};

function closeDialog() {
    DIALOG_CONTENT.close();
};



/* closing Dialog by clicking outside of it */

DIALOG_CONTENT.addEventListener('click', (event) => {

    if (event.target == DIALOG_CONTENT) {
        
        DIALOG_CONTENT.close();
    }
    
});

/* Switch from last to first image and reverse + Generating the Dialog Content */

function accesInnerDialog(ArrayPosition) {
    
    if (ArrayPosition <= -1) {
       
        ArrayPosition = PHOTO_COLLECTION.length - 1;
    }
    
    else if (ArrayPosition >= PHOTO_COLLECTION.length) {
       
        ArrayPosition = 0;
    }

    DIALOG_CONTENT.innerHTML = innerDialog(ArrayPosition);
    DIALOG_CONTENT.innerHTML += innerDialogNav(ArrayPosition);
};

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

