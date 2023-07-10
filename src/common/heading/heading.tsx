import { Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'

interface IProps extends React.PropsWithChildren {
  title: string
  links: JSX.Element
  imgUrl: string
}

export default function Heading ({ title, children, imgUrl, links }: IProps) {

/(a+)+$/.test(
"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"+
"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"+
"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"+
"aaaaaaaaaaaaaaa!"
);
  
  return <Card >
    <CardMedia
      component="img"
      height="300"
      image={imgUrl}
      alt="green iguana"
      sx={{ backgroundColor: '#cfcbe7', backgroundPosition: 'left', objectFit: 'contain' }}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      {children}
    </CardContent>
    <CardActions>
        { links }
    </CardActions>
  </Card>
}
