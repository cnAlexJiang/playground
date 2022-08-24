// import { Chart } from '@antv/g2';
// import './style.css'
// import icon from './icon.svg'
// import './uitl'


// const data = [
//   { x: '1951 年', y: 38 },
//   { x: '1952 年', y: 52 },
//   { x: '1956 年', y: 61 },
//   { x: '1957 年', y: 145 },
//   { x: '1958 年', y: 48 },
//   { x: '1959 年', y: 38 },
//   { x: '1960 年', y: 38 },
//   { x: '1962 年', y: 38 },
// ];
// const chart = new Chart({
//   container: 'container',
//   autoFit: true,
//   height: 500,
// });

// // chart.tooltip({
// //   showCrosshairs: true,
// //   crosshairs: {
// //     type: 'xy',
// //     text: (type, defaultText, items) => {
// //       if (type === 'x') {
// //         return {
// //           offset: 5,
// //           position: 'end',
// //           content: defaultText + ' cm',
// //           style: {
// //             textAlign: 'center',
// //             textBaseline: 'top',
// //             fontSize: 14,
// //             fontWeight: 'bold',
// //           },
// //         };
// //       }
// //       return {
// //         offset: 5,
// //         content: defaultText + ' kg',
// //         style: {
// //           textAlign: 'end',
// //           fontSize: 14,
// //           fontWeight: 'bold',
// //         },
// //       };
// //     },
// //     textBackground: null,
// //   },
// // });

// chart.data(data);
// chart.scale('y', {
//   nice: true,
// });
// chart.axis('x', {
//   title: {
//     style: {
//       fill: '#1890ff',
//     },
//   },
// });
// chart.tooltip({
//   showMarkers: false
// });
// chart.interaction('active-region');

// chart.scale('y', {
//   alias: '销售量',
// });
// chart.axis('y', {
//   title: {},
// });
// chart
//   .interval()
//   .position('x*y')
//   .color('x*y', (grade, count) => {
//     console.log(111, grade, count)
//     if (grade == '1' || count > 40) {
//       return 'red';
//     }
//     return 'green';
//   });

// chart.render();

// import DataSet from '@antv/data-set';
// import { Chart } from '@antv/g2';

// fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/rain-flow.json')
//   .then((res) => res.json())
//   .then((data) => {
//     const ds = new DataSet({
//       state: {
//         start: new Date('2009/7/20 0:00').getTime(),
//         end: new Date('2009/9/9 0:00').getTime(),
//       },
//     });
//     const dv = ds.createView('origin').source(data);
//     dv.transform({
//       type: 'filter',
//       callback: function callback(obj) {
//         const time = new Date(obj.time).getTime(); // !注意：时间格式，建议转换为时间戳进行比较
//         return time >= ds.state.start && time <= ds.state.end;
//       },
//     });

//     const chart = new Chart({
//       container: 'container',
//       autoFit: true,
//       height: 440,
//       padding: [16, 50, 64],
//     });

//     chart.data(dv.rows);
//     chart.scale({
//       time: {
//         type: 'time',
//         tickCount: 8,
//         mask: 'M/DD HH:mm'
//       },
//       flow: {
//         alias: '流量(m^3/s)',
//         tickInterval: 50,
//         max: 300,
//         min: 0
//       },
//       rain: {
//         alias: '降雨量(mm)',
//         min: 0,
//         max: 12,
//         tickInterval: 2,
//       },
//     });

//     chart.axis('rain', {
//       grid: null,
//       title: {},
//     });
//     chart.axis('flow', {
//       title: {},
//     });

//     chart.legend({
//       position: 'top',
//       custom: true, // 自定义图例
//       offsetY: 4,
//       items: [
//         {
//           name: 'flow',
//           value: 'flow',
//           marker: { symbol: 'circle', style: { fill: 'l(100) 0:#a50f15 1:#fee5d9', r: 5 } },
//         },
//         {
//           name: 'rain',
//           value: 'rain',
//           marker: { symbol: 'circle', style: { fill: 'l(100) 0:#293c55 1:#f7f7f7', r: 5 } },
//         },
//       ],
//     });

//     chart.tooltip({
//       showCrosshairs: true,
//       shared: true,
//     });

//     chart.option('slider', {
//       start: 0.1,
//       end: 0.8,
//       trendCfg: {
//         isArea: false,
//       },
//     });

//     chart
//       .area()
//       .position('time*flow')
//       .color('l(100) 0:#a50f15 1:#fee5d9');
//     chart
//       .area()
//       .position('time*rain')
//       .color('l(100) 0:#293c55 1:#f7f7f7');

//     chart.interaction('element-visible-filter');

//     chart.render();
//   });


  import DataSet from '@antv/data-set';
import { Chart } from '@antv/g2';

fetch('https://gw.alipayobjects.com/os/antvdemo/assets/data/candle-sticks.json')
  .then(res => res.json())
  .then(data => {
    // 设置状态量，时间格式建议转换为时间戳，转换为时间戳时请注意区间
    const ds = new DataSet();
    const dv = ds.createView();
    dv.source(data)
      .transform({
        type: 'map',
        callback: obj => {
          obj.trend = (obj.start <= obj.end) ? '上涨' : '下跌';
          obj.range = [obj.start, obj.end, obj.max, obj.min];
          return obj;
        }
      });
    const chart = new Chart({
      container: 'container',
      autoFit: true,
      height: 400,
      padding: [10, 40, 40, 40]
    });
    chart.scale({
      time: {
        type: 'timeCat',
        range: [0, 1],
        tickCount: 4,
      },
      trend: {
        values: ['上涨', '下跌']
      },
      volumn: { alias: '成交量' },
      start: { alias: '开盘价' },
      end: { alias: '收盘价' },
      max: { alias: '最高价' },
      min: { alias: '最低价' },
      range: { alias: '股票价格' }
    });
    chart.tooltip({
      showTitle: false,
      showMarkers: false,
      itemTpl: '<li class="g2-tooltip-list-item" data-index={index}>'
        + '<span style="background-color:{color};" class="g2-tooltip-marker"></span>'
        + '{name}{value}</li>'
    });

    const kView = chart.createView({
      region: {
        start: { x: 0, y: 0 },
        end: { x: 1, y: 0.7 },
      }
    });
    kView.data(dv.rows);
    kView.schema()
      .position('time*range')
      .color('trend', val => {
        if (val === '上涨') {
          return '#f04864';
        }

        if (val === '下跌') {
          return '#2fc25b';
        }
      })
      .shape('candle')
      .tooltip('time*start*end*max*min', (time, start, end, max, min) => {
        return {
          name: time,
          value: '<br><span style="padding-left: 16px">开盘价：' + start + '</span><br/>'
            + '<span style="padding-left: 16px">收盘价：' + end + '</span><br/>'
            + '<span style="padding-left: 16px">最高价：' + max + '</span><br/>'
            + '<span style="padding-left: 16px">最低价：' + min + '</span>'
        };
      });

    const barView = chart.createView({
      region: {
        start: { x: 0, y: 0.7 },
        end: { x: 1, y: 1 },
      }
    });
    barView.data(dv.rows);
    barView.scale('volumn', {
      tickCount: 2,
    })
    barView.axis('time', {
      tickLine: null,
      label: null
    });
    barView.axis('volumn', {
      label: {
        formatter: val => {
          return +val / 1000 + 'k';
        }
      }
    });
    barView.interval()
      .position('time*volumn')
      .color('trend', val => {
        if (val === '上涨') {
          return '#f04864';
        }

        if (val === '下跌') {
          return '#2fc25b';
        }
      })
      .tooltip('time*volumn', (time, volumn) => {
        return {
          name: time,
          value: '<br/><span style="padding-left: 16px">成交量：' + volumn + '</span><br/>'
        };
      });

    chart.render();
  });
