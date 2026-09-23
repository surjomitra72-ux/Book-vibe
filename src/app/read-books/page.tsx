"use client";

import { BooksContext } from "@/context/BookContext";
import { IBook } from "@/types/books.type";
import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Label,
  LabelList,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const colors = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "red",
  "pink",
  "black",
];

type BarShapeProps = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  index?: number;
  isActive?: boolean;
};

const getPath = (x: number, y: number, width: number, height: number) => {
  return `
    M${x},${y + height}
    C${x + width / 3},${y + height}
    ${x + width / 2},${y + height / 3}
    ${x + width / 2},${y}
    C${x + width / 2},${y + height / 3}
    ${x + (2 * width) / 3},${y + height}
    ${x + width},${y + height}
    Z
  `;
};

const TriangleBar = (props: BarShapeProps) => {
  const { x = 0, y = 0, width = 0, height = 0, index = 0, isActive } = props;

  const color = colors[index % colors.length];

  return (
    <path
      strokeWidth={isActive ? 5 : 0}
      d={getPath(x, y, width, height)}
      stroke={color}
      fill={color}
      style={{
        transition: "stroke-width 0.3s ease-out",
      }}
    />
  );
};

const ReadBooks = () => {
  const { readBooks } = useContext(BooksContext);

  const data = readBooks.map((book: IBook, index: number) => {
    return {
      name: book.bookName,
      uv: book.totalPages,
      pv: index + 1,
      amt: index + 1,
    };
  });

  return (
    <div className="container mx-auto my-5">
      {readBooks.length > 0 ? (
        <BarChart
          style={{
            width: "100%",
            maxWidth: "700px",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={data}
          margin={{
            top: 20,
            right: 20,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid />

          <Tooltip cursor={{ fillOpacity: 0.5 }} />

          <XAxis dataKey="name" />

          <YAxis width="auto" />

          <Bar dataKey="uv" shape={<TriangleBar />} activeBar>
            <LabelList position="top" />
          </Bar>
        </BarChart>
      ) : (
        <p className="text-center text-4xl font-bold">
          No read books to display
        </p>
      )}
    </div>
  );
};

export default ReadBooks;
