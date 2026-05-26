"use client";

import React from "react";
import { Label, Pie, PieChart, PieSectorShapeProps, Sector, } from "recharts";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent, } from "@/components/ui/chart";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, } from "@/components/ui/select";
import { TrendingUp } from "lucide-react";

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  chrome: {
    label: "Chrome",
    color: "var(--chart-1)",
  },
  safari: {
    label: "Safari",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Firefox",
    color: "var(--chart-3)",
  },
  edge: {
    label: "Edge",
    color: "var(--chart-4)",
  },
  other: {
    label: "Other",
    color: "var(--chart-5)",
  },
} satisfies ChartConfig;

const chartData = [
  { browser: "chrome", visitors: 275, fill: "var(--color-chrome)" },
  { browser: "safari", visitors: 200, fill: "var(--color-safari)" },
  { browser: "firefox", visitors: 287, fill: "var(--color-firefox)" },
  { browser: "edge", visitors: 173, fill: "var(--color-edge)" },
  { browser: "other", visitors: 190, fill: "var(--color-other)" },
];

const AppPieChart = () => {
  const id = "pie-interactive";

  const [activeBrowser, setActiveBrowser] = React.useState(
    chartData[0].browser
  );

  const activeIndex = React.useMemo(
    () =>
      chartData.findIndex(
        (item) => item.browser === activeBrowser
      ),
    [activeBrowser]
  );

  const browsers = React.useMemo(
    () => chartData.map((item) => item.browser),
    []
  );

  const renderPieShape = React.useCallback(
    ({ index, outerRadius = 0, ...props }: PieSectorShapeProps) => {
      if (index === activeIndex) {
        return (
          <g>
            <Sector
              {...props}
              outerRadius={outerRadius + 10}
            />

            <Sector
              {...props}
              outerRadius={outerRadius + 25}
              innerRadius={outerRadius + 12}
            />
          </g>
        );
      }

      return (
        <Sector
          {...props}
          outerRadius={outerRadius}
        />
      );
    },
    [activeIndex]
  );

  return (
    <div className="">
      <h1 className="text-lg font-meduim mb-6">Total Number of Students</h1>
      <Select
        value={activeBrowser}
        onValueChange={setActiveBrowser}
      >
        <SelectTrigger
          className="ml-auto mb-6 h-7 w-[130px] rounded-lg pl-2.5"
          aria-label="Select browser"
        >
          <SelectValue placeholder="Select browser" />
        </SelectTrigger>

        <SelectContent
          align="end"
          className="rounded-xl"
        >
          {browsers.map((key) => {
            const config =
              chartConfig[key as keyof typeof chartConfig];

            if (!config) return null;

            return (
              <SelectItem
                key={key}
                value={key}
                className="rounded-lg [&_span]:flex"
              >
                <div className="flex items-center gap-2 text-xs">
                  <span
                    className="flex h-3 w-3 shrink-0 rounded-sm"
                    style={{
                      backgroundColor: `var(--color-${key})`,
                    }}
                  />

                  {config.label}
                </div>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>

      <ChartContainer
        id={id}
        config={chartConfig}
        className="mx-auto aspect-square w-full max-w-[300px]"
      >
        <PieChart>
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />

          <Pie
            data={chartData}
            dataKey="visitors"
            nameKey="browser"
            innerRadius={60}
            strokeWidth={5}
            shape={renderPieShape}
          >
            <Label
              content={({ viewBox }) => {
                if (
                  viewBox &&
                  "cx" in viewBox &&
                  "cy" in viewBox
                ) {
                  return (
                    <text
                      x={viewBox.cx}
                      y={viewBox.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                    >
                      <tspan
                        x={viewBox.cx}
                        y={viewBox.cy}
                        className="fill-foreground text-3xl font-bold"
                      >
                        {chartData[
                          activeIndex
                        ].visitors.toLocaleString()}
                      </tspan>

                      <tspan
                        x={viewBox.cx}
                        y={(viewBox.cy || 0) + 24}
                        className="fill-muted-foreground"
                      >
                        Visitors
                      </tspan>
                    </text>
                  );
                }

                return null;
              }}
            />
          </Pie>
        </PieChart>
      </ChartContainer>

    <div className="mt-6 flex flex-col gap-1 text-sm text-center ">
        <div className="flex items-center justify-center gap-2 font-medium leading-none">
            Trending up by 5.2% this month
            <TrendingUp className="h-4 w-4" />
        </div>

        <div className="text-muted-foreground leading-none">
            Showing total visitors for the last 6 months
        </div>
        </div>
    </div>
  );
};

export default AppPieChart; 