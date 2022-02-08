import loading from './Spinner-3.gif'

import React, { Component } from 'react'

export default class Loading extends Component {
    render() {
        return (
            <div>
                <img src={loading} alt='loading'/>
            </div>
        )
    }
}
