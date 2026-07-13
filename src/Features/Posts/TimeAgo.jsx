import { formatDistanceToNow, parseISO } from "date-fns";

const TimeAgo = ({timeStamp}) => {
      const timeAgo = formatDistanceToNow(parseISO(timeStamp)) 
      
  return (
  
    <i style={{fontSize: '1.6rem', marginTop: '10px'}}>
        {timeAgo} ago
    </i>
  )
}

export default TimeAgo