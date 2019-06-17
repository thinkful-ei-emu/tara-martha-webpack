import '../styles/index.css';
import $ from 'jquery';
import { api } from './api';
import { bindEventListeners } from './shopping-list';
import { render } from './shopping-list';

$(document).ready(function() {
  bindEventListeners();

  // On initial load, fetch Shopping Items and render
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      render();
    })
    .catch(err => console.log(err.message));
});

