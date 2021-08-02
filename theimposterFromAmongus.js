var album = ["https://vignette.wikia.nocookie.net/minecraft-legacy-console-edition/images/4/44/Grass_Block_Revision_6.png/revision/latest?cb=20190910162317", "https://vignette.wikia.nocookie.net/minecraft/images/6/61/CommandBlock.png/revision/latest?cb=20190915012533",
];
var i= 0; 
 function next() {
   if(i==2)
  {i=0;}
   document.getElementById("img1").src = album [i];
  i++;}
