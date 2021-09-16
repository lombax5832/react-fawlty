import Plotly from "plotly.js-basic-dist";
import { Component } from "react";

import createPlotlyComponent from 'react-plotly.js/factory'

const Plot = createPlotlyComponent(Plotly);

class Chart extends Component<{ data: number[] }, {}>{
    constructor(props) {
        super(props);
    }

    render() {
        return (<Plot data={[{ type: 'scatter', y: this.props.data }]} onRelayout={(val) => console.log("Selected", val)} layout={{ width: 700, height: 500, title: "Cool" }} />)
    }
}

export default Chart