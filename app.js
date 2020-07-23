// CHAPTER 9-11
//Qno1

var a= prompt("Enter your city: ")
if(a.toLowerCase()=="karachi"){
    alert("Welcome to the city of lights.")
}else{
    alert("Sorry")
}

//Qno2

var a= prompt("Enter your gender: ")
if(a.toLowerCase()=="male"){
    alert("Good Morning Sir.")
}if(a.toLowerCase()=="female"){
    alert("Good Morning Ma'am")
}else{
    alert("Wrong Input.")
}

//Qno3

var a= prompt("Enter Signal color: ")
if(a.toLowerCase()=="red"){
    alert("Must Stop.")
}if(a.toLowerCase()=="yellow"){
    alert("Ready to move.")
}if(a.toLowerCase()=="green"){
    alert("Move now.")
}

//Qno4

var a=+prompt("Enter fuel in litres: ")
if(a<=0.25){
    alert("Please refill the fuel in your car.")
}else{
    alert("your fuel is: "+a)
}

//Qno5
//A
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true")
}
//B
var b = 82
 if (b++ === 83){ 
     alert("given condition for variable b is true");
    }
//C
var c = 12
 if (c++ === 13){ 
     alert("condition 1 is true")
     }if(c === 13){
          alert("condition 2 is true")
    } if (++c < 14){
         alert("condition 3 is true")
    } if(c === 14){
             alert("condition 4 is true")
             }

//D
var materialCost = 20000
var laborCost = 2000 
var totalCost = materialCost + laborCost
 if (totalCost === laborCost + materialCost){
      alert("The cost equals") 
    }

//E
if (true){
     alert("True") 
    } if (false){ 
        alert("False")
     }

//F
if("car" < "cat"){
     alert("car is smaller than cat")
     }

//Qno 6
var a=+prompt("Enter marks in phy: ")
var b=+prompt("Enter marks in Math: ")
var c=+prompt("Enter marks in Chem: ")
var per=((a+b+c)/300)*100;
document.write("Total marks : 300<br>Marks Obtained : "+(a+b+c)+"<br>Percentage : "+per+"%<br>")
if(per>=80){
    document.write("Grade = A-one <br>Remarks : Excellent")
}if(per>=70 && per<80){
    document.write("Grade = A<br> Remarks : Good")
}if(per>=60 && per<70){
    document.writet("Grade = B <br>Remarks : You need to improve")
}if(per<60){
    document.writet("Grade = Fail <br>Remarks : Sorry")
}

//Qno7
var rand=Math.floor((Math.random() * 10) + 1)
var a=parseInt(prompt("Select Number Between 1-10"))
if(rand==a){
    alert("Bingo! Correct Answer.")
}if((a+1)==rand){
    alert("Close enough to the correct answer.")
}

//Qno8

var a=+prompt("Enter a number: ")
if((a%3)==0){
    alert("The inputted number is divisible by 3.")
}else{
    alert("The inputted number is not divisible by 3.")
}

//Qno9

var a=+prompt("Enter a number: ")
if((a%2)==0){
    alert("The inputted number is Even Number.")
}else{
    alert("The inputted number is odd number.")
}

//Qno10

var temp=+prompt("Enter the Temperature: ")
if(temp>=40){
    alert("It is too hot outside")
}if(temp>=30&&temp<40){
    alert("The weather today is normal")
}if(temp>=20&&temp<30){
    alert("Today's weather is cool.")
}if(temp>=10&&temp<20){
    alert("OMG! Today's weather is so cool.")
}if(temp<10){
    alert("It is too cold outside.")
}

//Qno11

var a=parseInt(prompt("Enter First number: "))
var b=prompt("Enter Operator")
var a=parseInt(prompt("Enter Second number: "))
if(b=="+"){
    alert(a+b+c+" = "(a+b))
}else if(b=="-"){
    alert(a+b+c+" = "(a-b))
}else if(b=="*"){
    alert(a+b+c+" = "(a*b))
}else if(b=="/"){
    alert(a+b+c+" = "(a/b))
}else if(b=="%"){
    alert(a+b+c+" = "(a%b))
}else{
    alert("Wrong Input")
}


// CHAPTER 12-13

//Qno1

var a=prompt("Enter a letter")
if(a.charCodeAt()>=65&&a.charCodeAt()<=90){
    alert("The Input letter is in uppercase")
}else if(a.charCodeAt()>=97&&a.charCodeAt()<=122){
    alert("The Input letter is in lowercase")
}else{
    alert("Wrong Input")
}

//Qno2

var a=+prompt("Enter first number: ")
var b=+prompt("Enter Second number: ")
if(a>b){
    alert(a+" is greater than "+b)
}else if(a<b){
    alert(b+" is greater than "+a)
}else if(a==b){
    alert(a+" is equal to "+b)
}else{
    alert("Wrong input")
}

//Qno3

var a=+prompt("Enter number: ")
if(a>0){
    alert("Inputted number is a positive number.")
}else if(a<0){
    alert("Inputted number is a negative number.")
}else if(a==0){
    alert("Inputted number is zero.")
}else{
    alert("Wrong input")
}

//Qno4

var a=prompt("Enter a character: ")
if(a.toLowerCase()=="a" || a.toLowerCase()=="e" || a.toLowerCase()=="i" || a.toLowerCase()=="o" || a.toLowerCase()=="u"){
    alert("True")
}else{
    alert("False")
}

//Qno5

var a="Saylani"
var b=prompt("Enter your password")
if(a==b){
    alert("Correct! The password you entered matches the original password")
}else if(b==""){
    alert("Please Enter your password")
}else{
    alert("Incorrect password")
}

//Qno 6

// var hour = 13;
// if (hour < 18){
//      greeting = "Good day"; 
//      else 
//      greeting = "Good evening";
//      }
//FIX

var hour = 13
if(hour<18){
    alert("Good Day")
}else{
    alert("Good Evening")
}

//Qno7

var time=prompt("Enter Time in this format(1900)")
if(time>=0000&&time<1200){
    alert("Good Morning")
}else if(time>=1200&&time<1700){
    alert("Good afternon")
}else if(time>=1700&&time<2100){
    alert("Good Evening")
}else if(time>=2100&&time<=2359){
    alert("Good night")
}else{
    alert("Wrong Input")
}

// CHAPTER 14-16

//Qno1

var studentsname =[]


//Qno2

var studentname={}

//Qno3

var array=["apple","mango","orange"]

//Qno4

var num=[1,2,3,4,5]

//Qno5

var bool=[0,1]

//Qno6

var mix=["apple",120,0,"Junaid",19,"Saylani"]

//Qno7

var qual=["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"]
document.write("Qualifications: <br>")
for(var i=0;i<qual.length;i++){
    document.write((i+1)+") "+qual[i]+"<br>")
}

//Qno10

var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return a - b});
alert(points)

//Qno12
var arr = ["This","is","my","cat"];
var join=arr.join(" ")
document.write(join+"<br>")

//Qno13

var arr=["keyboard","mouse","printer","monitor"]
for(var j=0;j<arr.length;j++){
    document.write((j+1)+") "+arr[j]+"<br>")
}

//Qno14

var arr=["keyboard","mouse","printer","monitor"]
var a=1
for(var j=arr.length;j>0;j--){
    document.write(a+") "+arr[j-1]+"<br>")
    a=a+1
}


//CHAPTER 17-20

//Qno1

var arr=[["junaid",19],
          ["Emmad",20],
        ["Arsalan",20]  ]

//Qno2

var arr=[[0,1,2,3],
        [1,0,1,2]
        [2,1,0,1]]

//Qno3

for(var i=1;i<=10;i++){
    document.write(i+"<br>")
}

//Qno4

var a=+prompt("Enter a number")
var b=+prompt("Enter Length for multipilication")
for(var i=1;i<=b;i++){
    document.write("<br>"+a+" x "+i+" = "+(a*i))
}

//Qno5

var fruits=["apple","banana","mango","orange","strawberry"]
for(var i=0;i<fruits.length;i++){
    document.write("<br>"+fruits[i]+"<br>")
}

for(var j=0;j<fruits.length;j++){
    document.write("Elements at index "+j+" is "+fruits[j]+"<br>")
}

//Qno10
for(var i=1;i<=100;i++){
    if((i%5)==0){
        document.write(i+",")
    }
}

//CHAPTER 21-25

//QNO 1
var a= prompt("Enter your first name")
var b=prompt("Enter your last name")
var c = a+b;
alert("Full Name "+c);

//QNO 2
var a=prompt("Enter your Favourite phone model")
document.write("My favourite phone is : "+a);
document.write("<br> Length of string : "+a.length)

//QNO 3
var a= "Pakistani"
document.write("String : "+a+"<br>");
document.write("Index of \'n\' : "+a.indexOf("n"))

//QNO 4
var a= "Hello World"
document.write("String : "+a+"<br>");
document.write("Last Index of \'l\' : "+a.lastIndexOf("l"))

//QNO 5
var a= "Pakistani"
document.write("String : "+a+"<br>");
document.write("Character at index 3 : "+a[3])

//QNO 6
var a= prompt("Enter your first name");
var b=prompt("Enter your last name");
var c = a.concat(b);
alert("Full Name "+c)

//QNO 7
var a= "abad"
var b=prompt("Enter new : ")
document.write("City: Hyder"+a)
document.write("<br>After replacement: "+b+as)

//QNO 8
var message = ("Ali and Sami are best friends. They play cricket and football together.")
var replace = message.replace(/and/g,"&")
document.write(message+"<br>After Replace \"and\" with \"&\" : "+replace)

//QNO 9
var a="472"
document.write("Value: "+a)
document.write("<br>Type: "+typeof(a))
var b=parseInt(a)
document.write("<br>Value: "+b)
document.write("<br>Type: "+typeof(b))

//QNO 10
var a=prompt("Please Enter Something");
document.write("User Input : "+a);
document.write("<br>Upper Case : "+a.toUpperCase())

//QNO 11
var a=prompt("Please Enter Something");
document.write("User Input : "+a);
var sentence = a.toLowerCase().split(" ");
      for(var i = 0; i< sentence.length; i++){
         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
   document.write("<br>"+sentence.join(" "));
   
//QNO 12
var num = 35.36;
var b=num.toString();
document.write("Number: "+num)
document.write("<br>Result: ")
for(var i=0 ; i< b.length;i++){
    if(b[i]==="."){
        b[i]=""
    }
    else{
        document .write(b[i])
    }
}

//QNO 13
var a=prompt("Enter your username")
for(var i=0;i<=a.length();i++){
    if(a.charCodeAt(i)==33 || a.charCodeAt(i)==44 || a.charCodeAt(i)==46 || a.charCodeAt(i)==64){
        alert("Please enter a valid username. ")
    }
}


//QNO 14
var a=["cake","apple pie","cookie","chips","patties"]
var b=prompt("Give Input: ")
var c=1
for(var i=0;i<5;i++){
    if(b.toLowerCase()==a[i]){
        alert(a[i]+" is available at index "+i)
        c=c+1
        break
    }
}
if(c==1){
    alert(b.toLowerCase()+" is not available.")
}

//QNO 16
var name = "University Of Karachi";
var b=name.split("");
var c= name.length;
for(var i=0;i<c;i++){
    document.write(b[i]+"<br>");
}

//CHAPTER 26-30

//Qno1

var a=prompt("Enter a Positive Integer: ")
document.write("<br>number: "+a)
document.write("<br>round off value: "+Math.round(a))
document.write("<br>floor value: "+Math.floor(a))
document.write("<br>ceil value: "+Math.ceil(a))

//Qno2

var a=prompt("Enter a Negative Integer: ")
document.write("<br>number: "+a)
document.write("<br>round off value: "+Math.round(a))
document.write("<br>floor value: "+Math.floor(a))
document.write("<br>ceil value: "+Math.ceil(a))

//Qno 3
var a=prompt("Enter a number: ")
document.write("<br>The Absolute value of "+a+" is "+Math.abs(a))

//Qno 4
var random= Math.random()
alert("random dice value: "+(Math.floor(random)*6)+1)

//Qno5
var number=Math.floor(Math.random()*2)
if(number==2){
    alert("random coins value: Heads")
}else{
    alert("random coin value: Tails")
}

//Qno 6
var number=Math.floor(Math.random()*100);
alert("Random number between 1 and 100: "+number)

//Qno7
var a=prompt("Enter Your weight: ")
document.write("The Weight of user is "+a+" kilograms")

//Qno8
var a=Math.floor(Math.random()*10)
var b=prompt("Enter a number 1 to 10: ")
if(a==b){
    alert("You Win! you choose the right number.")
}else{
    alert("You Lose. you choose the wrong number.")
}

//CHAPTER 31-34

//Qno 1
alert(new Date());

//Qno2
var a= new Date();
var months=["January","February","March","April","May","June","July","August","September","October","November","December"]
var b=a.getMonth()
alert("Current Month: "+months[b])

//Qno3
var a= new Date();
var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
var b=a.getDay()
alert("Current Day: "+days[b])

//Qno4
var a= new Date();
var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]
var b=a.getDay()
if(b==0 || b==6){
    alert("It\'s Fun Day")
}else{
    alert("It\'s a working day.")
}

//Qno5
var a= new Date();
var b=a.getDate()
if(b<16){
    alert("First fifteen days of the month.")
}else{
    alert("Last days of the month.")
}

//Qno6
var a=new Date();
document.write("Current Date: "+a);
document.write("<br>Elapsed milliseconds since January 1, 1970: "+(d=a.getTime()))
document.write("<br>Elapsed minutes since January 1, 1970: "+((d/1000)/60))

//Qno7
var dt = new Date();
var h = dt.getHours()
if(h>12){
    alert("It\'s PM.")
}else{
    alert("It\'s AM.")
}

//Qno 8
var laterDate=new Date("Thu December 31, 2020 00:00:00")
alert(laterDate)

//Qno 9
var b=new Date("June 18, 2015")
var d=b.getTime()
var f=d/(1000*60*60*24)
alert(Math.floor(f)+" days have passed since 1st Ramadan 2015")

//Qno10
var b=new Date("Sat Dec 05, 2015 22:50:16")
var d=b.getTime()
var f=d/(1000*60)
alert(Math.floor(f)+" seconds passed since the beginning of 2015")


//Qno11
var a=new Date()
document.write("current time: "+a)
a.setHours(a.getHours() - 1)
document.write("<br>1 hour ago.it was "+a)

//Qno12
var b=new Date()
alert("current date: "+b)
b.setFullYear((b.getFullYear()-100))
alert("100 years back, it was "+b)

//Qno13
var a=prompt("Enter Your Age: ")
var b=new Date()
alert("Your birth year is "+(b.getFullYear()-a))

//Qno 14
var a=prompt("Enter Customer Name: ")
var b=prompt("Enter Month: ")
var c=prompt("Enter Units: ")
var d=(c*26)
var e=(d*0.05)
var f=(d+e)
document.write("K- Electric Bill<br><br>")
document.write("Customer Name: "+a+"<br>")
document.write("Current Month: "+b+"<br>")
document.write("Number of Units: "+c+"<br>")
document.write("Charges per Unit: 26<br>")
document.write("Net Amount Payable = "+d+"<br>")
document.write("Late Amount Surcharge 5% = "+e+"<br>")
document.write("Gross Amount Payable = "+f+"<br>")


//CHAPTER 35-38

//Qno 1
function date(){
    var a=new Date()
    alert(a)
}
date()

//Qno2
function full(a,b){
    alert("Full Name: "+a+" "+b)
}
var a=prompt("Enter your First Name: ")
var b=prompt("Enter Your Last Name: ")
full(a,b)

//Qno3
function sum(a,b){
    alert(a+"+"+b+" = "+(a+b))
}
var a=parseInt(prompt("Enter First Number: "))
var b=parseInt(prompt("Enter Second Name: "))
sum(a,b)

//Qno4
function calc(a,b,c){
    if(b=='+'){
        alert(a+b+c+" = "+(a+c))
    }
    if(b=='-'){
        alert(a+b+c+" = "+(a-c))
    }
    if(b=='*'){
        alert(a+b+c+" = "+(a*c))
    }
    if(b=='/'){
        alert(a+b+c+" = "+(a/c))
    }
}
var a=parseInt(prompt("Enter First Number: "))
var b=prompt("Enter Operator: ")
var c=parseInt(prompt("Enter Second Number: "))
calc(a,b,c)

//Qno 5
function power(a){
    alert("Square of "+a+" is: "+Math.pow(a,2))
}
var b=prompt("Enter a Number: ")
power(b)

//Qno 6
function factorial(num){
    if(num == 1){
        alert("You Entered 1.")
    }
    else{
        document.write("Factorial of "+num+" = ")
        for(var i=num; i>=1;i--){
            result=result*i;
            if(i==1){
                document.write(i+"=")
            }else{
            document.write(i+"*")
            }
        }
        document.write(result)
    }
}
var result=1;
var a=parseInt(prompt("Enter the Number: "))
factorial(a)


//Qno7
function counting(a,b){
    for(var i=a;i<=b;i++){
        if(i==b){
            document.write(i)
        }else{
        document.write(i+",")
        }    
    }
}
var a=parseInt(prompt("Enter the first number: "))
var b=parseInt(prompt("Enter the second number: "))
counting(a,b)

//Qno8
function calculateHypotenuse(base,perpendicular){
    function calculatesquare(){
        base=Math.pow(base,2)
        perpendicular=Math.pow(perpendicular,2)
    }
    calculatesquare();
    return(base+perpendicular)
}

var base=parseInt(prompt("Enter the base: "))
var perpendicular=parseInt(prompt("Enter the perpendicular: "))
var hypothenuse;
hypothenuse=calculateHypotenuse(base,perpendicular)
alert("Hypothenuse = "+hypothenuse)

//Qno9
function area(width,height){
    ans=width*height
    return(ans)
}
var ans;
var width=parseInt(prompt("Enter width: "))
var height=parseInt(prompt("Enter height: "))
var result;
result=area(width,height)
alert("Area: "+result)

//Qno10
function palindrome(str) {

    var len = str.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (str[i] !== str[len - 1 - i]) {
            a=a+1
        }
    }
    if(a==1){
        alert("The given word is palindrome")
    }else{
        alert("The given word is not palindrome")
    }
}
var a=1
var str=prompt("Enter a string: ")
palindrome(str)

//Qno11
function chnge(str){
    var lwr=str.toLowerCase();
    var sp= lwr.split(" ");
    var a=sp.length;
    for(var i=0;i<a;i++){
        sp[i]=sp[i].charAt(0).toUpperCase()+sp[i].substring(1);
        str=sp.join(" ")
    }
    alert(str)
}
var b=prompt("Please input: ")
chnge(b)


//Qno12
function check(str){
    var sp=str.split(" ")
    var long=0;
    var a;
    for(var i=0;i<sp.length;i++){
        if(sp[i].length>long){
            long=sp[i].length;
            a=sp[i]
        }
    }
    return (a);
}
var b=prompt("Enter string: ")
var get;
get=check(b)
alert(get)

//Qno13
function count(str,letter){
    var a=str.length
    var b=0;
    for(var i=0;i<=a;i++){
        if(str[i]==letter){
            b=b+1
        }
    }
    alert("The Occurence of "+letter.toUpperCase()+" in "+str+": "+b)
}
var c=prompt("Enter String: ")
var d=prompt("Enter Letter: ")
count(c,d)

//Qno14
function calcCircumference(radius){
    var circum=(2*3.142*radius)
    document.write("Circumference of Circle = "+circum+"<br>")
}
function clacArea(radius){
    var area=(3.142*(Math.pow(radius,2)))
    document.write("Area of circle = "+area)
}
var a=prompt("Enter Radius of a circle")
calcCircumference(a)
clacArea(a)

//CHAPTER 38-42

//Qno1
function power(a,b){
    alert(a+" power "+b+" = "+Math.pow(a,b))
}
var a=parseInt(prompt("Enter the Value: "))
var b=parseInt(prompt("Enter the power: "))
power(a,b)

//Qno2
function leap(year){
    if((year%4)==0){
        alert(year+" is a leap yaer")
    }else{
        alert(year+" is not a leap yaer")
    }
}
var year=parseInt(prompt("Enter the year: "))
leap(year)

//Qno3
function area(a,b,c){
    var answer=another(a,b,c)
    alert("AREA: "+(answer*((answer-a)*(answer-b)*(answer-c))))
}
function another(a,b,c){
    var s=((a+b+c)/2)
    return (s)
}
var a=parseInt(prompt("Enter the value of a: "))
var b=parseInt(prompt("Enter the value of b: "))
var c=parseInt(prompt("Enter the value of c: "))
area(a,b,c)

//Qno4
function main(a,b,c){
    var aver=avg(a,b,c)
    var percentage=per(a,b,c)
    document.write("Average = "+aver+"<br>")
    document.write("Percentage = "+percentage)
    
}
function avg(a,b,c){
    var average=((a+b+c)/3)
    return average
}
function per(a,b,c){
    var percent=(((a+b+c)/300)*100)
    return percent
}
var a=parseInt(prompt("Enter the marks of Islamiat out of 100: "))
var b=parseInt(prompt("Enter the marks of Mathematics out of 100: "))
var c=parseInt(prompt("Enter the marks of Physics out of 100: "))
main(a,b,c)

//Qno5
function index(str,a){
    alert("The Index of "+a+" is "+(str.indexOf(a)))
}
var str=prompt("Enter String")
var a=prompt("Enter the character you want to find indexOf: ")
index(str,a)

//Qno6
function disemvowel(string) {
    var ans=string.replace(/[aeiouAEIOU]/g, '' )
    return ans
  }
 
  var a=prompt("Enter a String: ")
  var result;
  result=disemvowel(a)
  alert("After Removing vowel from a string: "+result)

  //Qno7
  function occurence(str){
    for(var i=0;i<=str.length;i++){
       if(str[i]=='a' || str[i]=='A' || str[i]=='e' || str[i]=='E' ||  str[i]=='i' || str[i]=='I'
        || str[i]=='o' || str[i]=='O' || str[i]=='U' || str[i]=='u'){
          if(str[i+1]=='a' || str[i+1]=='A' || str[i+1]=='e' || str[i+1]=='E' || str[i+1]=='i'
          || str[i+1]=='I' || str[i+1]=='O' || str[i+1]=='o' || str[i+1]=='u' || str[i+1]=='U'){
             count ++;
          }
       }
    }
    return (count)
 }
 var count=0;
 var str=prompt("Enter a string: ")
 var res = occurence(str)
 alert("Two vowels in succesion occurs: "+res+" times")

 //Qno8
 function meters(dis){
    document.write(dis+" Kilometers = "+dis*1000+" meters<br>")
 }
 function feet(dis){
    document.write(dis+" Kilometers = "+dis*3280.84+" feet<br>")   
 }
 function inches(dis){
    document.write(dis+" Kilometers = "+dis*39370.1+" inches<br>")  
 }
 function centimeters(dis){
    document.write(dis+" Kilometers = "+dis*100000+" centimeters<br>")  
 }
 var a=prompt("Enter the Distance Kilometers: ")
 meters(a)
 feet(a)
 inches(a)
 centimeters(a)

 //Qno9
 function over(time){
    document.write("Your Overtime pay is: "+time*12)
 }
 var a=+prompt("Enter the time in hours: ")
 over(a)

 //CHAPTER 43-48

 //Qno1

function show(){
    alert("This is alert box")
}

//Qno2

function greet(){
    alert("Thanks for purchasing phone from us")
}

//Qno3

function SomeDeleteRowFunction(o) {
    var p=o.parentNode.parentNode;
        p.parentNode.removeChild(p);
}

//Qno4
function mouseover(){
    document.getElementById("im").src = "https://i.ytimg.com/vi/7PXLPzcIydw/hqdefault.jpg";
}
function mouseout() {
    document.getElementById("im").src = "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9";
}

//Qno5

var clicks = 0;
function onClickup() {
    clicks += 1;
    document.getElementById("clicks").innerHTML = clicks;
}
function onClickdown() {
    clicks -= 1;
    document.getElementById("clicks").innerHTML = clicks;
}

//CHAPTER 49-52

//Qno2
function showMore(){
    document.getElementById('more').style.display = "block";
}
