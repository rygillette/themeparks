const SixFlagsPark = require('./sixflagsbase');

/**
 * Six Flags Hurricane Harbor, Phoenix
 * @class
 * @extends SixFlagsPark
 */
class SixFlagsHurricaneHarborPhoenix extends SixFlagsPark {
  /**
     * Create a new SixFlagsHurricaneHarborPhoenix object
     */
  constructor(options = {}) {
    options.name = options.name || 'Six Flags Hurricane Harbor, Phoenix';
    options.timezone = options.timezone || 'America/Phoenix';

    // set park's location as it's entrance
    options.latitude = options.latitude || 33.695595;
    options.longitude = options.longitude || -112.150891;

    options.park_id = options.park_id || '46';

    // inherit from base class
    super(options);
  }
}

module.exports = SixFlagsHurricaneHarborPhoenix;
