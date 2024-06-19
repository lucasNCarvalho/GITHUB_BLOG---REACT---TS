import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faAngleLeft, faArrowUpRightFromSquare, faCalendarDay } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { defaultTheme } from "../../styles/themes/default"
import { faComment } from "@fortawesome/free-regular-svg-icons"
import { Description, IssueContainer, IssueInfoContainer, IssueInfoContent, IssueInfoFotter, IssueInfoHeader } from "./styles"
import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom';
import axios from "axios"
import { useEffect, useState } from "react"
import { timeAgo } from "../../valitadation/utils"

interface detailsIssue {
    title: string;
    body: string;
    comments: string;
    created_at: string;
    user: {
        login: string;
    }
}

export const IssueDetails = () => {

    const { id } = useParams();
    const [detailsIssue, setDetailsIssue] = useState<detailsIssue>();
    console.log('id', id)

    async function fetchIssueDetails() {
        const issueResponse = await axios.get(`https://api.github.com/repos/LucasNCarvalho/GITHUB_BLOG---REACT---TS/issues/${id}`)
        console.log('a', issueResponse)

        setDetailsIssue(issueResponse.data)
    }

    useEffect(() => {
        fetchIssueDetails()
    }, [])

    return (
        <IssueContainer>
            <IssueInfoContainer>
                <IssueInfoHeader>
                    <Link to={'..'} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h1><FontAwesomeIcon icon={faAngleLeft} />VOLTAR</h1>
                    </Link>
                    <span>VER NO GITHUB<FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>
                </IssueInfoHeader>
                <IssueInfoContent>{detailsIssue?.title}</IssueInfoContent>
                <IssueInfoFotter>
                    <p><FontAwesomeIcon icon={faGithub} color={defaultTheme.base_label} />{detailsIssue?.user.login}</p>
                    <p><FontAwesomeIcon icon={faCalendarDay} color={defaultTheme.base_label} />{timeAgo(detailsIssue?.created_at)}</p>
                    <p><FontAwesomeIcon icon={faComment} color={defaultTheme.base_label} />{detailsIssue?.comments}</p>
                </IssueInfoFotter>
            </IssueInfoContainer>
            <Description>
                <p>
                   {detailsIssue?.body}
                </p>
            </Description>
        </IssueContainer >
    )
}
