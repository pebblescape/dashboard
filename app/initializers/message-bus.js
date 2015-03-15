/* global MessageBus */
import config from '../config/environment';

export function initialize(/* container, application */) {
  // We don't use the message bus in testing
  if (config.environment === 'testing') { return; }

  MessageBus.alwaysLongPoll = config.environment === "development";
  MessageBus.start();
}

export default {
  name: 'message-bus',
  initialize: initialize
};
