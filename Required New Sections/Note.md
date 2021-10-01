# CSS

web developer
front-end: HTML, CSS, JS
HTML: Hypertext Markup Language
CSS: Cascading Stylesheet
JS: functions

3 Ways: embedded, external, inline Stylesheet

- one way:
file name: styles.css
<style>
p {
    color: orange;
}
</style>

- 2nd way:
  in the html file under the head block
  <linl rel ="stylesheet" href="styles.css"> // in the same folder --- self closing elements
  or

<style>
p {
    color: orange;
}
</style>

- third way:
in the <body>
<p id="first" style = "color: balack; font-weight: bold"> text!!!

|||||<br>
vvvvv

in style
#frist {
color: balack;
font-weight: bold
}

floder for css
in the <head>
href="css/styles.css">

line-height: 1.15;

body{
margin: 10px;
}

conclusion: In the milestone 1 I have no clear idea about html and css can use "<linl rel ="stylesheet" href="styles.css">", like a hyperlink to html file, and also, I learned it can split one signle html file, to two files, .css and .html, after watched the videos, and I also update the in repo, floder called htmlWcss. [.html](https://github.com/boyuan1228/boyuan1228.github.io/blob/main/Achievements/htmlWcss/index.html), [.css](https://github.com/boyuan1228/boyuan1228.github.io/blob/main/Achievements/htmlWcss/style.css)

# JS

-

# TS

-

# HTML

-

# REACT w/JS

- For hello world
- const element =<h1> Hello World</h1>;
  console.log(element);




# canvas

"<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title></title>
<style type="text/css">
.chessboard{
    display:block;
    margin:50px auto;
}
</style>
 
<script>
     function drawChessBoard () {
            var c=document.getElementById("mycanvas");
                context=c.getContext("2d");
                context.fillRect(15,435,15,435);
                for(var i = 0; i < 15; i++){
                    context.moveTo(15 + i * 30 , 15);
                    context.lineTo(15 + i * 30 , 435);
                    //垂直方向画15根，相距30px
                    context.stroke();
                    context.moveTo(15 , 15 + i * 30);
                    context.lineTo(435 , 15 + i * 30); 
                    //水平方向画15根，相距30px
                    context.stroke();
                }
            }
         
</script>
</head>
<body onload="drawChessBoard()">
	<canvas id="mycanvas" width="450px" height="450px"class="chessboard"></canvas>
	
</body>
</html>"