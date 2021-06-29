import React, { useState } from "react";

const threatTypeOption = ({ threatType }) => {
  const [selected, setSelected] = useState(false);
  return <div>{threatType}</div>;
};

export default threatTypeOption;
