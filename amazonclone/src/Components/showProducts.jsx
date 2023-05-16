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
import { useEffect } from "react";
import { getProduct } from "../Features/Products/action";
export const Product = () => {
  const dispatch = useDispatch();
  const productsdata = () => {
    fetch(" http://localhost:3001/products")
      .then((d) => d.json())
      .then((product) => {
        dispatch(getProduct(product));
      });
  };
  useEffect(() => {
    productsdata();
  }, []);

  const res = useSelector((state) => state.data);
  return (
    <div className="showproduct">
      <h1>Sort by price</h1>
      <Stack spacing={2} direction="row">
        <Button variant="outlined">Low to High</Button>
        <Button variant="outlined">High to Low</Button>
      </Stack>
      <h1>Show Products</h1>
      <div className="cont1">
        {res.map((d, i) => (
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
                  <Button variant="contained">Buy Now</Button>
                </CardActions>
              </Card>
            </Box>
          </div>
        ))}
      </div>
    </div>
  );
};
