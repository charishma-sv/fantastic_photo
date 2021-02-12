$(document).ready(function () {
  const settings = {
    url: 'https://api.unsplash.com/topics/',
    method: 'GET',
    headers: {
      Authorization: 'Client-ID mYj9awBmDjuLzvC_Xa--o75rGZdsvi1EIWIRB3mxHxo',
    },
  };
  $.ajax(settings).done(function (response) {
    response.forEach((element) => {
      if (element == response[0]) {
        $('.carousel-inner').append(`
              <div class="carousel-item active">
                <img src="${element.cover_photo.urls.raw}" 
                class="d-block w-100" alt="${element.cover_photo.alt_description}">
                <div class="carousel-caption d-none d-md-block">
                  <p>${element.cover_photo.user.name}</p>
                </div>
              </div>`);
      } else {
        $('.carousel-inner').append(`
              <div class="carousel-item">
                <img src="${element.cover_photo.urls.raw}" 
                  class="d-block w-100" alt="${element.cover_photo.alt_description}" 
                >
                <div class="carousel-caption d-none d-md-block">
                  <p>${element.cover_photo.user.name}</p>
                </div>
              </div>`);
      }
    });
    // cards
    response.forEach((element) => {
      $('.row')
        .append(`<div class="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3 mt-3">
        <div class="card">
        <img
          src=${element.cover_photo.urls.raw}
          class="card-img-top"
        />
        <div class="card-body"> 
          <a href="details.html?id=${element.id}" class="btn btn-light">
            <h5 class="card-title">${element.title}</h5></a>
        </div>
      </div>
    </div>`);
    });
  });
});
