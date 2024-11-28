import * as React from 'react';export type PageRefs = {    landing: React.MutableRefObject<any>;    overview: React.MutableRefObject<any>;    location: React.MutableRefObject<any>;    availability: React.MutableRefObject<any>;    agency: React.MutableRefObject<any>;    enquiry: React.MutableRefObject<any>;};export type NavigationContextType = {    pageRefs: PageRefs;    navigateTo: (page: keyof PageRefs) => void;};export const NavigationContext =    React.createContext<NavigationContextType | null>(null);export const useNavigationContext = () => {    const context = React.useContext(NavigationContext);    if (!context) {        throw new Error(            `useContext must be used inside a Provider with a value that's not undefined`,        );    }    return context;};export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({    children,}) => {    const pageRefs: PageRefs = {        landing: React.useRef(),        overview: React.useRef(),        location: React.useRef(),        availability: React.useRef(),        agency: React.useRef(),        enquiry: React.useRef(),    };    const navigateTo = (page: keyof PageRefs) => {        pageRefs[page].current.scrollIntoView({            behavior: 'smooth',        });    };    return (        <NavigationContext.Provider            value={{                pageRefs,                navigateTo,            }}        >            {children}        </NavigationContext.Provider>    );};