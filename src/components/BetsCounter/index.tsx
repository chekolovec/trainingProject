import React, { useContext } from "react";

import { BetsContext } from "../../context";
import withBets from "../../hoc/withBets";
import BetsAmount from "../BetsAmount";

export default () => {
    const bets = useContext(BetsContext);
    const Counter = withBets(BetsAmount, bets);
    return (
        <Counter />
    );
};
