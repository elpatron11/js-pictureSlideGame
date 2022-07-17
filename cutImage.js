// var image = new Image();
// image.onload = cutImageUp;
// image.src = './assets/cat1.png';

// function cutImageUp() {
//     var imagePieces = [];
//     for(var x = 0; x < 3; ++x) {
//         for(var y = 0; y < 3; ++y) {
//             var canvas = document.createElement('canvas');
//             canvas.width = widthOfOnePiece;
//             canvas.height = heightOfOnePiece;
//             var context = canvas.getContext('2d');
//             context.drawImage(image, x * widthOfOnePiece, y * heightOfOnePiece, widthOfOnePiece, heightOfOnePiece, 0, 0, canvas.width, canvas.height);
//             imagePieces.push(canvas.toDataURL());
//         }
//     }

//     // imagePieces now contains data urls of all the pieces of the image

//     // load one piece onto the page
//     var anImageElement = document.getElementById('#cat1');
//     anImageElement.src = imagePieces[0];
// }
