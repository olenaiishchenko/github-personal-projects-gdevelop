gdjs.New_32sceneCode = {};
gdjs.New_32sceneCode.localVariables = [];
gdjs.New_32sceneCode.forEachCount0_3 = 0;

gdjs.New_32sceneCode.forEachCount1_3 = 0;

gdjs.New_32sceneCode.forEachIndex3 = 0;

gdjs.New_32sceneCode.forEachObjects3 = [];

gdjs.New_32sceneCode.forEachTotalCount3 = 0;

gdjs.New_32sceneCode.GDPlayerObjects1= [];
gdjs.New_32sceneCode.GDPlayerObjects2= [];
gdjs.New_32sceneCode.GDPlayerObjects3= [];
gdjs.New_32sceneCode.GDPlatformObjects1= [];
gdjs.New_32sceneCode.GDPlatformObjects2= [];
gdjs.New_32sceneCode.GDPlatformObjects3= [];
gdjs.New_32sceneCode.GDJumpthruObjects1= [];
gdjs.New_32sceneCode.GDJumpthruObjects2= [];
gdjs.New_32sceneCode.GDJumpthruObjects3= [];
gdjs.New_32sceneCode.GDTiledGrassPlatformObjects1= [];
gdjs.New_32sceneCode.GDTiledGrassPlatformObjects2= [];
gdjs.New_32sceneCode.GDTiledGrassPlatformObjects3= [];
gdjs.New_32sceneCode.GDTiledCastlePlatformObjects1= [];
gdjs.New_32sceneCode.GDTiledCastlePlatformObjects2= [];
gdjs.New_32sceneCode.GDTiledCastlePlatformObjects3= [];
gdjs.New_32sceneCode.GDMovingPlatformObjects1= [];
gdjs.New_32sceneCode.GDMovingPlatformObjects2= [];
gdjs.New_32sceneCode.GDMovingPlatformObjects3= [];
gdjs.New_32sceneCode.GDGoLeftObjects1= [];
gdjs.New_32sceneCode.GDGoLeftObjects2= [];
gdjs.New_32sceneCode.GDGoLeftObjects3= [];
gdjs.New_32sceneCode.GDGoRightObjects1= [];
gdjs.New_32sceneCode.GDGoRightObjects2= [];
gdjs.New_32sceneCode.GDGoRightObjects3= [];
gdjs.New_32sceneCode.GDLadderObjects1= [];
gdjs.New_32sceneCode.GDLadderObjects2= [];
gdjs.New_32sceneCode.GDLadderObjects3= [];
gdjs.New_32sceneCode.GDPlayerHitBoxObjects1= [];
gdjs.New_32sceneCode.GDPlayerHitBoxObjects2= [];
gdjs.New_32sceneCode.GDPlayerHitBoxObjects3= [];
gdjs.New_32sceneCode.GDSlimeWalkObjects1= [];
gdjs.New_32sceneCode.GDSlimeWalkObjects2= [];
gdjs.New_32sceneCode.GDSlimeWalkObjects3= [];
gdjs.New_32sceneCode.GDFlyObjects1= [];
gdjs.New_32sceneCode.GDFlyObjects2= [];
gdjs.New_32sceneCode.GDFlyObjects3= [];
gdjs.New_32sceneCode.GDBackgroundObjectsObjects1= [];
gdjs.New_32sceneCode.GDBackgroundObjectsObjects2= [];
gdjs.New_32sceneCode.GDBackgroundObjectsObjects3= [];
gdjs.New_32sceneCode.GDScoreObjects1= [];
gdjs.New_32sceneCode.GDScoreObjects2= [];
gdjs.New_32sceneCode.GDScoreObjects3= [];
gdjs.New_32sceneCode.GDCoinObjects1= [];
gdjs.New_32sceneCode.GDCoinObjects2= [];
gdjs.New_32sceneCode.GDCoinObjects3= [];
gdjs.New_32sceneCode.GDCoinIconObjects1= [];
gdjs.New_32sceneCode.GDCoinIconObjects2= [];
gdjs.New_32sceneCode.GDCoinIconObjects3= [];
gdjs.New_32sceneCode.GDLeftButtonObjects1= [];
gdjs.New_32sceneCode.GDLeftButtonObjects2= [];
gdjs.New_32sceneCode.GDLeftButtonObjects3= [];
gdjs.New_32sceneCode.GDRightButtonObjects1= [];
gdjs.New_32sceneCode.GDRightButtonObjects2= [];
gdjs.New_32sceneCode.GDRightButtonObjects3= [];
gdjs.New_32sceneCode.GDJumpButtonObjects1= [];
gdjs.New_32sceneCode.GDJumpButtonObjects2= [];
gdjs.New_32sceneCode.GDJumpButtonObjects3= [];
gdjs.New_32sceneCode.GDArrowButtonsBgObjects1= [];
gdjs.New_32sceneCode.GDArrowButtonsBgObjects2= [];
gdjs.New_32sceneCode.GDArrowButtonsBgObjects3= [];
gdjs.New_32sceneCode.GDTiledForestBackgroundObjects1= [];
gdjs.New_32sceneCode.GDTiledForestBackgroundObjects2= [];
gdjs.New_32sceneCode.GDTiledForestBackgroundObjects3= [];
gdjs.New_32sceneCode.GDCheckpointObjects1= [];
gdjs.New_32sceneCode.GDCheckpointObjects2= [];
gdjs.New_32sceneCode.GDCheckpointObjects3= [];
gdjs.New_32sceneCode.GDTopButtonObjects1= [];
gdjs.New_32sceneCode.GDTopButtonObjects2= [];
gdjs.New_32sceneCode.GDTopButtonObjects3= [];
gdjs.New_32sceneCode.GDBottomButtonObjects1= [];
gdjs.New_32sceneCode.GDBottomButtonObjects2= [];
gdjs.New_32sceneCode.GDBottomButtonObjects3= [];
gdjs.New_32sceneCode.GDFadeInObjects1= [];
gdjs.New_32sceneCode.GDFadeInObjects2= [];
gdjs.New_32sceneCode.GDFadeInObjects3= [];


gdjs.New_32sceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10121692);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}}

}


};gdjs.New_32sceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.New_32sceneCode.GDPlayerHitBoxObjects1, gdjs.New_32sceneCode.GDPlayerHitBoxObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDPlayerHitBoxObjects2[k] = gdjs.New_32sceneCode.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerHitBoxObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects2);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects2[i].getBehavior("Animation").setAnimationName("Idle");
}
}}

}


{

/* Reuse gdjs.New_32sceneCode.GDPlayerHitBoxObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[k] = gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerHitBoxObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Running");
}
}}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDGoLeftObjects1Objects = Hashtable.newFrom({"GoLeft": gdjs.New_32sceneCode.GDGoLeftObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.New_32sceneCode.GDMovingPlatformObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDGoRightObjects1Objects = Hashtable.newFrom({"GoRight": gdjs.New_32sceneCode.GDGoRightObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDMovingPlatformObjects1Objects = Hashtable.newFrom({"MovingPlatform": gdjs.New_32sceneCode.GDMovingPlatformObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDGoLeftObjects2Objects = Hashtable.newFrom({"GoLeft": gdjs.New_32sceneCode.GDGoLeftObjects2});
gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDSlimeWalkObjects2ObjectsGDgdjs_9546New_959532sceneCode_9546GDFlyObjects2Objects = Hashtable.newFrom({"SlimeWalk": gdjs.New_32sceneCode.GDSlimeWalkObjects2, "Fly": gdjs.New_32sceneCode.GDFlyObjects2});
gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDGoRightObjects2Objects = Hashtable.newFrom({"GoRight": gdjs.New_32sceneCode.GDGoRightObjects2});
gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDSlimeWalkObjects2ObjectsGDgdjs_9546New_959532sceneCode_9546GDFlyObjects2Objects = Hashtable.newFrom({"SlimeWalk": gdjs.New_32sceneCode.GDSlimeWalkObjects2, "Fly": gdjs.New_32sceneCode.GDFlyObjects2});
gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.New_32sceneCode.GDPlayerHitBoxObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDSlimeWalkObjects1ObjectsGDgdjs_9546New_959532sceneCode_9546GDFlyObjects1Objects = Hashtable.newFrom({"SlimeWalk": gdjs.New_32sceneCode.GDSlimeWalkObjects1, "Fly": gdjs.New_32sceneCode.GDFlyObjects1});
gdjs.New_32sceneCode.eventsList2 = function(runtimeScene) {

};gdjs.New_32sceneCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.New_32sceneCode.GDFlyObjects2 */
/* Reuse gdjs.New_32sceneCode.GDSlimeWalkObjects2 */

gdjs.New_32sceneCode.forEachTotalCount3 = 0;
gdjs.New_32sceneCode.forEachObjects3.length = 0;
gdjs.New_32sceneCode.forEachCount0_3 = gdjs.New_32sceneCode.GDSlimeWalkObjects2.length;
gdjs.New_32sceneCode.forEachTotalCount3 += gdjs.New_32sceneCode.forEachCount0_3;
gdjs.New_32sceneCode.forEachObjects3.push.apply(gdjs.New_32sceneCode.forEachObjects3,gdjs.New_32sceneCode.GDSlimeWalkObjects2);
gdjs.New_32sceneCode.forEachCount1_3 = gdjs.New_32sceneCode.GDFlyObjects2.length;
gdjs.New_32sceneCode.forEachTotalCount3 += gdjs.New_32sceneCode.forEachCount1_3;
gdjs.New_32sceneCode.forEachObjects3.push.apply(gdjs.New_32sceneCode.forEachObjects3,gdjs.New_32sceneCode.GDFlyObjects2);
for (gdjs.New_32sceneCode.forEachIndex3 = 0;gdjs.New_32sceneCode.forEachIndex3 < gdjs.New_32sceneCode.forEachTotalCount3;++gdjs.New_32sceneCode.forEachIndex3) {
gdjs.New_32sceneCode.GDFlyObjects3.length = 0;

gdjs.New_32sceneCode.GDSlimeWalkObjects3.length = 0;


if (gdjs.New_32sceneCode.forEachIndex3 < gdjs.New_32sceneCode.forEachCount0_3) {
    gdjs.New_32sceneCode.GDSlimeWalkObjects3.push(gdjs.New_32sceneCode.forEachObjects3[gdjs.New_32sceneCode.forEachIndex3]);
}
else if (gdjs.New_32sceneCode.forEachIndex3 < gdjs.New_32sceneCode.forEachCount0_3+gdjs.New_32sceneCode.forEachCount1_3) {
    gdjs.New_32sceneCode.GDFlyObjects3.push(gdjs.New_32sceneCode.forEachObjects3[gdjs.New_32sceneCode.forEachIndex3]);
}
let isConditionTrue_0 = false;
if (true) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(50);
}}
}

}


};gdjs.New_32sceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.New_32sceneCode.GDPlayerHitBoxObjects1, gdjs.New_32sceneCode.GDPlayerHitBoxObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDPlayerHitBoxObjects2[k] = gdjs.New_32sceneCode.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerHitBoxObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.New_32sceneCode.GDFlyObjects1, gdjs.New_32sceneCode.GDFlyObjects2);

/* Reuse gdjs.New_32sceneCode.GDPlayerHitBoxObjects2 */
gdjs.copyArray(gdjs.New_32sceneCode.GDSlimeWalkObjects1, gdjs.New_32sceneCode.GDSlimeWalkObjects2);

{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeWalkObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
for(var i = 0, len = gdjs.New_32sceneCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFlyObjects2[i].getBehavior("Animation").setAnimationIndex(1);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeWalkObjects2[i].activateBehavior("PlatformerObject", true);
}
for(var i = 0, len = gdjs.New_32sceneCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFlyObjects2[i].activateBehavior("PlatformerObject", true);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
for(var i = 0, len = gdjs.New_32sceneCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFlyObjects2[i].getBehavior("PlatformerObject").setGravity(1500);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "jump.wav", false, 100, 1);
}
{ //Subevents
gdjs.New_32sceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

/* Reuse gdjs.New_32sceneCode.GDPlayerHitBoxObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isFalling()) ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[k] = gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerHitBoxObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}}

}


};gdjs.New_32sceneCode.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.New_32sceneCode.GDFlyObjects1, gdjs.New_32sceneCode.GDFlyObjects2);

gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs.New_32sceneCode.GDGoLeftObjects2);
gdjs.copyArray(gdjs.New_32sceneCode.GDSlimeWalkObjects1, gdjs.New_32sceneCode.GDSlimeWalkObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDGoLeftObjects2Objects, gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDSlimeWalkObjects2ObjectsGDgdjs_9546New_959532sceneCode_9546GDFlyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.New_32sceneCode.GDFlyObjects2 */
/* Reuse gdjs.New_32sceneCode.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeWalkObjects2[i].returnVariable(gdjs.New_32sceneCode.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")).setNumber(1);
}
for(var i = 0, len = gdjs.New_32sceneCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFlyObjects2[i].returnVariable(gdjs.New_32sceneCode.GDFlyObjects2[i].getVariables().get("GoingLeft")).setNumber(1);
}
}}

}


{

gdjs.copyArray(gdjs.New_32sceneCode.GDFlyObjects1, gdjs.New_32sceneCode.GDFlyObjects2);

gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs.New_32sceneCode.GDGoRightObjects2);
gdjs.copyArray(gdjs.New_32sceneCode.GDSlimeWalkObjects1, gdjs.New_32sceneCode.GDSlimeWalkObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDGoRightObjects2Objects, gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDSlimeWalkObjects2ObjectsGDgdjs_9546New_959532sceneCode_9546GDFlyObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.New_32sceneCode.GDFlyObjects2 */
/* Reuse gdjs.New_32sceneCode.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeWalkObjects2[i].returnVariable(gdjs.New_32sceneCode.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")).setNumber(0);
}
for(var i = 0, len = gdjs.New_32sceneCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFlyObjects2[i].returnVariable(gdjs.New_32sceneCode.GDFlyObjects2[i].getVariables().get("GoingLeft")).setNumber(0);
}
}}

}


{

gdjs.copyArray(gdjs.New_32sceneCode.GDFlyObjects1, gdjs.New_32sceneCode.GDFlyObjects2);

gdjs.copyArray(gdjs.New_32sceneCode.GDSlimeWalkObjects1, gdjs.New_32sceneCode.GDSlimeWalkObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.New_32sceneCode.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDSlimeWalkObjects2[k] = gdjs.New_32sceneCode.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDSlimeWalkObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDFlyObjects2[i].getVariableNumber(gdjs.New_32sceneCode.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDFlyObjects2[k] = gdjs.New_32sceneCode.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDFlyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.New_32sceneCode.GDFlyObjects2 */
/* Reuse gdjs.New_32sceneCode.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFlyObjects2[i].addForce(-(300), 0, 0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
for(var i = 0, len = gdjs.New_32sceneCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeWalkObjects2[i].getBehavior("Flippable").flipX(false);
}
for(var i = 0, len = gdjs.New_32sceneCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFlyObjects2[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(gdjs.New_32sceneCode.GDFlyObjects1, gdjs.New_32sceneCode.GDFlyObjects2);

gdjs.copyArray(gdjs.New_32sceneCode.GDSlimeWalkObjects1, gdjs.New_32sceneCode.GDSlimeWalkObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDSlimeWalkObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDSlimeWalkObjects2[i].getVariableNumber(gdjs.New_32sceneCode.GDSlimeWalkObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDSlimeWalkObjects2[k] = gdjs.New_32sceneCode.GDSlimeWalkObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDSlimeWalkObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDFlyObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDFlyObjects2[i].getVariableNumber(gdjs.New_32sceneCode.GDFlyObjects2[i].getVariables().get("GoingLeft")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDFlyObjects2[k] = gdjs.New_32sceneCode.GDFlyObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDFlyObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.New_32sceneCode.GDFlyObjects2 */
/* Reuse gdjs.New_32sceneCode.GDSlimeWalkObjects2 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFlyObjects2[i].addForce(300, 0, 0);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeWalkObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
for(var i = 0, len = gdjs.New_32sceneCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFlyObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeWalkObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeWalkObjects2[i].getBehavior("Flippable").flipX(true);
}
for(var i = 0, len = gdjs.New_32sceneCode.GDFlyObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFlyObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{



}


{

/* Reuse gdjs.New_32sceneCode.GDFlyObjects1 */
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.New_32sceneCode.GDPlayerHitBoxObjects1);
/* Reuse gdjs.New_32sceneCode.GDSlimeWalkObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDPlayerHitBoxObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDSlimeWalkObjects1ObjectsGDgdjs_9546New_959532sceneCode_9546GDFlyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.New_32sceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDPlayerHitBoxObjects1Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.New_32sceneCode.GDPlayerHitBoxObjects1});
gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDCoinObjects1Objects = Hashtable.newFrom({"Coin": gdjs.New_32sceneCode.GDCoinObjects1});
gdjs.New_32sceneCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.New_32sceneCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDScoreObjects1[i].getBehavior("Text").setText("x " + gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0))));
}
}}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDLeftButtonObjects2Objects = Hashtable.newFrom({"LeftButton": gdjs.New_32sceneCode.GDLeftButtonObjects2});
gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDRightButtonObjects2Objects = Hashtable.newFrom({"RightButton": gdjs.New_32sceneCode.GDRightButtonObjects2});
gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDTopButtonObjects2Objects = Hashtable.newFrom({"TopButton": gdjs.New_32sceneCode.GDTopButtonObjects2});
gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDBottomButtonObjects2Objects = Hashtable.newFrom({"BottomButton": gdjs.New_32sceneCode.GDBottomButtonObjects2});
gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDJumpButtonObjects1Objects = Hashtable.newFrom({"JumpButton": gdjs.New_32sceneCode.GDJumpButtonObjects1});
gdjs.New_32sceneCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, false);
}}

}


{

gdjs.copyArray(gdjs.New_32sceneCode.GDLeftButtonObjects1, gdjs.New_32sceneCode.GDLeftButtonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDLeftButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.New_32sceneCode.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(gdjs.New_32sceneCode.GDRightButtonObjects1, gdjs.New_32sceneCode.GDRightButtonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDRightButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.New_32sceneCode.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(gdjs.New_32sceneCode.GDTopButtonObjects1, gdjs.New_32sceneCode.GDTopButtonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDTopButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.New_32sceneCode.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateUpKey();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateLadderKey();
}
}}

}


{

gdjs.copyArray(gdjs.New_32sceneCode.GDBottomButtonObjects1, gdjs.New_32sceneCode.GDBottomButtonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDBottomButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.New_32sceneCode.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerHitBoxObjects2[i].getBehavior("PlatformerObject").simulateDownKey();
}
}}

}


{

/* Reuse gdjs.New_32sceneCode.GDJumpButtonObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDJumpButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.New_32sceneCode.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};gdjs.New_32sceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.hasTouchScreen(runtimeScene));
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ArrowButtonsBg"), gdjs.New_32sceneCode.GDArrowButtonsBgObjects2);
gdjs.copyArray(runtimeScene.getObjects("BottomButton"), gdjs.New_32sceneCode.GDBottomButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.New_32sceneCode.GDJumpButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs.New_32sceneCode.GDLeftButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs.New_32sceneCode.GDRightButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopButton"), gdjs.New_32sceneCode.GDTopButtonObjects2);
{for(var i = 0, len = gdjs.New_32sceneCode.GDLeftButtonObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDLeftButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.New_32sceneCode.GDRightButtonObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDRightButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.New_32sceneCode.GDJumpButtonObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDJumpButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.New_32sceneCode.GDArrowButtonsBgObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDArrowButtonsBgObjects2[i].hide();
}
for(var i = 0, len = gdjs.New_32sceneCode.GDTopButtonObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDTopButtonObjects2[i].hide();
}
for(var i = 0, len = gdjs.New_32sceneCode.GDBottomButtonObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDBottomButtonObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ArrowButtonsBg"), gdjs.New_32sceneCode.GDArrowButtonsBgObjects1);
gdjs.copyArray(runtimeScene.getObjects("BottomButton"), gdjs.New_32sceneCode.GDBottomButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.New_32sceneCode.GDJumpButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftButton"), gdjs.New_32sceneCode.GDLeftButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightButton"), gdjs.New_32sceneCode.GDRightButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopButton"), gdjs.New_32sceneCode.GDTopButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDLeftButtonObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDLeftButtonObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDLeftButtonObjects1[k] = gdjs.New_32sceneCode.GDLeftButtonObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDLeftButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDRightButtonObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDRightButtonObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDRightButtonObjects1[k] = gdjs.New_32sceneCode.GDRightButtonObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDRightButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDJumpButtonObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDJumpButtonObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDJumpButtonObjects1[k] = gdjs.New_32sceneCode.GDJumpButtonObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDJumpButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDArrowButtonsBgObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDArrowButtonsBgObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDArrowButtonsBgObjects1[k] = gdjs.New_32sceneCode.GDArrowButtonsBgObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDArrowButtonsBgObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDTopButtonObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDTopButtonObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDTopButtonObjects1[k] = gdjs.New_32sceneCode.GDTopButtonObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDTopButtonObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDBottomButtonObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDBottomButtonObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDBottomButtonObjects1[k] = gdjs.New_32sceneCode.GDBottomButtonObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDBottomButtonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.New_32sceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDPlayerHitBoxObjects2Objects = Hashtable.newFrom({"PlayerHitBox": gdjs.New_32sceneCode.GDPlayerHitBoxObjects2});
gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDCheckpointObjects2Objects = Hashtable.newFrom({"Checkpoint": gdjs.New_32sceneCode.GDCheckpointObjects2});
gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDFadeInObjects2Objects = Hashtable.newFrom({"FadeIn": gdjs.New_32sceneCode.GDFadeInObjects2});
gdjs.New_32sceneCode.eventsList9 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.New_32sceneCode.GDFadeInObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDFadeInObjects2Objects, 0, 0, "GUI");
}{for(var i = 0, len = gdjs.New_32sceneCode.GDFadeInObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFadeInObjects2[i].setWidth(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDFadeInObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFadeInObjects2[i].setHeight(gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDFadeInObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFadeInObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "easeInQuad", 1.5, true);
}
}}

}


};gdjs.New_32sceneCode.eventsList10 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Checkpoint"), gdjs.New_32sceneCode.GDCheckpointObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.New_32sceneCode.GDPlayerHitBoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDPlayerHitBoxObjects2Objects, gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDCheckpointObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10140612);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.New_32sceneCode.GDCheckpointObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber((( gdjs.New_32sceneCode.GDCheckpointObjects2.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCheckpointObjects2[0].getPointX("")));
}{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber((( gdjs.New_32sceneCode.GDCheckpointObjects2.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDCheckpointObjects2[0].getPointY("")));
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.New_32sceneCode.GDPlayerHitBoxObjects2);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerHitBoxObjects2.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerHitBoxObjects2[i].setPosition(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) - (gdjs.New_32sceneCode.GDPlayerHitBoxObjects2[i].getHeight()));
}
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "life lost sound.wav", false, 100, 1);
}
{ //Subevents
gdjs.New_32sceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.New_32sceneCode.GDPlayerHitBoxObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerHitBoxObjects2.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerHitBoxObjects2[i].getY() > 1000 ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDPlayerHitBoxObjects2[k] = gdjs.New_32sceneCode.GDPlayerHitBoxObjects2[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerHitBoxObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}}

}


{



}


};gdjs.New_32sceneCode.eventsList11 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.New_32sceneCode.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerHitBoxObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.New_32sceneCode.GDPlayerHitBoxObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].setCenterPositionInScene((( gdjs.New_32sceneCode.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[0].getCenterXInScene()),(( gdjs.New_32sceneCode.GDPlayerHitBoxObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[0].getCenterYInScene()));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.New_32sceneCode.GDPlayerHitBoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[k] = gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerHitBoxObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Jumping");
}
}
{ //Subevents
gdjs.New_32sceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.New_32sceneCode.GDPlayerHitBoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[k] = gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerHitBoxObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Jumping");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.New_32sceneCode.GDPlayerHitBoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[k] = gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerHitBoxObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.New_32sceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.New_32sceneCode.GDPlayerHitBoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDPlayerHitBoxObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[i].getBehavior("PlatformerObject").isOnLadder() ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[k] = gdjs.New_32sceneCode.GDPlayerHitBoxObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDPlayerHitBoxObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("Jumping");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.New_32sceneCode.GDPlayerObjects1);
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.New_32sceneCode.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.New_32sceneCode.GDPlayerObjects1[0].getPointX("")), "", 0);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs.New_32sceneCode.GDGoLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs.New_32sceneCode.GDGoRightObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDGoLeftObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDGoLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDGoRightObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDGoRightObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoLeft"), gdjs.New_32sceneCode.GDGoLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs.New_32sceneCode.GDMovingPlatformObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDGoLeftObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDMovingPlatformObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.New_32sceneCode.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDMovingPlatformObjects1[i].addForce(-(150), 0, 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GoRight"), gdjs.New_32sceneCode.GDGoRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("MovingPlatform"), gdjs.New_32sceneCode.GDMovingPlatformObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDGoRightObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDMovingPlatformObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.New_32sceneCode.GDMovingPlatformObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDMovingPlatformObjects1[i].clearForces();
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDMovingPlatformObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDMovingPlatformObjects1[i].addForce(150, 0, 1);
}
}}

}


{



}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.New_32sceneCode.GDFlyObjects1);
{for(var i = 0, len = gdjs.New_32sceneCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFlyObjects1[i].activateBehavior("PlatformerObject", false);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.New_32sceneCode.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeWalk"), gdjs.New_32sceneCode.GDSlimeWalkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDSlimeWalkObjects1[i].getBehavior("Animation").getAnimationName() == "Dead") ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDSlimeWalkObjects1[k] = gdjs.New_32sceneCode.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDSlimeWalkObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDFlyObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDFlyObjects1[i].getBehavior("Animation").getAnimationName() == "Dead") ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDFlyObjects1[k] = gdjs.New_32sceneCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDFlyObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.New_32sceneCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Fly"), gdjs.New_32sceneCode.GDFlyObjects1);
gdjs.copyArray(runtimeScene.getObjects("SlimeWalk"), gdjs.New_32sceneCode.GDSlimeWalkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDSlimeWalkObjects1[i].getBehavior("Animation").getAnimationName() == "Dead" ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDSlimeWalkObjects1[k] = gdjs.New_32sceneCode.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDSlimeWalkObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDFlyObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDFlyObjects1[i].getBehavior("Animation").getAnimationName() == "Dead" ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDFlyObjects1[k] = gdjs.New_32sceneCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDFlyObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDSlimeWalkObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDSlimeWalkObjects1[i].getBehavior("Tween").isPlaying("FadeOut")) ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDSlimeWalkObjects1[k] = gdjs.New_32sceneCode.GDSlimeWalkObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDSlimeWalkObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDFlyObjects1.length;i<l;++i) {
    if ( !(gdjs.New_32sceneCode.GDFlyObjects1[i].getBehavior("Tween").isPlaying("FadeOut")) ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDFlyObjects1[k] = gdjs.New_32sceneCode.GDFlyObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDFlyObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.New_32sceneCode.GDFlyObjects1 */
/* Reuse gdjs.New_32sceneCode.GDSlimeWalkObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDSlimeWalkObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDSlimeWalkObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeOut", 0, "easeOutQuad", 1.5, true);
}
for(var i = 0, len = gdjs.New_32sceneCode.GDFlyObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDFlyObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeOut", 0, "easeOutQuad", 1.5, true);
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Coin"), gdjs.New_32sceneCode.GDCoinObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerHitBox"), gdjs.New_32sceneCode.GDPlayerHitBoxObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDPlayerHitBoxObjects1Objects, gdjs.New_32sceneCode.mapOfGDgdjs_9546New_959532sceneCode_9546GDCoinObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.New_32sceneCode.GDCoinObjects1.length;i<l;++i) {
    if ( gdjs.New_32sceneCode.GDCoinObjects1[i].getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.New_32sceneCode.GDCoinObjects1[k] = gdjs.New_32sceneCode.GDCoinObjects1[i];
        ++k;
    }
}
gdjs.New_32sceneCode.GDCoinObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.New_32sceneCode.GDCoinObjects1 */
{for(var i = 0, len = gdjs.New_32sceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCoinObjects1[i].setOpacity(254);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "coin.wav", false, 100, 1);
}{runtimeScene.getScene().getVariables().getFromIndex(0).add(100);
}{for(var i = 0, len = gdjs.New_32sceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCoinObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeOut", 0, "easeInQuad", 0.7, true);
}
}{for(var i = 0, len = gdjs.New_32sceneCode.GDCoinObjects1.length ;i < len;++i) {
    gdjs.New_32sceneCode.GDCoinObjects1[i].getBehavior("Tween").addObjectPositionYTween2("MoveUp", (gdjs.New_32sceneCode.GDCoinObjects1[i].getPointY("")) - 50, "easeOutQuad", 0.7, false);
}
}}

}


{


gdjs.New_32sceneCode.eventsList6(runtimeScene);
}


{


gdjs.New_32sceneCode.eventsList8(runtimeScene);
}


{


gdjs.New_32sceneCode.eventsList10(runtimeScene);
}


};

gdjs.New_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.New_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects3.length = 0;
gdjs.New_32sceneCode.GDPlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDPlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDPlatformObjects3.length = 0;
gdjs.New_32sceneCode.GDJumpthruObjects1.length = 0;
gdjs.New_32sceneCode.GDJumpthruObjects2.length = 0;
gdjs.New_32sceneCode.GDJumpthruObjects3.length = 0;
gdjs.New_32sceneCode.GDTiledGrassPlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDTiledGrassPlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDTiledGrassPlatformObjects3.length = 0;
gdjs.New_32sceneCode.GDTiledCastlePlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDTiledCastlePlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDTiledCastlePlatformObjects3.length = 0;
gdjs.New_32sceneCode.GDMovingPlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDMovingPlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDMovingPlatformObjects3.length = 0;
gdjs.New_32sceneCode.GDGoLeftObjects1.length = 0;
gdjs.New_32sceneCode.GDGoLeftObjects2.length = 0;
gdjs.New_32sceneCode.GDGoLeftObjects3.length = 0;
gdjs.New_32sceneCode.GDGoRightObjects1.length = 0;
gdjs.New_32sceneCode.GDGoRightObjects2.length = 0;
gdjs.New_32sceneCode.GDGoRightObjects3.length = 0;
gdjs.New_32sceneCode.GDLadderObjects1.length = 0;
gdjs.New_32sceneCode.GDLadderObjects2.length = 0;
gdjs.New_32sceneCode.GDLadderObjects3.length = 0;
gdjs.New_32sceneCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.New_32sceneCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.New_32sceneCode.GDPlayerHitBoxObjects3.length = 0;
gdjs.New_32sceneCode.GDSlimeWalkObjects1.length = 0;
gdjs.New_32sceneCode.GDSlimeWalkObjects2.length = 0;
gdjs.New_32sceneCode.GDSlimeWalkObjects3.length = 0;
gdjs.New_32sceneCode.GDFlyObjects1.length = 0;
gdjs.New_32sceneCode.GDFlyObjects2.length = 0;
gdjs.New_32sceneCode.GDFlyObjects3.length = 0;
gdjs.New_32sceneCode.GDBackgroundObjectsObjects1.length = 0;
gdjs.New_32sceneCode.GDBackgroundObjectsObjects2.length = 0;
gdjs.New_32sceneCode.GDBackgroundObjectsObjects3.length = 0;
gdjs.New_32sceneCode.GDScoreObjects1.length = 0;
gdjs.New_32sceneCode.GDScoreObjects2.length = 0;
gdjs.New_32sceneCode.GDScoreObjects3.length = 0;
gdjs.New_32sceneCode.GDCoinObjects1.length = 0;
gdjs.New_32sceneCode.GDCoinObjects2.length = 0;
gdjs.New_32sceneCode.GDCoinObjects3.length = 0;
gdjs.New_32sceneCode.GDCoinIconObjects1.length = 0;
gdjs.New_32sceneCode.GDCoinIconObjects2.length = 0;
gdjs.New_32sceneCode.GDCoinIconObjects3.length = 0;
gdjs.New_32sceneCode.GDLeftButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDLeftButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDLeftButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDRightButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDRightButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDRightButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDJumpButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDJumpButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDJumpButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDArrowButtonsBgObjects1.length = 0;
gdjs.New_32sceneCode.GDArrowButtonsBgObjects2.length = 0;
gdjs.New_32sceneCode.GDArrowButtonsBgObjects3.length = 0;
gdjs.New_32sceneCode.GDTiledForestBackgroundObjects1.length = 0;
gdjs.New_32sceneCode.GDTiledForestBackgroundObjects2.length = 0;
gdjs.New_32sceneCode.GDTiledForestBackgroundObjects3.length = 0;
gdjs.New_32sceneCode.GDCheckpointObjects1.length = 0;
gdjs.New_32sceneCode.GDCheckpointObjects2.length = 0;
gdjs.New_32sceneCode.GDCheckpointObjects3.length = 0;
gdjs.New_32sceneCode.GDTopButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDTopButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDTopButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDBottomButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDBottomButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDBottomButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDFadeInObjects1.length = 0;
gdjs.New_32sceneCode.GDFadeInObjects2.length = 0;
gdjs.New_32sceneCode.GDFadeInObjects3.length = 0;

gdjs.New_32sceneCode.eventsList11(runtimeScene);
gdjs.New_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.New_32sceneCode.GDPlayerObjects3.length = 0;
gdjs.New_32sceneCode.GDPlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDPlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDPlatformObjects3.length = 0;
gdjs.New_32sceneCode.GDJumpthruObjects1.length = 0;
gdjs.New_32sceneCode.GDJumpthruObjects2.length = 0;
gdjs.New_32sceneCode.GDJumpthruObjects3.length = 0;
gdjs.New_32sceneCode.GDTiledGrassPlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDTiledGrassPlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDTiledGrassPlatformObjects3.length = 0;
gdjs.New_32sceneCode.GDTiledCastlePlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDTiledCastlePlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDTiledCastlePlatformObjects3.length = 0;
gdjs.New_32sceneCode.GDMovingPlatformObjects1.length = 0;
gdjs.New_32sceneCode.GDMovingPlatformObjects2.length = 0;
gdjs.New_32sceneCode.GDMovingPlatformObjects3.length = 0;
gdjs.New_32sceneCode.GDGoLeftObjects1.length = 0;
gdjs.New_32sceneCode.GDGoLeftObjects2.length = 0;
gdjs.New_32sceneCode.GDGoLeftObjects3.length = 0;
gdjs.New_32sceneCode.GDGoRightObjects1.length = 0;
gdjs.New_32sceneCode.GDGoRightObjects2.length = 0;
gdjs.New_32sceneCode.GDGoRightObjects3.length = 0;
gdjs.New_32sceneCode.GDLadderObjects1.length = 0;
gdjs.New_32sceneCode.GDLadderObjects2.length = 0;
gdjs.New_32sceneCode.GDLadderObjects3.length = 0;
gdjs.New_32sceneCode.GDPlayerHitBoxObjects1.length = 0;
gdjs.New_32sceneCode.GDPlayerHitBoxObjects2.length = 0;
gdjs.New_32sceneCode.GDPlayerHitBoxObjects3.length = 0;
gdjs.New_32sceneCode.GDSlimeWalkObjects1.length = 0;
gdjs.New_32sceneCode.GDSlimeWalkObjects2.length = 0;
gdjs.New_32sceneCode.GDSlimeWalkObjects3.length = 0;
gdjs.New_32sceneCode.GDFlyObjects1.length = 0;
gdjs.New_32sceneCode.GDFlyObjects2.length = 0;
gdjs.New_32sceneCode.GDFlyObjects3.length = 0;
gdjs.New_32sceneCode.GDBackgroundObjectsObjects1.length = 0;
gdjs.New_32sceneCode.GDBackgroundObjectsObjects2.length = 0;
gdjs.New_32sceneCode.GDBackgroundObjectsObjects3.length = 0;
gdjs.New_32sceneCode.GDScoreObjects1.length = 0;
gdjs.New_32sceneCode.GDScoreObjects2.length = 0;
gdjs.New_32sceneCode.GDScoreObjects3.length = 0;
gdjs.New_32sceneCode.GDCoinObjects1.length = 0;
gdjs.New_32sceneCode.GDCoinObjects2.length = 0;
gdjs.New_32sceneCode.GDCoinObjects3.length = 0;
gdjs.New_32sceneCode.GDCoinIconObjects1.length = 0;
gdjs.New_32sceneCode.GDCoinIconObjects2.length = 0;
gdjs.New_32sceneCode.GDCoinIconObjects3.length = 0;
gdjs.New_32sceneCode.GDLeftButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDLeftButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDLeftButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDRightButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDRightButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDRightButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDJumpButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDJumpButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDJumpButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDArrowButtonsBgObjects1.length = 0;
gdjs.New_32sceneCode.GDArrowButtonsBgObjects2.length = 0;
gdjs.New_32sceneCode.GDArrowButtonsBgObjects3.length = 0;
gdjs.New_32sceneCode.GDTiledForestBackgroundObjects1.length = 0;
gdjs.New_32sceneCode.GDTiledForestBackgroundObjects2.length = 0;
gdjs.New_32sceneCode.GDTiledForestBackgroundObjects3.length = 0;
gdjs.New_32sceneCode.GDCheckpointObjects1.length = 0;
gdjs.New_32sceneCode.GDCheckpointObjects2.length = 0;
gdjs.New_32sceneCode.GDCheckpointObjects3.length = 0;
gdjs.New_32sceneCode.GDTopButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDTopButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDTopButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDBottomButtonObjects1.length = 0;
gdjs.New_32sceneCode.GDBottomButtonObjects2.length = 0;
gdjs.New_32sceneCode.GDBottomButtonObjects3.length = 0;
gdjs.New_32sceneCode.GDFadeInObjects1.length = 0;
gdjs.New_32sceneCode.GDFadeInObjects2.length = 0;
gdjs.New_32sceneCode.GDFadeInObjects3.length = 0;


return;

}

gdjs['New_32sceneCode'] = gdjs.New_32sceneCode;
