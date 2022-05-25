import React, { useState, useEffect } from "react";
import { Layout, Col, Typography } from "antd";
import { getRecipes } from "../api";
import RecipeCard from "./RecipeCard";

const { Title } = Typography;
const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    getRecipes("breakfast").then(data => setRecipes(data));
  }, []);
  return (
    <Layout>
      <Title level={3}>BREAKFAST RECIPES</Title>
      <Col span={24} align="center">
        {recipes && recipes.map(recipe => <RecipeCard recipe={recipe} />)}
      </Col>
    </Layout>
  );
};

export default RecipeList;
