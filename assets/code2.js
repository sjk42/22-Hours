gdjs.SettingsCode = {};
gdjs.SettingsCode.GDbackgroundObjects1= [];
gdjs.SettingsCode.GDbackgroundObjects2= [];
gdjs.SettingsCode.GDbackButtonObjects1= [];
gdjs.SettingsCode.GDbackButtonObjects2= [];
gdjs.SettingsCode.GDsettingsTextObjects1= [];
gdjs.SettingsCode.GDsettingsTextObjects2= [];

gdjs.SettingsCode.conditionTrue_0 = {val:false};
gdjs.SettingsCode.condition0IsTrue_0 = {val:false};
gdjs.SettingsCode.condition1IsTrue_0 = {val:false};


gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.SettingsCode.GDbackButtonObjects1});gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}}

}


};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.SettingsCode.GDbackButtonObjects1});gdjs.SettingsCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.SettingsCode.GDbackButtonObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDbackButtonObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDbackButtonObjects1[i].setFontSize(75);
}
}
{ //Subevents
gdjs.SettingsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.SettingsCode.GDbackButtonObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDbackButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDbackButtonObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDbackButtonObjects1[i].setFontSize(60);
}
}}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDbackgroundObjects1.length = 0;
gdjs.SettingsCode.GDbackgroundObjects2.length = 0;
gdjs.SettingsCode.GDbackButtonObjects1.length = 0;
gdjs.SettingsCode.GDbackButtonObjects2.length = 0;
gdjs.SettingsCode.GDsettingsTextObjects1.length = 0;
gdjs.SettingsCode.GDsettingsTextObjects2.length = 0;

gdjs.SettingsCode.eventsList1(runtimeScene);
return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
