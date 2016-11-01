/** This is a sample code for your bot**/
function MessageHandler(context, event) {
    context.console.log("test")
    if(event.message.toLowerCase() == "httptest" || event.message.toLowerCase() == "select 2") {
        context.simpledb.roomleveldata.lastOption = 'ip';
        context.simplehttp.makeGet("http://ip-api.com/json");
    }
    else if(event.message.toLowerCase() == "hello" || event.message.toLowerCase() == "select 1") {
        context.simpledb.roomleveldata.lastOption = 'welcome';
        context.sendResponse("Hi " + event.senderobj.display);
    }
    else if(event.message.toLowerCase() == "menu") {
        var payload = {
            "type": "catalogue",
            "replies": ["Select"],
            "items": [{
                "title": "Welcome",
                "imgurl": "http://bufsd.schoolwires.net/cms/lib8/NY01913517/Centricity/Domain/190/HelloWelcome_blog.png"
            },
            {
                "title": "Get IP",
                "imgurl": "http://4.bp.blogspot.com/-KPHMc0Lubfo/TgjLVNrW01I/AAAAAAAABT8/nLHwZeNSiqo/s1600/get-ip-address.jpeg"
            }]
        };
        context.sendResponse(JSON.stringify(payload));
    }
    else if(event.message.toLowerCase() == "last") {
        context.sendResponse(context.simpledb.roomleveldata.lastOption);
    }
    else {
        context.sendResponse('No keyword found : '+event.message); 
    }
}
/** Functions declared below are required **/
function EventHandler(context, event) {
    if(! context.simpledb.botleveldata.numinstance)
        context.simpledb.botleveldata.numinstance = 0;
    numinstances = parseInt(context.simpledb.botleveldata.numinstance) + 1;
    context.simpledb.botleveldata.numinstance = numinstances;
    context.sendResponse("Thanks for adding me. You are:" + numinstances);
}

function HttpResponseHandler(context, event) {
    // if(event.geturl === "http://ip-api.com/json")
    context.sendResponse(event.getresp);
}

function DbGetHandler(context, event) {
    context.sendResponse("testdbput keyword was last get by:" + event.dbval);
}

function DbPutHandler(context, event) {
    context.sendResponse("testdbput keyword was last put by:" + event.dbval);
}