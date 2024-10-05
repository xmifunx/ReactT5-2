import React from "react";
import '../../App.css';

/**
 * Компоненет отрисовки виджета
 */

interface WidgetProps {
    title: String;
    children: React.ReactNode
}

export const Widget: React.FC<WidgetProps> = ({title, children}) => {
    return (
        <div>
            <h3 className="Widget-title">
                {title}
            </h3>
            <ul className="Widget-list">
                {children}
            </ul>
      </div>
    )
}