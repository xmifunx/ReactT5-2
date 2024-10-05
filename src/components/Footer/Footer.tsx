import React, { PropsWithChildren, ReactNode } from "react"
import '../../App.css';

/**
 * Нижняя часть сайта
 */

export const Footer = ({children}: PropsWithChildren) => {
    let column1: ReactNode[] =[];
    let column2: ReactNode[] =[];
    let column3: ReactNode[] =[];

    React.Children.forEach(children, (child, index) => {
        if (index % 3 == 0) {
            column1.push(child);
        }
        if (index % 3 == 1) {
            column2.push(child);
        }
        if (index % 3 == 2) {
            column3.push(child);
        }
    } )

    
    return (
        <footer className="App-footer">
            <div className="App-wrapper">
                <div className="Widgets-column">
                    {column1.map((widget, index) => {
                        return (
                            <div className="Widget-container" key={index}>
                                {widget}
                             </div>
                        );
                    })}
                </div>
                <div className="Widgets-column">
                        {column2.map((widget, index) => {
                            return (
                                <div className="Widget-container" key={index}>
                                    {widget}
                            </div>
                        );
                    })}
                </div>
                <div className="Widgets-column">
                        {column3.map((widget, index) => {
                            return (
                                <div className="Widget-container" key={index}>
                                    {widget}
                                </div>
                            );
                        })}
                </div>
            </div>
        </footer>)
}