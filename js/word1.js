var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var data = [
    { "text": "#designer", "url": "about.html" },
    { "text": "#student", "url": "about.html" },
    { "text": "#dataviz", "url": "content.html?wifi" },
    { "text": "#d3.js", "url": "content.html?milk" },
    { "text": "#quantum", "url": "content.html?quantum" },
    { "text": "#newyork", "url": "content.html?wifi" },
    { "text": "#storytelling", "url": "content.html?garden" },
    { "text": "#noise", "url": "content.html?map" },
    { "text": "#unity", "url": "content.html?museum" }




];
update(data);

function update(data) {

    var u = d3.select('#content')
        .selectAll('button')




    .data(data, function(d) {
            return d.text;
        })
        .on("click", function(d, i) {
            window.href(d.url, "_blank");
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
        //     .transition()
        //     .duration(500)

    // .style("opacity", 0)
    .remove();
}

setInterval(function() {
    // var data = [];
    var data = [
        { "text": "#designer", "url": "about.html" },
        { "text": "#student", "url": "about.html" },
        { "text": "#dataviz", "url": "content.html?wifi" },
        { "text": "#d3.js", "url": "content.html?milk" },
        { "text": "#quantum", "url": "content.html?quantum" },
        { "text": "#newyork", "url": "content.html?wifi" },
        { "text": "#storytelling", "url": "content.html?garden" },
        { "text": "#noise", "url": "content.html?map" },
        { "text": "#unity", "url": "content.html?museum" }



    ];
    var rand = Math.abs(Math.floor(Math.random() * data.length + 1 - 3) + 3);
    console.log(rand)
    shuffle(data);

    data = data.slice(0, rand);
    update(data);
}, 3000);

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}