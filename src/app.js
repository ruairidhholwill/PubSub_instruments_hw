const instrumentData = require('./data/instrument_family_data.js')
const InstrumentFamilies = require('./models/instrument_families.js')
const SelectView = require('./views/select_view.js')
const InstrumentView = require('./views/instrument_info_view')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#instrument-families');
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const instrumentDataModel = new InstrumentFamilies(instrumentData);
  instrumentDataModel.bindEvents();

  const instrumentDiv = document.querySelector('#instrument-info');
  const instrumentInfoDisplay = new InstrumentView(instrumentDiv);
  instrumentInfoDisplay.bindEvents();

});
