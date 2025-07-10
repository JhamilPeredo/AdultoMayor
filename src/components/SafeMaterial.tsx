"use client";

import React from "react";
import {
  Typography,
  TypographyProps,
  Button,
  ButtonProps,
  IconButton,
  IconButtonProps,
  Card,
  CardProps,
  CardBody,
  CardBodyProps,
  CardHeader,
  CardHeaderProps,

} from "@material-tailwind/react";

const defaultEventProps = {
  placeholder: "",
  onResize: () => {},
  onResizeCapture: () => {},
  onPointerEnterCapture: () => {},
  onPointerLeaveCapture: () => {},
};

export function SafeTypography(props: TypographyProps) {
  return <Typography {...defaultEventProps} {...props} />;
}

export function SafeButton(props: ButtonProps) {
  return <Button {...defaultEventProps} {...props} />;
}

export function SafeIconButton(props: IconButtonProps) {
  return <IconButton {...defaultEventProps} {...props} />;
}

export function SafeCard(props: CardProps) {
  return <Card {...defaultEventProps} {...props} />;
}

export function SafeCardBody(props: CardBodyProps) {
  return <CardBody {...defaultEventProps} {...props} />;
}
export function SafeCardHeader(props: CardHeaderProps) {
  return <CardHeader {...defaultEventProps} {...props} />;
}
