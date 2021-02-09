gdjs.SettingsCode = {};
gdjs.SettingsCode.GDbackgroundObjects1= [];
gdjs.SettingsCode.GDbackgroundObjects2= [];
gdjs.SettingsCode.GDbackgroundObjects3= [];
gdjs.SettingsCode.GDbackButtonObjects1= [];
gdjs.SettingsCode.GDbackButtonObjects2= [];
gdjs.SettingsCode.GDbackButtonObjects3= [];
gdjs.SettingsCode.GDsettingsTextObjects1= [];
gdjs.SettingsCode.GDsettingsTextObjects2= [];
gdjs.SettingsCode.GDsettingsTextObjects3= [];
gdjs.SettingsCode.GDisMenuMutedObjects1= [];
gdjs.SettingsCode.GDisMenuMutedObjects2= [];
gdjs.SettingsCode.GDisMenuMutedObjects3= [];
gdjs.SettingsCode.GDvolumeValueObjects1= [];
gdjs.SettingsCode.GDvolumeValueObjects2= [];
gdjs.SettingsCode.GDvolumeValueObjects3= [];
gdjs.SettingsCode.GDmuteLabelObjects1= [];
gdjs.SettingsCode.GDmuteLabelObjects2= [];
gdjs.SettingsCode.GDmuteLabelObjects3= [];
gdjs.SettingsCode.GDvolumeLabelObjects1= [];
gdjs.SettingsCode.GDvolumeLabelObjects2= [];
gdjs.SettingsCode.GDvolumeLabelObjects3= [];
gdjs.SettingsCode.GDvolumeRightArrowObjects1= [];
gdjs.SettingsCode.GDvolumeRightArrowObjects2= [];
gdjs.SettingsCode.GDvolumeRightArrowObjects3= [];
gdjs.SettingsCode.GDmuteMenuRightObjects1= [];
gdjs.SettingsCode.GDmuteMenuRightObjects2= [];
gdjs.SettingsCode.GDmuteMenuRightObjects3= [];
gdjs.SettingsCode.GDmuteMenuLeftObjects1= [];
gdjs.SettingsCode.GDmuteMenuLeftObjects2= [];
gdjs.SettingsCode.GDmuteMenuLeftObjects3= [];
gdjs.SettingsCode.GDvolumeLeftArrowObjects1= [];
gdjs.SettingsCode.GDvolumeLeftArrowObjects2= [];
gdjs.SettingsCode.GDvolumeLeftArrowObjects3= [];

gdjs.SettingsCode.conditionTrue_0 = {val:false};
gdjs.SettingsCode.condition0IsTrue_0 = {val:false};
gdjs.SettingsCode.condition1IsTrue_0 = {val:false};
gdjs.SettingsCode.condition2IsTrue_0 = {val:false};


gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("isMenuMuted"), gdjs.SettingsCode.GDisMenuMutedObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDisMenuMutedObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDisMenuMutedObjects2[i].setBBText(" NO ");
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("isMenuMuted"), gdjs.SettingsCode.GDisMenuMutedObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDisMenuMutedObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDisMenuMutedObjects1[i].setBBText("YES ");
}
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 0);
}}

}


};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.SettingsCode.GDbackButtonObjects1});gdjs.SettingsCode.eventsList1 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}}

}


};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.SettingsCode.GDbackButtonObjects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDvolumeLeftArrowObjects1Objects = Hashtable.newFrom({"volumeLeftArrow": gdjs.SettingsCode.GDvolumeLeftArrowObjects1});gdjs.SettingsCode.eventsList2 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}}

}


};gdjs.SettingsCode.eventsList3 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) > 9;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("volumeValue"), gdjs.SettingsCode.GDvolumeValueObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).sub(10);
}{for(var i = 0, len = gdjs.SettingsCode.GDvolumeValueObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumeValueObjects1[i].setBBText(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}
{ //Subevents
gdjs.SettingsCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDvolumeLeftArrowObjects1Objects = Hashtable.newFrom({"volumeLeftArrow": gdjs.SettingsCode.GDvolumeLeftArrowObjects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDvolumeRightArrowObjects1Objects = Hashtable.newFrom({"volumeRightArrow": gdjs.SettingsCode.GDvolumeRightArrowObjects1});gdjs.SettingsCode.eventsList4 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}}

}


};gdjs.SettingsCode.eventsList5 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) <= 90;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("volumeValue"), gdjs.SettingsCode.GDvolumeValueObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).add(10);
}{for(var i = 0, len = gdjs.SettingsCode.GDvolumeValueObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumeValueObjects1[i].setBBText(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}
{ //Subevents
gdjs.SettingsCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDvolumeRightArrowObjects1Objects = Hashtable.newFrom({"volumeRightArrow": gdjs.SettingsCode.GDvolumeRightArrowObjects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDmuteMenuLeftObjects1Objects = Hashtable.newFrom({"muteMenuLeft": gdjs.SettingsCode.GDmuteMenuLeftObjects1});gdjs.SettingsCode.eventsList6 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("isMenuMuted"), gdjs.SettingsCode.GDisMenuMutedObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{for(var i = 0, len = gdjs.SettingsCode.GDisMenuMutedObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDisMenuMutedObjects1[i].setBBText(" NO ");
}
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)));
}}

}


};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDmuteMenuLeftObjects1Objects = Hashtable.newFrom({"muteMenuLeft": gdjs.SettingsCode.GDmuteMenuLeftObjects1});gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDmuteMenuRightObjects1Objects = Hashtable.newFrom({"muteMenuRight": gdjs.SettingsCode.GDmuteMenuRightObjects1});gdjs.SettingsCode.eventsList7 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("isMenuMuted"), gdjs.SettingsCode.GDisMenuMutedObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}{for(var i = 0, len = gdjs.SettingsCode.GDisMenuMutedObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDisMenuMutedObjects1[i].setBBText("YES ");
}
}{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 0);
}}

}


};gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDmuteMenuRightObjects1Objects = Hashtable.newFrom({"muteMenuRight": gdjs.SettingsCode.GDmuteMenuRightObjects1});gdjs.SettingsCode.eventsList8 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("volumeValue"), gdjs.SettingsCode.GDvolumeValueObjects1);
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "menu-music.ogg", 1, true, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}{for(var i = 0, len = gdjs.SettingsCode.GDvolumeValueObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumeValueObjects1[i].setBBText(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)));
}
}
{ //Subevents
gdjs.SettingsCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


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
gdjs.SettingsCode.eventsList1(runtimeScene);} //End of subevents
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


{



}


{

gdjs.copyArray(runtimeScene.getObjects("volumeLeftArrow"), gdjs.SettingsCode.GDvolumeLeftArrowObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDvolumeLeftArrowObjects1Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDvolumeLeftArrowObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDvolumeLeftArrowObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumeLeftArrowObjects1[i].setColor("255;0;0");
}
}
{ //Subevents
gdjs.SettingsCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("volumeLeftArrow"), gdjs.SettingsCode.GDvolumeLeftArrowObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDvolumeLeftArrowObjects1Objects, runtimeScene, true, true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDvolumeLeftArrowObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDvolumeLeftArrowObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumeLeftArrowObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("volumeRightArrow"), gdjs.SettingsCode.GDvolumeRightArrowObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDvolumeRightArrowObjects1Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDvolumeRightArrowObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDvolumeRightArrowObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumeRightArrowObjects1[i].setColor("255;0;0");
}
}
{ //Subevents
gdjs.SettingsCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("volumeRightArrow"), gdjs.SettingsCode.GDvolumeRightArrowObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDvolumeRightArrowObjects1Objects, runtimeScene, true, true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDvolumeRightArrowObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDvolumeRightArrowObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumeRightArrowObjects1[i].setColor("0;0;0");
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("muteMenuLeft"), gdjs.SettingsCode.GDmuteMenuLeftObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDmuteMenuLeftObjects1Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDmuteMenuLeftObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDmuteMenuLeftObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDmuteMenuLeftObjects1[i].setColor("255;0;0");
}
}
{ //Subevents
gdjs.SettingsCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("muteMenuLeft"), gdjs.SettingsCode.GDmuteMenuLeftObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDmuteMenuLeftObjects1Objects, runtimeScene, true, true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDmuteMenuLeftObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDmuteMenuLeftObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDmuteMenuLeftObjects1[i].setColor("0;0;0");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("muteMenuRight"), gdjs.SettingsCode.GDmuteMenuRightObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDmuteMenuRightObjects1Objects, runtimeScene, true, false);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDmuteMenuRightObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDmuteMenuRightObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDmuteMenuRightObjects1[i].setColor("255;0;0");
}
}
{ //Subevents
gdjs.SettingsCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("muteMenuRight"), gdjs.SettingsCode.GDmuteMenuRightObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SettingsCode.mapOfGDgdjs_46SettingsCode_46GDmuteMenuRightObjects1Objects, runtimeScene, true, true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDmuteMenuRightObjects1 */
{for(var i = 0, len = gdjs.SettingsCode.GDmuteMenuRightObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDmuteMenuRightObjects1[i].setColor("0;0;0");
}
}}

}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDbackgroundObjects1.length = 0;
gdjs.SettingsCode.GDbackgroundObjects2.length = 0;
gdjs.SettingsCode.GDbackgroundObjects3.length = 0;
gdjs.SettingsCode.GDbackButtonObjects1.length = 0;
gdjs.SettingsCode.GDbackButtonObjects2.length = 0;
gdjs.SettingsCode.GDbackButtonObjects3.length = 0;
gdjs.SettingsCode.GDsettingsTextObjects1.length = 0;
gdjs.SettingsCode.GDsettingsTextObjects2.length = 0;
gdjs.SettingsCode.GDsettingsTextObjects3.length = 0;
gdjs.SettingsCode.GDisMenuMutedObjects1.length = 0;
gdjs.SettingsCode.GDisMenuMutedObjects2.length = 0;
gdjs.SettingsCode.GDisMenuMutedObjects3.length = 0;
gdjs.SettingsCode.GDvolumeValueObjects1.length = 0;
gdjs.SettingsCode.GDvolumeValueObjects2.length = 0;
gdjs.SettingsCode.GDvolumeValueObjects3.length = 0;
gdjs.SettingsCode.GDmuteLabelObjects1.length = 0;
gdjs.SettingsCode.GDmuteLabelObjects2.length = 0;
gdjs.SettingsCode.GDmuteLabelObjects3.length = 0;
gdjs.SettingsCode.GDvolumeLabelObjects1.length = 0;
gdjs.SettingsCode.GDvolumeLabelObjects2.length = 0;
gdjs.SettingsCode.GDvolumeLabelObjects3.length = 0;
gdjs.SettingsCode.GDvolumeRightArrowObjects1.length = 0;
gdjs.SettingsCode.GDvolumeRightArrowObjects2.length = 0;
gdjs.SettingsCode.GDvolumeRightArrowObjects3.length = 0;
gdjs.SettingsCode.GDmuteMenuRightObjects1.length = 0;
gdjs.SettingsCode.GDmuteMenuRightObjects2.length = 0;
gdjs.SettingsCode.GDmuteMenuRightObjects3.length = 0;
gdjs.SettingsCode.GDmuteMenuLeftObjects1.length = 0;
gdjs.SettingsCode.GDmuteMenuLeftObjects2.length = 0;
gdjs.SettingsCode.GDmuteMenuLeftObjects3.length = 0;
gdjs.SettingsCode.GDvolumeLeftArrowObjects1.length = 0;
gdjs.SettingsCode.GDvolumeLeftArrowObjects2.length = 0;
gdjs.SettingsCode.GDvolumeLeftArrowObjects3.length = 0;

gdjs.SettingsCode.eventsList8(runtimeScene);
return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
