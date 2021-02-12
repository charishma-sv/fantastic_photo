$(document).ready(function () {
  const query = window.location.search.substring(1);
  const qs = parse_query_string(query);
  const queryStr = qs.id;
  //api connection
  const settings = {
    url: 'https://api.unsplash.com/topics/' + queryStr,
    method: 'GET',
    headers: {
      Authorization: 'Client-ID mYj9awBmDjuLzvC_Xa--o75rGZdsvi1EIWIRB3mxHxo',
    },
  };
  $.ajax(settings).done(function (response) {
    $('#page-head').html(`${response.title}`);
    response.preview_photos.forEach((element) => {
      $('#images').append(`<div class="col-12 col-sm-6 mt-3">
        <div class="card">
          <img src="${element.urls.full}" class="card-img-top" alt="..." style="height:500px" >
        </div>
        
      </div>`);
    });
    $('#description').html(`${response.description}`);
  });
});
