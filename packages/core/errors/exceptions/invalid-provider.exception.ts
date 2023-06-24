import { USING_INVALID_OBJECT_AS_A_PROVIDER_MESSAGE } from '../messages';
import { RuntimeException } from './runtime.exception';

export class InvalidProviderException extends RuntimeException {
  constructor(objectUsedAsAProvider: any) {
    super(USING_INVALID_OBJECT_AS_A_PROVIDER_MESSAGE(objectUsedAsAProvider));
  }
}
