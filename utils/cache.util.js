const NodeCache = require("node-cache");

const otpCache = new NodeCache({ stdTTL: 300, checkperiod: 60 });
const otpPasswordCache = new NodeCache({ stdTTL: 300, checkperiod: 60 });
const otpAttemptsCache = new NodeCache({ stdTTL: 300, checkperiod: 60 });
const blockedUsersCache = new NodeCache({ stdTTL: 3600, checkperiod: 60 }); // 1 hour TTL for blocked users

module.exports = {
  otpCache,
  otpAttemptsCache,
  blockedUsersCache,
  otpPasswordCache,
};
