// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {
    createNotification: "createNotification";
    changeMessage: "update";
    assignWelcomeToTest: "xstate.init";
    spawnNotificationsStateMachine: "xstate.init";
  };
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: "createNotification";
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {};
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates: "start" | "idle";
  tags: never;
}
