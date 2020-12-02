
    var makeNavigation = function(slug) {
    var navigationContainer = document.querySelector('.work');
    var navigationContainer2 = document.querySelector('.work2');

    base('Portfolio').select({
        view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {
            records.forEach(function(record) {
                if (   window.location.pathname == '/' ||  window.location.href == 'index.html'){
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
                }}
          
              });

            
      
        
            },
            function done(err) {
                if (err) { console.error(err); return; }
            });
    }
    $(() => {
      var searchParam = document.location.search;
  
      var slug = searchParam.substring(1);

  
      makeNavigation();
  })