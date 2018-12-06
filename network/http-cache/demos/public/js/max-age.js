function showJsonInElement(json, element) {
  element.innerText = JSON.stringify(json);
}


function fetchAndShowData() {
  // 当请求头中加入 max-age 的时候，在指定的时间内发起请求直接使用缓存
  // 不会向浏览器发起请求
  // 即使网络断开，也会成功返回缓存中的内容
  fetch('/api/data.json', { headers: { 'Cache-Control': 'max-age=0' } })
    .then(
      response =>
        response.json().then(data =>
          Object.assign(
            {
              statusCode: response.status
            },
            { data }
          )
        ),
      error => error.message
    )
    .catch(error => error)
    .then(data => {
      showJsonInElement(data, document.getElementById('showDataJson'));
    });
}

document
  .getElementById('reloadJsonData')
  .addEventListener('click', fetchAndShowData);

fetchAndShowData();
