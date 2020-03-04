import { Chart } from '@antv/g2';

const data = [
  { feature: 'Battery', value: 0.22, phone: 'iPhone' },
  { feature: 'Brand', value: 0.28, phone: 'iPhone' },
  { feature: 'Contract', value: 0.29, phone: 'iPhone' },
  { feature: 'Design', value: 0.17, phone: 'iPhone' },
  { feature: 'Internet', value: 0.22, phone: 'iPhone' },
  { feature: 'Large', value: 0.02, phone: 'iPhone' },
  { feature: 'Price', value: 0.21, phone: 'iPhone' },
  { feature: 'Smartphone', value: 0.5, phone: 'iPhone' },
  { feature: 'Battery', value: 0.27, phone: 'Samsung' },
  { feature: 'Brand', value: 0.16, phone: 'Samsung' },
  { feature: 'Contract', value: 0.35, phone: 'Samsung' },
  { feature: 'Design', value: 0.13, phone: 'Samsung' },
  { feature: 'Internet', value: 0.2, phone: 'Samsung' },
  { feature: 'Large', value: 0.13, phone: 'Samsung' },
  { feature: 'Price', value: 0.35, phone: 'Samsung' },
  { feature: 'Smartphone', value: 0.38, phone: 'Samsung' },
  { feature: 'Battery', value: 0.26, phone: 'Nokia Smartphone' },
  { feature: 'Brand', value: 0.1, phone: 'Nokia Smartphone' },
  { feature: 'Contract', value: 0.3, phone: 'Nokia Smartphone' },
  { feature: 'Design', value: 0.14, phone: 'Nokia Smartphone' },
  { feature: 'Internet', value: 0.22, phone: 'Nokia Smartphone' },
  { feature: 'Large', value: 0.04, phone: 'Nokia Smartphone' },
  { feature: 'Price', value: 0.41, phone: 'Nokia Smartphone' },
  { feature: 'Smartphone', value: 0.3, phone: 'Nokia Smartphone' }
];

const chart = new Chart({
  container: 'container',
  autoFit: false,
  width: 600,
  height: 300
});

chart.data(data);

chart
  .line()
  // .adjust('stack')
  .position('feature*value')
  .color('phone')
  .size(6);

// chart.facet('rect', {
//   fields: ['phone'],
//   rowTitle: {
//     style: {
//       textAlign: 'start',
//       fontSize: 12
//     }
//   },
//   eachView(view) {
//     view.area().position('feature*value');
//     view.line().position('feature*value');
//     view
//       .point()
//       .position('feature*value')
//       .shape('circle');
//   }
// });
chart.render();

const btn = document.createElement('button');
btn.innerText = 'change';
btn.addEventListener('click', () => {
  // chart.changeData(
  //   data.map(item => ({
  //     ...item,
  //     value: item.value * (Math.random() + 0.1)
  //   }))
  // );
  // chart
  //   .area()
  //   // .adjust('stack')
  //   .position('feature*value')
  //   .color('phone')
  //   .size(6);
  chart.changeSize(1000, 500)
});
document.body.appendChild(btn);
