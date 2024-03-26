import React from "react";

const Button = (props) =>{
    return (
        <>
            <button 
                style={{
                    fontFamily : props.fontfamily,
                    backgroundColor : props.backgroundColor,
                    cursor : props.cursor,
                    fontSize : props.fontsize,
                    fontWeight : props.fontweight,
                    color  : props.color,
                    border : props.border,
                    padding : props.padding,
                    borderRadius : props.borderradius,
                    marginLeft : props.marginLeft,
                    marginTop: props.marginTop
                }}>
            {props.children}
            </button>
            
        </>
    );
}

export default Button;