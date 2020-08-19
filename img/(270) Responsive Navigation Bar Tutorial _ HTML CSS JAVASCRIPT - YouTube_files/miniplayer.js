(function(g){var window=this;var N5=function(a,b){var c="ytp-miniplayer-button-bottom-right";var d=g.X?{D:"div",W:["ytp-icon","ytp-icon-expand-watch-page"]}:{D:"svg",P:{height:"18px",version:"1.1",viewBox:"0 0 22 18",width:"22px"},K:[{D:"g",P:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",P:{transform:"translate(-1.000000, -3.000000)"},K:[{D:"polygon",P:{points:"0 0 24 0 24 24 0 24"}},{D:"path",P:{d:"M19,7 L5,7 L5,17 L19,17 L19,7 Z M23,19 L23,4.98 C23,3.88 22.1,3 21,3 L3,3 C1.9,3 1,3.88 1,4.98 L1,19 C1,20.1 1.9,21 3,21 L21,21 C22.1,21 23,20.1 23,19 Z M21,19.02 L3,19.02 L3,4.97 L21,4.97 L21,19.02 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]};var e="Open video page";a.O().ea("kevlar_miniplayer_expand_top")&&(c="ytp-miniplayer-button-top-left",d=g.X?{D:"div",W:["ytp-icon","ytp-icon-expand-miniplayer"]}:{D:"svg",P:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},K:[{D:"g",P:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},K:[{D:"g",P:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},K:[{D:"path",P:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",
fill:"#fff","fill-rule":"nonzero"}}]}]}]},e="Expand");g.U.call(this,{D:"button",W:["ytp-miniplayer-expand-watch-page-button","ytp-button",c],P:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button"},K:[d]});this.H=a;this.ma("click",this.onClick,this);this.la("title",g.xO(a,e,"i"));g.Je(this,g.kP(b.xb(),this.element))},O5=function(a){g.U.call(this,{D:"div",
J:"ytp-miniplayer-ui"});this.fl=!1;this.player=a;this.L(a,"minimized",this.Jh);this.L(a,"onStateChange",this.VO)},P5=function(a){g.QN.call(this,a);
this.o=new O5(this.player);this.o.hide();g.CN(this.player,this.o.element,4);a.app.M.o&&(this.load(),g.K(a.getRootNode(),"ytp-player-minimized",!0))};
g.t(N5,g.U);N5.prototype.onClick=function(){this.H.oa("onExpandMiniplayer")};g.t(O5,g.U);g.k=O5.prototype;
g.k.show=function(){this.Hc=new g.wn(this.In,null,this);this.Hc.start();if(!this.fl){this.tooltip=new g.wS(this.player,this);g.C(this,this.tooltip);g.CN(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.vb=new g.dP(this.player);g.C(this,this.vb);this.Ui=new g.U({D:"div",J:"ytp-miniplayer-scrim"});g.C(this,this.Ui);this.Ui.ba(this.element);this.L(this.Ui.element,"click",this.uC);var a=new g.U({D:"button",W:["ytp-miniplayer-close-button","ytp-button"],P:{"aria-label":"Close"},K:[g.uM()]});
g.C(this,a);a.ba(this.Ui.element);this.L(a.element,"click",this.Cl);a=new N5(this.player,this);g.C(this,a);a.ba(this.Ui.element);this.lj=new g.U({D:"div",J:"ytp-miniplayer-controls"});g.C(this,this.lj);this.lj.ba(this.Ui.element);this.L(this.lj.element,"click",this.uC);var b=new g.U({D:"div",J:"ytp-miniplayer-button-container"});g.C(this,b);b.ba(this.lj.element);a=new g.U({D:"div",J:"ytp-miniplayer-play-button-container"});g.C(this,a);a.ba(this.lj.element);var c=new g.U({D:"div",J:"ytp-miniplayer-button-container"});
g.C(this,c);c.ba(this.lj.element);this.QC=new g.XQ(this.player,this,!1);g.C(this,this.QC);this.QC.ba(b.element);b=new g.UQ(this.player,this);g.C(this,b);b.ba(a.element);this.nextButton=new g.XQ(this.player,this,!0);g.C(this,this.nextButton);this.nextButton.ba(c.element);this.gg=new g.gS(this.player,this);g.C(this,this.gg);this.gg.ba(this.Ui.element);this.kc=new g.fR(this.player,this);g.C(this,this.kc);g.CN(this.player,this.kc.element,4);this.Kq=new g.U({D:"div",J:"ytp-miniplayer-buttons"});g.C(this,
this.Kq);g.CN(this.player,this.Kq.element,4);a=new g.U({D:"button",W:["ytp-miniplayer-close-button","ytp-button"],P:{"aria-label":"Close"},K:[g.uM()]});g.C(this,a);a.ba(this.Kq.element);this.L(a.element,"click",this.Cl);a=new g.U({D:"button",W:["ytp-miniplayer-replay-button","ytp-button"],P:{"aria-label":"Close"},K:[g.JM()]});g.C(this,a);a.ba(this.Kq.element);this.L(a.element,"click",this.UM);this.L(this.player,"presentingplayerstatechange",this.Mb);this.L(this.player,"appresize",this.Pa);this.L(this.player,
"fullscreentoggled",this.Pa);this.Pa();this.fl=!0}0!==this.player.getPlayerState()&&g.U.prototype.show.call(this);this.kc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.Hc&&(this.Hc.dispose(),this.Hc=void 0);g.U.prototype.hide.call(this);this.player.app.M.o||(this.fl&&this.kc.hide(),this.player.loadModule("annotations_module"))};
g.k.X=function(){this.Hc&&(this.Hc.dispose(),this.Hc=void 0);g.U.prototype.X.call(this)};
g.k.Cl=function(){this.player.stopVideo();this.player.oa("onCloseMiniplayer")};
g.k.UM=function(){this.player.playVideo()};
g.k.uC=function(a){if(a.target===this.Ui.element||a.target===this.lj.element)g.Q(this.player.O().experiments,"kevlar_miniplayer_play_pause_on_scrim")?g.gG(g.lM(this.player))?this.player.pauseVideo():this.player.playVideo():this.player.oa("onExpandMiniplayer")};
g.k.Jh=function(){g.K(this.player.getRootNode(),"ytp-player-minimized",this.player.app.M.o)};
g.k.cd=function(){this.kc.Yb();this.gg.Yb()};
g.k.In=function(){this.cd();this.Hc&&this.Hc.start()};
g.k.Mb=function(a){g.T(a.state,32)&&this.tooltip.hide()};
g.k.Pa=function(){this.kc.setPosition(0,g.lN(this.player).getPlayerSize().width,!1);this.kc.Sw()};
g.k.VO=function(a){this.player.app.M.o&&(0===a?this.hide():this.show())};
g.k.xb=function(){return this.tooltip};
g.k.Nc=function(){return!1};
g.k.pe=function(){return!1};
g.k.Mf=function(){return!1};
g.k.nw=function(){};
g.k.nj=function(){};
g.k.Dm=function(){};
g.k.xj=function(){return null};
g.k.Wk=function(){return new g.uh(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Il=function(a,b,c,d,e){var f=0,h=d=0,l=g.Sh(a);if(b){c=g.Dn(b,"ytp-prev-button")||g.Dn(b,"ytp-next-button");var m=g.Dn(b,"ytp-play-button"),n=g.Dn(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Ph(b,this.element),h=b.x,f=b.y-12):n&&(h=g.Dn(b,"ytp-miniplayer-button-top-left"),f=g.Ph(b,this.element),b=g.Sh(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=g.lN(this.player).getPlayerSize().width;e=f+(e||0);l=g.Rd(h,0,b-l.width);e?(a.style.top=e+
"px",a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.Nh=function(){};
g.k.mh=function(){return!1};g.t(P5,g.QN);P5.prototype.create=function(){};
P5.prototype.cg=function(){return!1};
P5.prototype.load=function(){this.player.hideControls();this.o.show()};
P5.prototype.unload=function(){this.player.showControls();this.o.hide()};g.aO.miniplayer=P5;})(_yt_player);
