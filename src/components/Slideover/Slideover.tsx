import * as Styled from "./style"
import {useAppSelector, useAppDispatch} from "../../store/store";
import {useState} from "react";
import {addComment} from "../../store/commentsSlice";

interface IProps {
    show: boolean
    close: () => void
    id: number | null
}

export const Slideover = ({show, close, id}:IProps) => {
    const [commentInput, setCommentInput] = useState("")
    const state = useAppSelector((a) => a.deal.deal)
    const deals = state.find((deal) => deal.id === id)
    const dispatch = useAppDispatch()
    const time = new Date();

    const comments = useAppSelector(state => state.comment.comment)
    if (!show || !deals){
        return null
    }

    const handleAddComment = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            dispatch(addComment({
                dealId: id ?? 0,
                comment: commentInput
            }))
            setCommentInput("")
        }
    }

    return (
        <div>
            <Styled.SildeOverContContainer>
                <Styled.AboutDealContainer>
                    <Styled.AboutDealTitle>О Сделке</Styled.AboutDealTitle>
                    <Styled.AboutDealInfoBox>
                        <Styled.AboutDealSubTitle>Наименование</Styled.AboutDealSubTitle>
                        <Styled.AboutDealInfo>{deals.name}</Styled.AboutDealInfo>
                    </Styled.AboutDealInfoBox>
                    <Styled.AboutDealInfoBox>
                        <Styled.AboutDealSubTitle>Сумма</Styled.AboutDealSubTitle>
                        <Styled.AboutDealInfo>{deals.price}</Styled.AboutDealInfo>
                    </Styled.AboutDealInfoBox>
                    <Styled.AboutDealInfoBox>
                        <Styled.AboutDealSubTitle>Статус</Styled.AboutDealSubTitle>
                        <Styled.AboutDealInfo>{deals.statusTitle}</Styled.AboutDealInfo>
                    </Styled.AboutDealInfoBox>
                    <Styled.AboutDealInfoBox>
                        <Styled.AboutDealSubTitle>Клиент</Styled.AboutDealSubTitle>
                        <Styled.AboutDealInfo>{deals.company}</Styled.AboutDealInfo>
                    </Styled.AboutDealInfoBox>
                    <Styled.AboutDealInfoBox>
                        <Styled.AboutDealSubTitle>Дата создания</Styled.AboutDealSubTitle>
                        <Styled.AboutDealInfo>{deals.date}</Styled.AboutDealInfo>
                    </Styled.AboutDealInfoBox>
                </Styled.AboutDealContainer>
                <Styled.CommentsContainer>
                    <Styled.CommentInput placeholder={"Оставьте комментарий"} value={commentInput} onChange={e => setCommentInput(e.target.value)} onKeyDown={handleAddComment}/>
                    <div style={{width: "100%"}}>
                        { id !== null && id !== undefined && comments[id] ? comments[id].map(el => {
                            return (
                                    <Styled.CommentContainer>
                                       <Styled.CommentIcon className={"icon-chat"}/>
                                       <Styled.CommentBox>
                                           <Styled.CommentTitle>Комментарий {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Styled.CommentTitle>
                                           <Styled.Comment>{el.comment}</Styled.Comment>
                                       </Styled.CommentBox>
                                    </Styled.CommentContainer>
                            )
                        }): null}
                    </div>
                </Styled.CommentsContainer>
            </Styled.SildeOverContContainer>
            <Styled.BlureContContainer onClick={close}/>
        </div>
    )
}