import React,{ Component } from 'react';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';
import { ResponsivePie } from '@nivo/pie';
import './App.css';
class App extends Component {
  render() {
    const data=
    [
      {
      "id": "japan",
      "color": "hsl(150, 70%, 50%)",
      "data": [
      {
      "x": "plane",
      "y": 2
      },
      {
      "x": "helicopter",
      "y": 164
      },
      {
      "x": "boat",
      "y": 152
      },
      {
      "x": "train",
      "y": 205
      },
      {
      "x": "subway",
      "y": 195
      },
      {
      "x": "bus",
      "y": 141
      },
      {
      "x": "car",
      "y": 6
      },
      {
      "x": "moto",
      "y": 47
      },
      {
      "x": "bicycle",
      "y": 233
      },
      {
      "x": "horse",
      "y": 117
      },
      {
      "x": "skateboard",
      "y": 7
      },
      {
      "x": "others",
      "y": 124
      }
      ]
      },
      {
      "id": "france",
      "color": "hsl(174, 70%, 50%)",
      "data": [
      {
      "x": "plane",
      "y": 6
      },
      {
      "x": "helicopter",
      "y": 232
      },
      {
      "x": "boat",
      "y": 61
      },
      {
      "x": "train",
      "y": 156
      },
      {
      "x": "subway",
      "y": 72
      },
      {
      "x": "bus",
      "y": 188
      },
      {
      "x": "car",
      "y": 30
      },
      {
      "x": "moto",
      "y": 121
      },
      {
      "x": "bicycle",
      "y": 199
      },
      {
      "x": "horse",
      "y": 192
      },
      {
      "x": "skateboard",
      "y": 23
      },
      {
      "x": "others",
      "y": 193
      }
      ]
      },
      {
      "id": "us",
      "color": "hsl(185, 70%, 50%)",
      "data": [
      {
      "x": "plane",
      "y": 211
      },
      {
      "x": "helicopter",
      "y": 83
      },
      {
      "x": "boat",
      "y": 230
      },
      {
      "x": "train",
      "y": 3
      },
      {
      "x": "subway",
      "y": 263
      },
      {
      "x": "bus",
      "y": 237
      },
      {
      "x": "car",
      "y": 79
      },
      {
      "x": "moto",
      "y": 192
      },
      {
      "x": "bicycle",
      "y": 255
      },
      {
      "x": "horse",
      "y": 57
      },
      {
      "x": "skateboard",
      "y": 2
      },
      {
      "x": "others",
      "y": 248
      }
      ]
      },
      {
      "id": "germany",
      "color": "hsl(200, 70%, 50%)",
      "data": [
      {
      "x": "plane",
      "y": 30
      },
      {
      "x": "helicopter",
      "y": 1
      },
      {
      "x": "boat",
      "y": 218
      },
      {
      "x": "train",
      "y": 178
      },
      {
      "x": "subway",
      "y": 142
      },
      {
      "x": "bus",
      "y": 200
      },
      {
      "x": "car",
      "y": 85
      },
      {
      "x": "moto",
      "y": 186
      },
      {
      "x": "bicycle",
      "y": 82
      },
      {
      "x": "horse",
      "y": 55
      },
      {
      "x": "skateboard",
      "y": 26
      },
      {
      "x": "others",
      "y": 153
      }
      ]
      },
      {
      "id": "norway",
      "color": "hsl(14, 70%, 50%)",
      "data": [
      {
      "x": "plane",
      "y": 185
      },
      {
      "x": "helicopter",
      "y": 215
      },
      {
      "x": "boat",
      "y": 81
      },
      {
      "x": "train",
      "y": 57
      },
      {
      "x": "subway",
      "y": 254
      },
      {
      "x": "bus",
      "y": 97
      },
      {
      "x": "car",
      "y": 40
      },
      {
      "x": "moto",
      "y": 286
      },
      {
      "x": "bicycle",
      "y": 166
      },
      {
      "x": "horse",
      "y": 97
      },
      {
      "x": "skateboard",
      "y": 146
      },
      {
      "x": "others",
      "y": 173
      }
      ]
    }
    ]
    const databar=
    [
      {
        "country": "AD",
        "hot dog": 2,
        "hot dogColor": "hsl(180, 70%, 50%)",
        "burger": 26,
        "burgerColor": "hsl(129, 70%, 50%)",
        "sandwich": 41,
        "sandwichColor": "hsl(193, 70%, 50%)",
        "kebab": 2,
        "kebabColor": "hsl(39, 70%, 50%)",
        "fries": 142,
        "friesColor": "hsl(289, 70%, 50%)",
        "donut": 0,
        "donutColor": "hsl(156, 70%, 50%)"
      },
      {
        "country": "AE",
        "hot dog": 30,
        "hot dogColor": "hsl(241, 70%, 50%)",
        "burger": 62,
        "burgerColor": "hsl(323, 70%, 50%)",
        "sandwich": 108,
        "sandwichColor": "hsl(149, 70%, 50%)",
        "kebab": 87,
        "kebabColor": "hsl(32, 70%, 50%)",
        "fries": 6,
        "friesColor": "hsl(163, 70%, 50%)",
        "donut": 190,
        "donutColor": "hsl(123, 70%, 50%)"
      },
      {
        "country": "AF",
        "hot dog": 56,
        "hot dogColor": "hsl(1, 70%, 50%)",
        "burger": 16,
        "burgerColor": "hsl(44, 70%, 50%)",
        "sandwich": 5,
        "sandwichColor": "hsl(202, 70%, 50%)",
        "kebab": 197,
        "kebabColor": "hsl(233, 70%, 50%)",
        "fries": 119,
        "friesColor": "hsl(279, 70%, 50%)",
        "donut": 86,
        "donutColor": "hsl(9, 70%, 50%)"
      },
      {
        "country": "AG",
        "hot dog": 46,
        "hot dogColor": "hsl(10, 70%, 50%)",
        "burger": 21,
        "burgerColor": "hsl(210, 70%, 50%)",
        "sandwich": 36,
        "sandwichColor": "hsl(356, 70%, 50%)",
        "kebab": 177,
        "kebabColor": "hsl(192, 70%, 50%)",
        "fries": 186,
        "friesColor": "hsl(226, 70%, 50%)",
        "donut": 48,
        "donutColor": "hsl(48, 70%, 50%)"
      },
      {
        "country": "AI",
        "hot dog": 42,
        "hot dogColor": "hsl(310, 70%, 50%)",
        "burger": 90,
        "burgerColor": "hsl(313, 70%, 50%)",
        "sandwich": 175,
        "sandwichColor": "hsl(323, 70%, 50%)",
        "kebab": 109,
        "kebabColor": "hsl(169, 70%, 50%)",
        "fries": 6,
        "friesColor": "hsl(181, 70%, 50%)",
        "donut": 115,
        "donutColor": "hsl(198, 70%, 50%)"
      },
      {
        "country": "AL",
        "hot dog": 10,
        "hot dogColor": "hsl(38, 70%, 50%)",
        "burger": 160,
        "burgerColor": "hsl(120, 70%, 50%)",
        "sandwich": 73,
        "sandwichColor": "hsl(276, 70%, 50%)",
        "kebab": 111,
        "kebabColor": "hsl(5, 70%, 50%)",
        "fries": 134,
        "friesColor": "hsl(230, 70%, 50%)",
        "donut": 61,
        "donutColor": "hsl(99, 70%, 50%)"
      },
      {
        "country": "AM",
        "hot dog": 20,
        "hot dogColor": "hsl(331, 70%, 50%)",
        "burger": 92,
        "burgerColor": "hsl(356, 70%, 50%)",
        "sandwich": 132,
        "sandwichColor": "hsl(205, 70%, 50%)",
        "kebab": 101,
        "kebabColor": "hsl(288, 70%, 50%)",
        "fries": 139,
        "friesColor": "hsl(125, 70%, 50%)",
        "donut": 89,
        "donutColor": "hsl(165, 70%, 50%)"
      }
    ]
    const datapie=
    [
      {
        "id": "make",
        "label": "make",
        "value": 343,
        "color": "hsl(43, 70%, 50%)"
      },
      {
        "id": "php",
        "label": "php",
        "value": 562,
        "color": "hsl(158, 70%, 50%)"
      },
      {
        "id": "rust",
        "label": "rust",
        "value": 218,
        "color": "hsl(269, 70%, 50%)"
      },
      {
        "id": "haskell",
        "label": "haskell",
        "value": 252,
        "color": "hsl(133, 70%, 50%)"
      },
      {
        "id": "scala",
        "label": "scala",
        "value": 238,
        "color": "hsl(153, 70%, 50%)"
      }
    ]
    
    
    return<div>

    <div id="line">
    <ResponsiveLine
    data={data}
    margin={{ top: 30, right: 60, bottom: 60, left: 30 }}
    axisBottom={{
    orient: 'bottom',
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'Month',
    legendOffset: 36,
    legendPosition: 'middle'
    }}
       
    pointSize={7}
    pointBorderWidth={2}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
    {
    anchor: 'bottom-right',
    direction: 'column',
    justify: false,
    translateX: 100,
    translateY: 0,
    itemsSpacing: 0,
    itemDirection: 'left-to-right',
    itemWidth: 80,
    itemHeight: 20,
    itemOpacity: 0.75,
    symbolSize: 12,
    symbolShape: 'circle',
    symbolBorderColor: 'rgba(0, 0, 0, .5)',
    }
    ]}
    /> 
    </div>

    <div id="bar">
    <ResponsiveBar
    data={databar}
    keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
    indexBy="country"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    valueFormat={{ format: '', enabled: false }}
    colors={{ scheme: 'nivo' }}
    defs={[
    {
    id: 'dots',
    type: 'patternDots',
    background: 'inherit',
    color: '#38bcb2',
    size: 4,
    padding: 1,
    stagger: true
    },
    {
    id: 'lines',
    type: 'patternLines',
    background: 'inherit',
    color: '#eed312',
    rotation: -45,
    lineWidth: 6,
    spacing: 10
    }
    ]}
    fill={[
    {
    match: {
    id: 'fries'
    },
    id: 'dots'
    },
    {
    match: {
    id: 'sandwich'
    },
    id: 'lines'
    }
    ]}
    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
     tickSize: 5,
     tickPadding: 5,
     tickRotation: 0,
     legend: 'country',
     legendPosition: 'middle',
     legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
    legends={[
    {
      dataFrom: 'keys',
      anchor: 'bottom-right',
      direction: 'column',
      justify: false,
      translateX: 120,
      translateY: 0,
      itemsSpacing: 2,
      itemWidth: 100,
      itemHeight: 20,
      itemDirection: 'left-to-right',
      itemOpacity: 0.85,
      symbolSize: 20,
      effects: [
      {
      on: 'hover',
      style: {
      itemOpacity: 1
      }
    }
    ]}
    ]}
    />
    </div>

    <div id="pie">
    <ResponsivePie
    data={datapie}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
    defs={[
    {
    id: 'dots',
    type: 'patternDots',
    background: 'inherit',
    color: 'rgba(255, 255, 255, 0.3)',
    size: 4,
    padding: 1,
    stagger: true
    },
    {
    id: 'lines',
    type: 'patternLines',
    background: 'inherit',
    color: 'rgba(255, 255, 255, 0.3)',
    rotation: -45,
    lineWidth: 6,
    spacing: 10
    }
    ]}
    fill={[
   {
    match: {
    id: 'ruby'
    },
    id: 'dots'
    },
    {
    match: {
    id: 'c'
    },
    id: 'dots'
    },
    {
    match: {
    id: 'go'
    },
    id: 'dots'
    },
    {
    match: {
    id: 'python'
    },
    id: 'dots'
    },
    {
    match: {
    id: 'scala'
    },
    id: 'lines'
    },
    {
    match: {
    id: 'lisp'
    },
    id: 'lines'
    },
    {
    match: {
    id: 'elixir'
    },
    id: 'lines'
    },
    {
    match: {
    id: 'javascript'
    },
    id: 'lines'
    }
    ]}
    legends={[
    {
    anchor: 'bottom',
    direction: 'row',
    justify: false,
    translateX: 0,
    translateY: 56,
    itemsSpacing: 0,
    itemWidth: 100,
    itemHeight: 18,
    itemTextColor: '#999',
    itemDirection: 'left-to-right',
    itemOpacity: 1,
    symbolSize: 18,
    symbolShape: 'circle',
    effects: [
    {
    on: 'hover',
    style: {
    itemTextColor: '#000'
    }
    }
    ]
    }
    ]}
    />
   </div>
   <div id="halfdonut">
    <ResponsivePie
    data={datapie}
    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
    innerRadius={0.5}
    startAngle={-90}
    endAngle={90}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
    defs={[
    {
    id: 'dots',
    type: 'patternDots',
    background: 'inherit',
    color: 'rgba(255, 255, 255, 0.3)',
    size: 4,
    padding: 1,
    stagger: true
    },
    {
    id: 'lines',
    type: 'patternLines',
    background: 'inherit',
    color: 'rgba(255, 255, 255, 0.3)',
    rotation: -45,
    lineWidth: 6,
    spacing: 10
    }
    ]}
    fill={[
   {
    match: {
    id: 'ruby'
    },
    id: 'dots'
    },
    {
    match: {
    id: 'c'
    },
    id: 'dots'
    },
    {
    match: {
    id: 'go'
    },
    id: 'dots'
    },
    {
    match: {
    id: 'python'
    },
    id: 'dots'
    },
    {
    match: {
    id: 'scala'
    },
    id: 'lines'
    },
    {
    match: {
    id: 'lisp'
    },
    id: 'lines'
    },
    {
    match: {
    id: 'elixir'
    },
    id: 'lines'
    },
    {
    match: {
    id: 'javascript'
    },
    id: 'lines'
    }
    ]}
    legends={[
    {
    anchor: 'bottom',
    direction: 'row',
    justify: false,
    translateX: 0,
    translateY: 56,
    itemsSpacing: 0,
    itemWidth: 100,
    itemHeight: 18,
    itemTextColor: '#999',
    itemDirection: 'left-to-right',
    itemOpacity: 1,
    symbolSize: 18,
    symbolShape: 'circle',
    effects: [
    {
    on: 'hover',
    style: {
    itemTextColor: '#000'
    }
    }
    ]
    }
    ]}
    />
   </div>
   <div id="horizontalbar">
    <ResponsiveBar
    data={databar}
    keys={[ 'hot dog', 'burger', 'sandwich', 'kebab', 'fries', 'donut' ]}
    indexBy="country"
    layout={'horizontal'}
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    valueScale={{ type: 'linear' }}
    indexScale={{ type: 'band', round: true }}
    valueFormat={{ format: '', enabled: false }}
    colors={{ scheme: 'nivo' }}
    defs={[
    {
    id: 'dots',
    type: 'patternDots',
    background: 'inherit',
    color: '#38bcb2',
    size: 4,
    padding: 1,
    stagger: true
    },
    {
    id: 'lines',
    type: 'patternLines',
    background: 'inherit',
    color: '#eed312',
    rotation: -45,
    lineWidth: 6,
    spacing: 10
    }
    ]}
    fill={[
    {
    match: {
    id: 'fries'
    },
    id: 'dots'
    },
    {
    match: {
    id: 'sandwich'
    },
    id: 'lines'
    }
    ]}
    borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
     tickSize: 5,
     tickPadding: 5,
     tickRotation: 0,
     legend: 'country',
     legendPosition: 'middle',
     legendOffset: 32
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: 'food',
      legendPosition: 'middle',
      legendOffset: -40
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
    legends={[
    {
      dataFrom: 'keys',
      anchor: 'bottom-right',
      direction: 'column',
      justify: false,
      translateX: 120,
      translateY: 0,
      itemsSpacing: 2,
      itemWidth: 100,
      itemHeight: 20,
      itemDirection: 'left-to-right',
      itemOpacity: 0.85,
      symbolSize: 20,
      effects: [
      {
      on: 'hover',
      style: {
      itemOpacity: 1
      }
    }
    ]}
    ]}
    />
    </div>
    <div id="area">
    <ResponsiveLine
    data={data}
    margin={{ top: 30, right: 60, bottom: 60, left: 30 }}
    enableArea="true"
    axisBottom={{
    orient: 'bottom',
    tickSize: 5,
    tickPadding: 5,
    tickRotation: 0,
    legend: 'Month',
    legendOffset: 36,
    legendPosition: 'middle'
    }}
       
    pointSize={7}
    pointBorderWidth={2}
    pointLabelYOffset={-12}
    useMesh={true}
    legends={[
    {
    anchor: 'bottom-right',
    direction: 'column',
    justify: false,
    translateX: 100,
    translateY: 0,
    itemsSpacing: 0,
    itemDirection: 'left-to-right',
    itemWidth: 80,
    itemHeight: 20,
    itemOpacity: 0.75,
    symbolSize: 12,
    symbolShape: 'circle',
    symbolBorderColor: 'rgba(0, 0, 0, .5)',
    }
    ]}
    /> 
    </div>
   </div>
  }
}
export default App