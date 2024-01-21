import { LoggerProviderInterface } from '../../../domain/contracts/providers.contracts';

class WinstonLoggerProvider implements LoggerProviderInterface {}

export default new WinstonLoggerProvider();
