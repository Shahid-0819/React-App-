import React from 'react'
import'./footer.css'

 export const Footer = () => {
    let footerstyle={
        position:"absolute",
          top:"93%",
        width:"100%"
 
    }
    return (
        <footer className="footer" style={footerstyle}>
            <p className="text-center">&copy;Shahid Jamadar REACT-APP</p>
        </footer>
    )
}