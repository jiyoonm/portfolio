var data = [];

var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyJvXFNWQIMm9EA2' }).base('apppokoJI4UZZFapT');

var fetchRecord = function(slug) {
    if (!slug) {
        console.log('No slug provided, cancelling API call');
        return;
    }

    var formula = 'Slug="' + slug + '"';
    var heading = document.querySelector('.dynamic-heading');
    var headingimg = document.querySelector('.image-container');
    var headingimg1 = document.querySelector('.image-container1');
    var headingimg2 = document.querySelector('.image-container2');

    var about = document.querySelector('.description');
    var listSkills = document.querySelector('.skills');
    base('Portfolio').select({
        filterByFormula: formula,
        maxRecords: 1,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            data.push({ name: record.fields.Name, img: record.fields.FinalImages[0]['url'], collab: record.fields.Collaborators, role: record.fields.Role, description: record.fields.Description });
            heading.innerHTML = data[0].name;
            // headingimg.src = data[0].img;
            listSkills.innerHTML = data[0].collab;
            about.innerHTML = data[0].description;
            record.fields.FinalImages.forEach(function(attachment) {
                var image = document.createElement('img');
                image.setAttribute('src', attachment.url);
                headingimg.appendChild(image);
            });
            record.fields.ConceptImages.forEach(function(attachment) {
                var image = document.createElement('img');
                image.setAttribute('src', attachment.url);
                headingimg1.appendChild(image);
            });
            record.fields.ProcessImages.forEach(function(attachment) {
                var image = document.createElement('img');
                image.setAttribute('src', attachment.url);
                headingimg2.appendChild(image);
            });
        });
        // records.forEach(function(record) {
        //     heading.innerHTML = record.fields.Name;
        //     headingimg.src = record.fields.FinalImages[0]['url'];
        // });
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
    console.log(data);

}


/* <script id="my-template" type="text/x-handlebars-template">
{{#each data}}

<h2 class="title"> {{website}} </h2>
{{#each website-info}}
<div class="items">
    <img src="{{content.image}}">
    <h3>{{title}}</h3>
    <p> {{content.paragraph}}</p>
</div>
{{/each}}
<div style="clear: both;"></div>
{{/each}}

</script> */


var makeNavigation = function() {
    var navigationContainer = document.querySelector('.work');

    base('Portfolio').select({
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {

            var listItem = document.createElement('div');
            var anchor = document.createElement('a');
            var about = document.createElement('p');

            record.fields.FinalImages.forEach(function(attachment) {
                var image = document.createElement('img');
                image.setAttribute('src', attachment.url);
                listItem.appendChild(image);
            });

            var link = 'content.html?' + record.fields.Slug;
            var heading = record.fields.Name;
            anchor.innerHTML = heading;
            anchor.setAttribute('href', link);
            about.innerHTML = record.fields.Description;
            listItem.appendChild(anchor);
            listItem.appendChild(about);

            navigationContainer.appendChild(listItem);

        });
    }, function done(err) {
        if (err) { console.error(err); return; }
    });
}


document.addEventListener('DOMContentLoaded', function(event) {
    // DOM Loaded!
    var searchParam = document.location.search;

    var slug = searchParam.substring(1);

    fetchRecord(slug);

    makeNavigation()
});