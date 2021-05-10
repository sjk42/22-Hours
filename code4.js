gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDbackgroundObjects1= [];
gdjs.Game_32OverCode.GDbackgroundObjects2= [];
gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1= [];
gdjs.Game_32OverCode.GDsubmitScoreButtonObjects2= [];
gdjs.Game_32OverCode.GDplayAgainButtonObjects1= [];
gdjs.Game_32OverCode.GDplayAgainButtonObjects2= [];
gdjs.Game_32OverCode.GDmainMenuButtonObjects1= [];
gdjs.Game_32OverCode.GDmainMenuButtonObjects2= [];
gdjs.Game_32OverCode.GDgameOverLabelObjects1= [];
gdjs.Game_32OverCode.GDgameOverLabelObjects2= [];
gdjs.Game_32OverCode.GDscoreLabelObjects1= [];
gdjs.Game_32OverCode.GDscoreLabelObjects2= [];
gdjs.Game_32OverCode.GDnameReaderObjects1= [];
gdjs.Game_32OverCode.GDnameReaderObjects2= [];
gdjs.Game_32OverCode.GDnameLabelObjects1= [];
gdjs.Game_32OverCode.GDnameLabelObjects2= [];
gdjs.Game_32OverCode.GDsubmittedLabelObjects1= [];
gdjs.Game_32OverCode.GDsubmittedLabelObjects2= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition3IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition4IsTrue_0 = {val:false};
gdjs.Game_32OverCode.conditionTrue_1 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition3IsTrue_1 = {val:false};
gdjs.Game_32OverCode.condition4IsTrue_1 = {val:false};


gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDmainMenuButtonObjects1Objects = Hashtable.newFrom({"mainMenuButton": gdjs.Game_32OverCode.GDmainMenuButtonObjects1});gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}}

}


};gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDmainMenuButtonObjects1Objects = Hashtable.newFrom({"mainMenuButton": gdjs.Game_32OverCode.GDmainMenuButtonObjects1});gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDplayAgainButtonObjects1Objects = Hashtable.newFrom({"playAgainButton": gdjs.Game_32OverCode.GDplayAgainButtonObjects1});gdjs.Game_32OverCode.eventsList1 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDplayAgainButtonObjects1Objects = Hashtable.newFrom({"playAgainButton": gdjs.Game_32OverCode.GDplayAgainButtonObjects1});gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDsubmitScoreButtonObjects1Objects = Hashtable.newFrom({"submitScoreButton": gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1});gdjs.Game_32OverCode.userFunc0x8c4720 = function(runtimeScene) {
"use strict";

var db = firebase.database();

var ref = db.ref('scores/');

var name = runtimeScene.getVariables().get("name");
var score = runtimeScene.getVariables().get("finalScore");

var data = {
    name: name.getAsString(),
    score: score.getAsNumber()
}
ref.push(data);

};
gdjs.Game_32OverCode.eventsList2 = function(runtimeScene) {

{


gdjs.Game_32OverCode.userFunc0x8c4720(runtimeScene);

}


};gdjs.Game_32OverCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1 */

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
gdjs.Game_32OverCode.condition2IsTrue_0.val = false;
gdjs.Game_32OverCode.condition3IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1.length;i<l;++i) {
    if ( gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1[i].isVisible() ) {
        gdjs.Game_32OverCode.condition1IsTrue_0.val = true;
        gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1[k] = gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1[i];
        ++k;
    }
}
gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1.length = k;}if ( gdjs.Game_32OverCode.condition1IsTrue_0.val ) {
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition2IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = (gdjs.evtTools.string.strLen(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2))) == 3);
}
}if ( gdjs.Game_32OverCode.condition2IsTrue_0.val ) {
{
gdjs.Game_32OverCode.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 0;
}}
}
}
if (gdjs.Game_32OverCode.condition3IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1 */
gdjs.copyArray(runtimeScene.getObjects("submittedLabel"), gdjs.Game_32OverCode.GDsubmittedLabelObjects1);
{runtimeScene.getVariables().getFromIndex(0).add(1);
}{for(var i = 0, len = gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDsubmittedLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDsubmittedLabelObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDsubmitScoreButtonObjects1Objects = Hashtable.newFrom({"submitScoreButton": gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1});gdjs.Game_32OverCode.eventsList4 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Back");
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDnameReaderObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDnameReaderObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDnameReaderObjects1[i].activate(true);
}
}{for(var i = 0, len = gdjs.Game_32OverCode.GDnameReaderObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDnameReaderObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
}}

}


};gdjs.Game_32OverCode.eventsList5 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("scoreLabel"), gdjs.Game_32OverCode.GDscoreLabelObjects1);
gdjs.copyArray(runtimeScene.getObjects("submittedLabel"), gdjs.Game_32OverCode.GDsubmittedLabelObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDscoreLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDscoreLabelObjects1[i].setBBText("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "menu-music.ogg", 1, true, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)), 1);
}{gdjs.evtTools.firebase.database.getVariable("/maxEntries", runtimeScene.getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}{for(var i = 0, len = gdjs.Game_32OverCode.GDsubmittedLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDsubmittedLabelObjects1[i].hide();
}
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setMusicOnChannelVolume(runtimeScene, 1, 0);
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


{

gdjs.copyArray(runtimeScene.getObjects("playAgainButton"), gdjs.Game_32OverCode.GDplayAgainButtonObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDplayAgainButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDplayAgainButtonObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDplayAgainButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDplayAgainButtonObjects1[i].setFontSize(75);
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("playAgainButton"), gdjs.Game_32OverCode.GDplayAgainButtonObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDplayAgainButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDplayAgainButtonObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDplayAgainButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDplayAgainButtonObjects1[i].setFontSize(60);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("submitScoreButton"), gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDsubmitScoreButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1[i].setFontSize(50);
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("submitScoreButton"), gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDsubmitScoreButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1[i].setFontSize(40);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("nameReader"), gdjs.Game_32OverCode.GDnameReaderObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition0IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = (gdjs.evtTools.string.strLen((( gdjs.Game_32OverCode.GDnameReaderObjects1.length === 0 ) ? "" :gdjs.Game_32OverCode.GDnameReaderObjects1[0].getString())) <= 3);
}
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("nameLabel"), gdjs.Game_32OverCode.GDnameLabelObjects1);
/* Reuse gdjs.Game_32OverCode.GDnameReaderObjects1 */
{runtimeScene.getVariables().getFromIndex(2).setString((( gdjs.Game_32OverCode.GDnameReaderObjects1.length === 0 ) ? "" :gdjs.Game_32OverCode.GDnameReaderObjects1[0].getString()));
}{for(var i = 0, len = gdjs.Game_32OverCode.GDnameLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDnameLabelObjects1[i].setBBText("Enter Name: " + gdjs.evtTools.common.getVariableString(runtimeScene.getVariables().getFromIndex(2)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("nameReader"), gdjs.Game_32OverCode.GDnameReaderObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition0IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = (gdjs.evtTools.string.strLen((( gdjs.Game_32OverCode.GDnameReaderObjects1.length === 0 ) ? "" :gdjs.Game_32OverCode.GDnameReaderObjects1[0].getString())) == 0);
}
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("nameLabel"), gdjs.Game_32OverCode.GDnameLabelObjects1);
{for(var i = 0, len = gdjs.Game_32OverCode.GDnameLabelObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDnameLabelObjects1[i].setBBText("Enter Name: (3 Characters)");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("nameReader"), gdjs.Game_32OverCode.GDnameReaderObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
{gdjs.Game_32OverCode.conditionTrue_1 = gdjs.Game_32OverCode.condition0IsTrue_0;
gdjs.Game_32OverCode.conditionTrue_1.val = (gdjs.evtTools.string.strLen((( gdjs.Game_32OverCode.GDnameReaderObjects1.length === 0 ) ? "" :gdjs.Game_32OverCode.GDnameReaderObjects1[0].getString())) > 3);
}
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Game_32OverCode.GDnameReaderObjects1 */
{for(var i = 0, len = gdjs.Game_32OverCode.GDnameReaderObjects1.length ;i < len;++i) {
    gdjs.Game_32OverCode.GDnameReaderObjects1[i].activate(false);
}
}
{ //Subevents
gdjs.Game_32OverCode.eventsList4(runtimeScene);} //End of subevents
}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDbackgroundObjects1.length = 0;
gdjs.Game_32OverCode.GDbackgroundObjects2.length = 0;
gdjs.Game_32OverCode.GDsubmitScoreButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDsubmitScoreButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDplayAgainButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDplayAgainButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDmainMenuButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDmainMenuButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDgameOverLabelObjects1.length = 0;
gdjs.Game_32OverCode.GDgameOverLabelObjects2.length = 0;
gdjs.Game_32OverCode.GDscoreLabelObjects1.length = 0;
gdjs.Game_32OverCode.GDscoreLabelObjects2.length = 0;
gdjs.Game_32OverCode.GDnameReaderObjects1.length = 0;
gdjs.Game_32OverCode.GDnameReaderObjects2.length = 0;
gdjs.Game_32OverCode.GDnameLabelObjects1.length = 0;
gdjs.Game_32OverCode.GDnameLabelObjects2.length = 0;
gdjs.Game_32OverCode.GDsubmittedLabelObjects1.length = 0;
gdjs.Game_32OverCode.GDsubmittedLabelObjects2.length = 0;

gdjs.Game_32OverCode.eventsList5(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
