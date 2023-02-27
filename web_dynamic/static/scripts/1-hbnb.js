// listen for changes on each input checkbox tag

document.addEventListener('DOMContentLoaded', function () {
  const amenities = {};
  $('input[type=checkbox]').change(function () {
    if ($(this).prop('checked')) {
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else if (!$(this).prop('checked')) {
      delete amenities[$(this).attr('data-id')];
    }
    if (Object.keys(amenities).length == 0) {
      $('div.amenities h4').html('&nbsp;');
    } else {
      $('div.amenities h4').text(Object.values(amenities).join(', '));
    }
  });
});
