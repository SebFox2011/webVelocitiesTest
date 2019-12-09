### WebVelocitiesTest ###

Pour installer le projet se placer dans le projet et lancer : 

```
> npm install
> npm start
```
Installation axio
npm install axios

MAp;
npm install --save google-maps-react
https://scotch.io/tutorials/react-apps-with-the-google-maps-api-and-google-maps-react

Style de carte pour les stations de vélo:
https://bootsnipp.com/snippets/aMNV3
https://bootsnipp.com/snippets/kEvrW


Api region, ville
https://api.gouv.fr/api/api-geo.html#access

Pour le vélo:
html :
<div class="bike">
	<div class="roda">
		<div class="aro"></div>
	</div>
	<div class="roda">
		<div class="aro"></div>
	</div>
	<div class="partes">
		<div class="quadro">
			<div class="parte q1"></div>
			<div class="parte q2"></div>
			<div class="parte q3"></div>
			<div class="parte q4"></div>
			<div class="parte q5"></div>
			<div class="parte q6"></div>
			<div class="parte q7"></div>
		</div>
		<div class="guidom">
			<div class="parte g1"></div>
			<div class="parte g2"></div>
			<div class="parte g3"></div>
		</div>
		<div class="banco"></div>
		<div class="coroa"></div>
	</div>
</div>
</div>

CSS:
/** Geral **/
*, *:after, *:before{margin:0;padding:0; box-sizing: border-box;
  -webkit-transition: all 100ms ease-in;
  transition: all 100ms ease-in;
}
*:focus{outline:none;}
.clear{clear:both;}
a, a:hover, a:visited, a:focus{text-decoration:none;border:0 none; color: inherit; cursor: pointer;}
img{border:0 none;}
::-moz-selection{background:#00aeef;color:#fff;}
::selection{background:#00aeef;color:#fff;}

html{
	background: #49dfff;
}

/** BIKE **/
.bike{
	width: 278px;
	height: 208px;
	display: block;
	position: absolute;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%,-50%);
	        transform: translate(-50%,-50%);
}
.bike .roda{
	width: 123px;
	height: 123px;
	display: block;
	background: #f47c7c;
	border-radius: 50%;
	position: absolute;
	bottom: 0px;
}
.bike .roda:nth-child(even){
	left: 0px;
}
.bike .roda:nth-child(odd){
	right: 0px;
}
.bike .roda .aro{
	width: 78px;
	height: 78px;
	display: block;
	background: #a2df92;
	border-radius: 50%;
	position: absolute;
	top: 22px;
	left: 22px;
}
.bike .quadro{
	width: 169px;
	height: 113px;
	position: absolute;
	top: 13px;
	left: 52px;
}
.bike .quadro .parte{
	height: 12px;
	display: block;
	background: #71a2d7;
	border-radius: 12px;
	position: absolute;
}
.bike .quadro .parte.q1{
	width: 90px;
	top: 23px;
	left: 42px;
}
.bike .quadro .parte.q2{
	width: 118px;
	top: 74px;
	left: -32px;
	-webkit-transform: rotate(-67.5deg);
	transform: rotate(-67.5deg);
}
.bike .quadro .parte.q3{
	width: 70px;
	top: 124px;
	left: 0px;
}
.bike .quadro .parte.q4{
	width: 110px;
	top: 89px;
	left: 45px;
	-webkit-transform: rotate(-45deg);
	transform: rotate(-45deg);
}
.bike .quadro .parte.q5{
	width: 120px;
	top: 75px;
	left: 85px;
	-webkit-transform: rotate(-110deg);
	transform: rotate(-110deg);
}
.bike .quadro .parte.q6{
	width: 30px;
	top: 14px;
	left: 30px;
	-webkit-transform: rotate(-108deg);
	transform: rotate(-108deg);
}
.bike .quadro .parte.q7{
	width: 30px;
	top: 10px;
	left: 111px;
	-webkit-transform: rotate(-90deg);
	transform: rotate(-90deg);
}
.bike .guidom{
	width: 68px;
	height: 48px;
	position: absolute;
	top: 12px;
	right: 39px;
}
.bike .guidom .parte{
	height: 12px;
	display: block;
	background: #71a2d7;
	border-radius: 12px;
	position: absolute;
}
.bike .guidom .parte.g1{
	width: 52px;
	top: 0px;
	left: 0px;
}
.bike .guidom .parte.g2{
	width: 24px;
	top: 8px;
	right: 7px;
	-webkit-transform: rotate(70deg);
	transform: rotate(70deg);
}
.bike .guidom .parte.g3{
	width: 30px;
	top: 21px;
	right: 8px;
	-webkit-transform: rotate(130deg);
	transform: rotate(130deg);
}
.bike .banco{
	width: 56px;
	height: 18px;
	display: block;
	background: #f7f78a;
	border-radius: 18px;
	position: absolute;
	top: 7px;
	left: 68px;
}
.bike .coroa{
	width: 34px;
	height: 34px;
	display: block;
	background: transparent;
	border-radius: 50%;
	border: 11px solid #f7f78a;
	position: absolute;
	top: 126px;
	left: 99px;
}

