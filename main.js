left_wrist_x=0;
right_wrist_x=0;
difference=0;

function setup() {
    canvas = createCanvas(500, 500);
    canvas.position(600, 200);

    video = createCapture(VIDEO);
    video.size(450, 500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    background("#a3b7d9");
    document.getElementById("font_size").innerHTML= "Font size of the text will be "+difference+"px";
    fill("#00ff0a");
    textSize(difference);
    text('Jiya',50,400);
}
function modelLoaded() {
    console.log('PoseNet is initialized');
}
function gotPoses(results,error) {
    if(error){
        console.error(error);
    }
    
    if (results.length > 0) {
        console.log(results);
    }

    right_wrist_x= results[0].pose.rightWrist.x;
    left_wrist_x= results[0].pose.leftWrist.x;

    console.log("rightwrist_x = "+results[0].pose.rightWrist.x+ "rightwrist_y"+results[0].pose.rightWrist.y);
    //"rightwrist_y"
    console.log("leftwrist_x = "+results[0].pose.leftWrist.x+"leftwrist_y"+results[0].pose.leftWrist.y);

}
