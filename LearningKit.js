/* 22f 1012 JS files */
function p01Func() {
	
    /* in Ex1, set message text and image sources for problem01 */
    
    document.getElementById("problem").innerHTML="<p>Perimeter of a rectangle is outputted , given dimensions 'a' and 'b'</p>";
    document.getElementById("flowchart").setAttribute("src","images/images/rectPerimFlow.jpg") ;
   document.getElementById("js").src ="images/images/RectanglePerimeter.png" ;
    document.getElementById("another").src = "";
    
 /* the following three lines gets the checkboxes, and unchecks them
    */
 
    document.getElementById("check1").checked=false;
    document.getElementById("check2").checked=false;
    document.getElementById("check3").checked=false;
  
    /* in Ex3, update display of images */
  
     checkUncheck1();
     checkUncheck2();
     checkUncheck3();
     zoomIn();
     zoomOut();



  }
   
   
   /* in Ex2, uncomment the following function and complete it*/
   
   
   function checkUncheck1(){
     if (document.getElementById("check1").checked==true) {
        // add a getElementById here to get "flowchart" img and 
        // set the display property of its style to one of "inline" or "none"
        document.getElementById("flowchart").style.display="inline"; 
     
     }
     else {
        // add a getElementById here to get "flowchart" img and 
        // set the display property of its style to one of "inline" or "none"	
        document.getElementById("flowchart").style.display="none"; 
         
         
     }
   }
   
   function checkUncheck2(){
     if (document.getElementById("check2").checked==true) {
        // add a getElementById here to get "js" img and 
        // set the display property of its style  
        
        document.getElementById("js").style.display="inline";
     }
     else {
        // add a getElementById here to get "js" img and 
        // set the display property of its style  
        document.getElementById("js").style.display="none"; 
         
     }
   }
   
   /* in Ex2, you need to create function
      checkUncheck3, which is similar to checkUncheck 1 and 2
   */
      function checkUncheck3(){
         if (document.getElementById("check3").checked==true) {
            // add a getElementById here to get "js" img and 
            // set the display property of its style  
            
            document.getElementById("another").style.display="inline";
         }
         else {
            // add a getElementById here to get "js" img and 
            // set the display property of its style  
            document.getElementById("another").style.display="none"; 
             
         }
       }
   
   
   
   /* in Ex3, create function p02Func similar to p01Func */
 
   function p02Func() { 
     document.getElementById("problem").innerHTML="<p>Outputs Volume of Ellipsoid</p>";
    document.getElementById("flowchart").setAttribute("src","images/images/VolumeEllipsoidFlow.jpg") ;
    document.getElementById("js").setAttribute("src","images/images/VolumeOfEllipsoid.png")
     document.getElementById("another").setAttribute("src","");
     zoomIn();
     zoomOut();
 }
 

 function p03Func() { 
   document.getElementById("problem").innerHTML="<p>Outouts the Binary Representation of a Positive Interger</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/binaryFlow.png") ;
  document.getElementById("js").setAttribute("src","images/images/Binary.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}

function p04Func() { 
   document.getElementById("problem").innerHTML="<p>Outputs the largest of 3 values</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/LargerValueFrom3Flow.jpg") ;
  document.getElementById("js").setAttribute("src","images/images/largestOf3Values.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}


function p05Func() { 
   document.getElementById("problem").innerHTML="<p>Outputs how many distinct roots the input has</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/Has2,0,1Roots.jpg") ;
  document.getElementById("js").setAttribute("src","images/images/2DistinctRoots.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}

function p06Func() { 
   document.getElementById("problem").innerHTML="<p>Outputs if number is divisible by 6 or not</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/NumDivisibleBy6Flow.jpg") ;
  document.getElementById("js").setAttribute("src","images/images/divisibleby6.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
    
function p07Func() { 
   document.getElementById("problem").innerHTML="<p>Shows a percentage Grade mapped to a letter grade VERSION 1</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/GradesMappingAFlow.jpg") ;
  document.getElementById("js").setAttribute("src","images/images/GradesMappingA.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
    
function p08Func() { 
   document.getElementById("problem").innerHTML="<p>Shows a percentage Grade mapped to a letter grade VERSION 2</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/GradesMappingBFlow.jpg") ;
  document.getElementById("js").setAttribute("src","images/images/GradesMappingB.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
    
function p09Func() { 
   document.getElementById("problem").innerHTML="<p>Outputs sum of array elements divisible by 5</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/SumOfArrayElementsDivisBy5Flow-1.png") ;
  document.getElementById("js").setAttribute("src","images/images/sumOfArrayElementsDivisBy5.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}


function p10Func() { 
   document.getElementById("problem").innerHTML="<p>Prints out the prime numbers that has 7</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/primeNumThatHas7.png") ;
  document.getElementById("js").setAttribute("src","images/images/printsPrimeNumthatHas7.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
function p11Func() { 
   document.getElementById("problem").innerHTML="<p>Outputs Yes if amount of positive or negative first 4 values are equal to amount of positive or negative last 4 values. Otherwise outputs No</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/samePosandNeg4values.png") ;
  document.getElementById("js").setAttribute("src","images/images/PosorNegofFirst4ValuesEqualToLastFourValues.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
function p12Func() { 
   document.getElementById("problem").innerHTML="<p>Outputs even values stored in even positions of the array</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/ evenValuesStoredInEvenPosition.png") ;
  document.getElementById("js").setAttribute("src","images/images/evenValuesEvenPos.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
function p13Func() { 
   document.getElementById("problem").innerHTML="<p>Outputs if number is equal to sum of all divisors</p>";
  document.getElementById("js").setAttribute("src","images/images/NumEqualToSumOfAllDivisors.png") ;
  document.getElementById("flowchart").setAttribute("src","images/images/sumOFallPosDivisor.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
function p14Func() { 
   document.getElementById("problem").innerHTML="<p>Outputs even integers 1 to 15 in descending order</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/evenINT1To15.jpg") ;
  document.getElementById("js").setAttribute("src","images/images/evenInt1to15descending.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
    
function p15Func() { 
   document.getElementById("problem").innerHTML="<p>Outputs if a number is Even or Odd</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/evenOrODD.png") ;
  document.getElementById("js").setAttribute("src","images/images/offEven.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}

function p16Func() { 
   document.getElementById("problem").innerHTML="<p>Outputs if number inputted is positive or nrgative</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/posOrNegNum.png") ;
  document.getElementById("js").setAttribute("src","images/images/posorNeg.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
function p17Func() { //
   document.getElementById("problem").innerHTML="<p>Outputs prime Numbers less than input</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/primelessthanInput copy.png") ;
  document.getElementById("js").setAttribute("src","images/images/PrimeLessThanInput.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
function p18Func() { 
   document.getElementById("problem").innerHTML="<p>Outputs 'Hello' 10 times</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/Hello10TimesFlow.png") ;
  document.getElementById("js").setAttribute("src","images/images/Hello.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
function p19Func() { 
   document.getElementById("problem").innerHTML="<p>Outputs sum of numbers between 10 and 30</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/sumbetween10and30.png") ;
  document.getElementById("js").setAttribute("src","images/images/sumbetween10and30Flow.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
function p20Func() { 
   document.getElementById("problem").innerHTML="<p>Prints sum of digits of the number</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/sumofdigitofNumOutputtedFlow.png") ;
  document.getElementById("js").setAttribute("src","images/images/sumofdigitofNumOutputted.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
function p21Func() { 
   document.getElementById("problem").innerHTML="<p>Output the sequence n, n-1, ... , 1 for each of the five inputted values of n</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/prob21Flow.png") ;
  document.getElementById("js").setAttribute("src","images/images/prob21.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}

function p22Func() { 
   document.getElementById("problem").innerHTML="<p> Output the product of the sums of the entries of each row in given matrix a.</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/prob22flow.png") ;
  document.getElementById("js").setAttribute("src","images/images/prob22.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}

function p23Func() { 
   document.getElementById("problem").innerHTML="<p>Outputs the integers that are stored in a sorted array</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/prob23flow.png") ;
  document.getElementById("js").setAttribute("src","images/images/p23.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
function p24Func() { 
   document.getElementById("problem").innerHTML="<p>output is the greatest common divisor of the two integers</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/p24Flow.png") ;
  document.getElementById("js").setAttribute("src","images/images/p24.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
function p25Func() { 
   document.getElementById("problem").innerHTML="<p>Outputs sum of even values stored in an array of 100 elements</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/p25flow.png") ;
  document.getElementById("js").setAttribute("src","images/images/p25.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
function p26Func() { 
   document.getElementById("problem").innerHTML="<p>Outputs sum of odd values stored in an array of 100 elements</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/p26flow.jpg") ;
  document.getElementById("js").setAttribute("src","images/images/p26.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
function p27Func() { 
   document.getElementById("problem").innerHTML="<p>the first a Fibonacci numbers are output</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/fibFlow.png") ;
  document.getElementById("js").setAttribute("src","images/images/fib.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
function p28Func() { 
   document.getElementById("problem").innerHTML="<p>output 'yes' if the number is equal to its reverse,'no' otherwise</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/palindromeFlow.png") ;
  document.getElementById("js").setAttribute("src","images/images/palindrome.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
function p29Func() { 
   document.getElementById("problem").innerHTML="<p>number of times digit 3 or 7 occurs in the number is outputted</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/p29Flow.png") ;
  document.getElementById("js").setAttribute("src","images/images/p29.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
function p30Func() { 
   document.getElementById("problem").innerHTML="<p>a triangular formation of a rows of []’s is printed (from 1 to a pairs, top to bottom)</p>";
  document.getElementById("flowchart").setAttribute("src","images/images/p30F.png") ;
  document.getElementById("js").setAttribute("src","images/images/p30.png")
   document.getElementById("another").setAttribute("src","");
   zoomIn();
   zoomOut();
}
   
   /* in Ex4, create functions zoomIn() and zoomOut() */
   function zoomIn(){
      document.getElementById("flowchart").style.width="200%";}

   function zoomOut(){
      document.getElementById("flowchart").style.width="100%";}




     