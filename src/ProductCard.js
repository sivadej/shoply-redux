import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: { minWidth: 275 },
  title: { fontSize: 14 },
  pos: { marginBottom: 12 },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

const ProductCard = ({id, product, add, remove}) => {
  const { name, price, description, image_url} = product;
  const classes = useStyles();

  console.log(`rendering ProductCard component for ${name}`);

  return (
    <div>
      <Card xs={12} className={classes.root} variant='outlined'>
        <CardContent>
        <CardHeader
        title={name.toUpperCase()}
        subheader={price}
        />
        <CardMedia
        className={classes.media}
        image={image_url}
        title={name}
      />
          <Typography paragraph>
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small' color='primary' onClick={()=>add(id)}>Add to Cart</Button>
          <Button size='small' color='primary' onClick={()=>remove(id)}>Remove from Cart</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default ProductCard;