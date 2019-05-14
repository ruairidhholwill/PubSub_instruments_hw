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

InstrumentView.prototype.render = function(instrument) {
    const infoParagraph = document.createElement('p')
    infoParagraph.textContent = `${instrument.description}`
    this.container.innerHTML = ''
    this.container.appendChild(infoParagraph);
}









module.exports = InstrumentView;