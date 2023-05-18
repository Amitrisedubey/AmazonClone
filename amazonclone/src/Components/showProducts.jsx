import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import "./showProducts.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getProduct } from "../Features/Products/action";
import { useNavigate, useParams } from "react-router-dom";

export const Product = () => {
  const [sorts, setSort] = useState("");
  const [categorytype, setCategoryType] = useState("");
  console.log(categorytype);
  const { cat, type1, type2, type3 } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productsdata = () => {
    fetch("http://localhost:3001/products")
      .then((d) => d.json())
      .then((product) => {
        dispatch(getProduct(product));
      });
  };
  useEffect(() => {
    productsdata();
  }, []);

  const res = useSelector((state) => state.productState.data) || [];
  return (
    <div className="showproduct">
      <h1>Sort by price</h1>
      <Stack spacing={2} direction="row">
        <Button variant="outlined" onClick={() => setSort("asc")}>
          Low to High
        </Button>
        <Button variant="outlined" onClick={() => setSort("desc")}>
          High to Low
        </Button>
      </Stack>
      <Stack spacing={2} direction="row">
        <Button
          style={{ backgroundColor: "aliceblue" }}
          onClick={() => setCategoryType("")}
        ></Button>
        <Button
          style={{ backgroundColor: "aliceblue" }}
          onClick={() => setCategoryType(type1)}
        ></Button>
        <Button
          style={{ backgroundColor: "aliceblue" }}
          onClick={() => setCategoryType(type2)}
        ></Button>
        <Button
          style={{ backgroundColor: "aliceblue" }}
          onClick={() => setCategoryType(type3)}
        ></Button>
      </Stack>
      <h1>Show Products</h1>
      <div className="cont1">
        {res &&
          res
            .filter((categ) => {
              return categ.category === cat;
            })
            .filter((types) => {
              if (categorytype === "") {
                return true; //res
              } else {
                return types.type === categorytype;
              }
            })
            .sort((a, b) => {
              if (sorts === "asc") {
                return a.price - b.price;
              } else if (sorts === "desc") {
                return b.price - a.price;
              } else {
                return 0;
              }
            })
            .map((d, i) => (
              <div key={i}>
                <Box width="300px">
                  <Card>
                    <CardMedia
                      component="img"
                      height="280"
                      image={d.img}
                      className="Productimage"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {d.title}
                      </Typography>
                      <Typography gutterBottom variant="p" component="div">
                        Rs. {d.price}
                      </Typography>
                    </CardContent>
                    <CardActions className="btn">
                      <Button
                        variant="contained"
                        onClick={() => {
                          navigate(`/Productdetails/${d.id}/${d.type}`);
                        }}
                      >
                        Buy Now
                      </Button>
                    </CardActions>
                  </Card>
                </Box>
              </div>
            ))}
      </div>
    </div>
  );
};
