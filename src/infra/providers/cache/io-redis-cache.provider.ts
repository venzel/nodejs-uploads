import { CacheProviderInterface } from '../../../domain/contracts/providers.contracts';

class IoRedisCacheProvider implements CacheProviderInterface {}

export default new IoRedisCacheProvider();
