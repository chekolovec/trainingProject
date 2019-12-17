export default interface SelectionConfig {
    bets: Array<{
        id: string;
    }>;
    betObject: {
        id: string;
        name: string;
        price: string;
    };
    onAddBet: Function;
    onDeleteBet: Function;
    gameId: string;
}
