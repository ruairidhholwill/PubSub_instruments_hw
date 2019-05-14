const PubSub = require('../helpers/pub_sub.js')

const InstrumentView = function(container){
    this.container = container;
}

InstrumentView.prototype.bindEvents = function(){
    PubSub.subscribe('Instruments:selected-instrument', (event) => {
        const instrument = event.detail;
        console.log(instrument)
        this.render(instrument)
    })
}

InstrumentView.prototype.render = function(instrument){ 

    this.container.innerHTML = ''

    const infoHeader = document.createElement('h2');
    infoHeader.textContent = `${instrument.name}`
    this.container.appendChild(infoHeader);

    const infoParagraph = document.createElement('p')
    infoParagraph.textContent = `${instrument.description}`
    this.container.appendChild(infoParagraph);

    const instrumentList = this.createInstrumentList(instrument.instruments);
    this.container.appendChild(instrumentList);
    }


InstrumentView.prototype.createInstrumentList = function(instruments) {
    const list = document.createElement('ul');
    instruments.forEach((instrument) => {
        const listItem = document.createElement('li');
        listItem.textContent = instrument;
        list.appendChild(listItem)
    });
    return list;
}




module.exports = InstrumentView;