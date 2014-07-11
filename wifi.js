var colors = ["公車編號1", "公車編號2","汽車編號3","汽車編號4"];

function cal()
{
        var maxNum = 3;
		var minNum = 0;
		var n = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
		document.getElementById("result").innerHTML =colors[n];
		
		if("公車"==document.getElementById("result").innerHTML.substring(0,2))
       {
		if(document.getElementById("result").innerHTML==document.getElementById("wifi").innerHTML)
		{
			alert("搜尋到以設定的名稱，wifi開啟");
			var lock = navigator.mozSettings.createLock();
			var result = lock.set({
			  'wifi.enabled': true,
			  // 'audio.volume.alarm': 0
			  
			});
			 
			result.onsuccess = function () {
			  document.getElementById("status").innerHTML="wifi開啟";
			  console.log("the settings has been changed");
			}
			 
			result.onerror = function () {
				
			    console.log("An error occure, the settings remain unchanged");
			}
		}
	
		else 
		{
			alert("搜尋到未設定的裝置名稱");
			var lock = navigator.mozSettings.createLock();
			var result = lock.set({
			  'wifi.enabled': false
			});
			 
			result.onsuccess = function () {
			  document.getElementById("status").innerHTML="找不到相符的裝置";
			  console.log("the settings has been changed");
			}
			 
			result.onerror = function () {
			  console.log("An error occure, the settings remain unchanged");
			}
		}
	
	}
	else if("汽車"==document.getElementById("result").innerHTML.substring(0,2))
	{
		if(document.getElementById("result").innerHTML==document.getElementById("vib").innerHTML)
		{
			showNotification();
			document.getElementById("status").innerHTML="震動";
			navigator.vibrate(1000);
			var lock = navigator.mozSettings.createLock();
			var result = lock.set(
			{
			  'wifi.enabled': false,
			  'audio.volume.alarm': 0
			});
		}
		
		else
		{
			alert("搜尋到未設定的裝置名稱");
			document.getElementById("status").innerHTML="找不到相符的裝置";
			var lock = navigator.mozSettings.createLock();
			var result = lock.set(
			{
				'wifi.enabled': false,
			    'audio.volume.alarm': 8
			});
		}
	}
}

var set = document.getElementById("set");
set.addEventListener("click", cal,false);
    
 
function showNotification() 
			{
		    var notification = new Notification("Notification", {
		        dir: "auto",
		        lang: "",
		        body: "搜尋到以設定的名稱，裝置已改為震動",
		        tag: "sometag",
		    });
	
		    
			}
    