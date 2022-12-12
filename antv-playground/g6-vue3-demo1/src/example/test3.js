import G6 from '@antv/g6';

const MIN_ARROW_SIZE = 3

let n = 1
const uniqueId = () => {
  return n++
}
 

const offset = 50;
function getPath(start, end) {
  let cx1, cx2, cy1, cy2;
  if (start.x <= end.x) {
    const temp = (end.x - start.x) / 2;
    const delta = temp > offset ? temp : offset;
    cx1 = start.x + delta;
    cx2 = end.x - delta;
    cy1 = start.y;
    cy2 = end.y;
  }
  if (start.x > end.x) {
    cx1 = start.x + offset;
    cx2 = end.x - offset > 0 ? end.x - offset : 0;
    cy1 = start.y;
    cy2 = end.y;
  }
  const path = [
    ['M', start.x, start.y],
    ['C', cx1, cy1, cx2, cy2, end.x, end.y - 4],
    ['L', end.x, end.y],
  ];
  console.log('path', path);
  return path;
}


export function init () {


  G6.registerEdge('line-arrow', {
    draw (cfg, group) {
      let sourceNode, targetNode, start, end
      if (typeof (cfg.source) === 'string') {
        cfg.source = cfg.sourceNode
      }
  
      start = cfg.startPoint
      end = cfg.endPoint
      const divisor = 40
      let path = []
      path = getPath(start, end)
      let lineWidth = 1;
      lineWidth = lineWidth > MIN_ARROW_SIZE ? lineWidth : MIN_ARROW_SIZE;
      const width = lineWidth * 10 / 3;
      const halfHeight = lineWidth * 4 / 3;
      const radius = lineWidth * 4;
      const endArrowPath = [
        ['M', -width, halfHeight],
        ['L', 0, 0],
        ['L', -width, -halfHeight],
        ['A', radius, radius, 0, 0, 1, -width, halfHeight],
        ['Z']
      ];
      const keyShape = group.addShape('path', {
        attrs: {
          id: 'edge' + uniqueId(),
          path: path,
          stroke: '#b8c3ce',
          lineAppendWidth: 10,
          // opacity: 0,
          // endArrow: {
          //   path: endArrowPath,
          // }
        }
      });
      return keyShape
    },
 
  });


  const data = {
    nodes: [
      {
        id: '7',
        x: 150,
        y: 100,
        size: 40,
        anchorPoints: [
          [1, 0.5],
          [1, 0],
        ],
      },
      {
        id: '8',
        x: 300,
        y: 100,
        size: 40,
        anchorPoints: [
          [0, 0.5],
          [0, 1],
        ],
      },
    ],
    edges: [
      {
        source: '7',
        target: '8',
        sourceAnchor: 0,
        targetAnchor: 0,
      },
    ],
  };

  const container = document.getElementById('container');
  const width = container.scrollWidth;
  const height = container.scrollHeight || 500;
  const graph = new G6.Graph({
    container: 'container',
    width,
    height,
    // translate the graph to align the canvas's center, support by v3.5.1
    fitCenter: true,
    modes: {
      // behavior
      default: ['drag-node', 'drag-canvas'],
    },
    defaultNode: {
      type: 'circle',
      style: {
        fill: '#DEE9FF',
        stroke: '#5B8FF9',
      },
      linkPoints: {
        left: true,
        right: true,
        fill: '#fff',
        stroke: '#1890FF',
        size: 3,
      },
    },
    defaultEdge: {
      type: 'line-arrow',
      style: {
        stroke: '#F6BD16',
        startArrow: {
          path: 'M 0,0 L 12,6 L 9,0 L 12,-6 Z',
          fill: '#F6BD16',
        },
        endArrow: {
          path: 'M 0,0 L 12,6 L 9,0 L 12,-6 Z',
          fill: '#F6BD16',
        },
      },
    },
  });

  graph.data(data);
  graph.render();

  if (typeof window !== 'undefined')
    window.onresize = () => {
      if (!graph || graph.get('destroyed')) return;
      if (!container || !container.scrollWidth || !container.scrollHeight) return;
      graph.changeSize(container.scrollWidth, container.scrollHeight);
    };
}
