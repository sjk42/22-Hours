gdjs.LeaderboardsCode = {};
gdjs.LeaderboardsCode.GDbackgroundObjects1= [];
gdjs.LeaderboardsCode.GDbackgroundObjects2= [];
gdjs.LeaderboardsCode.GDbackButtonObjects1= [];
gdjs.LeaderboardsCode.GDbackButtonObjects2= [];
gdjs.LeaderboardsCode.GDleaderBoardLabelObjects1= [];
gdjs.LeaderboardsCode.GDleaderBoardLabelObjects2= [];
gdjs.LeaderboardsCode.GDleaderBoardDataObjects1= [];
gdjs.LeaderboardsCode.GDleaderBoardDataObjects2= [];
gdjs.LeaderboardsCode.GDleaderDataObjects1= [];
gdjs.LeaderboardsCode.GDleaderDataObjects2= [];

gdjs.LeaderboardsCode.conditionTrue_0 = {val:false};
gdjs.LeaderboardsCode.condition0IsTrue_0 = {val:false};
gdjs.LeaderboardsCode.condition1IsTrue_0 = {val:false};


gdjs.LeaderboardsCode.eventsList0 = function(runtimeScene) {

{


gdjs.LeaderboardsCode.condition0IsTrue_0.val = false;
{
gdjs.LeaderboardsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if (gdjs.LeaderboardsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 0);
}}

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


};

gdjs.LeaderboardsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardsCode.GDbackgroundObjects1.length = 0;
gdjs.LeaderboardsCode.GDbackgroundObjects2.length = 0;
gdjs.LeaderboardsCode.GDbackButtonObjects1.length = 0;
gdjs.LeaderboardsCode.GDbackButtonObjects2.length = 0;
gdjs.LeaderboardsCode.GDleaderBoardLabelObjects1.length = 0;
gdjs.LeaderboardsCode.GDleaderBoardLabelObjects2.length = 0;
gdjs.LeaderboardsCode.GDleaderBoardDataObjects1.length = 0;
gdjs.LeaderboardsCode.GDleaderBoardDataObjects2.length = 0;
gdjs.LeaderboardsCode.GDleaderDataObjects1.length = 0;
gdjs.LeaderboardsCode.GDleaderDataObjects2.length = 0;

gdjs.LeaderboardsCode.eventsList2(runtimeScene);
return;

}

gdjs['LeaderboardsCode'] = gdjs.LeaderboardsCode;
