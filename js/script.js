var data = [];


var Airtable = require('airtable');
var base = new Airtable({ apiKey: 'keyJvXFNWQIMm9EA2' }).base('apppokoJI4UZZFapT');


var fetchRecord = function(slug) {
    if (!slug) {
        console.log('No slug provided, cancelling API call');
        return;
    }

    var formula = 'Slug="' + slug + '"';

<<<<<<< HEAD
    // var heading = document.querySelector('.type-heading-2');
    // var headingimg = document.querySelector('.image-container');
    // var headingimg1 = document.querySelector('.image-container1');
    // var headingimg2 = document.querySelector('.image-container2');
    // var headingimg3 = document.querySelector('.image-container3');
    // var headingimg4 = document.querySelector('.image-container4');
    // var about = document.querySelector('.description');
    // var listSkills = document.querySelector('.skills');


=======
>>>>>>> 66820d85954390cf976871e290c97116d7f7f110
    base('Portfolio').select({
        filterByFormula: formula,
        maxRecords: 1,
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                data.push({ name: record.fields.Name, img: record.fields.FinalImages[0]['url'], collab: record.fields.Collaborators, skills: record.fields.Skills, role: record.fields.Role, time: record.fields.TimeFrame, about: record.fields.Description, overview: record.fields.Overview, concept: record.fields.Concept, prototype: record.fields.Prototype, final: record.fields.Final, overviewHead: record.fields.OverviewHeading, conceptHead: record.fields.ConceptHeading, processHead: record.fields.ProcessHeading, finalHead: record.fields.FinalHeading });
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
                $("#overview-head").append(data[0].overviewHead);
                $("#concept-head").append(data[0].conceptHead);
                $("#process-head").append(data[0].processHead);
                $("#final-head").append(data[0].finalHead);




                $('<img />', {
                    src: record.fields.FinalImages[0].url,

                }).appendTo($(".image-container"))


                if (record.fields.ConceptImages && record.fields.ConceptImages.length > 0) {

                    record.fields.ConceptImages.forEach(function(attachment) {
                        if (attachment.thumbnails) {
                            $('<img />', {
                                src: attachment.thumbnails.large.url,
                            }).appendTo($(".image-container1"))
                        } else {
                            $('<img />', {
                                src: attachment.url,
                            }).appendTo($(".image-container1"))
                        }
                    });
                }

                if (record.fields.ProcessImages && record.fields.ProcessImages.length > 0) {

                    record.fields.ProcessImages.forEach(function(attachment) {

                        $('<img />', {
                            src: attachment.url,
                        }).appendTo($(".image-container2"))

                    });
                }
                if (record.fields.ProcessVideo && record.fields.ProcessVideo.length > 0) {
                    $('.video-container1').css("height", "40vh");

                    $("#vid").attr("src", record.fields.ProcessVideo);

                }

                if (record.fields.LastImage && record.fields.LastImage.length > 0) {
                    record.fields.LastImage.forEach(function(attachment) {

                        $('<img />', {
                            src: attachment.url,
                        }).appendTo($(".image-container3"))
                    });
                }
                if (record.fields.VideoFinal && record.fields.VideoFinal.length > 0) {
                    $('.video-container').css("height", "80vh");

                    $("#ki").attr("src", record.fields.VideoFinal);

                }

                // if (record.fields.files && record.fields.files.length > 0) {
                //     record.fields.files.forEach(function(attachment) {
                //         $("#final").append(attachment.url);
                //     });
                // }

            });

        },
        function done(err) {
            if (err) { console.error(err); return; }
        });

}
var slugs = [];
var urls = [];
var makeButtonNav = function(slug) {

    base('Portfolio').select({
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                slugs.push(record.fields.Slug);
                urls.push(record.fields.FinalImages[0].url);

                for (let i = 0; i < slugs.length; i++) {
                    if (slug == slugs[i]) {

<<<<<<< HEAD
                        $('#previous').mouseover(function() {
                            if (i > 0) {
                                i--;
                            } else if (i == 0) {
                                i = slugs.length - 1;
                            }
                            $('#previous').click(function() {

                                window.location.href = "content.html?" + slugs[i];
                            });
                            $("#my_image").css("opacity", 1);

                            $("#my_image").attr("src", urls[i]);
                        });
                        $('#previous').mouseout(function() {
                            i++;
                            $("#my_image").css("opacity", 0);
                        });


                        $('#next').mouseover(function() {
                            if (i < slugs.length - 1) {
                                i++;
                            } else if (i == slugs.length - 1) {
                                i = 0;
                            }
                            $('#next').click(function() {

                                window.location.href = "content.html?" + slugs[i];
                            });
                            $("#my_image1").css("opacity", 1);

                            $("#my_image1").attr("src", urls[i]);
                        });
                        $('#next').mouseout(function() {
                            i--;
                            $("#my_image1").css("opacity", 0);
                        });
                    }
                }

                for (let i = 0; i < urls.length; i++) {


                }

=======
                        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                            $('#previous').click(function() {
                                if (i > 0) {
                                    i--;
                                } else if (i == 0) {
                                    i = slugs.length - 1;
                                }
                                window.location.href = "content.html?" + slugs[i];
                            });
                            $('#next').click(function() {
                                if (i < slugs.length - 1) {
                                    i++;
                                } else if (i == slugs.length - 1) {
                                    i = 0;
                                }
                                window.location.href = "content.html?" + slugs[i];
                            });
                        } else {
                            $('#previous').mouseover(function() {
                                if (i > 0) {
                                    i--;
                                } else if (i == 0) {
                                    i = slugs.length - 1;
                                }
                                $('#previous').click(function() {

                                    window.location.href = "content.html?" + slugs[i];
                                });
                                $("#my_image").css("opacity", 1);

                                $("#my_image").attr("src", urls[i]);
                            });
                            $('#previous').mouseout(function() {
                                if (i < slugs.length - 1) {
                                    i++;
                                } else if (i == slugs.length - 1) {
                                    i = 0;
                                }
                                $("#my_image").css("opacity", 0);
                            });


                            $('#next').mouseover(function() {
                                if (i < slugs.length - 1) {
                                    i++;
                                } else if (i == slugs.length - 1) {
                                    i = 0;
                                }
                                $('#next').click(function() {

                                    window.location.href = "content.html?" + slugs[i];
                                });
                                $("#my_image1").css("opacity", 1);

                                $("#my_image1").attr("src", urls[i]);
                            });
                            $('#next').mouseout(function() {
                                if (i > 0) {
                                    i--;
                                } else if (i == 0) {
                                    i = slugs.length - 1;
                                }
                                $("#my_image1").css("opacity", 0);
                            });
                        }
                    }
                }

>>>>>>> 66820d85954390cf976871e290c97116d7f7f110
            });
        },
        function done(err) {
            if (err) { console.error(err); return; }
        });
}

var makeNavigation = function() {


    var navigationContainer = document.querySelector('.work');
    var navigationContainer2 = document.querySelector('.work2');
    var navigationContainer3 = document.querySelector('#navcon');


    base('Portfolio').select({
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                var link = 'content.html?' + record.fields.Slug;
                var heading = record.fields.Name;


                //nav bar 
                var list = document.createElement('li');
                var anchor1 = document.createElement('a');
                list.classList.add('item');
                anchor1.setAttribute('href', link);
                anchor1.innerHTML = heading;
                list.appendChild(anchor1);
                navigationContainer3.appendChild(list);



                //Home page nav
                var listItem = document.createElement('div')
                var anchor = document.createElement('a');
                anchor.classList.add('items');

                var about = document.createElement('p');
                var name = document.createElement('h3');




                // if (record.fields.FinalImages[1]) {

                //     $('<img />', {

                //         src: record.fields.FinalImages[1].url,



                //     }).appendTo(listItem).addClass("myClass");
                // } else {
                $('<img />', {

                    src: record.fields.FinalImages[0].url,



                }).appendTo(listItem).addClass("myClass");
                // }



                name.innerHTML = heading + "<span class='diss'> &#8594</span>" + '<span class="slider" style="background-color: white"></span> ';
                anchor.setAttribute('href', link);
                about.innerHTML = record.fields.Description;
                listItem.appendChild(name);

                listItem.appendChild(about);
                anchor.appendChild(listItem);

                if (record.fields.Type == "project" && navigationContainer) {

                    navigationContainer.appendChild(anchor);
                }
                if (record.fields.Type == "website" && navigationContainer2) {

                    navigationContainer2.appendChild(anchor);
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
    makeButtonNav(slug);
})

var btn = document.getElementById("btn");

function myFunction() {

    document.getElementById("myDropdown").classList.toggle("show");
    document.getElementById("overlay").classList.toggle("p");
    document.getElementById("btn").classList.toggle("dark1");



}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var overlay = document.getElementById("overlay");
        var btn = document.getElementById("btn");

        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
                overlay.classList.remove('p');
                btn.classList.remove('dark1');


            }
        }
    }
}
$(document).mousemove(function(e) {
    $('#my_image').offset({
        left: e.pageX - 170,
        top: e.pageY - 30
    });
    $('#my_image1').offset({
        left: e.pageX + 20,
        top: e.pageY - 30
    });
});