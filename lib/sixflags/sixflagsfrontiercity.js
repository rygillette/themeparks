const SixFlagsPark = require('./sixflagsbase');

/**
 * Six Flags Fiesta Texas
 * @class
 * @extends SixFlagsPark
 */
class SixFlagsFrontierCity extends SixFlagsPark {
  /**
     * Create a new SixFlagsFrontierCity object
     */
  constructor(options = {}) {
    options.name = options.name || 'Six Flags Frontier City';
    options.timezone = options.timezone || 'America/Chicago';

    // set park's location as it's entrance
    options.latitude = options.latitude || 35.586435;
    options.longitude = options.longitude || -97.440280;

    options.park_id = options.park_id || '43';

    // inherit from base class
    super(options);
  }
}

module.exports = SixFlagsFrontierCity;
