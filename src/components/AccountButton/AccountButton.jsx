import React from "react";

import Icons from "../Icons";
import Button from "../Button/Button";
import "./AccountButton.css";

const AccountButton = ({ modifier }) => {
  return (
    <Button className={`button_type_account ${modifier}`}>
      <p className="button__text_type_account">Аккаунт</p>
      <Icons.Account className="button__icon_type_account" />
    </Button>
  );
};

export default AccountButton;
