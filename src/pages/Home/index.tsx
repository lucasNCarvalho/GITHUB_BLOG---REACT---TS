import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { HomeContainer, IssueContainer, ProfileContainer, ProfileFooter, ProfileHeader, SearchContainer } from "./styles"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { defaultTheme } from "../../styles/themes/default"
import { faBuilding } from "@fortawesome/free-regular-svg-icons"
import { faArrowUpRightFromSquare, faUserGroup } from "@fortawesome/free-solid-svg-icons"
import { CardIssue } from "../../components/CardIssue"
import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

interface userData {
  avatar_url: string;
  name: string;
  bio: string;
  login: string;
  company: string;
  followers: string;
  html_url: string;
  public_repos: number;
}

interface userIssue {
  id: number;
  body: string;
  title: string;
  updated_at: string;
  number: number;
}

export const Home = () => {
  const [userData, setUserData] = useState<userData>(
    {
      avatar_url: '',
      name: '',
      bio: '',
      login: '',
      company: '',
      followers: '',
      html_url: '',
      public_repos: 0,
    }
  )
  const [userIssue, setUserIssue] = useState<userIssue[]>([])

  async function fetchGit() {
    const UserResponse = await axios.get(`https://api.github.com/users/${'lucasNcarvalho'}`)
    console.log(UserResponse)
    setUserData(UserResponse.data)
  }

  async function handleSearch(textSearch: string) {
    console.log('t', textSearch)
    const query = encodeURIComponent(textSearch);
    const issueResponse = await axios.get(`https://api.github.com/search/issues?q=${query}+repo:${userData.login}/${'GITHUB_BLOG---REACT---TS'}`)
    console.log('u', issueResponse)
    setUserIssue(issueResponse.data.items)

  }

  useEffect(() => {
    fetchGit()
  }, [])

  return (
    <HomeContainer>
      <ProfileContainer>
        <img src={userData?.avatar_url} alt="" />
        <section>
          <ProfileHeader>
            <h1>{userData?.name}</h1>
            <Link to={userData?.html_url} style={{ textDecoration: 'none', color: 'inherit' }}>
              <span>GITHUB <FontAwesomeIcon icon={faArrowUpRightFromSquare} color={defaultTheme.blue} /></span>
            </Link>
          </ProfileHeader>
          <p>{userData?.bio}</p>
          <ProfileFooter>
            <p><FontAwesomeIcon icon={faGithub} color={defaultTheme.base_label} />{userData?.login}</p>
            <p><FontAwesomeIcon icon={faBuilding} color={defaultTheme.base_label} />{userData?.company}</p>
            <p><FontAwesomeIcon icon={faUserGroup} color={defaultTheme.base_label} /><span>{userData?.followers} seguidores</span></p>
          </ProfileFooter>
        </section>
      </ProfileContainer>
      <SearchContainer>
        <div>
          <h1>Publicações</h1>
          <span>{userIssue.length} publicações</span>
        </div>
        <input type="text" placeholder="Buscar conteúdo" onChange={(e) => handleSearch(e.target.value)} />
      </SearchContainer>
      <IssueContainer>
        {userIssue.map((issue) => {

          return (
            <Link to={`/issue/${issue.number}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <CardIssue
                key={issue.id}
                title={issue.title}
                date={issue.updated_at}
                description={issue.body} />
          </Link>

          )

        })}
      </IssueContainer>
    </HomeContainer>
  )
}
