// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  eventsCausingActions: {
    createNotification: "create";
    removeNotification: "remove";
    removeLastNotification: "removeLast";
    removeAllNotifications: "removeAll";
  };
  internalEvents: {
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {};
  missingImplementations: {
    actions: never;
    services: never;
    guards: never;
    delays: never;
  };
  eventsCausingServices: {};
  eventsCausingGuards: {};
  eventsCausingDelays: {};
  matchesStates: "start";
  tags: never;
}
