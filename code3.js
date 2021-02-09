gdjs.CreditsCode = {};
gdjs.CreditsCode.GDbackgroundObjects1= [];
gdjs.CreditsCode.GDbackgroundObjects2= [];
gdjs.CreditsCode.GDbackButtonObjects1= [];
gdjs.CreditsCode.GDbackButtonObjects2= [];
gdjs.CreditsCode.GDcreditsTextObjects1= [];
gdjs.CreditsCode.GDcreditsTextObjects2= [];
gdjs.CreditsCode.GDmusicLabelObjects1= [];
gdjs.CreditsCode.GDmusicLabelObjects2= [];
gdjs.CreditsCode.GDartLabelObjects1= [];
gdjs.CreditsCode.GDartLabelObjects2= [];
gdjs.CreditsCode.GDdevLabelObjects1= [];
gdjs.CreditsCode.GDdevLabelObjects2= [];

gdjs.CreditsCode.conditionTrue_0 = {val:false};
gdjs.CreditsCode.condition0IsTrue_0 = {val:false};
gdjs.CreditsCode.condition1IsTrue_0 = {val:false};


gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.CreditsCode.GDbackButtonObjects1});gdjs.CreditsCode.eventsList0 = function(runtimeScene) {

{


gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}}

}


};gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.CreditsCode.GDbackButtonObjects1});gdjs.CreditsCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.CreditsCode.GDbackButtonObjects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CreditsCode.GDbackButtonObjects1 */
{for(var i = 0, len = gdjs.CreditsCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDbackButtonObjects1[i].setFontSize(75);
}
}
{ //Subevents
gdjs.CreditsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("backButton"), gdjs.CreditsCode.GDbackButtonObjects1);

gdjs.CreditsCode.condition0IsTrue_0.val = false;
{
gdjs.CreditsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditsCode.mapOfGDgdjs_46CreditsCode_46GDbackButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.CreditsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.CreditsCode.GDbackButtonObjects1 */
{for(var i = 0, len = gdjs.CreditsCode.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.CreditsCode.GDbackButtonObjects1[i].setFontSize(60);
}
}}

}


};

gdjs.CreditsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditsCode.GDbackgroundObjects1.length = 0;
gdjs.CreditsCode.GDbackgroundObjects2.length = 0;
gdjs.CreditsCode.GDbackButtonObjects1.length = 0;
gdjs.CreditsCode.GDbackButtonObjects2.length = 0;
gdjs.CreditsCode.GDcreditsTextObjects1.length = 0;
gdjs.CreditsCode.GDcreditsTextObjects2.length = 0;
gdjs.CreditsCode.GDmusicLabelObjects1.length = 0;
gdjs.CreditsCode.GDmusicLabelObjects2.length = 0;
gdjs.CreditsCode.GDartLabelObjects1.length = 0;
gdjs.CreditsCode.GDartLabelObjects2.length = 0;
gdjs.CreditsCode.GDdevLabelObjects1.length = 0;
gdjs.CreditsCode.GDdevLabelObjects2.length = 0;

gdjs.CreditsCode.eventsList1(runtimeScene);
return;

}

gdjs['CreditsCode'] = gdjs.CreditsCode;
