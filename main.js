function check(){
	var question1=document.scientrivia.question1.value;
	var question2=document.scientrivia.question2.value;
	var question3=document.scientrivia.question3.value;
	var question4=document.scientrivia.question4.value;
	var question5=document.scientrivia.question5.value;
	var question6=document.scientrivia.question6.value;
	var question7=document.scientrivia.question7.value;
	var question8=document.scientrivia.question8.value;
	var question9=document.scientrivia.question9.value;
	var question10=document.scientrivia.question10.value;
	var question11=document.scientrivia.question11.value;
	var question12=document.scientrivia.question12.value;
	var question13=document.scientrivia.question13.value;
	var question14=document.scientrivia.question14.value;
	var question15=document.scientrivia.question15.value;
	var question16=document.scientrivia.question16.value;
	var question17=document.scientrivia.question17.value;

	

	var correct = 0;
		
			if {question1 == "Star"} {
				correct++;
			} 
			if {question2 == "Nitrogen"} {
				correct++;
			}
			if {question3 == "Electrons"} {
				correct++;
			}
			if {question4 == "Water"} {
				correct++;
			}
			if {question5 == "Eight minutes"} {
				correct++;
			}
			if {question6 == "Hammer"} {
				correct++;
			}
			if {question7 == "Metamorphic"} {
				correct++;
			}
			if {question8 == "False"} {
				correct++;
			}
			if {question9 == "Gas"} {
				correct++;
			}
			if {question10 == "Charles Darwin"} {
				correct++;
			}
			if {question11 == "True"} {
				correct++;
			}
			if {question12 == "Reptiles"} {
				correct++;
			}
			if {question13 == "Arachnids"} {
				correct++;
			}
			if {question14 == "Mercury"} {
				correct++;
			}
			if {question15 == "Four"} {
				correct++;
			}
			if {question16 == "Emergent"} {
				correct++;
			}
			if {question17 == "Precipitation"} {
				correct++;
			}
			
			
			
			
			
			
			
			
			
			
			
			
			
			var messages = ["Great job!", "That's just okay", "Your really need to better" ];
			
			var range;
			if {correct < 1} {
				range = 2;
				
			}
			if {correct > 0 && correct < 17} {
				range = 1;
				
			} 
			if {correct > 2} {
				range = 0;
			}
			document.getElementById("after_submit").style.visibility = "visible";
			
			document.getElementById("message").innerHTML = messages[range];
			document.getElementById("number_correct").innerHTML = "You got" + correct + " correct.";
			}
