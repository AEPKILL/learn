function showJsonInElement(json, element) {
  element.innerText = JSON.stringify(json);
}

const clock = {
  element: document.getElementById('clock'),
  timer: null,
  restart() {
    clearInterval(this.timer);
    let time = 0;
    this.element.innerText = '0';
    this.timer = setInterval(() => {
      this.element.innerText = ++time;
    }, 1000);
  }
};

function fetchAndShowData() {
  // 当请求头中加入 max-age 的时候，在指定的时间内发起请求直接使用缓存
  // 不会向浏览器发起请求
  // 即使网络断开，也会成功返回缓存中的内容
  fetch('http://localhost:3001/api/data.json', { headers: { 'Cache-Control': 'max-stale=60000' } })
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
      clock.restart();
    });
}

document
  .getElementById('reloadJsonData')
  .addEventListener('click', fetchAndShowData);

fetchAndShowData();
