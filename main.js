let narizX, narizY, capacete, canvas, video;

function preload(){
    capacete = loadImage('minecraft.png')
}

function setup(){
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modeloCarregado);
    poseNet.on('pose', pegarPoses);
}

function modeloCarregado() {
    console.log('poseNet começou');
}
function pegarPoses(results) {
    if(results.length>0){
        console.log('results');
        narizX = results[0].pose.nose.x-90;
        narizY = results[0].pose.nose.y-110;
    }
}

function draw(){
    image(video, 0, 0, 300, 600);
    image(capacete, narizX, narizY, 170, 170);
}

function tirarFoto(){
    save("foto.png");
}