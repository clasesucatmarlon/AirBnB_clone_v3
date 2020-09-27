$(document).ready(function () {
    let a_list = [];
    let amenities = {};
    $('.amenities-list').change(function (event) {
      let amenityId = $(this).attr('data-id');
      let amenityName = $(this).attr('data-name');
  
      if (event['target']['checked']) {
        amenities[amenityId] = amenityName;
        a_list.push(amenityName);
      } else {
        delete amenities[amenityId];
        a_list.splice(a_list.indexOf(amenityName), 1);
      }
      $('.amenities h4').text(a_list);
    });
  });


let url = "http://0.0.0.0:5000/api/v1/status/";

$.get(url, function(body){
    if (body.status === "OK")
    {
      $('#api_status').addClass('available');
    }
    else
    {
      $('#api_status').removeClass('available');
    }
});
