

_ = ( ...v ) => console.log( ...v );

let 
   notas = [
      { item: "caderno", price: 15 }
      ,
      { item: "mochila", price: 45.50 }
      ,
      { item: "uniforme", price: 149.80 }
      ,
   ]
;

function calc() {
   let data = 0;
   
   notas.map(
      n => {
         _( `<card>\n\t<b>${ n.item }</b>\n\t<p>${ n.price }</p>\n</card>` );
         data += n.price
      }
   );
   
   return( `<card>\n\t<p>Total: ${ data }</p>\n</card>` );
}

_( calc() );
