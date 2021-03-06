import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";

import { getAccessoryIcon } from "../../utils/getAccessoryIcon";
import GasolineSvg from "../../assets/gasoline.svg";

import {
  Container,
  Details,
  Brand,
  Name,
  Rent,
  Period,
  Price,
  Type,
  About,
  CarImage,
} from "./styles";

interface ICarProps extends RectButtonProps {
  data: ICar;
}

export function Car({ data, ...rest }: ICarProps) {
  const MotorIcon = getAccessoryIcon(data.fuel_type);
  return (
    <Container {...rest}>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`R$ ${data.rent.price}`}</Price>
          </Rent>
          <Type>
            <MotorIcon />
          </Type>
        </About>
      </Details>
      <CarImage
        source={{
          uri: data.thumbnail,
        }}
        resizeMode='contain'
      />
    </Container>
  );
}
