const SixFlagsPark = require('./sixflagsbase');

/**
 * Six Flags Hurricane Harbor, Chicago
 * @class
 * @extends SixFlagsPark
 */
class SixFlagsHurricaneHarborChicago extends SixFlagsPark {
  /**
     * Create a new SixFlagsHurricaneHarborChicago object
     */
  constructor(options = {}) {
    options.name = options.name || 'Six Flags Hurricane Harbor, Chicago';
    options.timezone = options.timezone || 'America/Chicago';

    // set park's location as it's entrance
    options.latitude = options.latitude || 42.370244;
    options.longitude = options.longitude || -87.935916;

    options.park_id = options.park_id || '13';

    // inherit from base class
    super(options);
  }
}

module.exports = SixFlagsHurricaneHarborChicago;
