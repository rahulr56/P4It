var menuItem = {
    "id": "p4It",
    "title" : "P4It",
    "contexts" : ["selection"]
}
chrome.contextMenus.create(menuItem);
console.log("Created context menu!")
function fixedEncodeURI(str){
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, ']');
}

chrome.contextMenus.onClicked.addListener(function(clickData){
    console.log("RR Somthing clicked!")
    var p4_regex = /^\d+$/
    var base_url = "https://swarm.xilinx.com/1666/"
    var p4Url = ""
    if(clickData.menuItemId == "p4It" && clickData.selectionText && p4_regex.test(clickData.selectionText))
    {
        console.log("RR P4It clicked a number!")
        p4Url = base_url + "changes/" + fixedEncodeURI(clickData.selectionText);
        openP4Window(p4Url);
    }
    else if(clickData.menuItemId == "p4It" && clickData.selectionText)
    {
        console.log("RR P4It clicked a number!");
        p4Url = base_url + "files/acds/main" + clickData.selectionText;
        openP4Window(p4Url);
    }
})

function openP4Window(p4Url)
{
    var createData = {
        "url" : p4Url,
        "type" : "normal",
        "top" : 5,
        "left" : 5,
        "width" : 1043,
        "height" : 911 
    };
    console.log("Creating window with url : " + p4Url);
    chrome.windows.create(createData, function(){});
}