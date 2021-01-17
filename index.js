import React from 'react';
import ReactDOM from 'react-dom';
import ResponseExample from './src/index'

export const requestTabs = [
    {
        label: "Responses",
        icon: "fa-star",
        panelBody: async (context, { request }) => {
            const root = document.createElement('div');
            root.setAttribute("style","height:100%;overflow: scroll;");

            ReactDOM.render(
                <ResponseExample
                    className="app-request-examples"
                    store={context.store}
                    request={request} 
                />,
                root,
            );

            return root;
        },
    }
];
