import { PropsWithChildren } from "react";
import '../../App.css';

/**
 * Средняя часть сайта
 */

export const Main = ({children}: PropsWithChildren) => {
    return (
        <main className="App-body">
            <div className="App-wrapper">
                {children}
            </div>
        </main>)
}