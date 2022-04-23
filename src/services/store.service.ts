import { Storage } from '@ionic/storage';

/**
 * Store do przechowywania danych
 *
 * @export
 * @class StoreService
 */
export class StoreService {
  /**
   * Instancja storage z ionic do zapisywania danych w pamięci
   *
   * @type {Storage}
   * @memberof Store
   */
  public store: Storage;

  constructor() {
    this.store = new Storage();
    this.store.create();
  }
}

export const storeService = new StoreService();
