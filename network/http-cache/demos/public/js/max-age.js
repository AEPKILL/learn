function showJsonInElement(json, element) {
  element.innerText = JSON.stringify(json);
}

function fetchAndShowData() {
  fetch('/api/data.json', { headers: { 'Cache-Control': 'max-age=200' } })
    .then(response =>
      response.json().then(data =>
        Object.assign(
          {
            statusCode: response.status
          },
          { data }
        )
      )
    )
    .catch(error => error)
    .then(data =>
      showJsonInElement(data, document.getElementById('showDataJson'))
    );
}

document
  .getElementById('reloadJsonData')
  .addEventListener('click', fetchAndShowData);

fetchAndShowData();
