export enum AttributeButton {
    "category"="category"
}

export default class Button extends HTMLElement {
    category?: string;


    static get observedAttributes(){
        const attrs: Record <AttributeButton, null> = {
            category: null
        }
        return Object.keys(attrs)
    }


    attributeChangedCallback(
        propName: AttributeButton,
        _: unknown,
        newValue: string)
        {
            switch (propName) {
                default:
                    this[propName] = newValue;
                    break;
            }
           
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});




    }


    connectedCallback(){
        this.render();
   
    }


    render(){
        if(this.shadowRoot){ this.shadowRoot.innerHTML = ``;
   
        const button = this.ownerDocument.createElement('button');
        button.innerText = `${this.category}`
        button.addEventListener('click',()=>{
            
        })
        this.shadowRoot?.appendChild(button);
        }
    }


}

customElements.define('category-button', Button);