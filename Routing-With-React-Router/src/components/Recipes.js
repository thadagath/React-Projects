import React, { useState, useEffect } from "react";
import { Row, Layout, Menu, Divider } from "antd";
import RecipeList from "./RecipeList";
import { getCategories } from "../api";

const Recipes = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    getCategories().then(cats => setCategories(cats));
  }, []);
  return (
    <Layout>
      <Row span={12}>
        <Menu mode="horizontal" theme="dark">
          {categories &&
            categories.map((c, i) => (
              <Menu.Item key={i}>{c.toUpperCase()}</Menu.Item>
            ))}
        </Menu>
      </Row>
      <Divider />
      <Row>
        <RecipeList />
      </Row>
    </Layout>
  );
};

export default Recipes;
