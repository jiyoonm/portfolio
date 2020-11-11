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
    var headingimg = document.querySelector('.image-heading');
    var listSkills = document.querySelector('.skills');
    base('Portfolio').select({
        filterByFormula: formula,
        maxRecords: 1,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            data.push({ name: record.fields.Name, img: record.fields.FinalImages[0]['url'], collab: record.fields.Collaborators, role: record.fields.Role });
            heading.innerHTML = data[0].name;
            headingimg.src = data[0].img;
            listSkills.innerHTML = data[0].collab;
            heading.innerHTML = data[0].name;
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

var makeNavigation = function() {
    var navigationContainer = document.querySelector('.dynamic-navigation');

    base('Portfolio').select({
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
        records.forEach(function(record) {
            var listItem = document.createElement('li');
            var anchor = document.createElement('a');

            var link = 'content.html?' + record.fields.Slug;

            anchor.innerHTML = link;
            anchor.setAttribute('href', link);

            listItem.appendChild(anchor);

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