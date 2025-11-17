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




