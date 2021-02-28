import { useLocation } from 'react-router-dom'

const useQuery = (query: string) => {
  return new URLSearchParams(useLocation().search).get(query)
}

export default useQuery
