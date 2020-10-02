import React from 'react';
import ReactDOM from 'react-dom';

export const requestTabs = [
    {
        label: "Example tab",
        icon: "fa-star",
        panelBody: (context, { request }) => {
            const root = document.createElement('div');

            ReactDOM.render(
                <h1>Tab content here!</h1>,
                root,
            );

            return root
        },
    }
];
