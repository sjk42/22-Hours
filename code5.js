gdjs.LeaderboardsCode = {};
gdjs.LeaderboardsCode.GDbackgroundObjects1= [];
gdjs.LeaderboardsCode.GDbackgroundObjects2= [];
gdjs.LeaderboardsCode.GDbackgroundObjects3= [];
gdjs.LeaderboardsCode.GDbackButtonObjects1= [];
gdjs.LeaderboardsCode.GDbackButtonObjects2= [];
gdjs.LeaderboardsCode.GDbackButtonObjects3= [];
gdjs.LeaderboardsCode.GDleaderBoardLabelObjects1= [];
gdjs.LeaderboardsCode.GDleaderBoardLabelObjects2= [];
gdjs.LeaderboardsCode.GDleaderBoardLabelObjects3= [];
gdjs.LeaderboardsCode.GDleaderBoardDataObjects1= [];
gdjs.LeaderboardsCode.GDleaderBoardDataObjects2= [];
gdjs.LeaderboardsCode.GDleaderBoardDataObjects3= [];

gdjs.LeaderboardsCode.conditionTrue_0 = {val:false};
gdjs.LeaderboardsCode.condition0IsTrue_0 = {val:false};
gdjs.LeaderboardsCode.condition1IsTrue_0 = {val:false};


gdjs.LeaderboardsCode.userFunc0x851dd0 = function(runtimeScene) {
"use strict";
//init db
var db = firebase.database();
//get scores from db
var ref = db.ref('scores/');
ref.on('value', gotData, errData);
//add name/score of each entry to a 2d array in form [[name, score], [name, score],...,[name, score]]
 
function gotData(data){
    var hiScores = new Array();
    var scores = data.val();
    var keys = Object.keys(scores);
   
    for(var i = 0; i < keys.length; i++){
        var k = keys[i];
        hiScores.push([scores[k].name, scores[k].score]);
    }

    //sort the array based on score
    hiScores.sort(sortScores);

    function sortScores(a, b) {
        if (a[1] === b[1]) {
            return 0;
        }
        else {
            return (a[1] > b[1]) ? -1 : 1;
        }
    }
   
 
    //output string
    var hiScoreString = "";

    //add "i. name score " to the string (max 10)
    if(hiScores.length < 10){
        for(var i = 0; i < hiScores.length; i++){
            hiScoreString += " " + (i + 1) + ".   " + hiScores[i][0] + "   " + hiScores[i][1] + " \n";
        }
    }else{
        for(var i = 0; i < 9; i++){
        hiScoreString += " " + (i + 1) + ".   " + hiScores[i][0] + "   " + hiScores[i][1] + " \n";
        }
        hiScoreString += "10.   " + hiScores[9][0] + "   " + hiScores[9][1] + " \n";
    }
    var output = runtimeScene.getVariables().get("outString");
    output.setString(hiScoreString);

}

function errData(err){
    console.log(err);
}



};
gdjs.LeaderboardsCode.eventsList0 = function(runtimeScene) {

{


gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if (gdjs.LeaderboardsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 0);
}}

}


{


gdjs.LeaderboardsCode.userFunc0x851dd0(runtimeScene);

}


};gdjs.LeaderboardsCode.mapOfGDgdjs_46LeaderboardsCode_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.LeaderboardsCode.GDbackButtonObjects1});gdjs.LeaderboardsCode.eventsList1 = function(runtimeScene) {

{


gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.LeaderboardsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}}

}


};gdjs.LeaderboardsCode.mapOfGDgdjs_46LeaderboardsCode_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.LeaderboardsCode.GDbackButtonObjects1});gdjs.LeaderboardsCode.eventsList2 = function(runtimeScene) {

{


gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LeaderboardsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "menu-music.ogg", 1, true, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}
{ //Subevents
gdjs.LeaderboardsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.LeaderboardsCode.GDbackButtonObjects1);

gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderboardsCode.mapOfGDgdjs_46LeaderboardsCode_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.LeaderboardsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LeaderboardsCode.GDbackButtonObjects1 */
{for(var i = 0, len = gdjs.LeaderboardsCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDbackButtonObjects1[i].setFontSize(75);
}
}
{ //Subevents
gdjs.LeaderboardsCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.LeaderboardsCode.GDbackButtonObjects1);

gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderboardsCode.mapOfGDgdjs_46LeaderboardsCode_46GDbackButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.LeaderboardsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.LeaderboardsCode.GDbackButtonObjects1 */
{for(var i = 0, len = gdjs.LeaderboardsCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDbackButtonObjects1[i].setFontSize(60);
}
}}

}


{


{
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("leaderBoardData"), gdjs.LeaderboardsCode.GDleaderBoardDataObjects1);
{for(var i = 0, len = gdjs.LeaderboardsCode.GDleaderBoardDataObjects1.length ;i < len;++i) {
    gdjs.LeaderboardsCode.GDleaderBoardDataObjects1[i].setBBText(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
}}

}


{


{
}

}


};

gdjs.LeaderboardsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardsCode.GDbackgroundObjects1.length = 0;
gdjs.LeaderboardsCode.GDbackgroundObjects2.length = 0;
gdjs.LeaderboardsCode.GDbackgroundObjects3.length = 0;
gdjs.LeaderboardsCode.GDbackButtonObjects1.length = 0;
gdjs.LeaderboardsCode.GDbackButtonObjects2.length = 0;
gdjs.LeaderboardsCode.GDbackButtonObjects3.length = 0;
gdjs.LeaderboardsCode.GDleaderBoardLabelObjects1.length = 0;
gdjs.LeaderboardsCode.GDleaderBoardLabelObjects2.length = 0;
gdjs.LeaderboardsCode.GDleaderBoardLabelObjects3.length = 0;
gdjs.LeaderboardsCode.GDleaderBoardDataObjects1.length = 0;
gdjs.LeaderboardsCode.GDleaderBoardDataObjects2.length = 0;
gdjs.LeaderboardsCode.GDleaderBoardDataObjects3.length = 0;

gdjs.LeaderboardsCode.eventsList2(runtimeScene);
return;

}

gdjs['LeaderboardsCode'] = gdjs.LeaderboardsCode;
