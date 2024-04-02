

_ = ( ...v ) => console.log( ...v );

let 
   notas =[
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
      ( n, v ) => {
         _( ` <card>
               <b>${ n.item }</b>
               <p>${ n.price }</p>
         </card> ` );
         data += n.price
      }
   );
   
   return( ` <card>
      <p>Total: ${ data }</p>
   </card> ` );
}

_( calc() );