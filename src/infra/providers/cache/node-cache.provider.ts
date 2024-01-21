import { CacheProviderInterface } from '@/domain/contracts/providers.contracts';

class NodeCacheProvider implements CacheProviderInterface {}

export default new NodeCacheProvider();
