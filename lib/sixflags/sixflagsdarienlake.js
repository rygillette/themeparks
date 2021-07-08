const SixFlagsPark = require('./sixflagsbase');

/**
 * Six Flags Darien Lake
 * @class
 * @extends SixFlagsPark
 */
class SixFlagsDarienLake extends SixFlagsPark {
  /**
   * Create a new SixFlagsAmerica object
   */
  constructor(options = {}) {
    options.name = options.name || 'Six Flags Darien Lake';
    options.timezone = options.timezone || 'America/New_York';

    // set park's location as it's entrance
    options.latitude = options.latitude || 42.928260;
    options.longitude = options.longitude || -78.384657;

    options.park_id = options.park_id || '45';

    // inherit from base class
    super(options);
  }
}

module.exports = SixFlagsDarienLake;
