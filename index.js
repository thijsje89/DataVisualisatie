(function Module() {
    //private variabels
    var dataset = [50, 40, 70, 80, 30];
    var svgWidth = 400,
        svgHeight = 300,
        barPadding = 10;
    var barWidth = (svgWidth / dataset.length);
    var svg = d3.select('svg');
    var yScale = d3.scaleLinear();
    var barChart = svg.selectAll('rect');
    var text = svg.selectAll("text");

   
    //verandert de grootte van de bars aan de hand van de bar met de grootste data
    function yScaleMethod() {
        svg.attr("width", svgWidth) //maakt aan de hand van de opgegeven svgHeight en width het canvas aan waarin we de verschillende bars neerzetten
            .attr("height", svgHeight);
        yScale.domain([0, d3.max(dataset)])
            .range([0, svgHeight])
    }
    //maakt aan de hand van de data de juiste hoeveelheid bars en met de juiste grootte
    function barChartMethod() {
        svg.attr("width", svgWidth)
            .attr("height", svgHeight);
        barChart.data(dataset)
            .enter()
            .append("rect")
            .attr("fill", "#ffb000")
            .attr("y", function (d) {
                return svgHeight - yScale(d) //Hoe meer de y as is hoe lager het getal van de informatie is. Dus stel ik heb een dataset van 80, 50, 30, 70. Dan wordt er bij het getal 30 meer afgehaald om ervoor te zorgen dat deze op de goede plek staat. Dit is wat de ingebouwde scaleLinear functie doet. Die ik hier gebruik om de hoogte van de bars aan te passen aan de data.

            })
            .attr("height", function (d) {
                return yScale(d); //past de hoogte van de bars op de juiste manier aan.
            })
            .attr("width", barWidth - barPadding) //haalt de padding eraf om zo de juiste width mee te geven.
            .attr("transform", function (d, i) {
                //zorgt ervoor dat de bars de juiste dikte hebben zodat ze in het canvas passen.
                var translate = [barWidth * i, 0];
                return "translate(" + translate + ")";
            });
    }
    // zet de juiste text op de goede plek neer die opgehaald wordt uit de dataset.
    function textMethod() {
        svg.attr("width", svgWidth)
            .attr("height", svgHeight);
        text.data(dataset)
            .enter()
            .append("text") 
            .attr("class", "infotext")
            .attr("font-size", "30px")
            .text(function (d) { //pakt de data uit de dataset en stopt het in het text variabele
                return d;

            })
            .attr("y", function (d, i) { //bepaalt de locatie van de tekst op de y as
                return svgHeight; 
            })
            .attr("x", function (d, i) { //bepaalt de locatie van de tekst op de x as
                return barWidth * i;
            })
            .attr("fill", "#ffffff") //kleur van de tekst
    }
    //hier voer ik alle methode functies uit die ik wil gebruiken: (alle methodes zijn apart van elkaar uit te voeren, modulair) 
    yScaleMethod();
    barChartMethod();
    textMethod();

})();
