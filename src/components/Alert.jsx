import React from "react";

import {ShopContext} from "../context";

export const Alert = () => {
    const { alertName, closeAlert } = React.useContext(ShopContext);

    React.useEffect(
            () => {
                const timerId = setTimeout(closeAlert, 3000)

                return () => clearInterval(timerId);
            },
            //eslint-disable-next-line
            [name]
    )

    return <div id="toast-container">
        <div className='toast'>{alertName} добавлен в корзину</div>
    </div>
}