!function(){function a(a){-1!==["complete","loaded","interactive"].indexOf(document.readyState)?a.call(document):document.addEventListener("DOMContentLoaded",function(){a.call(document)})}var b={themeKey:"gistreveal_theme_key"};a(function(){chrome.storage.sync.get(b.themeKey,function(a){var c="default";a.hasOwnProperty(b.themeKey)&&(c=a[b.themeKey]);var d=document.getElementById("js-themes");d.value=c,d.addEventListener("change",function(){chrome.storage.sync.set({gistreveal_theme_key:d.options[d.selectedIndex].value})})})})}();