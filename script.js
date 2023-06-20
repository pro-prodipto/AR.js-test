document.addEventListener('DOMContentLoaded', function () {
  // Get the text from the UTM parameter in the URL
  const urlParams = new URLSearchParams(window.location.search);
  const text = urlParams.get('utm_text');

  // Create a 3D text entity
  const textEntity = document.createElement('a-entity');
  textEntity.setAttribute('text', {
    value: text || 'Default Text',
    align: 'center',
    color: 'magenta', // Change the color to magenta
    width: 4
  });
  textEntity.setAttribute('look-at', '[gps-camera]');

  // Append the text entity to the container
  const container = document.getElementById('textContainer');
  container.appendChild(textEntity);
});
