const SixFlagsPark = require('./sixflagsbase');

/**
 * Six Flags Hurricane Harbor, Rockford
 * @class
 * @extends SixFlagsPark
 */
class SixFlagsHurricaneHarborRockford extends SixFlagsPark {
  /**
     * Create a new SixFlagsHurricaneHarborRockford object
     */
  constructor(options = {}) {
    options.name = options.name || 'Six Flags Hurricane Harbor, Rockford';
    options.timezone = options.timezone || 'America/Chicago';

    // set park's location as it's entrance
    options.latitude = options.latitude || 42.244659;
    options.longitude = options.longitude || -88.964026;

    options.park_id = options.park_id || '48';

    // inherit from base class
    super(options);
  }
}

module.exports = SixFlagsHurricaneHarborRockford;
