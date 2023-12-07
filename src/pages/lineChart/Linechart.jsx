import { Box } from "@mui/material";
// @ts-ignore
import { ResponsiveBar } from "@nivo/bar";
const data=[
  {
    "country": "AD",
    "hot dog": 147,
    "hot dogColor": "hsl(23, 70%, 50%)",
    "burger": 8,
    "burgerColor": "hsl(179, 70%, 50%)",
    "sandwich": 9,
    "sandwichColor": "hsl(305, 70%, 50%)",
    "kebab": 17,
    "kebabColor": "hsl(197, 70%, 50%)",
    "fries": 193,
    "friesColor": "hsl(145, 70%, 50%)",
    "donut": 92,
    "donutColor": "hsl(108, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 97,
    "hot dogColor": "hsl(142, 70%, 50%)",
    "burger": 39,
    "burgerColor": "hsl(326, 70%, 50%)",
    "sandwich": 65,
    "sandwichColor": "hsl(224, 70%, 50%)",
    "kebab": 115,
    "kebabColor": "hsl(350, 70%, 50%)",
    "fries": 196,
    "friesColor": "hsl(38, 70%, 50%)",
    "donut": 136,
    "donutColor": "hsl(207, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 36,
    "hot dogColor": "hsl(219, 70%, 50%)",
    "burger": 122,
    "burgerColor": "hsl(89, 70%, 50%)",
    "sandwich": 45,
    "sandwichColor": "hsl(120, 70%, 50%)",
    "kebab": 57,
    "kebabColor": "hsl(120, 70%, 50%)",
    "fries": 37,
    "friesColor": "hsl(0, 70%, 50%)",
    "donut": 66,
    "donutColor": "hsl(4, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 69,
    "hot dogColor": "hsl(258, 70%, 50%)",
    "burger": 129,
    "burgerColor": "hsl(133, 70%, 50%)",
    "sandwich": 107,
    "sandwichColor": "hsl(304, 70%, 50%)",
    "kebab": 38,
    "kebabColor": "hsl(274, 70%, 50%)",
    "fries": 36,
    "friesColor": "hsl(268, 70%, 50%)",
    "donut": 159,
    "donutColor": "hsl(336, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 18,
    "hot dogColor": "hsl(135, 70%, 50%)",
    "burger": 58,
    "burgerColor": "hsl(11, 70%, 50%)",
    "sandwich": 54,
    "sandwichColor": "hsl(135, 70%, 50%)",
    "kebab": 136,
    "kebabColor": "hsl(119, 70%, 50%)",
    "fries": 61,
    "friesColor": "hsl(177, 70%, 50%)",
    "donut": 160,
    "donutColor": "hsl(152, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 122,
    "hot dogColor": "hsl(54, 70%, 50%)",
    "burger": 15,
    "burgerColor": "hsl(280, 70%, 50%)",
    "sandwich": 147,
    "sandwichColor": "hsl(117, 70%, 50%)",
    "kebab": 38,
    "kebabColor": "hsl(330, 70%, 50%)",
    "fries": 76,
    "friesColor": "hsl(260, 70%, 50%)",
    "donut": 30,
    "donutColor": "hsl(228, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 76,
    "hot dogColor": "hsl(2, 70%, 50%)",
    "burger": 60,
    "burgerColor": "hsl(344, 70%, 50%)",
    "sandwich": 73,
    "sandwichColor": "hsl(212, 70%, 50%)",
    "kebab": 53,
    "kebabColor": "hsl(283, 70%, 50%)",
    "fries": 153,
    "friesColor": "hsl(67, 70%, 50%)",
    "donut": 111,
    "donutColor": "hsl(327, 70%, 50%)"
  }
]
const Linechart = () => {
  return (
    <Box sx={{height:"75vh"}}>
      <ResponsiveBar
        data={data}
        keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
        indexBy="country"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: "linear" }}
        indexScale={{ type: "band", round: true }}
        colors={{ scheme: "nivo" }}
        defs={[
          {
            id: "dots",
            type: "patternDots",
            background: "inherit",
            color: "#38bcb2",
            size: 4,
            padding: 1,
            stagger: true,
          },
          {
            id: "lines",
            type: "patternLines",
            background: "inherit",
            color: "#eed312",
            rotation: -45,
            lineWidth: 6,
            spacing: 10,
          },
        ]}
        fill={[
          {
            match: {
              id: "fries",
            },
            id: "dots",
          },
          {
            match: {
              id: "sandwich",
            },
            id: "lines",
          },
        ]}
        borderColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "country",
          legendPosition: "middle",
          legendOffset: 32,
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "food",
          legendPosition: "middle",
          legendOffset: -40,
          truncateTickAt: 0,
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{
          from: "color",
          modifiers: [["darker", 1.6]],
        }}
        legends={[
          {
            dataFrom: "keys",
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: "left-to-right",
            itemOpacity: 0.85,
            symbolSize: 20,
            effects: [
              {
                on: "hover",
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
        role="application"
        ariaLabel="Nivo bar chart demo"
        barAriaLabel={(e) =>
          e.id + ": " + e.formattedValue + " in country: " + e.indexValue
        }
      />
    </Box>
  );
};

export default Linechart;
