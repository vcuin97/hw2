
            $(document).ready(function () {
                
                //Gl0bal variables
                var score = 0;
                var attempts = localStorage.getItem("total_attempts");
                
                // event listeners
                $("button").on("click", gradeQuiz);
                
                //Question 5 images
                $(".q5Choice").on("click", function(){
                    $(".q5Choice").css("background","");
                    $(this).css("background","rgb(255, 255, 0)");
                });
                
                displayQ4Choices();
                
                function displayQ4Choices(){
                    
                    let q4ChoicesArray = ["Maine", "Rhode Island", "Maryland", "Delaware"];
                    q4ChoicesArray = _.shuffle(q4ChoicesArray);
                    
                    for (let i = 0; i < q4ChoicesArray.length; i++){
                        $("#q4Choices").append(` <input type="radio" name ="q4" id ="${q4ChoicesArray[i]}"
                        value = "${q4ChoicesArray[i]}"> <label for ="${q4ChoicesArray[i]}"> ${q4ChoicesArray[i]}</label>`);
                    }
                } // display q4 choices
                
                //functions
                function isFormValid(){
                    let isValid = true;
                    if($("#q1").val()==""){
                        isValid = false;
                        $("#validationFdbk").html("Question 1 was not answered");
                    }
                    return isValid;
                }
                
                function rightAnswer(index){
                    $(`#q${index}Feedback`).html("Correct!");
                    $(`#q${index}Feedback`).attr("class","bg-success text-white");
                    $(`#markImg${index}`).html("<img src ='img/checkmark.png'>");
                    score += 20;
                    
                }
                
                function wrongAnswer(index){
                     $(`#q${index}Feedback`).html("Incorrect!");
                    $(`#q${index}Feedback`).attr("class","bg-warning text-white");
                    $(`#markImg${index}`).html("<img src ='img/xmark.png' alt='xmark'>");
                }
                
                function gradeQuiz() {
                    
                    $("#validationFdbk").html(""); // resets validation feedback
                    if(!isFormValid()){
                        return;
                    }
                    // variables
                    score = 0;
                    //document.getElementById("#q1").innerHTML = $("#q1").val();
                    let q1Response = $("#q1").val();
                    let q2Response = $("#q2").val();
                    let q3Response = $("#q3").val();
                    let q4Response = $("#q4").val();
                    let q5Response = $("#q5").val();
                    
                
                    
                    //question 1
                    /*if(q1Response == "sacramento"){
                       rightAnswer(1);
                    } else {
                       wrongAnswer(1);
                    }*/
                    
                     //question 2
                    if(q2Response == "in"){
                        $("#introvert").html("Your an introvert!");
                    } else {
                       $("#extrovert").html("Your an extrovert!!");
                    }
                    
                    //question 3
                    if(q3Response == "think"){
                        $("#think").html("Your a Thinker");
                    } else {
                       $("#gut").html("Your a Feeler");
                    }
                    
                    
                    //question 4
                    if(q4Response == "bigPicture"){
                        $("#bigPicture").html("Your Intuitive");
                    } else {
                       $("#smallDetails").html("Your a Sensor");
                    }
                    
                    //question5
                    if(q5Response == "stickToPlans"){
                        $("#stickToPlans").html("Your a Judger");
                    } else {
                       $("#optionsOpen").html("Your a Perciever");
                    }
                    
                    
                    /*
                    //question6
                    if(q6Response == "dover"){
                        rightAnswer(6);
                        score -= 7.5;
                    } else {
                        wrongAnswer(6);
                    }
                    
                    //question7
                    if(q7Response == "az"){
                        rightAnswer(7);
                        score -= 7.5;
                    } else {
                        wrongAnswer(7);
                    }
                    
                    //question 8
                    if($("#Alaska").is(":checked") && $("#Texas").is(":checked") &&
                    !$("#California").is(":checked") && !$("#Arizona").is(":checked")){
                        rightAnswer(8);
                        score -= 7.5;
                    }else{
                        wrongAnswer(8);
                    }
                    
                    
                    $("#totalScore").html(`Total Score: ${score}`);
                    
                    if(score == 100){
                        $("#congrats").html("Congratulations!");
                    } else if (score == 137.5){
                        $("#congrats").html("Congratulations! Perfect score!");
                    }
                    
                     if(score>=80){
                        $("#totalScore").css('color', 'green');
                    }else if (score < 80){
                        $("#totalScore").css('color', 'red');
                    }
                    
                    $("#totalScore").html(`Total Score: ${score}`);
                    $("#totalAttempts").html(`Total Attempts: ${++attempts}`);
                    localStorage.setItem("total_attempts", attempts);
                    */
                }
                
            }) //ready
        
            
            //<script SRC="js/functions.js"></script>