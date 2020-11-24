// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: gray; icon-glyph: magic;
let widget = new ListWidget();
let padding = 22;
widget.setPadding(padding, padding, padding, padding);

// Adjust these URLs. "url" is the enpoint of your storjWidget-exporter and widget.url will be opened when you click on the widget on your homescreen.
widget.url = "http://my-grafana-dashboard.com";
let url = "http://my-storjWidget-exporter.com:3123/bandwidth";

let apiResponse = await loadData();
console.log(apiResponse);

let header = widget.addText("STORJ NODES OVERVIEW (" + getDate() + ")".toUpperCase());
header.font = Font.mediumSystemFont(16);

widget.addSpacer();

let vStack = widget.addStack();
vStack.layoutHorizontally();

//Bandwidth today
let viewStackBandwidth = vStack.addStack();
viewStackBandwidth.layoutVertically();
let labelIn = viewStackBandwidth.addText("INGRESS"); 
labelIn.font = Font.mediumSystemFont(13);
let valueIn = viewStackBandwidth.addText(apiResponse.ingress);
valueIn.font = Font.mediumSystemFont(18);
valueIn.textColor = Color.green();
viewStackBandwidth.addSpacer();
let labelOut = viewStackBandwidth.addText("EGRESS"); 
labelOut.font = Font.mediumSystemFont(13);
let valueOut = viewStackBandwidth.addText(apiResponse.egress);
valueOut.font = Font.mediumSystemFont(18);
valueOut.textColor = Color.green();

vStack.addSpacer();

//Payout
let viewStackPayout = vStack.addStack();
viewStackPayout.layoutVertically();
let labelPayoutToday = viewStackPayout.addText("TODAY"); 
labelPayoutToday.font = Font.mediumSystemFont(13);
let valuePayoutToday = viewStackPayout.addText(apiResponse.estimatedPayoutToday + " $");
valuePayoutToday.font = Font.mediumSystemFont(18);
valuePayoutToday.textColor = Color.green();
viewStackPayout.addSpacer();
let labelPayoutMonth = viewStackPayout.addText("MONTH"); 
labelPayoutMonth.font = Font.mediumSystemFont(13);
let valuePayoutMonth = viewStackPayout.addText(apiResponse.estimatedPayoutTotal + " $");
valuePayoutMonth.font = Font.mediumSystemFont(18);
valuePayoutMonth.textColor = Color.green();

vStack.addSpacer();

//Payout
let viewStackSpaceAndUp = vStack.addStack();
viewStackSpaceAndUp.layoutVertically();
let labelSpaceUsed = viewStackSpaceAndUp.addText("SPACE USED"); 
labelSpaceUsed.font = Font.mediumSystemFont(13);
let valueSpaceUsed = viewStackSpaceAndUp.addText(apiResponse.spaceUsed + "/" + apiResponse.spaceAvailable + " TB");
valueSpaceUsed.font = Font.mediumSystemFont(18);
valueSpaceUsed.textColor = Color.green();
viewStackSpaceAndUp.addSpacer();
let labelNodesOnline = viewStackSpaceAndUp.addText("NODES ONLINE"); 
labelNodesOnline.font = Font.mediumSystemFont(13);
let valueNodesOnline = viewStackSpaceAndUp.addText(apiResponse.nodesOnline + "/" + apiResponse.totalNodesCount );
valueNodesOnline.font = Font.mediumSystemFont(18);
valueNodesOnline.textColor = Color.green();

Script.setWidget(widget);
Script.complete();
widget.presentMedium();

function getDate() {
  let date = new Date();
  return formatTime(String(date.getHours())) + ":" + formatTime(String(date.getMinutes()));
}

function formatTime(time) {
  if(time.length <= 1) {
    return "0" + time;
    } else {
      return time
    }
}

async function loadData() {
  let req = new Request(url);
  let json = await req.loadJSON();
  return json;
}