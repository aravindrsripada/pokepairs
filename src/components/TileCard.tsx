import { Card } from "../utils/data-cards";

const TileCard = ({ card }: {
    card: Card
}) => {
    return <div>
        {card.mon}
    </div>
}

export default TileCard;