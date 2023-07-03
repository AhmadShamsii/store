import { Card, PageHeader, Row, Divider, Button, Typography } from "antd";

import {
  HeartOutlined,
  PlusCircleOutlined,
  ArrowLeftOutlined,
  HeartFilled,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { addToCart } from "../../app/products/slice";
import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
// import { nftsSelector } from "../../app/nft/selector";
import { productsSelector } from "../../app/products/selector";
import {
  addToFavourites,
  removeFromFavourites,
  setFavColor,
} from "../../app/products/slice";
import ItemModal from "../../components/itemModal";
import Foooter from "../../components/footer";

import { StyledArrowLeftOutlined, StyledPageHeader } from "../about/styles";
import {
  StyledHeartFilled,
  StyledAddToCart,
  StyledCardTitle,
} from "../../components/home/styles";

import { StyledCard } from "../monsters/styles";

const { Meta } = Card;
const Text = Typography;

const RoboHeads = () => {
  const dispatch = useDispatch();
  const { roboHeads, favourites, iconColor } = useSelector(productsSelector);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cardClicked, setCardClicked] = useState("");
  const data = roboHeads;

  const handleFavourite = (index) => {
    const favouriteExists = favourites.includes(index);

    if (favouriteExists) {
      dispatch(removeFromFavourites({ index, favourites }));
    } else {
      dispatch(addToFavourites({ index, favourites }));
    }
  };
  const showModal = (user) => {
    setIsModalOpen(true);
    setCardClicked(user);
  };

  return (
    <div style={{ marginTop: "110px" }}>
      {" "}
      <ItemModal
        item={cardClicked}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
      <StyledPageHeader
        title={
          <>
            <Link to="/shop">
              <StyledArrowLeftOutlined />
            </Link>
            Robo Heads
          </>
        }
      />
      <Divider />
      <div className="monsters-page">
        {data.map((user) => {
          const index = user;
          return (
            <div>
              <Row gutter={50}>
                <StyledCard
                  onClick={() => {
                    showModal(user);
                  }}
                  key={user.id}
                  hoverable
                  cover={
                    <img
                      alt="example"
                      src={`https://robohash.org/${user.id}?set=set3`}
                    />
                  }
                >
                  <StyledHeartFilled
                    style={{
                      color: iconColor[index.id] || "#CDE4F9",
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(addToFavourites({ index, data }));
                      dispatch(setFavColor({ id: index.id }));
                      handleFavourite(index);
                    }}
                  />
                  <StyledAddToCart
                    icon={<PlusCircleOutlined />}
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(addToCart(user));
                    }}
                  >
                    Add to Cart
                  </StyledAddToCart>
                  <Text
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      paddingBottom: "10px",
                      fontSize: "17px",
                    }}
                  >
                    {`${user.first_name}  ${user.last_name}`}
                  </Text>
                  <Text>{user.phone.slice(0, 1)}</Text>
                </StyledCard>
              </Row>
            </div>
          );
        })}
      </div>
      <Foooter margintop="50px" />
    </div>
  );
};
export default RoboHeads;
