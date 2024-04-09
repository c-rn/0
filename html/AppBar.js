

const 
   _ = ( ...v ) => console.log( ...v )
   ,
   $$ = v => document.querySelectorAll( v )
   ,
   $a = ( e, a ) => e.getAttribute( a )
;

export default function AppBar( props ) {
   $$( "AppBar" ).forEach( a => {
      a.style.cssText = `
      `;
      return(
         a.innerHTML = `
            <style>
               appbar {
                  display: flex;
                  flex-direction: column;
                  width: 100%;
                  height: 80px;
                  background: #16181c;
                  position: sticky;
                  top: 0;
                  left: 0;
                  box-shadow: #0005 0 0 10px;
                  z-index: 9;
               }
               appbar > home {
                  display: flex;
                  flex-direction: row;
                  flex: 1;
               }
               appbar > home > * {
                  display: flex;
                  flex-direction: column;
               }
               left, right {
                  flex: .1;
               }
               acenter {
                  flex: .8;
                  align-items: center;
                  justify-content: center;
               }
            </style>
            <home>
               <left></left>
               <acenter>${ $a( a, "title" ) ? $a( a, "title" ) : "Sammarco" }</acenter>
               <right></right>
            </home>
         `
      );
   } );
}
