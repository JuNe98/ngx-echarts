import"./chunk-NENEKBZO.js";import{Dh as U,S as xe,r as V}from"./chunk-UWK4OVVH.js";import"./chunk-YKYBF6CM.js";import{a as g,c as J}from"./chunk-RQVUE6JQ.js";import{Aa as M,Ca as y,Da as K,E as u,J as P,K as q,R as F,S as W,T as L,da as z,f as k,fa as B,j as A,l,m as j,oa as T,pa as D,r as c,s as H,u as N,v as p,va as S,w as d,wa as E,x as h,xa as x,y as m,ya as O,za as w}from"./chunk-AE3JVQDY.js";import"./chunk-TVSLMMOY.js";var Q=`<!-- DEMO START -->
<div echarts [options]="options" class="demo-chart-600"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var Z=`import { Component, OnInit } from '@angular/core';
import type { EChartsOption } from 'echarts';
// IGNORE START
declare const require: any;
// IGNORE END

@Component({
  selector: 'app-graph-force-layout',
  templateUrl: './graph-force-layout.component.html',
  styleUrls: ['./graph-force-layout.component.scss'],
})
export class GraphForceLayoutComponent implements OnInit {
  // IGNORE START
  html =
    require('!!html-loader?{"minimize": {"removeComments":false,"caseSensitive":true}}!./graph-force-layout.component.html')
      .default;
  component = require('!!raw-loader!./graph-force-layout.component.ts').default;
  // IGNORE END
  options: EChartsOption;

  createNodes(count: number) {
    const nodes = [];
    for (let i = 0; i < count; i++) {
      nodes.push({
        id: i + '',
      });
    }
    return nodes;
  }

  createEdges(count: number) {
    const edges = [];
    if (count === 2) {
      return [[0, 1]];
    }
    for (let i = 0; i < count; i++) {
      edges.push([i, (i + 1) % count]);
    }
    return edges;
  }

  ngOnInit(): void {
    const datas = [];
    for (let i = 0; i < 16; i++) {
      datas.push({
        nodes: this.createNodes(i + 2),
        edges: this.createEdges(i + 2),
      });
    }

    this.options = {
      series: datas.map((item, idx) => {
        return {
          type: 'graph',
          layout: 'force',
          animation: false,
          data: item.nodes,
          left: (idx % 4) * 25 + '%',
          top: Math.floor(idx / 4) * 25 + '%',
          width: '25%',
          height: '25%',
          force: {
            repulsion: 60,
            edgeLength: 2,
          },
          edges: item.edges.map(e => {
            return {
              source: e[0] + '',
              target: e[1] + '',
            };
          }),
        };
      }),
    };
  }
}
`;var $=(()=>{let e=class e{constructor(){this.html=Q,this.component=Z}createNodes(r){let t=[];for(let i=0;i<r;i++)t.push({id:i+""});return t}createEdges(r){let t=[];if(r===2)return[[0,1]];for(let i=0;i<r;i++)t.push([i,(i+1)%r]);return t}ngOnInit(){let r=[];for(let t=0;t<16;t++)r.push({nodes:this.createNodes(t+2),edges:this.createEdges(t+2)});this.options={series:r.map((t,i)=>({type:"graph",layout:"force",animation:!1,data:t.nodes,left:i%4*25+"%",top:Math.floor(i/4)*25+"%",width:"25%",height:"25%",force:{repulsion:60,edgeLength:2},edges:t.edges.map(f=>({source:f[0]+"",target:f[1]+""}))}))}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-graph-force-layout"]],decls:2,vars:3,consts:[["echarts","",1,"demo-chart-600",3,"options"],[3,"html","component"]],template:function(t,i){t&1&&m(0,"div",0)(1,"app-code-block",1),t&2&&(p("options",i.options),c(),p("html",i.html)("component",i.component))},dependencies:[y,g]});let o=e;return o})();var _=`<!-- DEMO START -->
<div echarts [options]="options" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var ee=`import { Component } from '@angular/core';
import type { EChartsOption } from 'echarts';
// IGNORE START
declare const require: any;
// IGNORE END

@Component({
  selector: 'app-graph-simple',
  templateUrl: './graph-simple.component.html',
  styleUrls: ['./graph-simple.component.scss'],
})
export class GraphSimpleComponent {
  // IGNORE START
  html =
    require('!!html-loader?{"minimize": {"removeComments":false,"caseSensitive":true}}!./graph-simple.component.html')
      .default;
  component = require('!!raw-loader!./graph-simple.component.ts').default;
  // IGNORE END
  options: EChartsOption = {
    title: {
      text: 'Simple Graph',
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'none',
        symbolSize: 60,
        roam: true,
        label: {
          show: true,
        },
        edgeSymbol: ['circle', 'arrow'],
        edgeSymbolSize: [4, 10],
        edgeLabel: {
          fontSize: 20,
        },
        data: [
          {
            name: 'Node 1',
            x: 300,
            y: 300,
          },
          {
            name: 'Node 2',
            x: 800,
            y: 300,
          },
          {
            name: 'Node 3',
            x: 550,
            y: 100,
          },
          {
            name: 'Node 4',
            x: 550,
            y: 500,
          },
        ],
        // links: [],
        links: [
          {
            source: 0,
            target: 1,
            symbolSize: [5, 20],
            label: {
              show: true,
            },
            lineStyle: {
              width: 5,
              curveness: 0.2,
            },
          },
          {
            source: 'Node 2',
            target: 'Node 1',
            label: {
              show: true,
            },
            lineStyle: {
              curveness: 0.2,
            },
          },
          {
            source: 'Node 1',
            target: 'Node 3',
          },
          {
            source: 'Node 2',
            target: 'Node 3',
          },
          {
            source: 'Node 2',
            target: 'Node 4',
          },
          {
            source: 'Node 1',
            target: 'Node 4',
          },
        ],
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0,
        },
      },
    ],
  };
}
`;var te=(()=>{let e=class e{constructor(){this.html=_,this.component=ee,this.options={title:{text:"Simple Graph"},tooltip:{},animationDurationUpdate:1500,animationEasingUpdate:"quinticInOut",series:[{type:"graph",layout:"none",symbolSize:60,roam:!0,label:{show:!0},edgeSymbol:["circle","arrow"],edgeSymbolSize:[4,10],edgeLabel:{fontSize:20},data:[{name:"Node 1",x:300,y:300},{name:"Node 2",x:800,y:300},{name:"Node 3",x:550,y:100},{name:"Node 4",x:550,y:500}],links:[{source:0,target:1,symbolSize:[5,20],label:{show:!0},lineStyle:{width:5,curveness:.2}},{source:"Node 2",target:"Node 1",label:{show:!0},lineStyle:{curveness:.2}},{source:"Node 1",target:"Node 3"},{source:"Node 2",target:"Node 3"},{source:"Node 2",target:"Node 4"},{source:"Node 1",target:"Node 4"}],lineStyle:{opacity:.9,width:2,curveness:0}}]}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-graph-simple"]],decls:2,vars:3,consts:[["echarts","",1,"demo-chart",3,"options"],[3,"html","component"]],template:function(t,i){t&1&&m(0,"div",0)(1,"app-code-block",1),t&2&&(p("options",i.options),c(),p("html",i.html)("component",i.component))},dependencies:[y,g]});let o=e;return o})();function ke(o,e){o&1&&m(0,"app-graph-simple")}function Ae(o,e){o&1&&m(0,"app-graph-force-layout")}var me=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-series-graph"]],decls:15,vars:1,consts:[["nzTitle","Graph"],["nz-page-header-breadcrumb",""],["routerLink","/welcome"],[2,"margin-top","8px",3,"nzTabPosition"],["nzTitle","Simple Graph"],["nz-tab",""],["nzTitle","Force Layout"]],template:function(t,i){t&1&&(d(0,"nz-page-header",0)(1,"nz-breadcrumb",1)(2,"nz-breadcrumb-item")(3,"a",2),u(4,"Home"),h()(),d(5,"nz-breadcrumb-item"),u(6,"Series"),h(),d(7,"nz-breadcrumb-item"),u(8,"Graph"),h()()(),m(9,"nz-divider"),d(10,"nz-tabset",3)(11,"nz-tab",4),N(12,ke,1,0,"ng-template",5),h(),d(13,"nz-tab",6),N(14,Ae,1,0,"ng-template",5),h()()),t&2&&(c(10),p("nzTabPosition","left"))},dependencies:[D,T,x,E,S,O,M,w,z,$,te]});let o=e;return o})();xe();var pe=`<!-- DEMO START -->
<div echarts [options]="options | async" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var se=`import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as util from 'zrender/lib/core/util';
import type { EChartsOption } from 'echarts';
// IGNORE START
declare const require: any;
// IGNORE END

@Component({
  selector: 'app-tree-from-left-to-right',
  templateUrl: './tree-from-left-to-right.component.html',
  styleUrls: ['./tree-from-left-to-right.component.scss'],
})
export class TreeFromLeftToRightComponent implements OnInit {
  // IGNORE START
  html =
    require('!!html-loader?{"minimize": {"removeComments":false,"caseSensitive":true}}!./tree-from-left-to-right.component.html')
      .default;
  component = require('!!raw-loader!./tree-from-left-to-right.component.ts').default;
  // IGNORE END
  options: Observable<EChartsOption>;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.options = this.http.get<any>('assets/data/flare.json', { responseType: 'json' }).pipe(
      map(data => {
        util.each(
          data.children,
          (datum: any, index: number) => index % 2 === 0 && (datum.collapsed = true)
        );
        return {
          tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove',
          },
          series: [
            {
              type: 'tree',
              data: [data],
              top: '1%',
              left: '7%',
              bottom: '1%',
              right: '20%',
              symbolSize: 7,
              label: {
                position: 'left',
                verticalAlign: 'middle',
                align: 'right',
                fontSize: 9,
              },
              leaves: {
                label: {
                  position: 'right',
                  verticalAlign: 'middle',
                  align: 'left',
                },
              },
              expandAndCollapse: true,
              animationDuration: 550,
              animationDurationUpdate: 750,
            },
          ],
        };
      })
    );
  }
}
`;var le=(()=>{let e=class e{constructor(r){this.http=r,this.html=pe,this.component=se}ngOnInit(){this.options=this.http.get("assets/data/flare.json",{responseType:"json"}).pipe(k(r=>(V(r.children,(t,i)=>i%2===0&&(t.collapsed=!0)),{tooltip:{trigger:"item",triggerOn:"mousemove"},series:[{type:"tree",data:[r],top:"1%",left:"7%",bottom:"1%",right:"20%",symbolSize:7,label:{position:"left",verticalAlign:"middle",align:"right",fontSize:9},leaves:{label:{position:"right",verticalAlign:"middle",align:"left"}},expandAndCollapse:!0,animationDuration:550,animationDurationUpdate:750}]})))}};e.\u0275fac=function(t){return new(t||e)(H(L))},e.\u0275cmp=l({type:e,selectors:[["app-tree-from-left-to-right"]],decls:3,vars:5,consts:[["echarts","",1,"demo-chart",3,"options"],[3,"html","component"]],template:function(t,i){t&1&&(m(0,"div",0),P(1,"async"),m(2,"app-code-block",1)),t&2&&(p("options",q(1,3,i.options)),c(2),p("html",i.html)("component",i.component))},dependencies:[y,g,F]});let o=e;return o})();var ce=`<!-- DEMO START -->
<div echarts [options]="options | async" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var de=`import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import type { EChartsOption } from 'echarts';
// IGNORE START
declare const require: any;
// IGNORE END

@Component({
  selector: 'app-tree-radial',
  templateUrl: './tree-radial.component.html',
  styleUrls: ['./tree-radial.component.scss'],
})
export class TreeRadialComponent implements OnInit {
  // IGNORE START
  html =
    require('!!html-loader?{"minimize": {"removeComments":false,"caseSensitive":true}}!./tree-radial.component.html')
      .default;
  component = require('!!raw-loader!./tree-radial.component.ts').default;
  // IGNORE END
  options: Observable<EChartsOption>;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.options = this.http.get<any>('assets/data/flare.json', { responseType: 'json' }).pipe(
      map(data => ({
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove',
        },
        series: [
          {
            type: 'tree',
            data: [data],
            top: '18%',
            bottom: '14%',
            layout: 'radial',
            symbol: 'emptyCircle',
            symbolSize: 7,
            initialTreeDepth: 3,
            animationDurationUpdate: 750,
          },
        ],
      }))
    );
  }
}
`;var he=(()=>{let e=class e{constructor(r){this.http=r,this.html=ce,this.component=de}ngOnInit(){this.options=this.http.get("assets/data/flare.json",{responseType:"json"}).pipe(k(r=>({tooltip:{trigger:"item",triggerOn:"mousemove"},series:[{type:"tree",data:[r],top:"18%",bottom:"14%",layout:"radial",symbol:"emptyCircle",symbolSize:7,initialTreeDepth:3,animationDurationUpdate:750}]})))}};e.\u0275fac=function(t){return new(t||e)(H(L))},e.\u0275cmp=l({type:e,selectors:[["app-tree-radial"]],decls:3,vars:5,consts:[["echarts","",1,"demo-chart",3,"options"],[3,"html","component"]],template:function(t,i){t&1&&(m(0,"div",0),P(1,"async"),m(2,"app-code-block",1)),t&2&&(p("options",q(1,3,i.options)),c(2),p("html",i.html)("component",i.component))},dependencies:[y,g,F]});let o=e;return o})();function Xe(o,e){o&1&&m(0,"app-tree-from-left-to-right")}function Ye(o,e){o&1&&m(0,"app-tree-radial")}var fe=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-series-tree"]],decls:15,vars:1,consts:[["nzTitle","Tree"],["nz-page-header-breadcrumb",""],["routerLink","/welcome"],[2,"margin-top","8px",3,"nzTabPosition"],["nzTitle","From Left To Right"],["nz-tab",""],["nzTitle","Radial Tree"]],template:function(t,i){t&1&&(d(0,"nz-page-header",0)(1,"nz-breadcrumb",1)(2,"nz-breadcrumb-item")(3,"a",2),u(4,"Home"),h()(),d(5,"nz-breadcrumb-item"),u(6,"Series"),h(),d(7,"nz-breadcrumb-item"),u(8,"Tree"),h()()(),m(9,"nz-divider"),d(10,"nz-tabset",3)(11,"nz-tab",4),N(12,Xe,1,0,"ng-template",5),h(),d(13,"nz-tab",6),N(14,Ye,1,0,"ng-template",5),h()()),t&2&&(c(10),p("nzTabPosition","left"))},dependencies:[D,T,x,E,S,O,M,w,z,le,he]});let o=e;return o})();var ue=`<!-- DEMO START -->
<div echarts [options]="options" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var ge=`import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';
// IGNORE START
declare const require: any;
// IGNORE END

@Component({
  selector: 'app-heatmap-calendar',
  templateUrl: './heatmap-calendar.component.html',
  styleUrl: './heatmap-calendar.component.scss',
})
export class HeatmapCalendarComponent implements OnInit {
  // IGNORE START
  html =
    require('!!html-loader?{"minimize": {"removeComments":false,"caseSensitive":true}}!./heatmap-calendar.component.html')
      .default;
  component = require('!!raw-loader!./heatmap-calendar.component.ts').default;
  // IGNORE END
  options: EChartsOption;

  ngOnInit(): void {
    this.options = {
      title: {
        top: 30,
        left: 'center',
        text: 'Daily Step Count',
      },
      tooltip: {},
      visualMap: {
        min: 0,
        max: 10000,
        type: 'piecewise',
        orient: 'horizontal',
        left: 'center',
        top: 65,
      },
      calendar: {
        top: 120,
        left: 30,
        right: 30,
        cellSize: ['auto', 13],
        range: '2016',
        itemStyle: {
          borderWidth: 0.5,
        },
        yearLabel: { show: false },
      },
      series: {
        type: 'heatmap',
        coordinateSystem: 'calendar',
        data: this.getVirtualData('2016'),
      },
    };
  }

  getVirtualData(year: string) {
    const date = +echarts.time.parse(year + '-01-01');
    const end = +echarts.time.parse(+year + 1 + '-01-01');
    const dayTime = 3600 * 24 * 1000;
    const data: [string, number][] = [];
    for (let time = date; time < end; time += dayTime) {
      data.push([
        echarts.time.format(time, '{yyyy}-{MM}-{dd}', false),
        Math.floor(Math.random() * 10000),
      ]);
    }
    return data;
  }
}
`;var ye=(()=>{let e=class e{constructor(){this.html=ue,this.component=ge}ngOnInit(){this.options={title:{top:30,left:"center",text:"Daily Step Count"},tooltip:{},visualMap:{min:0,max:1e4,type:"piecewise",orient:"horizontal",left:"center",top:65},calendar:{top:120,left:30,right:30,cellSize:["auto",13],range:"2016",itemStyle:{borderWidth:.5},yearLabel:{show:!1}},series:{type:"heatmap",coordinateSystem:"calendar",data:this.getVirtualData("2016")}}}getVirtualData(r){let t=+U.parse(r+"-01-01"),i=+U.parse(+r+1+"-01-01"),f=3600*24*1e3,b=[];for(let G=t;G<i;G+=f)b.push([U.format(G,"{yyyy}-{MM}-{dd}",!1),Math.floor(Math.random()*1e4)]);return b}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-heatmap-calendar"]],decls:2,vars:3,consts:[["echarts","",1,"demo-chart",3,"options"],[3,"html","component"]],template:function(t,i){t&1&&m(0,"div",0)(1,"app-code-block",1),t&2&&(p("options",i.options),c(),p("html",i.html)("component",i.component))},dependencies:[y,g]});let o=e;return o})();var be=`<!-- DEMO START -->
<div echarts [options]="options" class="demo-chart"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var ve=`import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';
import type { EChartsOption } from 'echarts';
// IGNORE START
declare const require: any;
// IGNORE END

@Component({
  selector: 'app-heatmap-discrete',
  templateUrl: './heatmap-discrete.component.html',
  styleUrl: './heatmap-discrete.component.scss',
})
export class HeatmapDiscreteComponent implements OnInit {
  // IGNORE START
  html =
    require('!!html-loader?{"minimize": {"removeComments":false,"caseSensitive":true}}!./heatmap-discrete.component.html')
      .default;
  component = require('!!raw-loader!./heatmap-discrete.component.ts').default;
  // IGNORE END
  options: EChartsOption;
  noise = getNoiseHelper();

  ngOnInit(): void {
    this.noise.seed(Math.random());
    let { data, xData, yData } = this.generateData();

    this.options = {
      tooltip: {},
      grid: {
        right: 140,
        left: 40,
      },
      xAxis: {
        type: 'category',
        data: xData,
      },
      yAxis: {
        type: 'category',
        data: yData,
      },
      visualMap: {
        type: 'piecewise',
        min: 0,
        max: 1,
        left: 'right',
        top: 'center',
        calculable: true,
        realtime: false,
        splitNumber: 8,
        inRange: {
          color: [
            '#313695',
            '#4575b4',
            '#74add1',
            '#abd9e9',
            '#e0f3f8',
            '#ffffbf',
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026',
          ],
        },
      },
      series: [
        {
          name: 'Gaussian',
          type: 'heatmap',
          data: data,
          emphasis: {
            itemStyle: {
              borderColor: '#333',
              borderWidth: 1,
            },
          },
          progressive: 1000,
          animation: false,
        },
      ],
    };
  }

  generateData() {
    let xData: number[] = [];
    let yData: number[] = [];

    let data = [];
    for (let i = 0; i <= 200; i++) {
      for (let j = 0; j <= 100; j++) {
        data.push([i, j, this.noise.perlin2(i / 40, j / 20) + 0.5]);
      }
      xData.push(i);
    }
    for (let j = 0; j < 100; j++) {
      yData.push(j);
    }
    return { data, xData, yData };
  }
}

///////////////////////////////////////////////////////////////////////////
// perlin noise helper from https://github.com/josephg/noisejs
///////////////////////////////////////////////////////////////////////////
function getNoiseHelper() {
  class Grad {
    x: number;
    y: number;
    z: number;
    constructor(x: number, y: number, z: number) {
      this.x = x;
      this.y = y;
      this.z = z;
    }

    dot2(x: number, y: number) {
      return this.x * x + this.y * y;
    }

    dot3(x: number, y: number, z: number) {
      return this.x * x + this.y * y + this.z * z;
    }
  }

  const grad3 = [
    new Grad(1, 1, 0),
    new Grad(-1, 1, 0),
    new Grad(1, -1, 0),
    new Grad(-1, -1, 0),
    new Grad(1, 0, 1),
    new Grad(-1, 0, 1),
    new Grad(1, 0, -1),
    new Grad(-1, 0, -1),
    new Grad(0, 1, 1),
    new Grad(0, -1, 1),
    new Grad(0, 1, -1),
    new Grad(0, -1, -1),
  ];
  const p = [
    151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69,
    142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219,
    203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175,
    74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230,
    220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76,
    132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186,
    3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59,
    227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70,
    221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178,
    185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81,
    51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115,
    121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195,
    78, 66, 215, 61, 156, 180,
  ];
  // To remove the need for index wrapping, double the permutation table length
  let perm = new Array(512);
  let gradP = new Array(512);
  // This isn't a very good seeding function, but it works ok. It supports 2^16
  // different seed values. Write something better if you need more seeds.
  function seed(seed: number) {
    if (seed > 0 && seed < 1) {
      // Scale the seed out
      seed *= 65536;
    }
    seed = Math.floor(seed);
    if (seed < 256) {
      seed |= seed << 8;
    }
    for (let i = 0; i < 256; i++) {
      let v;
      if (i & 1) {
        v = p[i] ^ (seed & 255);
      } else {
        v = p[i] ^ ((seed >> 8) & 255);
      }
      perm[i] = perm[i + 256] = v;
      gradP[i] = gradP[i + 256] = grad3[v % 12];
    }
  }
  seed(0);
  // ##### Perlin noise stuff
  function fade(t: number) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }
  function lerp(a: number, b: number, t: number) {
    return (1 - t) * a + t * b;
  }
  // 2D Perlin Noise
  function perlin2(x: number, y: number) {
    // Find unit grid cell containing point
    let X = Math.floor(x),
      Y = Math.floor(y);
    // Get relative xy coordinates of point within that cell
    x = x - X;
    y = y - Y;
    // Wrap the integer cells at 255 (smaller integer period can be introduced here)
    X = X & 255;
    Y = Y & 255;
    // Calculate noise contributions from each of the four corners
    let n00 = gradP[X + perm[Y]].dot2(x, y);
    let n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
    let n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
    let n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1);
    // Compute the fade curve value for x
    let u = fade(x);
    // Interpolate the four results
    return lerp(lerp(n00, n10, u), lerp(n01, n11, u), fade(y));
  }

  return {
    seed,
    perlin2,
  };
}
`;var Ce=(()=>{let e=class e{constructor(){this.html=be,this.component=ve,this.noise=Ze()}ngOnInit(){this.noise.seed(Math.random());let{data:r,xData:t,yData:i}=this.generateData();this.options={tooltip:{},grid:{right:140,left:40},xAxis:{type:"category",data:t},yAxis:{type:"category",data:i},visualMap:{type:"piecewise",min:0,max:1,left:"right",top:"center",calculable:!0,realtime:!1,splitNumber:8,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]}},series:[{name:"Gaussian",type:"heatmap",data:r,emphasis:{itemStyle:{borderColor:"#333",borderWidth:1}},progressive:1e3,animation:!1}]}}generateData(){let r=[],t=[],i=[];for(let f=0;f<=200;f++){for(let b=0;b<=100;b++)i.push([f,b,this.noise.perlin2(f/40,b/20)+.5]);r.push(f)}for(let f=0;f<100;f++)t.push(f);return{data:i,xData:r,yData:t}}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-heatmap-discrete"]],decls:2,vars:3,consts:[["echarts","",1,"demo-chart",3,"options"],[3,"html","component"]],template:function(t,i){t&1&&m(0,"div",0)(1,"app-code-block",1),t&2&&(p("options",i.options),c(),p("html",i.html)("component",i.component))},dependencies:[y,g]});let o=e;return o})();function Ze(){class o{constructor(a,s,v){this.x=a,this.y=s,this.z=v}dot2(a,s){return this.x*a+this.y*s}dot3(a,s,v){return this.x*a+this.y*s+this.z*v}}let e=[new o(1,1,0),new o(-1,1,0),new o(1,-1,0),new o(-1,-1,0),new o(1,0,1),new o(-1,0,1),new o(1,0,-1),new o(-1,0,-1),new o(0,1,1),new o(0,-1,1),new o(0,1,-1),new o(0,-1,-1)],X=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],r=new Array(512),t=new Array(512);function i(n){n>0&&n<1&&(n*=65536),n=Math.floor(n),n<256&&(n|=n<<8);for(let a=0;a<256;a++){let s;a&1?s=X[a]^n&255:s=X[a]^n>>8&255,r[a]=r[a+256]=s,t[a]=t[a+256]=e[s%12]}}i(0);function f(n){return n*n*n*(n*(n*6-15)+10)}function b(n,a,s){return(1-s)*n+s*a}function G(n,a){let s=Math.floor(n),v=Math.floor(a);n=n-s,a=a-v,s=s&255,v=v&255;let Te=t[s+r[v]].dot2(n,a),De=t[s+r[v+1]].dot2(n,a-1),Se=t[s+1+r[v]].dot2(n-1,a),Ee=t[s+1+r[v+1]].dot2(n-1,a-1),Y=f(n);return b(b(Te,Se,Y),b(De,Ee,Y),f(a))}return{seed:i,perlin2:G}}function _e(o,e){o&1&&m(0,"app-heatmap-calendar")}function et(o,e){o&1&&m(0,"app-heatmap-discrete")}var Ne=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l({type:e,selectors:[["app-series-heatmap"]],decls:15,vars:1,consts:[["nzTitle","Tree"],["nz-page-header-breadcrumb",""],["routerLink","/welcome"],[2,"margin-top","8px",3,"nzTabPosition"],["nzTitle","Calendar Heatmap"],["nz-tab",""],["nzTitle","Discrete Mapping of Color"]],template:function(t,i){t&1&&(d(0,"nz-page-header",0)(1,"nz-breadcrumb",1)(2,"nz-breadcrumb-item")(3,"a",2),u(4,"Home"),h()(),d(5,"nz-breadcrumb-item"),u(6,"Series"),h(),d(7,"nz-breadcrumb-item"),u(8,"Heatmap"),h()()(),m(9,"nz-divider"),d(10,"nz-tabset",3)(11,"nz-tab",4),N(12,_e,1,0,"ng-template",5),h(),d(13,"nz-tab",6),N(14,et,1,0,"ng-template",5),h()()),t&2&&(c(10),p("nzTabPosition","left"))},dependencies:[D,T,x,E,S,O,M,w,z,ye,Ce]});let o=e;return o})();var tt=[{path:"",redirectTo:"graph",pathMatch:"full"},{path:"graph",component:me},{path:"tree",component:fe},{path:"heatmap",component:Ne}],ze=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=j({type:e}),e.\u0275inj=A({imports:[B.forChild(tt),B]});let o=e;return o})();var ao=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=j({type:e}),e.\u0275inj=A({imports:[W,K,J,ze]});let o=e;return o})();export{ao as DemoSeriesModule};
