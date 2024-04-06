

/* == [ card lyh template ] 
== == == == == == == == == */
function Card( props ) {
   this.template = `${ props.style } ${ props.template }`;
   this.tagName = props.tagName;

   class CardLyh extends HTMLElement {
      constructor() {
         super();

         let tag = document.createElement( "template" );

         tag.innerHTML = template;

         this.attachShadow( { mode: "open" } );
         this.shadowRoot.append( tag.content.cloneNode( true ) );
         this.shadowRoot.querySelector( "nome" ).innerHTML += this.getAttribute( "nome" );
         this.shadowRoot.querySelector( "email" ).innerHTML += this.getAttribute( "email" );
         this.shadowRoot.querySelector( "telefone" ).innerHTML += this.getAttribute( "telefone" );
         this.shadowRoot.querySelector( "idade" ).innerHTML += this.getAttribute( "idade" );
      } 
      connectedCallback() {
         this.render();
      }
      render() {
         console.log( "card-lyh" );
      }
   }

   return(
      window.customElements.define( 
         tagName,
         CardLyh 
      )
   );
}