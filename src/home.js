let homeContent = document.createElement('div');
homeContent.classList.add('home-content');

let description = document.createElement('div');
description.classList.add('description');
description.textContent = 'We make authentic pastries, sweets, desserts, biscuits and a lot of other items. Enjoy the taste by joining us.'
homeContent.appendChild(description);

let timings = document.createElement('div');
timings.classList.add('timings');
let timings_heading =  document.createElement('div');
timings_heading.textContent = "Timings:"
timings_heading.classList.add('timings-heading');
let timings_content = document.createElement('div');
timings_content.classList.add('timings-content');
timings_content.textContent = 'Weekdays: 6 A.M - 6 P.M & Weekend: 6 A.M - 9 P.M';
timings.appendChild(timings_heading);
timings.appendChild(timings_content);
homeContent.appendChild(timings);

let location = document.createElement('div');
location.classList.add('location');
let location_heading = document.createElement('div');
location_heading.classList.add('location-heading');
location_heading.textContent = 'Location:';
let location_content = document.createElement('div');
location_content.classList.add('location-content');
location_content.textContent = 'Whispering Pines, Fantasia, A tranquil forested area famous for its tall pine trees and wildlife.';
location.appendChild(location_heading);
location.appendChild(location_content);
homeContent.appendChild(location);

export {homeContent};