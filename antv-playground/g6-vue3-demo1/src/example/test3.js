import G6 from '@antv/g6';

const MIN_ARROW_SIZE = 3

let n= 1
const uniqueId = ()=>{
  return n++
}

export function init () {

  /**
   * Custom a new polyline
   * by siogo's issue（https://github.com/antvis/g6/issues/814）
   *
   * If you want to fit the dragging, you need to adjust the controlpoints while dragging
   */
  // G6.registerEdge('line-arrow', {
  //   options: {
  //     style: {
  //       stroke: '#ccc',
  //     },
  //   },
  //   draw: function draw (cfg, group) {
  //     const startPoint = cfg.startPoint;
  //     const endPoint = cfg.endPoint;

  //     const stroke = (cfg.style && cfg.style.stroke) || this.options.style.stroke;
  //     const startArrow = (cfg.style && cfg.style.startArrow) || undefined;
  //     const endArrow = (cfg.style && cfg.style.endArrow) || undefined;

  //     const keyShape = group.addShape('path', {
  //       attrs: {
  //         path: [
  //           ['M', startPoint.x, startPoint.y],
  //           ['L', endPoint.x / 3 + (2 / 3) * startPoint.x, startPoint.y],
  //           ['L', endPoint.x / 3 + (2 / 3) * startPoint.x, endPoint.y],
  //           ['L', endPoint.x, endPoint.y],
  //         ],
  //         stroke,
  //         lineWidth: 1,
  //         startArrow,
  //         endArrow,
  //       },
  //       className: 'edge-shape',
  //       name: 'edge-shape',
  //     });
  //     return keyShape;
  //   },
  // }, 'cubic');
  G6.registerEdge('line-arrow', {
    draw (cfg, group) {
      console.log('cfg=', cfg, 'group=', group);
      let sourceNode, targetNode, start, end
      if (typeof (cfg.source) === 'string') {
        cfg.source = cfg.sourceNode
      }
      if (!cfg.start) {
        cfg.start = {
          x: 20,
          y: 0
        }
      }
      if (!cfg.end) {
        cfg.end = {
          x: -20,
          y: 0
        }
      }
      if (!cfg.source.x) {
        sourceNode = cfg.source.getModel()
        start = { x: sourceNode.x + cfg.start.x, y: sourceNode.y + cfg.start.y }
      } else {
        start = cfg.source
      }
      console.log('start', start)
      if (typeof (cfg.target) === 'string') {
        cfg.target = cfg.targetNode
      }
      if (!cfg.target.x) {

        targetNode = cfg.target.getModel()
        end = { x: targetNode.x + cfg.end.x, y: targetNode.y + cfg.end.y }
      } else {
        end = cfg.target
      }
      const divisor = 40
      let path = []
      let hgap = Math.abs(end.x - start.x)
      if (end.x > start.x) {
        console.log('endx > start.x', end.x, '   ' , start.x)
        path = [
          ['M', start.x, start.y],
          [
            'C',
            start.x,  start.y - hgap / (hgap / divisor),
            end.x,    end.y + hgap / (hgap / divisor),
            end.x,    end.y - 4
          ],
          [
            'L',
            end.x,
            end.y
          ]
        ]
      } else {
        console.log('else  ', end.x, '   ' , start.x)

        path = [
          ['M', start.x, start.y],
          [
            'C',
            start.x,    start.y - hgap / (hgap / divisor),
            end.x,      end.y + hgap / (hgap / divisor),
            end.x,      end.y - 4
          ],
          [
            'L',
            end.x,
            end.y
          ]
        ]
      }
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
