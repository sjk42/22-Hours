gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDbackgroundObjects1= [];
gdjs.Game_32OverCode.GDbackgroundObjects2= [];
gdjs.Game_32OverCode.GDmainMenuButtonObjects1= [];
gdjs.Game_32OverCode.GDmainMenuButtonObjects2= [];
gdjs.Game_32OverCode.GDgameOverLabelObjects1= [];
gdjs.Game_32OverCode.GDgameOverLabelObjects2= [];
gdjs.Game_32OverCode.GDscoreLabelObjects1= [];
gdjs.Game_32OverCode.GDscoreLabelObjects2= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};


gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDmainMenuButtonObjects1Objects = Hashtable.newFrom({"mainMenuButton": gdjs.Game_32OverCode.GDmainMenuButtonObjects1});gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDmainMenuButtonObjects1Objects = Hashtable.newFrom({"mainMenuButton": gdjs.Game_32OverCode.GDmainMenuButtonObjects1});gdjs.Game_32OverCode.eventsList1 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("scoreLabel"), gdjs.Game_32OverCode.GDscoreLabelObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDscoreLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDscoreLabelObjects1[i].setBBText("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainMenuButton"), gdjs.Game_32OverCode.GDmainMenuButtonObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDmainMenuButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDmainMenuButtonObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDmainMenuButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDmainMenuButtonObjects1[i].setFontSize(75);
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainMenuButton"), gdjs.Game_32OverCode.GDmainMenuButtonObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDmainMenuButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDmainMenuButtonObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDmainMenuButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDmainMenuButtonObjects1[i].setFontSize(60);
}
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDbackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDbackgroundObjects2.length = 0;
gdjs.Game_32OverCode.GDmainMenuButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDmainMenuButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDgameOverLabelObjects1.length = 0;
gdjs.Game_32OverCode.GDgameOverLabelObjects2.length = 0;
gdjs.Game_32OverCode.GDscoreLabelObjects1.length = 0;
gdjs.Game_32OverCode.GDscoreLabelObjects2.length = 0;

gdjs.Game_32OverCode.eventsList1(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
