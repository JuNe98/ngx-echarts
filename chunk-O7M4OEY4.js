import{a as A,c as P}from"./chunk-RQVUE6JQ.js";import{Aa as j,Ca as R,Da as L,E as f,J as g,K as x,R as z,S as v,T as D,da as N,f as y,fa as u,j as s,l as c,m as d,oa as E,pa as T,r as l,s as b,u as C,v as r,va as I,w as a,wa as M,x as m,xa as B,y as n,ya as O,za as S}from"./chunk-AE3JVQDY.js";import"./chunk-TVSLMMOY.js";var k=`<!-- DEMO START -->
<div echarts [options]="options | async" class="demo-chart-600"></div>
<!-- DEMO END -->

<app-code-block [html]="html" [component]="component"> </app-code-block>
`;var w=`import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
// IGNORE START
declare const require: any;
// IGNORE END

@Component({
  selector: 'app-bar3d-dataset',
  templateUrl: './bar3d-dataset.component.html',
  styleUrls: ['./bar3d-dataset.component.scss'],
})
export class Bar3dDatasetComponent implements OnInit {
  // IGNORE START
  html =
    require('!!html-loader?{"minimize": {"removeComments":false,"caseSensitive":true}}!./bar3d-dataset.component.html')
      .default;
  component = require('!!raw-loader!./bar3d-dataset.component.ts').default;
  // IGNORE END
  options: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.options = this.http
      .get('assets/data/life-expectancy-table.json', { responseType: 'json' })
      .pipe(
        map(data => ({
          grid3D: {},
          tooltip: {},
          xAxis3D: {
            type: 'category',
          },
          yAxis3D: {
            type: 'category',
          },
          zAxis3D: {},
          visualMap: {
            max: 1e8,
            dimension: 'Population',
          },
          dataset: {
            dimensions: [
              'Income',
              'Life Expectancy',
              'Population',
              'Country',
              { name: 'Year', type: 'ordinal' },
            ],
            source: data,
          },
          series: [
            {
              type: 'bar3D',
              // symbolSize: symbolSize,
              shading: 'lambert',
              encode: {
                x: 'Year',
                y: 'Country',
                z: 'Life Expectancy',
                tooltip: [0, 1, 2, 3, 4],
              },
            },
          ],
        }))
      );
  }
}
`;var H=(()=>{let t=class t{constructor(i){this.http=i,this.html=k,this.component=w}ngOnInit(){this.options=this.http.get("assets/data/life-expectancy-table.json",{responseType:"json"}).pipe(y(i=>({grid3D:{},tooltip:{},xAxis3D:{type:"category"},yAxis3D:{type:"category"},zAxis3D:{},visualMap:{max:1e8,dimension:"Population"},dataset:{dimensions:["Income","Life Expectancy","Population","Country",{name:"Year",type:"ordinal"}],source:i},series:[{type:"bar3D",shading:"lambert",encode:{x:"Year",y:"Country",z:"Life Expectancy",tooltip:[0,1,2,3,4]}}]})))}};t.\u0275fac=function(o){return new(o||t)(b(D))},t.\u0275cmp=c({type:t,selectors:[["app-bar3d-dataset"]],decls:3,vars:5,consts:[["echarts","",1,"demo-chart-600",3,"options"],[3,"html","component"]],template:function(o,p){o&1&&(n(0,"div",0),g(1,"async"),n(2,"app-code-block",1)),o&2&&(r("options",x(1,3,p.options)),l(2),r("html",p.html)("component",p.component))},dependencies:[R,A,z]});let e=t;return e})();function W(e,t){e&1&&n(0,"app-bar3d-dataset")}var G=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=c({type:t,selectors:[["app-gl-bar3d"]],decls:13,vars:1,consts:[["nzTitle","3D Bar"],["nz-page-header-breadcrumb",""],["routerLink","/welcome"],[2,"margin-top","8px",3,"nzTabPosition"],["nzTitle","With Dataset"],["nz-tab",""]],template:function(o,p){o&1&&(a(0,"nz-page-header",0)(1,"nz-breadcrumb",1)(2,"nz-breadcrumb-item")(3,"a",2),f(4,"Home"),m()(),a(5,"nz-breadcrumb-item"),f(6,"GL"),m(),a(7,"nz-breadcrumb-item"),f(8,"3D Bar"),m()()(),n(9,"nz-divider"),a(10,"nz-tabset",3)(11,"nz-tab",4),C(12,W,1,0,"ng-template",5),m()()),o&2&&(l(10),r("nzTabPosition","left"))},dependencies:[T,E,B,M,I,O,j,S,N,H]});let e=t;return e})();var J=[{path:"",redirectTo:"bar3d",pathMatch:"full"},{path:"bar3d",component:G}],F=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=d({type:t}),t.\u0275inj=s({imports:[u.forChild(J),u]});let e=t;return e})();var gt=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=d({type:t}),t.\u0275inj=s({imports:[v,L,P,F]});let e=t;return e})();export{gt as DemoGlModule};
