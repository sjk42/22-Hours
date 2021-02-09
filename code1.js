gdjs.GameCode = {};
gdjs.GameCode.GDPlayerObjects1_1final = [];

gdjs.GameCode.GDduckObjectObjects1_1final = [];

gdjs.GameCode.GDhighway_95holeObjects1= [];
gdjs.GameCode.GDhighway_95holeObjects2= [];
gdjs.GameCode.GDhighway_95holeObjects3= [];
gdjs.GameCode.GDhighwayObjects1= [];
gdjs.GameCode.GDhighwayObjects2= [];
gdjs.GameCode.GDhighwayObjects3= [];
gdjs.GameCode.GDPlayerObjects1= [];
gdjs.GameCode.GDPlayerObjects2= [];
gdjs.GameCode.GDPlayerObjects3= [];
gdjs.GameCode.GDbuildings_95farObjects1= [];
gdjs.GameCode.GDbuildings_95farObjects2= [];
gdjs.GameCode.GDbuildings_95farObjects3= [];
gdjs.GameCode.GDbuildings_95closeObjects1= [];
gdjs.GameCode.GDbuildings_95closeObjects2= [];
gdjs.GameCode.GDbuildings_95closeObjects3= [];
gdjs.GameCode.GDtrees_95foregroundObjects1= [];
gdjs.GameCode.GDtrees_95foregroundObjects2= [];
gdjs.GameCode.GDtrees_95foregroundObjects3= [];
gdjs.GameCode.GDtreesObjects1= [];
gdjs.GameCode.GDtreesObjects2= [];
gdjs.GameCode.GDtreesObjects3= [];
gdjs.GameCode.GDbackgroundObjects1= [];
gdjs.GameCode.GDbackgroundObjects2= [];
gdjs.GameCode.GDbackgroundObjects3= [];
gdjs.GameCode.GDdevLabelObjects1= [];
gdjs.GameCode.GDdevLabelObjects2= [];
gdjs.GameCode.GDdevLabelObjects3= [];
gdjs.GameCode.GDdevControlsObjects1= [];
gdjs.GameCode.GDdevControlsObjects2= [];
gdjs.GameCode.GDdevControlsObjects3= [];
gdjs.GameCode.GDcontrolsObjects1= [];
gdjs.GameCode.GDcontrolsObjects2= [];
gdjs.GameCode.GDcontrolsObjects3= [];
gdjs.GameCode.GDmainMenuButtonObjects1= [];
gdjs.GameCode.GDmainMenuButtonObjects2= [];
gdjs.GameCode.GDmainMenuButtonObjects3= [];
gdjs.GameCode.GDobscureGameObjects1= [];
gdjs.GameCode.GDobscureGameObjects2= [];
gdjs.GameCode.GDobscureGameObjects3= [];
gdjs.GameCode.GDmainMenuPauseButtonObjects1= [];
gdjs.GameCode.GDmainMenuPauseButtonObjects2= [];
gdjs.GameCode.GDmainMenuPauseButtonObjects3= [];
gdjs.GameCode.GDresumeButtonObjects1= [];
gdjs.GameCode.GDresumeButtonObjects2= [];
gdjs.GameCode.GDresumeButtonObjects3= [];
gdjs.GameCode.GDscoreLabelObjects1= [];
gdjs.GameCode.GDscoreLabelObjects2= [];
gdjs.GameCode.GDscoreLabelObjects3= [];
gdjs.GameCode.GDduckObjectObjects1= [];
gdjs.GameCode.GDduckObjectObjects2= [];
gdjs.GameCode.GDduckObjectObjects3= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.condition3IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};
gdjs.GameCode.condition3IsTrue_1 = {val:false};
gdjs.GameCode.conditionTrue_2 = {val:false};
gdjs.GameCode.condition0IsTrue_2 = {val:false};
gdjs.GameCode.condition1IsTrue_2 = {val:false};
gdjs.GameCode.condition2IsTrue_2 = {val:false};
gdjs.GameCode.condition3IsTrue_2 = {val:false};


gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhighway_9595holeObjects2Objects = Hashtable.newFrom({"highway_hole": gdjs.GameCode.GDhighway_95holeObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhighwayObjects2Objects = Hashtable.newFrom({"highway": gdjs.GameCode.GDhighwayObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhighwayObjects1Objects = Hashtable.newFrom({"highway": gdjs.GameCode.GDhighwayObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDduckObjectObjects1Objects = Hashtable.newFrom({"duckObject": gdjs.GameCode.GDduckObjectObjects1});gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) < 1);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDhighway_95holeObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhighway_9595holeObjects2Objects, 750, 303, "");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) >= 1);
}
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) < 9);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(gdjs.GameCode.GDhighwayObjects1, gdjs.GameCode.GDhighwayObjects2);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhighwayObjects2Objects, 750, 303, "");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) >= 9);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDduckObjectObjects1.length = 0;

/* Reuse gdjs.GameCode.GDhighwayObjects1 */
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhighwayObjects1Objects, 750, 303, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDduckObjectObjects1Objects, 750, 245, "Player layer");
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhighway_9595holeObjects2Objects = Hashtable.newFrom({"highway_hole": gdjs.GameCode.GDhighway_95holeObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhighwayObjects2Objects = Hashtable.newFrom({"highway": gdjs.GameCode.GDhighwayObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhighwayObjects1Objects = Hashtable.newFrom({"highway": gdjs.GameCode.GDhighwayObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDduckObjectObjects1Objects = Hashtable.newFrom({"duckObject": gdjs.GameCode.GDduckObjectObjects1});gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) < 1);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.GameCode.GDhighway_95holeObjects1, gdjs.GameCode.GDhighway_95holeObjects2);

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhighway_9595holeObjects2Objects, 750, 303, "");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) >= 1);
}
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) < 9);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.GameCode.GDhighwayObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhighwayObjects2Objects, 750, 303, "");
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(6)) >= 9);
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDduckObjectObjects1.length = 0;

gdjs.GameCode.GDhighwayObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDhighwayObjects1Objects, 750, 303, "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDduckObjectObjects1Objects, 750, 245, "Player layer");
}}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("musicFlag")) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("muteFlag")) == 1;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.pauseMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getVariables().get("musicFlag").setNumber(0);
}{runtimeScene.getVariables().get("muteFlag").setNumber(0);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("musicFlag")) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("muteFlag")) == 1;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.continueMusicOnChannel(runtimeScene, 1);
}{runtimeScene.getVariables().get("musicFlag").setNumber(1);
}{runtimeScene.getVariables().get("muteFlag").setNumber(0);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmainMenuButtonObjects1Objects = Hashtable.newFrom({"mainMenuButton": gdjs.GameCode.GDmainMenuButtonObjects1});gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", true);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmainMenuButtonObjects1Objects = Hashtable.newFrom({"mainMenuButton": gdjs.GameCode.GDmainMenuButtonObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresumeButtonObjects1Objects = Hashtable.newFrom({"resumeButton": gdjs.GameCode.GDresumeButtonObjects1});gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("mainMenuPauseButton"), gdjs.GameCode.GDmainMenuPauseButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("obscureGame"), gdjs.GameCode.GDobscureGameObjects1);
/* Reuse gdjs.GameCode.GDresumeButtonObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDobscureGameObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDobscureGameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDmainMenuPauseButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDmainMenuPauseButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDresumeButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDresumeButtonObjects1[i].hide();
}
}{runtimeScene.getVariables().getFromIndex(5).setNumber(0);
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].playAnimation();
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresumeButtonObjects1Objects = Hashtable.newFrom({"resumeButton": gdjs.GameCode.GDresumeButtonObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmainMenuPauseButtonObjects1Objects = Hashtable.newFrom({"mainMenuPauseButton": gdjs.GameCode.GDmainMenuPauseButtonObjects1});gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main Menu", false);
}{runtimeScene.getVariables().getFromIndex(5).setNumber(0);
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmainMenuPauseButtonObjects1Objects = Hashtable.newFrom({"mainMenuPauseButton": gdjs.GameCode.GDmainMenuPauseButtonObjects1});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.GameCode.GDPlayerObjects2});gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDduckObjectObjects2Objects = Hashtable.newFrom({"duckObject": gdjs.GameCode.GDduckObjectObjects2});gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("devFlag")) == 1;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(7).setNumber(1);
}{runtimeScene.getVariables().get("devFlag").setNumber(0);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("devFlag")) == 1;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(7).setNumber(0);
}{runtimeScene.getVariables().get("devFlag").setNumber(0);
}{runtimeScene.getVariables().getFromIndex(9).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(10).setNumber(0);
}}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "b");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(9).setNumber(1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "n");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(10).setNumber(1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(10000);
}}

}


};gdjs.GameCode.eventsList8 = function(runtimeScene) {

{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("buildings_close"), gdjs.GameCode.GDbuildings_95closeObjects1);
gdjs.copyArray(runtimeScene.getObjects("buildings_far"), gdjs.GameCode.GDbuildings_95farObjects1);
gdjs.copyArray(runtimeScene.getObjects("mainMenuPauseButton"), gdjs.GameCode.GDmainMenuPauseButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("obscureGame"), gdjs.GameCode.GDobscureGameObjects1);
gdjs.copyArray(runtimeScene.getObjects("resumeButton"), gdjs.GameCode.GDresumeButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("trees"), gdjs.GameCode.GDtreesObjects1);
gdjs.copyArray(runtimeScene.getObjects("trees_foreground"), gdjs.GameCode.GDtrees_95foregroundObjects1);
{runtimeScene.getVariables().getFromIndex(8).setNumber(5);
}{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "assets\\Race-to-Mars.ogg", 1, true, 5, 1);
}{runtimeScene.getVariables().get("musicFlag").setNumber(1);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(5);
}{runtimeScene.getVariables().getFromIndex(4).setNumber(40);
}{runtimeScene.getVariables().getFromIndex(3).setNumber(8);
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1.1);
}{runtimeScene.getVariables().getFromIndex(2).setNumber(0.9);
}{for(var i = 0, len = gdjs.GameCode.GDtrees_95foregroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtrees_95foregroundObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 96);
}
}{for(var i = 0, len = gdjs.GameCode.GDtreesObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtreesObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 96);
}
}{for(var i = 0, len = gdjs.GameCode.GDbuildings_95closeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbuildings_95closeObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 224);
}
}{for(var i = 0, len = gdjs.GameCode.GDbuildings_95farObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbuildings_95farObjects1[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) + 48);
}
}{runtimeScene.getVariables().getFromIndex(5).setNumber(0);
}{for(var i = 0, len = gdjs.GameCode.GDobscureGameObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDobscureGameObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDmainMenuPauseButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDmainMenuPauseButtonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDresumeButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDresumeButtonObjects1[i].hide();
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getVariables().getFromIndex(7).setNumber(0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 0;
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        gdjs.GameCode.condition2IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimation(2);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setX(gdjs.GameCode.GDPlayerObjects1[i].getX() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8))));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
gdjs.GameCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 0;
}if ( gdjs.GameCode.condition1IsTrue_0.val ) {
{
gdjs.GameCode.condition2IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "LShift"));
}}
}
if (gdjs.GameCode.condition2IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setAnimation(0);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setX(gdjs.GameCode.GDPlayerObjects1[i].getX() + (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8))));
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 0;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("scoreLabel"), gdjs.GameCode.GDscoreLabelObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).add(10);
}{for(var i = 0, len = gdjs.GameCode.GDscoreLabelObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDscoreLabelObjects1[i].setBBText("Score: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("buildings_close"), gdjs.GameCode.GDbuildings_95closeObjects1);
gdjs.copyArray(runtimeScene.getObjects("buildings_far"), gdjs.GameCode.GDbuildings_95farObjects1);
gdjs.copyArray(runtimeScene.getObjects("duckObject"), gdjs.GameCode.GDduckObjectObjects1);
gdjs.copyArray(runtimeScene.getObjects("highway"), gdjs.GameCode.GDhighwayObjects1);
gdjs.copyArray(runtimeScene.getObjects("highway_hole"), gdjs.GameCode.GDhighway_95holeObjects1);
gdjs.copyArray(runtimeScene.getObjects("trees"), gdjs.GameCode.GDtreesObjects1);
gdjs.copyArray(runtimeScene.getObjects("trees_foreground"), gdjs.GameCode.GDtrees_95foregroundObjects1);
{for(var i = 0, len = gdjs.GameCode.GDhighwayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDhighwayObjects1[i].setX(gdjs.GameCode.GDhighwayObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8))));
}
}{for(var i = 0, len = gdjs.GameCode.GDhighway_95holeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDhighway_95holeObjects1[i].setX(gdjs.GameCode.GDhighway_95holeObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8))));
}
}{for(var i = 0, len = gdjs.GameCode.GDduckObjectObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDduckObjectObjects1[i].setX(gdjs.GameCode.GDduckObjectObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(8))));
}
}{for(var i = 0, len = gdjs.GameCode.GDtreesObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtreesObjects1[i].setX(gdjs.GameCode.GDtreesObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1))));
}
}{for(var i = 0, len = gdjs.GameCode.GDbuildings_95closeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbuildings_95closeObjects1[i].setX(gdjs.GameCode.GDbuildings_95closeObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(3))));
}
}{for(var i = 0, len = gdjs.GameCode.GDbuildings_95farObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbuildings_95farObjects1[i].setX(gdjs.GameCode.GDbuildings_95farObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(4))));
}
}{for(var i = 0, len = gdjs.GameCode.GDtrees_95foregroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtrees_95foregroundObjects1[i].setX(gdjs.GameCode.GDtrees_95foregroundObjects1[i].getX() - (gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) / gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("trees"), gdjs.GameCode.GDtreesObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDtreesObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDtreesObjects1[i].getX() <= -(96) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDtreesObjects1[k] = gdjs.GameCode.GDtreesObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDtreesObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDtreesObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDtreesObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtreesObjects1[i].setX(gdjs.GameCode.GDtreesObjects1[i].getX() + (96));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("trees_foreground"), gdjs.GameCode.GDtrees_95foregroundObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDtrees_95foregroundObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDtrees_95foregroundObjects1[i].getX() <= -(96) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDtrees_95foregroundObjects1[k] = gdjs.GameCode.GDtrees_95foregroundObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDtrees_95foregroundObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDtrees_95foregroundObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDtrees_95foregroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDtrees_95foregroundObjects1[i].setX(gdjs.GameCode.GDtrees_95foregroundObjects1[i].getX() + (96));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("buildings_close"), gdjs.GameCode.GDbuildings_95closeObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbuildings_95closeObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDbuildings_95closeObjects1[i].getX() <= -(224) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbuildings_95closeObjects1[k] = gdjs.GameCode.GDbuildings_95closeObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDbuildings_95closeObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDbuildings_95closeObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDbuildings_95closeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbuildings_95closeObjects1[i].setX(gdjs.GameCode.GDbuildings_95closeObjects1[i].getX() + (224));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("buildings_far"), gdjs.GameCode.GDbuildings_95farObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDbuildings_95farObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDbuildings_95farObjects1[i].getX() <= -(48) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDbuildings_95farObjects1[k] = gdjs.GameCode.GDbuildings_95farObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDbuildings_95farObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDbuildings_95farObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDbuildings_95farObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDbuildings_95farObjects1[i].setX(gdjs.GameCode.GDbuildings_95farObjects1[i].getX() + (48));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("highway"), gdjs.GameCode.GDhighwayObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDhighwayObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDhighwayObjects1[i].getX() <= -((gdjs.GameCode.GDhighwayObjects1[i].getWidth())) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDhighwayObjects1[k] = gdjs.GameCode.GDhighwayObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDhighwayObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDhighwayObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDhighwayObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDhighwayObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(6).setNumber(gdjs.random(10));
}
{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("highway_hole"), gdjs.GameCode.GDhighway_95holeObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDhighway_95holeObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDhighway_95holeObjects1[i].getX() <= -((gdjs.GameCode.GDhighway_95holeObjects1[i].getWidth())) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDhighway_95holeObjects1[k] = gdjs.GameCode.GDhighway_95holeObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDhighway_95holeObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDhighway_95holeObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDhighway_95holeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDhighway_95holeObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().getFromIndex(6).setNumber(gdjs.random(10));
}
{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("duckObject"), gdjs.GameCode.GDduckObjectObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDduckObjectObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDduckObjectObjects1[i].getX() <= -((gdjs.GameCode.GDduckObjectObjects1[i].getWidth())) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDduckObjectObjects1[k] = gdjs.GameCode.GDduckObjectObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDduckObjectObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDduckObjectObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDduckObjectObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDduckObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "m");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7392996);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("muteFlag").setNumber(1);
}
{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("mainMenuButton"), gdjs.GameCode.GDmainMenuButtonObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmainMenuButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 0;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDmainMenuButtonObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDmainMenuButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDmainMenuButtonObjects1[i].setFontSize(45);
}
}
{ //Subevents
gdjs.GameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainMenuButton"), gdjs.GameCode.GDmainMenuButtonObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmainMenuButtonObjects1Objects, runtimeScene, true, true);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 0;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDmainMenuButtonObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDmainMenuButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDmainMenuButtonObjects1[i].setFontSize(40);
}
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "p");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 0;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(5).setNumber(1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 0;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(5).setNumber(1);
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("mainMenuPauseButton"), gdjs.GameCode.GDmainMenuPauseButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("obscureGame"), gdjs.GameCode.GDobscureGameObjects1);
gdjs.copyArray(runtimeScene.getObjects("resumeButton"), gdjs.GameCode.GDresumeButtonObjects1);
{for(var i = 0, len = gdjs.GameCode.GDobscureGameObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDobscureGameObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDmainMenuPauseButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDmainMenuPauseButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDresumeButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDresumeButtonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].pauseAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("resumeButton"), gdjs.GameCode.GDresumeButtonObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresumeButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDresumeButtonObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDresumeButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDresumeButtonObjects1[i].setFontSize(75);
}
}
{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("resumeButton"), gdjs.GameCode.GDresumeButtonObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDresumeButtonObjects1Objects, runtimeScene, true, true);
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDresumeButtonObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDresumeButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDresumeButtonObjects1[i].setFontSize(60);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainMenuPauseButton"), gdjs.GameCode.GDmainMenuPauseButtonObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmainMenuPauseButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDmainMenuPauseButtonObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDmainMenuPauseButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDmainMenuPauseButtonObjects1[i].setFontSize(75);
}
}
{ //Subevents
gdjs.GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("mainMenuPauseButton"), gdjs.GameCode.GDmainMenuPauseButtonObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(5)) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDmainMenuPauseButtonObjects1Objects, runtimeScene, true, true);
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDmainMenuPauseButtonObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDmainMenuPauseButtonObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDmainMenuPauseButtonObjects1[i].setFontSize(60);
}
}}

}


{

gdjs.GameCode.GDPlayerObjects1.length = 0;

gdjs.GameCode.GDduckObjectObjects1.length = 0;


gdjs.GameCode.condition0IsTrue_0.val = false;
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition0IsTrue_0;
gdjs.GameCode.GDPlayerObjects1_1final.length = 0;gdjs.GameCode.GDduckObjectObjects1_1final.length = 0;gdjs.GameCode.condition0IsTrue_1.val = false;
gdjs.GameCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects2[i].getY() > 400 ) {
        gdjs.GameCode.condition0IsTrue_1.val = true;
        gdjs.GameCode.GDPlayerObjects2[k] = gdjs.GameCode.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects2.length = k;if( gdjs.GameCode.condition0IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDPlayerObjects1_1final.indexOf(gdjs.GameCode.GDPlayerObjects2[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects1_1final.push(gdjs.GameCode.GDPlayerObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("duckObject"), gdjs.GameCode.GDduckObjectObjects2);
{gdjs.GameCode.conditionTrue_2 = gdjs.GameCode.condition1IsTrue_1;
gdjs.GameCode.condition0IsTrue_2.val = false;
gdjs.GameCode.condition1IsTrue_2.val = false;
{
gdjs.GameCode.condition0IsTrue_2.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDPlayerObjects2Objects, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDduckObjectObjects2Objects, false, runtimeScene, false);
}if ( gdjs.GameCode.condition0IsTrue_2.val ) {
{
gdjs.GameCode.condition1IsTrue_2.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(10)) == 0;
}}
gdjs.GameCode.conditionTrue_2.val = true && gdjs.GameCode.condition0IsTrue_2.val && gdjs.GameCode.condition1IsTrue_2.val;
}
if( gdjs.GameCode.condition1IsTrue_1.val ) {
    gdjs.GameCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.GameCode.GDPlayerObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDPlayerObjects1_1final.indexOf(gdjs.GameCode.GDPlayerObjects2[j]) === -1 )
            gdjs.GameCode.GDPlayerObjects1_1final.push(gdjs.GameCode.GDPlayerObjects2[j]);
    }
    for(var j = 0, jLen = gdjs.GameCode.GDduckObjectObjects2.length;j<jLen;++j) {
        if ( gdjs.GameCode.GDduckObjectObjects1_1final.indexOf(gdjs.GameCode.GDduckObjectObjects2[j]) === -1 )
            gdjs.GameCode.GDduckObjectObjects1_1final.push(gdjs.GameCode.GDduckObjectObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDPlayerObjects1_1final, gdjs.GameCode.GDPlayerObjects1);
gdjs.copyArray(gdjs.GameCode.GDduckObjectObjects1_1final, gdjs.GameCode.GDduckObjectObjects1);
}
}
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{



}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "t");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7876076);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("devFlag").setNumber(1);
}
{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) == 0;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("devControls"), gdjs.GameCode.GDdevControlsObjects1);
gdjs.copyArray(runtimeScene.getObjects("devLabel"), gdjs.GameCode.GDdevLabelObjects1);
{for(var i = 0, len = gdjs.GameCode.GDdevControlsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDdevControlsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.GameCode.GDdevLabelObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDdevLabelObjects1[i].hide(false);
}
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(7)) == 1;
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("devControls"), gdjs.GameCode.GDdevControlsObjects1);
gdjs.copyArray(runtimeScene.getObjects("devLabel"), gdjs.GameCode.GDdevLabelObjects1);
{for(var i = 0, len = gdjs.GameCode.GDdevControlsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDdevControlsObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.GameCode.GDdevLabelObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDdevLabelObjects1[i].hide();
}
}
{ //Subevents
gdjs.GameCode.eventsList7(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.GameCode.GDPlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(9)) == 1;
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDPlayerObjects1[i].getY() > 235 ) {
        gdjs.GameCode.condition1IsTrue_0.val = true;
        gdjs.GameCode.GDPlayerObjects1[k] = gdjs.GameCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDPlayerObjects1.length = k;}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDPlayerObjects1[i].setY(235);
}
}}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDhighway_95holeObjects1.length = 0;
gdjs.GameCode.GDhighway_95holeObjects2.length = 0;
gdjs.GameCode.GDhighway_95holeObjects3.length = 0;
gdjs.GameCode.GDhighwayObjects1.length = 0;
gdjs.GameCode.GDhighwayObjects2.length = 0;
gdjs.GameCode.GDhighwayObjects3.length = 0;
gdjs.GameCode.GDPlayerObjects1.length = 0;
gdjs.GameCode.GDPlayerObjects2.length = 0;
gdjs.GameCode.GDPlayerObjects3.length = 0;
gdjs.GameCode.GDbuildings_95farObjects1.length = 0;
gdjs.GameCode.GDbuildings_95farObjects2.length = 0;
gdjs.GameCode.GDbuildings_95farObjects3.length = 0;
gdjs.GameCode.GDbuildings_95closeObjects1.length = 0;
gdjs.GameCode.GDbuildings_95closeObjects2.length = 0;
gdjs.GameCode.GDbuildings_95closeObjects3.length = 0;
gdjs.GameCode.GDtrees_95foregroundObjects1.length = 0;
gdjs.GameCode.GDtrees_95foregroundObjects2.length = 0;
gdjs.GameCode.GDtrees_95foregroundObjects3.length = 0;
gdjs.GameCode.GDtreesObjects1.length = 0;
gdjs.GameCode.GDtreesObjects2.length = 0;
gdjs.GameCode.GDtreesObjects3.length = 0;
gdjs.GameCode.GDbackgroundObjects1.length = 0;
gdjs.GameCode.GDbackgroundObjects2.length = 0;
gdjs.GameCode.GDbackgroundObjects3.length = 0;
gdjs.GameCode.GDdevLabelObjects1.length = 0;
gdjs.GameCode.GDdevLabelObjects2.length = 0;
gdjs.GameCode.GDdevLabelObjects3.length = 0;
gdjs.GameCode.GDdevControlsObjects1.length = 0;
gdjs.GameCode.GDdevControlsObjects2.length = 0;
gdjs.GameCode.GDdevControlsObjects3.length = 0;
gdjs.GameCode.GDcontrolsObjects1.length = 0;
gdjs.GameCode.GDcontrolsObjects2.length = 0;
gdjs.GameCode.GDcontrolsObjects3.length = 0;
gdjs.GameCode.GDmainMenuButtonObjects1.length = 0;
gdjs.GameCode.GDmainMenuButtonObjects2.length = 0;
gdjs.GameCode.GDmainMenuButtonObjects3.length = 0;
gdjs.GameCode.GDobscureGameObjects1.length = 0;
gdjs.GameCode.GDobscureGameObjects2.length = 0;
gdjs.GameCode.GDobscureGameObjects3.length = 0;
gdjs.GameCode.GDmainMenuPauseButtonObjects1.length = 0;
gdjs.GameCode.GDmainMenuPauseButtonObjects2.length = 0;
gdjs.GameCode.GDmainMenuPauseButtonObjects3.length = 0;
gdjs.GameCode.GDresumeButtonObjects1.length = 0;
gdjs.GameCode.GDresumeButtonObjects2.length = 0;
gdjs.GameCode.GDresumeButtonObjects3.length = 0;
gdjs.GameCode.GDscoreLabelObjects1.length = 0;
gdjs.GameCode.GDscoreLabelObjects2.length = 0;
gdjs.GameCode.GDscoreLabelObjects3.length = 0;
gdjs.GameCode.GDduckObjectObjects1.length = 0;
gdjs.GameCode.GDduckObjectObjects2.length = 0;
gdjs.GameCode.GDduckObjectObjects3.length = 0;

gdjs.GameCode.eventsList8(runtimeScene);
return;

}

gdjs['GameCode'] = gdjs.GameCode;
