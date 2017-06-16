var data=[
	//{'img':'fs_item8','val':'fs','type':'FreeStyle','title':'猛虎紋身*10','info':'經驗值及遊戲貨幣各+200%','point':1000},
	{'img':'fs2_item2','val':'fs2','type':'FreeStyle 2','title':'經驗&Point加倍7天+1,000 Point','info':'比賽後可獲得雙倍經驗&Point加成效果','point':1460},
	{'img':'fs2_item1','val':'fs2','type':'FreeStyle 2','title':'經驗加倍7天','info':'比賽後可獲得雙倍經驗加成效果','point':870},
	{'img':'fs_item7','val':'fs','type':'FreeStyle','title':'潘朵拉寶箱','info':'可隨機獲得一樣獎品道具','point':390},
	{'img':'fs_item4','val':'fs','type':'FreeStyle','title':'技能包包(永久)','info':'一個角色的技能欄位和Free Style欄位各增加5格','point':1600},
	{'img':'bb_item4','val':'bb','type':'全民打棒球','title':'10萬WA幣 + 隨機球員卡30張','info':'可獲得10萬WA幣獎勵與隨機球員卡30張','point':1000},
	{'img':'cat_item2','val':'cat','type':'信喵之野望','title':'一夜城 LV.4','info':'一定時間內我方全體的防禦力提升','point':500},
	{'img':'bb_item3','val':'bb','type':'全民打棒球','title':'隨機球員卡20抽','info':'可隨機獲得CPBL或MLB聯盟的選手卡20張','point':200},
	{'img':'bb_item2','val':'bb','type':'全民打棒球','title':'隨機球員卡10抽','info':'可隨機獲得CPBL或MLB聯盟的選手卡10張','point':100},
	{'img':'fs_item5','val':'fs','type':'FreeStyle','title':'火焰紋身*2','info':'比賽結束後可額外獲得經驗值及遊戲貨幣各+100%的加乘','point':160},
	{'img':'gvo_item3','val':'gvo','type':'大航海時代','title':'憲法級鐵殼裝甲艦(家具)','info':'根據「憲法級鐵殼裝甲艦」的船體所製作的裝飾物','point':1500},
	{'img':'gvo_item2','val':'gvo','type':'大航海時代','title':'大型阿拉伯帆船(家具)','info':'根據「大型阿拉伯帆船」的船體所製作的裝飾物','point':750},
	{'img':'cat_item1','val':'cat','type':'信喵之野望','title':'秘傳─心眼(LV4)','info':'一定時間內我方全體的命中和迴避提升(合戰專用)','point':400},
	{'img':'fs_item6','val':'fs','type':'FreeStyle','title':'火焰紋身*10','info':'於比賽後可額外獲得經驗值及遊戲貨幣各+100%效果','point':800},
	{'img':'fs_item3','val':'fs','type':'FreeStyle','title':'紋身寶箱','info':'可獲得紋身','point':190},
	{'img':'cat_item3','val':'cat','type':'信喵之野望','title':'200五輪玉','info':'可獲得5種的五輪玉200個','point':150},
	{'img':'gvo_item1','val':'gvo','type':'大航海時代','title':'整體發言短期許可證','info':'受准向世界發言的證明。能以世界頻道發言。(不可交易及掠奪)','point':200},
	{'img':'fs_item2','val':'fs','type':'FreeStyle','title':'機械線條紋身','info':'經驗值及遊戲貨幣各+100%','point':800},
	{'img':'bb_item1','val':'bb','type':'全民打棒球','title':'雷射太陽眼鏡(30天)','info':'守備時以6%的機率將投手投球威力變成100的效果','point':400},
	{'img':'fs_item1','val':'fs','type':'FreeStyle','title':'小喇叭*2','info':'只要輸入"/小喇叭廣播"+空格+您要說的話，本區所有人都','point':100},
];
var dataLength=data.length;

for(var i=0;i<dataLength;i++){
  itemBoxs(i)
}
function itemBoxs(i){
	var main=document.getElementById('main');
	var itemBox=document.createElement('div');
	itemBox.className='item-box';
	itemBox.setAttribute('data-val',data[i].val);
	var item=document.createElement('div');
	item.className='item';
	var itemImg=document.createElement('div');
	itemImg.className='dib item-img';
	var oImg=document.createElement('img');
	oImg.setAttribute('src',"images/"+data[i].img+".jpg");
	oImg.setAttribute('alt',"《"+data[i].type+"》"+data[i].title);
	oImg.setAttribute('title',"《"+data[i].type+"》"+data[i].title);
	var itemContent=document.createElement('div');
	itemContent.className='dib item-content';
	var type=document.createElement('div');
	type.className="type";
	type.innerHTML="《"+data[i].type+"》";
	var title=document.createElement('div');
	title.className="title";
	title.innerHTML=data[i].title;
	var info=document.createElement('div');
	info.className="info";
	info.innerHTML=data[i].info;
	var btn=document.createElement('a');
	btn.className="btn";
	btn.setAttribute('href','javascript:;')
	btn.innerHTML= data[i].point+"點 立即換";

	itemImg.appendChild(oImg)
	item.appendChild(itemImg);

	itemContent.appendChild(type);
	itemContent.appendChild(title);
	itemContent.appendChild(info);
	itemContent.appendChild(btn);
	item.appendChild(itemContent);

	itemBox.appendChild(item);
	main.appendChild(itemBox);
}

var itemArr=[];
var itemBox=document.getElementsByClassName('item-box');
for(var i=0;i<itemBox.length;i++){
	itemArr.push(itemBox[i]);
}

$(function () {
	$('#select-game').on('change',function(){
		var val=$('#select-game :selected').val();
		for(var i=0;i<itemArr.length;i++){
			if(val == 'all'){
				$(itemArr[i]).show();
			}else if(val == $(itemArr[i]).data('val')){
				$(itemArr[i]).show();
			}else{
				$(itemArr[i]).hide();
			}
		}
		console.log(val);
	})
});