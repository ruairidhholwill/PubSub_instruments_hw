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
}









module.exports = InstrumentView;