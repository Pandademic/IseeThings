Webcam.attach(camera);
Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90

});
function take_snapshot(){
   Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>';
    
  });
}
console.log('ml5 version:',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2sAOek_rk/model.json',modelLoaded);
function modelLoaded(){
    console.log('Model Loaded!');
    
}