var dataset = [50, 40, 70, 80, 30];
var svgWidth = 400, svgHeight = 300, barPadding = 10;
var barWidth = (svgWidth / dataset.length);

var svg = d3.select('svg')
    .attr("width", svgWidth)
    .attr("height", svgHeight);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgHeight])

var barChart = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append("rect")
    .attr("fill", "#ffb000")
    .attr("y", function(d){
        return svgHeight - yScale(d)
    })
    .attr("height", function(d){
        return yScale(d);
    })
    .attr("width", barWidth - barPadding)
    .attr("transform", function(d, i){
        var translate = [barWidth * i, 0];
        return "translate("+ translate +")";
    });
    
var text = svg.selectAll("text")
    .data(dataset)
    .enter()
    .append("text")
    .attr("class", "infotext")
    .attr("font-size", "30px")
    .text(function(d){
        return d;
        
    })
    .attr("y", function(d, i){
        return svgHeight;
    })
    .attr("x", function(d, i){
        return barWidth * i;
    })
    .attr("fill", "#ffffff")

//button styling

