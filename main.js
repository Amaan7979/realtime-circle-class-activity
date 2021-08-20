noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
function setup() {
    canvas=createCanvas(450,450);
    canvas.position(550,100);
    video=createCapture(VIDEO);
    video.size(350,350);
    video.position(175,155);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",got_results);
}
function draw() {
    background("red");
    fill("yellow");
    circle(noseX,noseY,difference);
}
function modelLoaded() {
    console.log("Model is Loaded");
}
function got_results(results) {
if(results.length>0){
console.log(results);
noseX=results[0].pose.nose.x;
noseY=results[0].pose.nose.y;
leftWristX=results[0].pose.leftWrist.x;
rightWristX=results[0].pose.rightWrist.x;
difference=leftWristX-rightWristX;
}
}