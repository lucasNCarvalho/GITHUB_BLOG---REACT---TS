import { timeAgo } from "../../valitadation/utils";
import { CardContainer } from "./styles"

interface CardIssueProps {
  title: string;
  date: string;
  description: string;
}

export const CardIssue = ({title, date, description}: CardIssueProps) => {

  const truncateDescription = (desc: string, maxLength: number) => {
    return desc.length > maxLength ? desc.slice(0, maxLength) + '...' : desc;
  };

  return (
    <CardContainer>
      <div>
        <h1>{title}</h1>
        <span>{timeAgo(date)}</span>
      </div>
      <p>{truncateDescription(description, 182)}</p>
    </CardContainer>
  )
}
