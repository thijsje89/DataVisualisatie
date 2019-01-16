# DataVisualisatie
Een datavisualisatie die ik gemaakt heb met d3.js, html en css. 
In deze datavisualisatie laat ik zien hoeveel mensen onze snapchat filter gezien hebben per stad.

Als je deze applicatie wilt inladen moet je het cdn hebben van d3.js:
https://d3js.org/d3.v4.min.js | D3.js

Ik gebruik flexbox voor de positionering van mijn svg's


Er zijn vier methods die aangeroepen worden door mijn Module:

1. yScaleMethod() //maakt aan de hand van de opgegeven svgHeight en width het canvas aan waarin we de verschillende bars neerzetten. Voor meer documentatie kijk in code.
  
2. barChartMethod() //maakt aan de hand van de data de juiste hoeveelheid bars aan met de juiste grootte. Voor meer documentatie kijk in code.

3. nmbMethod() // zet de juiste nummers op de goede plek neer die opgehaald wordt uit de dataset. Voor meer documentatie kijk in code.

4. textMethod()   // zet de juiste text op de goede plek neer die opgehaald wordt uit het label data. Voor meer documentatie kijk in code.


De private variabeles die ik gebruik zijn:
var dataset = [30, 70, 50, 80]; // de data die ik gebruik in zowel BarChartMethod() en nmbMethod().

var label = ["Den Bosch", "Amsterdam", "Eindhoven", "Utrecht", ]; // de data die ik gebruik in de textMethod() voor de steden.

var svgWidth = 360, svgHeight = 300, barPadding = 10; //de afmetingen van mijn svg.

var barWidth = (svgWidth / dataset.length); //de breedte van de bars afhankelijk van de lengte van mijn dataset en breedte van mijn svg.

var svg =  d3.select('svg').attr("width", svgWidth).attr("height", svgHeight); //gebruikt onze waardes om een svg canvas te maken

var yScale = d3.scaleLinear(); //dit is een functie van D3.js die we later gebruiken in de methodes om de bars in hoogte te scalen met het grootste nummer in de dataset.

var barChart = svg.selectAll('rect'); //selecteerd alle rechthoeken die we aanmaken in ons svg zodat we hier iets mee kunnen doen in de methodes
   
var text = svg.selectAll("text"); //selecteerd alle text zodat we hier iets mee kunnen doen in de methodes.


Door een svg aan te maken in je html selecteerd mijn programma deze automatisch en stopt daar ons svg in die we aan hebben gemaakt.
Voor meer over d3.js bekijk deze sites:
https://d3js.org/
https://bl.ocks.org/ 
