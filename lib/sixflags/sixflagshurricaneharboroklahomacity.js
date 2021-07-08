const SixFlagsPark = require('./sixflagsbase');

/**
 * Six Flags Hurricane Harbor, Oaxtepec
 * @class
 * @extends SixFlagsPark
 */
class SixFlagsHurricaneHarborOklahomaCity extends SixFlagsPark {
  /**
     * Create a new SixFlagsHurricaneHarborOklahomaCity object
     */
  constructor(options = {}) {
    options.name = options.name || 'Six Flags Hurricane Harbor, Oklahoma City';
    options.timezone = options.timezone || 'America/Chicago';

    // set park's location as it's entrance
    options.latitude = options.latitude || 35.461847;
    options.longitude = options.longitude || -97.588659;

    options.park_id = options.park_id || '44';

    // inherit from base class
    super(options);
  }
}

module.exports = SixFlagsHurricaneHarborOklahomaCity;
