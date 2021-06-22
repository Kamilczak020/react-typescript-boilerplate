import { observable } from 'mobx';
import { RootStore } from './rootStore';

export type ApplicationTheme = 'light' | 'dark';

export class UIStore {
  private readonly root: RootStore;

  @observable
  public theme: ApplicationTheme;

  public constructor(root: RootStore) {
    this.root = root;
  }
}
