import useWindowDimensions from "@/hooks/useWindowSize";
import { Typography, useTheme } from "@mui/material";
import { FC } from "react";
import { CartesianGrid, Label, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";

// Generate Sales Data
function createData(time: string, amount?: number) {
  return { time, amount };
}

const data = [
  createData("00:00", 400),
  createData("03:00", 700),
  createData("06:00", 600),
  createData("09:00", 2800),
  createData("12:00", 1500),
  createData("15:00", 1200),
  createData("18:00", 1400),
  createData("21:00", 400),
  createData("24:00", 1000),
];

const SalesChart: FC = () => {
  const theme = useTheme();
  const { width: deviceWidth } = useWindowDimensions();

  const isSmall = deviceWidth < 600;

  console.log(isSmall);

  return (
    <>
      <Typography variant="h5">Today</Typography>
      <ResponsiveContainer minHeight={isSmall ? 200 : 250}>
        <LineChart data={data} margin={{ top: 30, right: 0, bottom: 0, left: isSmall ? 0 : 20 }}>
          <XAxis dataKey="time" />
          <CartesianGrid strokeDasharray="3 3" />
          <YAxis>
            <Label
              angle={270}
              position="left"
              className={isSmall ? "hidden" : ""}
              style={{ textAnchor: "middle" }}
            >
              Sales ($)
            </Label>
          </YAxis>

          <Line
            isAnimationActive={true}
            type="monotone"
            dataKey="amount"
            stroke={theme.palette.secondary.main}
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
};

export default SalesChart;
