import { Button, Stack } from "@mui/material";
import "./showProducts.css";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
export const Product = () => {
  const [sorting, setSorting] = useState("");
  const [categorytype, setCategoryType] = useState("");
  console.log(categorytype);
  const { cat, type1, type2, type3 } = useParams();
  const navigate = useNavigate();

  // const res = useSelector((state) => state.reducer.data);
  // console.log("res" + res);
  return (
    <div className="showproduct">
      <h4>Sort by Price</h4>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Low To High</Button>
        <Button variant="contained">High To Low</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button onClick={() => setCategoryType("")}>type 1</Button>
        <Button onClick={() => setCategoryType(type1)}>type 2</Button>
        <Button onClick={() => setCategoryType(type2)}>type 3</Button>
        <Button onClick={() => setCategoryType(type3)}>type 4</Button>
      </Stack>
      <h1>Show Products</h1>
      <div className="showproduct1"></div>
    </div>
  );
};
