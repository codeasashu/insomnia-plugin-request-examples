import React from 'react';
import ReactDOM from 'react-dom';

const root = document.createElement('div');

ReactDOM.render(
    <h1>Tab content here!</h1>,
    root,
);

export const requestTabs = [
    {
        label: "Example tab",
        icon: "fa-star",
        body: root,
    }
];
