var gdjs;
(function(gdjs2) {
  gdjs2.evtTools.firebase.database = {};
  gdjs2.evtTools.firebase.database.writeVariable = function(path, variable, callbackStateVariable) {
    firebase.database().ref(path).set(JSON.parse(gdjs2.evtTools.network.variableStructureToJSON(variable))).then(function() {
      if (typeof callbackStateVariable !== "undefined") {
        callbackStateVariable.setString("ok");
      }
    }).catch(function(error) {
      if (typeof callbackStateVariable !== "undefined") {
        callbackStateVariable.setString(error.message);
      }
    });
  };
  gdjs2.evtTools.firebase.database.writeField = function(path, field, value, callbackStateVariable) {
    const newObject = {};
    newObject[field] = value;
    firebase.database().ref(path).set(newObject).then(function() {
      if (typeof callbackStateVariable !== "undefined") {
        callbackStateVariable.setString("ok");
      }
    }).catch(function(error) {
      if (typeof callbackStateVariable !== "undefined") {
        callbackStateVariable.setString(error.message);
      }
    });
  };
  gdjs2.evtTools.firebase.database.updateVariable = function(path, variable, callbackStateVariable) {
    firebase.database().ref(path).update(JSON.parse(gdjs2.evtTools.network.variableStructureToJSON(variable))).then(function() {
      if (typeof callbackStateVariable !== "undefined") {
        callbackStateVariable.setString("ok");
      }
    }).catch(function(error) {
      if (typeof callbackStateVariable !== "undefined") {
        callbackStateVariable.setString(error.message);
      }
    });
  };
  gdjs2.evtTools.firebase.database.updateField = function(path, field, value, callbackStateVariable) {
    const updateObject = {};
    updateObject[field] = value;
    firebase.database().ref(path).update(updateObject).then(function() {
      if (typeof callbackStateVariable !== "undefined") {
        callbackStateVariable.setString("ok");
      }
    }).catch(function(error) {
      if (typeof callbackStateVariable !== "undefined") {
        callbackStateVariable.setString(error.message);
      }
    });
  };
  gdjs2.evtTools.firebase.database.deleteVariable = function(path, callbackStateVariable) {
    firebase.database().ref(path).remove().then(function() {
      if (typeof callbackStateVariable !== "undefined") {
        callbackStateVariable.setString("ok");
      }
    }).catch(function(error) {
      if (typeof callbackStateVariable !== "undefined") {
        callbackStateVariable.setString(error.message);
      }
    });
  };
  gdjs2.evtTools.firebase.database.deleteField = function(path, field, callbackStateVariable) {
    const updateObject = {};
    updateObject[field] = null;
    firebase.database().ref(path).update(updateObject).then(function() {
      if (typeof callbackStateVariable !== "undefined") {
        callbackStateVariable.setString("ok");
      }
    }).catch(function(error) {
      if (typeof callbackStateVariable !== "undefined") {
        callbackStateVariable.setString(error.message);
      }
    });
  };
  gdjs2.evtTools.firebase.database.getVariable = function(path, callbackValueVariable, callbackStateVariable) {
    firebase.database().ref(path).once("value").then(function(snapshot) {
      if (typeof callbackStateVariable !== "undefined") {
        callbackStateVariable.setString("ok");
      }
      if (typeof callbackValueVariable !== "undefined") {
        gdjs2.evtTools.network._objectToVariable(snapshot.val(), callbackValueVariable);
      }
    }).catch(function(error) {
      if (typeof callbackStateVariable !== "undefined") {
        callbackStateVariable.setString(error.message);
      }
    });
  };
  gdjs2.evtTools.firebase.database.getField = function(path, field, callbackValueVariable, callbackStateVariable) {
    firebase.database().ref(path).once("value").then(function(snapshot) {
      if (typeof callbackStateVariable !== "undefined") {
        callbackStateVariable.setString("ok");
      }
      if (typeof callbackValueVariable !== "undefined") {
        gdjs2.evtTools.network._objectToVariable(snapshot.val()[field], callbackValueVariable);
      }
    }).catch(function(error) {
      if (typeof callbackStateVariable !== "undefined") {
        callbackStateVariable.setString(error.message);
      }
    });
  };
  gdjs2.evtTools.firebase.database.hasVariable = function(path, callbackValueVariable, callbackStateVariable) {
    firebase.database().ref(path).once("value").then(function(snapshot) {
      if (typeof callbackStateVariable !== "undefined") {
        callbackStateVariable.setString("ok");
      }
      if (typeof callbackValueVariable !== "undefined") {
        callbackValueVariable.setString(snapshot.exists() && snapshot.val() !== null ? "true" : "false");
      }
    }).catch(function(error) {
      if (typeof callbackStateVariable !== "undefined") {
        callbackStateVariable.setString(error.message);
      }
    });
  };
  gdjs2.evtTools.firebase.database.hasField = function(path, field, callbackValueVariable, callbackStateVariable) {
    firebase.database().ref(path).once("value").then(function(snapshot) {
      if (typeof callbackStateVariable !== "undefined") {
        callbackStateVariable.setString("ok");
      }
      if (typeof callbackValueVariable !== "undefined") {
        callbackValueVariable.setString(snapshot.val() == null || snapshot.val()[field] == null ? "false" : "true");
      }
    }).catch(function(error) {
      if (typeof callbackStateVariable !== "undefined") {
        callbackStateVariable.setString(error.message);
      }
    });
  };
})(gdjs || (gdjs = {}));
//# sourceMappingURL=D_databasetools.js.map
