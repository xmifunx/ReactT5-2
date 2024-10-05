import { PropsWithChildren } from "react"
import '../../App.css';

/**
 * Верхняя часть сайта
 */

export const Header = ({children}: PropsWithChildren) => {
    return (
    <header className="App-header">
        <div className="App-wrapper">
                {children}
            </div>
    </header>)
}