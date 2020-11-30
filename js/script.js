var data = [];

var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyJvXFNWQIMm9EA2' }).base('apppokoJI4UZZFapT');


var fetchRecord = function(slug) {
    if (!slug) {
        console.log('No slug provided, cancelling API call');
        return;
    }

    var formula = 'Slug="' + slug + '"';

    // var heading = document.querySelector('.type-heading-2');
    // var headingimg = document.querySelector('.image-container');
    // var headingimg1 = document.querySelector('.image-container1');
    // var headingimg2 = document.querySelector('.image-container2');
    // var headingimg3 = document.querySelector('.image-container3');
    // var headingimg4 = document.querySelector('.image-container4');
    // var about = document.querySelector('.description');
    // var listSkills = document.querySelector('.skills');

    // $(".type-heading-2").attr("src", icon);
    // $(".image-container").append(weather);
    // $(".image-container2").append(Math.floor(temp * 9 / 5 - 459.67) + " F")
    // $(".image-container3").append(cityName + ", " + country)


    base('Portfolio').select({
        filterByFormula: formula,
        maxRecords: 1,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                data.push({ name: record.fields.Name, img: record.fields.FinalImages[0]['url'], collab: record.fields.Collaborators, skills: record.fields.Skills, role: record.fields.Role, time: record.fields.TimeFrame, about: record.fields.Description, overview: record.fields.Overview, concept: record.fields.Concept, prototype: record.fields.Prototype, final: record.fields.Final });
                $(".type-heading-2").append(data[0].name);
                $("#about").append(data[0].about);
                $("#skills").append(data[0].skills);
                $("#role").append(data[0].role);
                $("#collab").append(data[0].collab);
                $("#time").append(data[0].time);
                $("#overview").append(data[0].overview);
                $("#concept").append(data[0].concept);
                $("#prototype").append(data[0].prototype);
                $("#final").append(data[0].final);


                record.fields.FinalImages.forEach(function(attachment) {
                    $('<img />', {
                        src: attachment.url,
                    }).appendTo($(".image-container"))
                });

                if (record.fields.ConceptImages && record.fields.ConceptImages.length > 0) {

                    record.fields.ConceptImages.forEach(function(attachment) {
                        $('<img />', {
                            src: attachment.url,
                        }).appendTo($(".image-container1"))
                    });
                }

                if (record.fields.ProcessImages && record.fields.ProcessImages.length > 0) {
                    record.fields.ProcessImages.forEach(function(attachment) {
                        $('<img />', {
                            src: attachment.url,
                        }).appendTo($(".image-container2"))
                    });
                }

                if (record.fields.LastImage && record.fields.LastImage.length > 0) {
                    record.fields.LastImage.forEach(function(attachment) {
                        $('<img />', {
                            src: attachment.url,
                        }).appendTo($(".image-container3"))
                    });
                }
                if (record.fields.VideoFinal && record.fields.VideoFinal.length > 0) {
                    $('.video-container').css("height", "70vh");

                    $("#ki").attr("src", record.fields.VideoFinal);

                }


            });

        },
        function done(err) {
            if (err) { console.error(err); return; }
        });
    console.log(data);

}


var makeNavigation = function() {


    var navigationContainer = document.querySelector('.work');
    var navigationContainer2 = document.querySelector('.work2');

    base('Portfolio').select({
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                var link = 'content.html?' + record.fields.Slug;

                var listItem = document.createElement('div');
                var anchor = document.createElement('a');
                var about = document.createElement('p');


                $('<img />', {
                    src: record.fields.FinalImages[0]['url'],
                }).appendTo(listItem)

                var heading = record.fields.Name;
                anchor.innerHTML = heading;
                anchor.setAttribute('href', link);
                about.innerHTML = record.fields.Description;
                listItem.appendChild(anchor);
                listItem.appendChild(about);
                if (record.fields.Type == "project") {

                    navigationContainer.appendChild(listItem);
                }
                if (record.fields.Type == "website") {

                    navigationContainer2.appendChild(listItem);
                }

            });
        },
        function done(err) {
            if (err) { console.error(err); return; }
        });
}
$(() => {
    var searchParam = document.location.search;

    var slug = searchParam.substring(1);
    fetchRecord(slug);

    makeNavigation();
})