import React, {createContext} from 'react'

export const ConversionContext = createContext()

export const ConversionContextProvider = ({children}) => {

    return (
        <ConversionContext.Provider value="this is an example">
            {children}
        </ConversionContext.Provider>
    )
}
