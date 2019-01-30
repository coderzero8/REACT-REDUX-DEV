import React from 'react'
//functional component 
const Ninjas = ({ninjas,prop_deleteninja}) => { //functional component vs class based component

  return (
    <div className="ninja-list" >
      { // braces for adding javascripts
       
        ninjas.map(ninja => {
          return  (
            <div className="ninja" key={ninja.id}>
              <div>Name: { ninja.name }</div>
              <div>Age: { ninja.age }</div>
              <div>Belt: { ninja.belt }</div>
              <button onClick={() =>{prop_deleteninja(ninja.id)}}>Delete </button>
            </div>
          ) 
        })
      }
    </div>
  );

}

export default Ninjas
 {/* ninjas.map(ninja => {
          return ninja.age > 26 ? (
            <div className="ninja" key={ninja.id}>
              <div>Name: { ninja.name }</div>
              <div>Age: { ninja.age }</div>
              <div>Belt: { ninja.belt }</div>
    
            </div>
          ) : null
        }) */}