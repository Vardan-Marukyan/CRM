import * as Styled from "./style"
import {useDrag} from "react-dnd";

interface Data {
    name: string
    price: string
    company: string
    date: string
    id: number
}
interface DealCardProps{
    deal: Data
    show: () => void
    setDealId: (id: number) => void
}

export const DealCard = ({deal, show, setDealId}:DealCardProps) => {
    const [{isDragStart}, dragRef] = useDrag({
        type: "card",
        item: { id: deal.id },
        collect: (monitor) => {
            return {
                isDragStart: monitor.isDragging()
            }
        }
    })
    return (
        <div style={{width: "100%", display: isDragStart ? "none" : "block"}} ref={dragRef}>
            <Styled.DealCard onClick={() => {
                setDealId(deal.id)
                show()
            }}>
                <Styled.DealCardTitle>{deal.name}</Styled.DealCardTitle>
                <Styled.DealCardPrice>{deal.price}</Styled.DealCardPrice>
                <Styled.DelaCardSubTitle>компание</Styled.DelaCardSubTitle>
                <Styled.DelaCardSubTitle>{deal.company}</Styled.DelaCardSubTitle>
                <Styled.DelaCardDate>{deal.date}</Styled.DelaCardDate>
            </Styled.DealCard>
        </div>
    )
}