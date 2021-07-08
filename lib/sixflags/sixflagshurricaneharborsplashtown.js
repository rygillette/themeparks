const SixFlagsPark = require('./sixflagsbase');

/**
 * Six Flags Hurricane Harbor, Splashtown
 * @class
 * @extends SixFlagsPark
 */
class SixFlagsHurricaneHarborSplashtown extends SixFlagsPark {
  /**
     * Create a new SixFlagsHurricaneHarborSplashtown object
     */
  constructor(options = {}) {
    options.name = options.name || 'Six Flags Hurricane Harbor, Splashtown';
    options.timezone = options.timezone || 'America/Chicago';

    // set park's location as it's entrance
    options.latitude = options.latitude || 30.070559;
    options.longitude = options.longitude || -95.432120;

    options.park_id = options.park_id || '47';

    // inherit from base class
    super(options);
  }
}

module.exports = SixFlagsHurricaneHarborSplashtown;
