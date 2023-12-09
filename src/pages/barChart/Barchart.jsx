import { Box } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
const data = [
  {
    id: "japan",
    color: "hsl(264, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 203,
      },
      {
        x: "helicopter",
        y: 19,
      },
      {
        x: "boat",
        y: 221,
      },
      {
        x: "train",
        y: 194,
      },
      {
        x: "subway",
        y: 155,
      },
      {
        x: "bus",
        y: 118,
      },
      {
        x: "car",
        y: 255,
      },
      {
        x: "moto",
        y: 88,
      },
      {
        x: "bicycle",
        y: 299,
      },
      {
        x: "horse",
        y: 243,
      },
      {
        x: "skateboard",
        y: 248,
      },
      {
        x: "others",
        y: 214,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(269, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 170,
      },
      {
        x: "helicopter",
        y: 38,
      },
      {
        x: "boat",
        y: 85,
      },
      {
        x: "train",
        y: 8,
      },
      {
        x: "subway",
        y: 81,
      },
      {
        x: "bus",
        y: 259,
      },
      {
        x: "car",
        y: 279,
      },
      {
        x: "moto",
        y: 74,
      },
      {
        x: "bicycle",
        y: 296,
      },
      {
        x: "horse",
        y: 298,
      },
      {
        x: "skateboard",
        y: 118,
      },
      {
        x: "others",
        y: 91,
      },
    ],
  },
  {
    id: "us",
    color: "hsl(99, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 233,
      },
      {
        x: "helicopter",
        y: 63,
      },
      {
        x: "boat",
        y: 84,
      },
      {
        x: "train",
        y: 3,
      },
      {
        x: "subway",
        y: 80,
      },
      {
        x: "bus",
        y: 49,
      },
      {
        x: "car",
        y: 213,
      },
      {
        x: "moto",
        y: 74,
      },
      {
        x: "bicycle",
        y: 170,
      },
      {
        x: "horse",
        y: 64,
      },
      {
        x: "skateboard",
        y: 139,
      },
      {
        x: "others",
        y: 166,
      },
    ],
  },
  {
    id: "germany",
    color: "hsl(58, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 187,
      },
      {
        x: "helicopter",
        y: 5,
      },
      {
        x: "boat",
        y: 219,
      },
      {
        x: "train",
        y: 215,
      },
      {
        x: "subway",
        y: 165,
      },
      {
        x: "bus",
        y: 44,
      },
      {
        x: "car",
        y: 252,
      },
      {
        x: "moto",
        y: 179,
      },
      {
        x: "bicycle",
        y: 240,
      },
      {
        x: "horse",
        y: 225,
      },
      {
        x: "skateboard",
        y: 57,
      },
      {
        x: "others",
        y: 144,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(327, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 73,
      },
      {
        x: "helicopter",
        y: 6,
      },
      {
        x: "boat",
        y: 296,
      },
      {
        x: "train",
        y: 230,
      },
      {
        x: "subway",
        y: 244,
      },
      {
        x: "bus",
        y: 131,
      },
      {
        x: "car",
        y: 128,
      },
      {
        x: "moto",
        y: 188,
      },
      {
        x: "bicycle",
        y: 280,
      },
      {
        x: "horse",
        y: 260,
      },
      {
        x: "skateboard",
        y: 227,
      },
      {
        x: "others",
        y: 96,
      },
    ],
  },
];
const Barchart = () => {
  return (
    <Box sx={{height:"70vh",width:"100%"}}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};

export default Barchart;
