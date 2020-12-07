var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var data = [
    { "text": "#designer", "url": "about.html" },
    { "text": "#student", "url": "https://www.newschool.edu/parsons/" },
    { "text": "#dataviz", "url": "content.html?wifi" },
    { "text": "#d3.js", "url": "content.html?milk" },
    { "text": "#restaurants", "url": "https://www.yelp.com/biz/pho-bang-restaurant-new-york" },
    { "text": "#quantum", "url": "content.html?quantum" },
    { "text": "#newyork", "url": "https://weather.com/weather/tenday/l/New+York+City+NY?canonicalCityId=a701ee19c4ab71bbbe2f6ba2fe8c250913883e5ae9b8eee8b54f8efbdb3eec03" },
    { "text": "#storytelling", "url": "content.html?garden" },
    { "text": "#montgomery", "url": "https://weather.com/weather/tenday/l/d0dcbf29e9198a4a60c03897b069e4043fb5d083a05073e382460668bef0118d" }


];
update(data);

function update(data) {
    var u = d3.select('#content')
        .selectAll('button')

    .data(data, function(d) {
            return d.text;
        })
        .on("click", function(d, i) {
            window.open(d.url, "_blank");
        });


    u.enter()
        .append('button')
        .attr('class', 'button-three')
        .merge(u)
        .text(function(d) {
            return d.text;
        })
        .on("click", function(d, i) {
            window.open(d.url, "_blank");
        })
        .transition() // apply a transition
        .ease(d3.easeLinear) // control the speed of the transition
        .duration(4000);

    u.exit()
        // .transition()
        // .style('left', function(d, i) {
        //     return i * 32 + 'px';
        // })
        .transition()
        .duration(500)
        .style("opacity", 0)
        .remove();
}

setInterval(function() {
    // var data = [];
    var data = [
        { "text": "#designer", "url": "about.html" },
        { "text": "#student", "url": "https://www.newschool.edu/parsons/" },
        { "text": "#dataviz", "url": "content.html?wifi" },
        { "text": "#d3.js", "url": "content.html?milk" },
        { "text": "#restaurants", "url": "https://www.yelp.com/biz/pho-bang-restaurant-new-york" },
        { "text": "#quantum", "url": "content.html?quantum" },
        { "text": "#newyork", "url": "https://weather.com/weather/tenday/l/New+York+City+NY?canonicalCityId=a701ee19c4ab71bbbe2f6ba2fe8c250913883e5ae9b8eee8b54f8efbdb3eec03" },
        { "text": "#storytelling", "url": "content.html?garden" },
        { "text": "#montgomery", "url": "https://weather.com/weather/tenday/l/d0dcbf29e9198a4a60c03897b069e4043fb5d083a05073e382460668bef0118d" }



    ];
    var rand = Math.floor(Math.random() * data.length + 1);
    shuffle(data);

    data = data.slice(0, rand);
    update(data);
}, 2500);

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}