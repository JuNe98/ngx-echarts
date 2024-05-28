import{$ as f,Da as E,E as n,Y as g,fa as h,j as m,ja as x,ka as v,l as u,la as y,m as s,na as z,r as p,v as c,w as e,x as i,y as a}from"./chunk-AE3JVQDY.js";import"./chunk-TVSLMMOY.js";var S=(()=>{let t=class t{constructor(){this.scriptText=`
  ## Install
  \`\`\`bash
  # if you use npm
  npm install echarts --save
  npm install ngx-echarts --save
  # or if you use yarn
  yarn add echarts ngx-echarts
  \`\`\`
`,this.importText=`
  ## Import Standalone Directive
  \`\`\`typescript
  import { NgxEchartsDirective, provideEcharts } from 'ngx-echarts';

  @Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, NgxEchartsDirective],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [
      provideEcharts(),
    ]
  })
  export class AppComponent {}
  \`\`\`
`,this.importNgModuleText=`
  ## Import NgModule
  \`\`\`typescript
  import { NgxEchartsModule } from 'ngx-echarts';
  @NgModule({
    imports: [
      ...,
      NgxEchartsModule.forRoot({
        echarts: () => import('echarts')
      })
    ],
  })
  export class AppModule {}
  \`\`\`
`}};t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=u({type:t,selectors:[["app-welcome"]],decls:31,vars:3,consts:[[1,"text-center"],["href","https://xieziyu.github.io/ngx-echarts"],["src","assets/img/logo.svg","alt","Logo","width","80"],["align","center"],["src","https://img.shields.io/npm/v/ngx-echarts.svg","alt","version",1,"mr-2"],["src","https://img.shields.io/npm/dm/ngx-echarts.svg","alt","downloads"],[1,"lead","text-muted"],[1,"text-danger"],["href","https://github.com/xieziyu/ngx-echarts","target","blank","nz-button","","nzType","primary",1,"mr-2"],["nz-icon","","nzType","github","nzTheme","outline"],["href","https://xieziyu.github.io/ngx-echarts/api-doc","target","blank","nz-button","","nzType","default"],["nz-icon","","nzType","read","nzTheme","outline"],[1,"container"],["nz-row","","nzGutter","16"],["nz-col","","nzSpan","24"],[3,"data"]],template:function(o,d){o&1&&(e(0,"div",0)(1,"a",1),a(2,"img",2),i(),e(3,"h1",3),n(4,"NGX-ECHARTS"),i(),e(5,"p"),a(6,"img",4)(7,"img",5),i(),e(8,"p",6),n(9," ngx-echarts is an "),e(10,"strong",7),n(11,"Angular"),i(),n(12,"(ver >= 2.x) directive for "),e(13,"strong",7),n(14,"ECharts"),i(),n(15," (ver >= 3.x) "),i(),e(16,"p")(17,"a",8),a(18,"i",9),n(19," GitHub"),i(),e(20,"a",10),a(21,"i",11),n(22," Documents"),i()()(),e(23,"div",12)(24,"div",13)(25,"div",14),a(26,"markdown",15),i(),e(27,"div",14),a(28,"markdown",15),i(),e(29,"div",14),a(30,"markdown",15),i()()()),o&2&&(p(26),c("data",d.scriptText),p(2),c("data",d.importText),p(2),c("data",d.importNgModuleText))},dependencies:[f,v,x,z,y,g]});let r=t;return r})();var M=[{path:"",component:S}],T=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=s({type:t}),t.\u0275inj=m({imports:[h.forChild(M),h]});let r=t;return r})();var B=(()=>{let t=class t{};t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=s({type:t}),t.\u0275inj=m({imports:[T,E]});let r=t;return r})();export{B as WelcomeModule};
