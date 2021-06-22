import { UIStore } from './uiStore';

export class RootStore {
  public ui: UIStore;

  public constructor() {
    this.ui = new UIStore(this);
  }
}
