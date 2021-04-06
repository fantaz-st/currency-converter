import View from './view.js';

class SymbolView extends View {
  _parentElement = document.querySelector('.input-symbol');

  _generateMarkup() {
    return this._data;
  }
}

export default new SymbolView();
