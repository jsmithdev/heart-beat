import { api, LightningElement } from 'lwc';

export default class heartBeat extends LightningElement {

    @api
    get size(){
        return this._size
    }
    set size(value){
        
        this._size = value
    }

    connectedCallback(){

        // eslint-disable-next-line @lwc/lwc/no-async-operation
        setTimeout(
            () => this.template.querySelector('.container').classList.add( this.size ), 
            0
        );
    }
}