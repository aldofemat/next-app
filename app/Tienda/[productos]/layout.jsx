import React from 'react'

const Layout = ({ children }) => {
    return (
       <div>Este es un layout exclusivo para la Tienda donde puedo poner cosas que apliquen solo a la tienda y a toda la tienda, porque en page es donde pongo el contenido principal que voy a agrupar de todos los demas componentes que vaya utilizando  {children} </div> 
        
    );
  };
  export default Layout;
